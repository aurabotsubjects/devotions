I'm continuing work on a daily devotion web app for a class. It now covers **two separate curriculum tracks**, each in its own term:

- **"Term 1" = Connect B1 Upper Primary.** Weeks 1–11 are built (NOT 1–20 — an earlier handoff doc overstated this; verify actual coverage yourself with the sanity-check snippet below rather than trusting any prose claim, including this one). Week 12 onward is still open.
- **"Connect B2 Upper Primary" = a different level of the same curriculum, different lesson numbering, its own term key.** Weeks 4–6 are built (Lessons 1–3 for this track were never supplied, so there's an intentional gap before Week 4). Both tracks share the same `index.html`, fonts, and rendering code — only the data/image files differ, split into their own `data_b2_wk*.js` / `images_data_b2_wk*.js` files with a `_b2_` infix so week numbers never collide with Term 1's B1 weeks.

Follow the rules below exactly for whichever track you're extending. If starting a new week in Term 1 (B1), continue the `data_wk{N}-{N+9}.js` filename pattern. If starting a new week in the B2 track, continue the `data_b2_wk{N}-{N+9}.js` pattern and merge into `window.DEVOTIONS["Connect B2 Upper Primary"]` instead of `window.DEVOTIONS["Term 1"]`. Please read this carefully before doing anything.

**The app:** A static HTML page (`index.html`) that a teacher opens by double-clicking — no server, works fully offline via `file://`. It shows one week's lesson at a time, broken into 4 student-facing days (Mon–Thu, no Friday), each running 10–15 minutes.

**File structure — READ THIS FIRST:** The app's data is chunked into files of **10 weeks each**, all loaded by `index.html` and merged into shared global objects at runtime:

- `fonts_data.js` — one shared file, all weeks, defines `window.FONT_DATA`. You will not touch this.
- `images_data_wk1-10.js`, `images_data_wk11-20.js` — already built. Each merges its base64 comic images into `window.COMIC_IMAGES` via:
  ```js
  window.COMIC_IMAGES = window.COMIC_IMAGES || {};
  Object.assign(window.COMIC_IMAGES, {
    "wk11-01-panel-name": "data:image/jpeg;base64,...",
    ...
  });
  ```
- `data_wk1-10.js`, `data_wk11-20.js` — already built. Each merges its lesson content into `window.DEVOTIONS["Term 1"]` via:
  ```js
  window.DEVOTIONS = window.DEVOTIONS || {};
  window.DEVOTIONS["Term 1"] = Object.assign(window.DEVOTIONS["Term 1"] || {}, {
    "Week 11": { ... },
    ...
  });
  ```
- **Your job:** create `images_data_wk21-30.js` and `data_wk21-30.js`, following the exact same merge pattern, starting with `"Week 21"`. Copy the comment header block from the top of `data_wk11-20.js` / `images_data_wk11-20.js` into your new files and update the week-range numbers in the comments.
- Then add two `<script>` tags to `index.html`, in ascending order, right after the existing `images_data_wk11-20.js` / `data_wk11-20.js` tags:
  ```html
  <script src="images_data_wk21-30.js"></script>
  <script src="data_wk21-30.js"></script>
  ```
  That's the **only** change `index.html` needs. Its dropdowns and renderer read whatever keys exist in `DEVOTIONS`/`COMIC_IMAGES` at runtime — no other HTML/JS changes required, ever.
- Sanity-check your new files load cleanly before sending them back, e.g.:
  ```bash
  node -e "
  global.window = {};
  eval(require('fs').readFileSync('images_data_wk21-30.js','utf8'));
  eval(require('fs').readFileSync('data_wk21-30.js','utf8'));
  console.log(Object.keys(window.DEVOTIONS['Term 1']));
  console.log(Object.keys(window.COMIC_IMAGES).length);
  "
  ```

**Design direction:** Styled to match a reference image the original author liked (a studio called "Finch") — soft off-white background, a playful hand-script + bold-rounded-sans logo lockup ("morninglight"), sky blue + honey gold accents, lots of whitespace, thin hairline borders, handwritten-style captions under images. Real custom fonts (Caveat script + Baloo 2 rounded) are embedded as base64 in `fonts_data.js` — don't touch this file or the CSS in `index.html`.

**Content model (in each `data_wk*.js` file):** Each week has a `lessonTitle`, `passage`, `bigIdea`, `source`, and 4 `days`. Each day has:
- `blocks`: a list of `story` (narration), `image` (comic panel + caption, keyed into the matching `images_data_wk*.js`), `question` (with a teacher-only `hint`), `activity`, `verse`, `prayer`.
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
No `index.html` changes are needed for this — it's already built into the renderer.

**Critical lesson-design rule:** every block — every question, activity, and warm-up — must connect directly to that day's actual Bible content. No generic icebreakers ("This or That," random superpower questions, free-floating "rate yourself 1–10" games, etc.) that don't tie back to the story. If the manual's own "Way in" hook genuinely connects, use it. If it doesn't connect, rework it so it does — tie it explicitly into that day's specific Bible content/theme.

**Images:** Comic panels come from the lesson's PowerPoint, cropped tight, compressed to ~100–200KB JPEGs, and embedded as base64 in the matching `images_data_wk*.js`. Each week's images use a `wk{N}-` key prefix (e.g. `wk21-01-...`) to avoid collisions between weeks. **Image verification process that must be followed every time:** PowerPoint layouts vary between lessons — some show one full multi-panel comic page per slide, others show every individual panel again on its own slide afterward for in-class display, and slide order does not reliably match a sensible panel/story order. Before mapping any image into the data file: view every slide visually, cross-reference each panel's dialogue against the manual's printed comic transcript (the "Bible focus" pages), and only embed once the sequence is confirmed against both sources independently.

**Visual style discipline:** not every image in a lesson's PowerPoint is worth using. Skip generic clip-art/stock-photo-style graphics (stock signposts, stop signs, open-Bible stock photos, "spot the difference" real-photo worksheets, word-search/cipher puzzles, bare number-scale props, etc.) that clash with the comic's hand-drawn art style — convey that content through narration/verse text instead. Polished wide establishing-shot illustrations that match the comic's style (if present in the PowerPoint) are good candidates for a feature image on a recap day.

**Recurring memory verse:** check whether the manual is still running a single memory verse across a block of lessons (Weeks 1–20 ran Luke 3:3b CEV across Lessons 1–5, then likely picked up a new verse for the next unit). Confirm the current unit's verse from the manual itself for your lessons and keep using the exact same verse/reference text across that unit for consistency, unless the manual's own lesson introduces a clearly-flagged additional secondary verse — that's fine to include alongside the running verse, not instead of it.

**Done so far:**
- Term 1 (B1): Weeks 1–11 fully built and QA'd, all 4 days each, including lesson plans, split across `data_wk1-10.js` / `data_wk11-20.js` and `images_data_wk1-10.js` / `images_data_wk11-20.js`. Weeks 12–20 are NOT built yet, despite what an earlier version of this doc claimed.
- Connect B2 Upper Primary: Weeks 4–6 ("The Rescue" — Exodus 11–14, "The Law" — Exodus 19–20, "The Tabernacle" — Exodus 25–40) fully built and QA'd, all 4 days each, including lesson plans, in `data_b2_wk1-10.js` / `images_data_b2_wk1-10.js`. These three weeks ship text/verse-forward with no images — the only PowerPoint supplied (Lesson 4) contained no comic panels, only decorative background textures, per the visual style discipline rule. Lessons 1–3 for this track were never supplied. The recurring memory verse is Deuteronomy 4:39 (CEV) for Weeks 4–5, switching to Psalm 117:2 (CEV) for Week 6 — confirmed directly from each lesson's own memory-verse box in the manual, not assumed.

**What I need now:** [describe your next step — e.g. "build B1 Week 12" or "build B2 Lessons 1–3" or "build B2 Lesson 7 from the attached manual + PowerPoint"]

**Files to attach in the new chat:**
1. `index.html`
2. `data_wk1-10.js`, `data_wk11-20.js` (Term 1 / B1)
3. `images_data_wk1-10.js`, `images_data_wk11-20.js` (Term 1 / B1)
4. `data_b2_wk1-10.js`, `images_data_b2_wk1-10.js` (Connect B2 Upper Primary)
5. `fonts_data.js`
6. (when ready) the next chunk of whichever manual PDF you're extending
7. (when ready) the matching PowerPoint for that lesson (e.g. `CEP_MyConnect_B2_Upper_Primary_Lesson_07.pptx`)
