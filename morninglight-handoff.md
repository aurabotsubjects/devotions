I'm continuing work on a daily devotion web app for a class. The app is organised into **terms**, each made up of up to 10 lessons/weeks. There are currently 3 terms, alternating between two different levels of the same curriculum:

- **Term 1 = Connect B1 Upper Primary, Lessons 1–10.** COMPLETE — Weeks 1–10 all built.
- **Term 2 = Connect B1 Upper Primary, Lessons 11–20 (the same book, continuing on from Term 1).** INCOMPLETE — only Week 1 (= Lesson 11) is built. **This is the highest-priority gap and probably what the next session should build**, unless told otherwise.
- **Term 3 = Connect B2 Upper Primary, Lessons 1–10 (a different level of the curriculum, its own Lesson numbering restarting at 1).** INCOMPLETE — Weeks 1–6 built, Weeks 7–10 still needed.

A future Term 4 would presumably be Connect B2 Upper Primary, Lessons 11–20, continuing the pattern — but don't assume that; confirm with whoever you're working with before starting a new term.

All terms share the same `index.html`, fonts, and rendering code — only the data/image files differ, one pair of files per term, so week numbers never collide between terms (every term's weeks start back at 1). Do NOT trust prose claims about what's built (including everything in this paragraph) — verify actual coverage yourself with the sanity-check snippet in the file-structure section below before doing any work.

**The app:** A static HTML page (`index.html`) that a teacher opens by double-clicking — no server, works fully offline via `file://`. It shows one week's lesson at a time, broken into 4 student-facing days (Mon–Thu, no Friday), each running 10–15 minutes.

**File structure — READ THIS FIRST:** The app's data is chunked **one file per term**, all loaded by `index.html` and merged into shared global objects at runtime:

- `fonts_data.js` — one shared file, all terms, defines `window.FONT_DATA`. You will not touch this.
- `images_term1.js`, `images_term2.js`, `images_term3.js` — already built. Each merges its base64 comic images into `window.COMIC_IMAGES` via:
  ```js
  window.COMIC_IMAGES = window.COMIC_IMAGES || {};
  Object.assign(window.COMIC_IMAGES, {
    "wk1-01-panel-name": "data:image/jpeg;base64,...",
    ...
  });
  ```
  (Key prefixes don't have to match the current week number exactly — a couple of images kept an old `wk11-`/`wk21-` prefix from before this term-based renumbering existed, since the prefix is just a lookup string. Use `wk{N}-` for genuinely new images going forward.)
- `data_term1.js`, `data_term2.js`, `data_term3.js` — already built. Each merges its lesson content into `window.DEVOTIONS["Term N"]` via:
  ```js
  window.DEVOTIONS = window.DEVOTIONS || {};
  window.DEVOTIONS["Term 2"] = Object.assign(window.DEVOTIONS["Term 2"] || {}, {
    "Week 1": { ... },
    ...
  });
  ```
- **Your job, most likely:** add Weeks 2–10 to `data_term2.js` (and matching images, if any, to `images_term2.js`), continuing from the existing `"Week 1"` entry (= Lesson 11) toward Lesson 20. Copy the comment header block from the top of `data_term2.js` / `images_term2.js` for the style/shape reference, and update the term status note at the top once you're done.
- If instead you're starting a genuinely **new term** (e.g. Term 4), create `data_term4.js` / `images_term4.js` following the exact same merge pattern, starting with `"Week 1"`, and add two new `<script>` tags to `index.html` in ascending order after the Term 3 tags:
  ```html
  <script src="images_term4.js"></script>
  <script src="data_term4.js"></script>
  ```
  That's the **only** change `index.html` ever needs. Its dropdowns and renderer read whatever keys exist in `DEVOTIONS`/`COMIC_IMAGES` at runtime — no other HTML/JS changes required, ever.
- Sanity-check your files load cleanly and validate schema before sending them back, e.g.:
  ```bash
  node -e "
  global.window = {};
  require('./images_term1.js'); require('./images_term2.js'); require('./images_term3.js');
  require('./data_term1.js'); require('./data_term2.js'); require('./data_term3.js');
  for (const t of Object.keys(window.DEVOTIONS)) console.log(t, Object.keys(window.DEVOTIONS[t]));
  console.log('Total images:', Object.keys(window.COMIC_IMAGES).length);
  "
  ```
  Also re-check every `image` block's `key` actually resolves to a real entry in `COMIC_IMAGES` — a typo'd key fails silently in the UI.

**Design direction:** Styled to match a reference image the original author liked (a studio called "Finch") — soft off-white background, a playful hand-script + bold-rounded-sans logo lockup ("morninglight"), sky blue + honey gold accents, lots of whitespace, thin hairline borders, handwritten-style captions under images. Real custom fonts (Caveat script + Baloo 2 rounded) are embedded as base64 in `fonts_data.js` — don't touch this file or the CSS in `index.html`.

**Content model (in each `data_term*.js` file):** Each week has a `lessonTitle`, `passage`, `bigIdea`, `source`, and 4 `days`. Each day has:
- `blocks`: a list of `story` (narration), `image` (comic panel + caption, keyed into the matching `images_term*.js`), `question` (with a teacher-only `hint`), `activity`, `verse`, `prayer`, `roleplay` (multi-character acted scene), `dictation` (whole-class read-aloud script — see below).
- `lessonPlan`: `duration`, `passage`, `topic`, `bigIdea`, `learningIntentions` (array), `assessment`, `resources` (array), `script` (array of steps: `heading`, `minutes`, `teacherTalk`, `activityNote`, `keyQuestion`, `teacherGuidance`), `whereToNext`.

There's a "Teacher view" toggle in the header that reveals hint buttons under questions (hidden from students by default) **and** a "View lesson plan for this day" button that opens a popup styled to match morninglight. **The popup UI in `index.html` needs no changes** — it just reads whatever's in `lessonPlan`, so every new week needs a `lessonPlan` per day in this same shape.

**IMPORTANT data-model gotcha:** the `hint` field only renders on `question` blocks — `index.html`'s renderer does NOT display a `hint` on `activity` blocks (it silently drops it). If a discussion point needs teacher guidance text, it must be a `question` block, even if it feels more like an "activity." Don't give an `activity` block a `hint` field.

**Scripted scenes / role-plays:** whenever a lesson calls for student volunteers to read out character parts (e.g. a printed "Lesson script" with named characters), don't build it as a printable handout — use the built-in `roleplay` block type instead. It renders a small "act it out" card with a "Start the script on screen" button; that opens a FULLSCREEN presenter showing one line at a time in large text, readable off a TV/streamed display, with Next/Back controls (mouse, tap, arrow keys, or spacebar) and an auto-assigned colour badge per character. Shape:
```js
{
  type: "roleplay",
  title: "Lesson 12 script: Meeting Abraham",
  characters: ["Narrator", "Abraham", "Sarah", "God"], // or [{name, color}, ...] to pin a specific colour
  lines: [
    { character: "Narrator", text: "God speaks to Abraham...", direction: true }, // stage direction, no badge, italic
    { character: "God", text: "Leave your country and go to the land I will show you." },
    { character: "Abraham", text: "But Lord, I do not know where that land is." },
  ],
}
```

**Dictation scripts (whole-class reading — new block type, use this for Term 2!):** some lessons' manuals/PDFs include a script the *whole class* reads aloud together — often literally labelled "dictation" in the manual — rather than a printed handout for students to follow individually. Don't print these either: use the `dictation` block type. It's the exact same fullscreen line-by-line presenter as `roleplay` (same Next/Back controls, same TV-readable giant text), just framed as "read together" instead of "act it out," and with no cast-of-characters list shown up front. `character` per line is optional — omit it for a plain unattributed line, or give every line the same speaker label (e.g. `"Class"`) if that reads better. Shape:
```js
{
  type: "dictation",
  title: "Lesson 14 dictation",
  lines: [
    { text: "In the beginning, God created the heavens and the earth." },
    { text: "The earth was formless and empty, and darkness was over the deep." },
    ...
  ],
}
```
No `index.html` changes are needed for either `roleplay` or `dictation` — both are already fully built into the renderer (`openScript`/`renderScriptLine` in the main script, and the corresponding cases in `blockHTML`).

**Critical lesson-design rule:** every block — every question, activity, and warm-up — must connect directly to that day's actual Bible content. No generic icebreakers ("This or That," random superpower questions, free-floating "rate yourself 1–10" games, etc.) that don't tie back to the story. If the manual's own "Way in" hook genuinely connects, use it. If it doesn't connect, rework it so it does — tie it explicitly into that day's specific Bible content/theme.

**Images:** Comic panels come from the lesson's PowerPoint, cropped tight, compressed to ~100–200KB JPEGs, and embedded as base64 in the matching `images_term*.js`. Each week's images use a `wk{N}-` key prefix to avoid collisions between weeks. **Image verification process that must be followed every time:** PowerPoint layouts vary between lessons — some show one full multi-panel comic page per slide, others show every individual panel again on its own slide afterward for in-class display, and slide order does not reliably match a sensible panel/story order. Before mapping any image into the data file: view every slide visually, cross-reference each panel's dialogue against the manual's printed comic transcript (the "Bible focus" pages), and only embed once the sequence is confirmed against both sources independently.

**Visual style discipline:** not every image in a lesson's PowerPoint is worth using. Skip generic clip-art/stock-photo-style graphics (stock signposts, stop signs, open-Bible stock photos, "spot the difference" real-photo worksheets, word-search/cipher puzzles, bare number-scale props, decorative background textures for "Survivor"-style challenge slides, etc.) that clash with the comic's hand-drawn art style — convey that content through narration/verse text instead. Polished wide establishing-shot illustrations that match the comic's style (if present in the PowerPoint) are good candidates for a feature image on a recap day.

**Recurring memory verse:** check whether the manual is still running a single memory verse across a block of lessons. Confirm the current unit's verse from the manual itself (each lesson's own "Memory verse" box) for your lessons and keep using the exact same verse/reference text across that unit for consistency — don't assume it stays constant for a whole term; it can genuinely change partway through (this happened at Lesson/Week 6 of Term 3, confirmed straight from the manual, not an error). If the manual's own lesson introduces a clearly-flagged additional secondary verse, that's fine to include alongside the running verse, not instead of it.

**Done so far:**
- Term 1 (Connect B1 Upper Primary, Lessons 1–10): COMPLETE — all 10 weeks, 4 days each, including lesson plans, in `data_term1.js` / `images_term1.js`.
- Term 2 (Connect B1 Upper Primary, Lessons 11–20): Week 1 (Lesson 11, "Let the exploring begin!" — Genesis 1–11), Week 2 (Lesson 12, "Promises, promises, promises" — Genesis 12:1–9), Week 3 (Lesson 13, "Waiting, waiting, waiting" — Genesis 15:1–18:15; 21:1–7), and Week 4 (Lesson 14, "God's family grows" — Genesis 24) built, in `data_term2.js` / `images_term2.js`. **Weeks 5–10 (Lessons 15–20) are the main outstanding gap in the app.** The recurring memory verse was Genesis 1:1 (CEV) for Week 1, switching to Numbers 23:19 (CEV) — "God is no mere human!..." — starting Week 2, and confirmed straight from the manual to still be running through Weeks 3 and 4. Week 2 ships with NO images — its lesson's PowerPoint contains only title/word cards, a cycle-diagram recap, and a maze puzzle, no comic-style panel art — and uses the `roleplay` block type for the Lesson 12 script (Abraham, Sarah, Lot, God). Week 3 ALSO ships with NO images — its PowerPoint contains only photographic cake/candle prop shots (a physical birthday-counting object lesson) and text/word cards, which would clash with the app's hand-drawn comic style — and uses a new original `roleplay` dramatisation of Genesis 18:1–15 on Day 4 (the manual's own "Act it out" extension had no printed script to source verbatim, so it was written fresh from the CEV text quoted elsewhere in the manual). Week 4 (Lesson 14) ALSO ships with NO images — its PowerPoint contains only a title card, generic clip-art family-tree diagram templates, and screenshots of the manual's own printed drama-script pages, no hand-drawn comic panels — and uses the `roleplay` block type on Day 4 for the manual's own printed "Lesson 14 script" (Genesis 24 — Abraham, Servant, Rebekah, Laban, Narrator), transcribed close to verbatim since a real printed, photocopy-licensed script existed this time (unlike Week 3, which had to write an original scene).
- Term 3 (Connect B2 Upper Primary, Lessons 1–10): Weeks 1–6 built ("Survivor: Egypt Begins," "The Leader," "The Challenge," "The Rescue," "The Law," "The Tabernacle" — Exodus 1–14, 19–20, 25–40), in `data_term3.js` / `images_term3.js`. Weeks 7–10 still needed. Week 1 has 2 real comic panels; Weeks 2–6 ship text/verse-forward with no images (see the file's own header comments for why). The recurring memory verse is Deuteronomy 4:39 (CEV) for Weeks 1–5, switching to Psalm 117:2 (CEV) for Week 6.
- The `dictation` block type (see above) was added to `index.html` this session specifically because Term 2's manual is known to contain some lessons with a whole-class dictation script — use it whenever you hit one of those lessons.

**What I need now:** [describe your next step — most likely "build Term 2 Weeks 2–10 (Lessons 12–20) from the attached manual + PowerPoints," but confirm/override this if something else is more urgent]

**Files to attach in the new chat:**
1. `index.html`
2. `data_term1.js`, `images_term1.js` (Term 1 — Connect B1 Upper Primary, Lessons 1–10)
3. `data_term2.js`, `images_term2.js` (Term 2 — Connect B1 Upper Primary, Lessons 11–20)
4. `data_term3.js`, `images_term3.js` (Term 3 — Connect B2 Upper Primary, Lessons 1–10)
5. `fonts_data.js`
6. (when ready) the next chunk of whichever manual PDF you're extending — most likely the Connect B1 Upper Primary manual, Lessons 12 onward
7. (when ready) the matching PowerPoint(s) for those lessons
