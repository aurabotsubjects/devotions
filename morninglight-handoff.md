I'm continuing work on a daily devotion web app for a class. The app is organised into **terms**, each made up of up to 10 lessons/weeks. There are currently 3 terms, alternating between two different levels of the same curriculum:

- **Term 1 = Connect B1 Upper Primary, Lessons 1–10.** COMPLETE — Weeks 1–10 all built.
- **Term 2 = Connect B1 Upper Primary, Lessons 11–20 (the same book, continuing on from Term 1).** COMPLETE — Weeks 1–10 all built.
- **Term 3 = Connect B2 Upper Primary, Lessons 1–10 (a different level of the curriculum, its own Lesson numbering restarting at 1).** COMPLETE — Weeks 1–10 all built.
- **Term 4 = Connect B2 Upper Primary, Lessons 11–20 (the same B2 book, continuing on from Term 3).** COMPLETE — Weeks 1–10 all built.

**THE APP IS NOW COMPLETE: all four terms, 40 weeks, 160 days, every day with a lesson plan.** There is no outstanding gap. A future session would be starting a genuinely new term from a new book — see below.

A future Term 5 would presumably return to a fresh book, continuing the alternating pattern — but don't assume that; confirm with whoever you're working with before starting a new term.

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
- **Your job, most likely:** nothing is outstanding. Terms 1–4 are all complete. If you're here to start a **Term 5**, that means a new curriculum book — confirm which one with the teacher first, get it scanned, and follow the new-term instructions below. Do not assume the pattern continues automatically; Terms 1–2 were Connect B1 and Terms 3–4 were Connect B2, and the B2 book finishes at Lesson 20.
- If instead you're starting a genuinely **new term** (e.g. Term 5), create `data_term5.js` / `images_term5.js` following the exact same merge pattern, starting with `"Week 1"`, and add two new `<script>` tags to `index.html` in ascending order after the Term 4 tags:
  ```html
  <script src="images_term5.js"></script>
  <script src="data_term5.js"></script>
  ```
  (The Term 4 pair already exists and is already wired into `index.html`, including an intentionally empty `images_term4.js` — Weeks 1–3 have no images, but the file is there so later weeks can add some without touching the HTML again.)
  That's the **only** change `index.html` ever needs. Its dropdowns and renderer read whatever keys exist in `DEVOTIONS`/`COMIC_IMAGES` at runtime — no other HTML/JS changes required, ever.
