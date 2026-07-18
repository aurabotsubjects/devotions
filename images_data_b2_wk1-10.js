// ============================================================
// COMIC IMAGE DATA — CONNECT B2 UPPER PRIMARY — WEEKS 1–10
// FILE CHUNKING: split across images_data_b2_wk{N}-{N+9}.js files (10 weeks/file),
// all merging into the same global window.COMIC_IMAGES. Load in ascending order
// in index.html, after the B1 images_data_wk*.js files.
// Each week's images use a wk{N}- key prefix (e.g. "wk4-01-...") to avoid
// collisions between weeks, matching the convention used in the B1 files.
//
// WEEKS 4–6 NOTE ON IMAGES: Lessons 4–6 ("The Rescue," "The Law," "The
// Tabernacle" — Exodus 11–14, 19–20, 25–40) are a "Survivor"-style
// game-show class format, not a comic-strip narrative like the B1 Lessons
// 1–10 material. The Lesson 4 PowerPoint (the only one supplied so far)
// was checked slide-by-slide: it contains zero comic panels — every
// embedded image is a decorative background texture sitting behind
// challenge-instruction and memory-verse slides. Per the visual style
// discipline rule, decorative/stock-style graphics that clash with the
// hand-drawn comic style used elsewhere in this app are skipped, and the
// content is conveyed through narration/verse text instead. So Weeks 4–6
// intentionally ship with NO images/no wk4-/wk5-/wk6- keys here — same
// treatment as Week 11 in the B1 files. If a future B2 lesson's PowerPoint
// turns out to contain real comic panels, resume the wk{N}- prefix
// convention as normal, verified against the manual's printed transcript
// per the image verification process.
//
// Lessons 1–3 for this B2 track have not been supplied/built yet.
// ============================================================

window.COMIC_IMAGES = window.COMIC_IMAGES || {};
Object.assign(window.COMIC_IMAGES, {
  // (none yet — see note above)
});
