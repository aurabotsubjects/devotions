// ============================================================
// DEVOTION DATA — STUDENT-FACING PRESENTATION — WEEKS 11–20
// FILE CHUNKING: split across data_wk{N}-{N+9}.js files (10 weeks/file), all
// merging into the same global window.DEVOTIONS. Load in ascending order in index.html.
// Structure: DEVOTIONS[term][week] = { lessonTitle, passage, bigIdea, days: [day1..day4] }
// Each day = { label, theme, blocks: [ {type, ...} ] }
//
// Block types (all shown ON SCREEN to students unless noted):
//  - 'story'    : narration text, big storybook-style, read aloud together
//  - 'image'    : a comic panel, full width, with an optional short caption
//  - 'question' : a discussion question for the class — shown big.
//                 optional `hint` field is for the TEACHER ONLY (hidden behind a toggle)
//  - 'verse'    : a memory verse, shown as a feature slide
//  - 'prayer'   : a closing prayer, said together
//  - 'activity' : a short instruction students themselves act on (stand up, choose a side, etc.)
//
// NOTE: `hint` only renders on `question` blocks, never on `activity` blocks.
// ============================================================

window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 1"] = Object.assign(window.DEVOTIONS["Term 1"] || {}, {
  // Week 11 goes here
});