- Sanity-check your files load cleanly and validate schema before sending them back, e.g.:
  ```bash
  node -e "
  global.window = {};
  for (const n of [1,2,3,4]) require('./images_term'+n+'.js');
  for (const n of [1,2,3,4]) require('./data_term'+n+'.js');
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
- Term 2 (Connect B1 Upper Primary, Lessons 11–20): Weeks 1–9 (Lessons 11–19) built, in `data_term2.js` / `images_term2.js`. **Lesson 20 (Week 10) is the only remaining gap in the app.** The recurring memory verse was Genesis 1:1 (CEV) for Week 1, switching to Numbers 23:19 (CEV) — "God is no mere human!..." — for Weeks 2–6, then switching to Romans 8:28a (CEV) — "We know that God is always at work for the good of everyone who loves him" — from Week 7 through Week 9 (confirmed straight from Lesson 19's own stated memory verse in the manual, still unchanged). Week 2 ships with NO images — its lesson's PowerPoint contains only title/word cards, a cycle-diagram recap, and a maze puzzle, no comic-style panel art — and uses the `roleplay` block type for the Lesson 12 script (Abraham, Sarah, Lot, God). Week 3 ALSO ships with NO images — its PowerPoint contains only photographic cake/candle prop shots (a physical birthday-counting object lesson) and text/word cards, which would clash with the app's hand-drawn comic style — and uses a new original `roleplay` dramatisation of Genesis 18:1–15 on Day 4 (the manual's own "Act it out" extension had no printed script to source verbatim, so it was written fresh from the CEV text quoted elsewhere in the manual). Week 4 (Lesson 14) ALSO ships with NO images — its PowerPoint contains only a title card, generic clip-art family-tree diagram templates, and screenshots of the manual's own printed drama-script pages, no hand-drawn comic panels — and uses the `roleplay` block type on Day 4 for the manual's own printed "Lesson 14 script" (Genesis 24 — Abraham, Servant, Rebekah, Laban, Narrator), transcribed close to verbatim since a real printed, photocopy-licensed script existed this time (unlike Week 3, which had to write an original scene). Weeks 5, 6, 7, 8, and 9 (Lessons 15–19) each have their own image/script notes — see the `data_term2.js` file header for the full rundown week by week. Week 9 (Lesson 19, "Mighty to save" — Genesis 41–50) ships with NO images (its PowerPoint is 23 wood/paper-texture background slides, no comic panel art) and has NO roleplay/dictation block — the manual's own "Bible focus" for this lesson is a teacher-led prop-bag narration (map, speech bubble, test paper, clock, dinner plate, cup, tissues, smaller bag, RIP tombstone) rather than a printed multi-character script, so it stays text/verse-forward across all four days, retelling Joseph's brothers' journeys to Egypt, the silver cup test, Jacob's family moving to Egypt, and Joseph's forgiveness in Genesis 50:19–21.
- Term 3 (Connect B2 Upper Primary, Lessons 1–10): **COMPLETE — all 10 weeks, 4 days each, with lesson plans**, in `data_term3.js` / `images_term3.js`. Weeks 1–6: "Survivor: Egypt Begins," "The Leader," "The Challenge," "The Rescue," "The Law," "The Tabernacle" (Exodus 1–14, 19–20, 25–40). Weeks 7–10: "The exploration" (Numbers 13–14), "The people's response" (Deuteronomy 4), "The land" (Joshua 1–6), "The new covenant" (Jeremiah 31 / Hebrews 10 / Luke 24). The recurring memory verse is Deuteronomy 4:39 (CEV) for Weeks 1–5, Psalm 117:2 (CEV) for Weeks 6–9, then Luke 24:27 (CEV) for Week 10 — all three confirmed straight from each lesson's own Memory verse box. Week 7 Day 4 and Week 8 Day 4 each carry a clearly-flagged secondary verse alongside the running one (John 3:16 and John 14:1–3), as the manual does. Images: Week 1 has 2 comic panels (`wk21-` prefix), Week 7 has 1 (manna in the desert), Week 9 has 2 (crossing the Jordan; the walls of Jericho), Week 10 has 1 (the Happy Promised Land). Weeks 2–6 and Week 8 ship with no images — their decks contain only title/word cards, backgrounds, stock maps and puzzles. Scripts: Week 9 uses three `roleplay` blocks on Days 1–3, transcribed close to verbatim from the manual's own printed Scenes on pages 113–115 ("Rahab and the spies," "Crossing the Jordan," "Battle of Jericho"); Week 10 Day 2 uses a `dictation` block built from the manual's old-agreement/new-agreement comparison table (page 119), reworked into a whole-class line-by-line reading.
- The `dictation` block type (see above) was added to `index.html` this session specifically because Term 2's manual is known to contain some lessons with a whole-class dictation script — use it whenever you hit one of those lessons.
- Term 4 (Connect B2 Upper Primary, Lessons 11–20): **COMPLETE — all 10 weeks, 4 days each, with lesson plans**, in `data_term4.js` / `images_term4.js`. Titles: "The gospel: then and now" (Romans 1:1–17), "The need for the gospel" (1:18—3:26), "The good news of the gospel!" (3:21—5:21), "The fruit of the gospel" (6–7), "The goal of the gospel" (8:1–13), "The hope of the gospel" (8:14–39), "The body of the gospel" (12:1–8), "The love of the gospel" (16:25–27), "The Christmas promise" (Matthew 1), "Miriam" (1 Timothy 4:12). The curriculum changes character completely at Lesson 11: it leaves the Old Testament "Survivor: Egypt" unit and works through Paul's letter to the Romans under a term-long **trainee journalists** conceit — most lessons open with a "media briefing," and the students' end-of-term task, set in Week 8 Day 4, is to write a newspaper article outlining the gospel. The last two weeks step outside Romans: Week 9 is a Christmas lesson that also closes the entire B cycle, and Week 10 is a different KIND of lesson altogether — a contemporary profile of Miriam, a real Chinese-Australian assistant school chaplain, showing what following Jesus looks like today. **Memory verse:** Ephesians 2:8a (CEV) for Weeks 1–3; the SAME verse EXTENDED to the full Ephesians 2:8–10 from Week 4 through Week 8 (a genuine extension printed in the manual, flagged to the class in Week 4 Day 1, and fitting Lesson 14's point that good works follow salvation rather than earning it); Luke 24:27 (CEV) for Week 9 (the same verse Term 3 Week 10 used — the manual's own choice in both places, not a copy-paste error); and 1 Timothy 4:12 (CEV) for Week 10, which the manual labels **"Key verse"** rather than "Memory verse". **All ten weeks ship with NO images** — none of the Lesson 11–20 decks has any hand-drawn art, only title cards, stock photos, gradient backgrounds, mazes, crosswords, a find-a-word and the media-release text slides. Term 4 is the only imageless term in the app, which is a property of this unit's source material. **Scripts:** six `dictation` blocks carry the manual's media releases (Wk 2 Day 2 = Lesson 12 releases 1–2; Wk 3 Day 2 = Lesson 13 releases 1–2; Wk 3 Day 3 = Lesson 13 release 3; Wk 5 Day 2 = Lesson 15 release; Wk 7 Day 2 = Lesson 17 release; Wk 8 Day 4 = Lesson 18 release, the final one), and Week 6 Day 1 uses a `roleplay` for the manual's printed two-hander "Interview with Stavros Massoud" (pages 176–177), transcribed verbatim. **Teach these weeks in order** — the Stavros marathon storyline runs continuously across Weeks 5–6, Week 4 Day 2 revisits Robert Stanford from Week 3, and Week 8 Day 4 asks students to compare their final article with the gospel definition they wrote back in Week 1 Day 4. **If you are teaching this term, keep those Week 1 sheets** — that comparison is the intended payoff of the whole term.

**SOURCE MATERIAL — everything used, nothing outstanding:** the Connect B2 Upper Primary manual in `Connect Books Scanned/` covers all 20 lessons and all of it has now been built. Practical notes if you ever scan a new book: the scans have no text layer and are sideways two-page spreads — render to images at ~100dpi, rotate 90°, split down the middle, then read visually. Running `tesseract` over a cropped footer strip is a cheap way to map which book page is on which half before spending reads, and cropping the top-left corner picks up the `LESSON N` tab. Watch for skipped spreads: the 10–13 scan silently omits pages 128–129 (a unit-intro spread, harmless) and page 150 (Lesson 13's media releases, which had to be recovered from the PowerPoint). **When a manual page is missing, check the matching deck first** — the media-release and visual-aid slides often reproduce that text verbatim. Lesson 20 ships with a standard and an `ALT` PowerPoint; Week 10 was built against the **standard** deck at the teacher's request.

**What I need now:** [describe your next step — most likely "build Term 2 Weeks 2–10 (Lessons 12–20) from the attached manual + PowerPoints," but confirm/override this if something else is more urgent]

**Files to attach in the new chat:**
1. `index.html`
2. `data_term1.js`, `images_term1.js` (Term 1 — Connect B1 Upper Primary, Lessons 1–10)
3. `data_term2.js`, `images_term2.js` (Term 2 — Connect B1 Upper Primary, Lessons 11–20)
4. `data_term3.js`, `images_term3.js` (Term 3 — Connect B2 Upper Primary, Lessons 1–10)
5. `fonts_data.js`
6. (when ready) the next chunk of whichever manual PDF you're extending — most likely the Connect B1 Upper Primary manual, Lessons 12 onward
7. (when ready) the matching PowerPoint(s) for those lessons
