// ============================================================
// DEVOTION DATA — STUDENT-FACING PRESENTATION — TERM 2
// FILE STRUCTURE: one file per term (data_term2.js), each holding up to 10 weeks
// (= 10 lessons) of that term, merged into window.DEVOTIONS["Term 2"]. Load all
// data_term*.js files in ascending order in index.html, after the matching
// images_term*.js files. Every term is 10 lessons; when a term isn't fully built
// yet, its file just holds however many weeks exist so far — see the term-status
// note further down and the handoff doc for what's outstanding.
// Structure: DEVOTIONS[term][week] = { lessonTitle, passage, bigIdea, source, days: [day1..day4] }
// Each day = { label, theme, blocks: [ {type, ...} ] }
//
// Block types (all shown ON SCREEN to students unless noted):
//  - 'story'      : narration text, big storybook-style, read aloud together
//  - 'image'      : a comic panel, full width, with an optional short caption
//  - 'question'   : a discussion question for the class — shown big.
//                   optional `hint` field is for the TEACHER ONLY (hidden behind a toggle)
//  - 'verse'      : a memory verse, shown as a feature slide
//  - 'prayer'     : a closing prayer, said together
//  - 'activity'   : a short instruction students themselves act on (stand up, choose a side, etc.)
//  - 'roleplay'   : a scripted scene students act out (multiple characters). Renders as a small
//                   "act it out" preview card with a "Start the script on screen" button, which
//                   opens a FULLSCREEN presenter (index.html: openScript/renderScriptLine)
//                   showing ONE LINE AT A TIME in large text, readable from across the room on
//                   a streamed/TV display — no printed scripts needed. Teacher/reader taps
//                   Next/Back (or arrow keys/spacebar); each character gets an auto-assigned
//                   colour badge; lines can be marked as stage directions.
//                   Shape: { type:'roleplay', title:'...', characters:['Name', ...] OR
//                   [{name,color}, ...], lines:[ {character:'Name', text:'...'},
//                   {character:'Narrator', text:'...', direction:true}, ... ] }
//  - 'dictation'  : the SAME fullscreen line-by-line presenter as 'roleplay', but for a
//                   WHOLE-CLASS reading (no cast list, plain "read together" framing).
//                   Use this whenever the manual/PDF has a script the whole class reads aloud
//                   together (often literally called "dictation" in the manual) — the teacher
//                   clicks a button and it opens like a movie/TV prompter, one line at a time,
//                   so students can read it together off the projected screen/TV instead of
//                   printed narration handouts. `character` per line is optional (omit for
//                   plain unattributed lines).
//                   Shape: { type:'dictation', title:'...', lines:[ {text:'...'}, ... ] }
//
// NOTE: `hint` only renders on `question` blocks, never on `activity` blocks.
//
// TERM 2 STATUS: INCOMPLETE — Week 1 (Lesson 11, "Let the exploring
// begin!" / Genesis 1-11), Week 2 (Lesson 12, "Promises, promises,
// promises" / Genesis 12:1-9, memory verse switches to Numbers 23:19 CEV),
// Week 3 (Lesson 13, "Waiting, waiting, waiting" / Genesis 15:1-18:15;
// 21:1-7), Week 4 (Lesson 14, "God's family grows" / Genesis 24), Week 5
// (Lesson 15, "Chalk and cheese" / Genesis 25:19-34), Week 6 (Lesson 16,
// "Sibling rivalry" / Genesis 27:1-40), and Week 7 (Lesson 17, "Growing
// into greatness" / Genesis 29:31-30:24; 37, memory verse switches to
// Romans 8:28a CEV) are built.
// Lessons 18-20 (Weeks 8-10) still need to be built from the manual.
// Week 7 ships with NO images: its PowerPoint (Lesson 17) contains only
// wood/paper-texture background slides with text overlaid (family tree
// building, the word ISRAEL, tribe names, a "Family tree" word-card) and
// no hand-drawn comic panel art at all (verified by inspecting all 17
// embedded media images in the PowerPoint - all are background textures,
// not illustrations). The manual's own "Joseph sold" 5-panel visual aid
// and "Lesson 17 script" (a single-narrator script, not multi-character
// dialogue) only appear in the printed manual/PDF, not the PowerPoint, so
// per the visual-style and image-sourcing rules this week stays
// text/verse-forward; the Lesson 17 script's content is retold as 'story'
// blocks on Day 4 instead of a 'roleplay' (it has no distinct character
// dialogue, just one narrating voice) or 'dictation' (the manual doesn't
// label it a whole-class read-aloud). The recurring memory verse switches
// from Numbers 23:19 (CEV), which ran Weeks 2-6, to Romans 8:28a (CEV) —
// "We know that God is always at work for the good of everyone who loves
// him" — confirmed as Lesson 17's own stated memory verse straight from
// the manual.
// Week 6 uses 1 new comic-style image (Isaac blessing the disguised Jacob,
// cropped from the Lesson 16 PowerPoint at high resolution, matching the
// manual's own page 164 illustration), plus a reuse of Week 5's stew image
// as a Day 1 recap (the manual itself re-displays that same visual aid in
// Lesson 16's Bible focus). The PowerPoint's kangaroo-fighting stock photo
// (used for the manual's own "Way in") was skipped per the visual-style
// rules, since it's a real photo that clashes with the comic art style —
// Day 1 opens instead with a text-only warm-up question about animals/
// siblings squaring off, which serves the same purpose. Day 4 uses the
// `roleplay` block type for an original dramatisation of the manual's
// "teach the Bible focus as a boxing commentary" activity (Commentator,
// Team Esau, and Team Jacob) — written fresh in this app's own words
// rather than transcribed verbatim, since the manual's version is prose
// instructions for the teacher to improvise from, not a fixed script like
// Week 4's. The memory verse, Numbers 23:19 (CEV), is confirmed unchanged
// from the manual for Lesson 16.
// Week 5 uses 2 comic-style images from its PowerPoint (a distressed,
// visibly-pregnant Rebekah, and the Jacob-and-Esau stew scene matching
// the manual's own page 156 illustration) — see images_term2.js. Its
// PowerPoint also included 3 generic stock photos (a traffic jam, a
// skyscraper, a luxury hotel) for the manual's "unexpected things"
// Way-in exercise, plus an "Antarctica" text-only Way-in prompt (this
// edition swapped out the manual's own African-jungle framing) — all
// skipped per the visual style rules, since stock photography clashes
// with the comic art style; Day 1 opens with a warm-up question tied
// directly to the story's own "unexpected" beat (twins fighting before
// birth) instead. Day 4 uses the new 'dictation' block type, reading the
// week's full CEV passage (Genesis 25:19-34) together as a class, since
// the manual has no printed drama script for this lesson (unlike Week 4).
// Week 2 ships with no images: its PowerPoint (Lesson 12)
// contains only title/word cards, a SIN-CONSEQUENCES-GRACE cycle recap
// diagram, and a maze puzzle — no comic-style panel art. Week 3 ALSO ships
// with no images: its PowerPoint (Lesson 13) contains only photographic
// cake/candle prop shots (a physical object-lesson counting up Abraham and
// Sarah's birthdays) and text/word cards — no comic-style panel art either,
// and the photographic candle-cake images would visually clash with the
// hand-drawn comic style used elsewhere in the app, so per the visual
// style rules this week is text/verse-forward too, same as Term 3
// Weeks 2-6. Week 3 uses the new 'roleplay' block type on Day 4 for an
// original dramatisation of Genesis 18:1-15 (the manual's own "Act it
// out" extension activity had no printed script to source verbatim, so
// the script was written fresh from the CEV passage text quoted elsewhere
// in the manual). Week 4 ALSO ships with no images: its PowerPoint (Lesson
// 14) contains only a title card, generic clip-art family-tree diagram
// templates (for the "Way in"/"Taking it further" activities), and
// screenshots of the manual's own printed drama-script pages — no
// hand-drawn comic-style panel art, so per the visual style rules this
// week is text/verse-forward too. Week 4 uses the 'roleplay' block type on
// Day 4 for the manual's own printed "Lesson 14 script" (Genesis 24,
// licensed in the manual for classroom photocopying), transcribed close to
// verbatim rather than written fresh, since a real printed script existed
// this time. Building Weeks 5-10 is the highest-priority gap in the
// whole app right now.
// ============================================================

window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 2"] = Object.assign(window.DEVOTIONS["Term 2"] || {}, {
    "Week 1": {
      lessonTitle: "Let the exploring begin!",
      passage: "Genesis 1–11",
      bigIdea: "Right from the very beginning, people keep breaking their relationship with God through sin — but every single time, God responds with grace instead of giving up on them. Genesis 1–11 sets the stage for the biggest act of grace yet: God's promises to Abraham.",
      source: "Connect B1 Upper Primary — Lesson 11",
      days: [
        // ---------------- DAY 1 (MON) ----------------
        {
          label: "Monday",
          theme: "In the beginning...",
          blocks: [
            { type: "question", text: "This term we're going exploring — all the way back to the very start of the Bible, to a story that leads up to a man named Abraham, who we'll meet next week. If you were exploring a brand new place, what's the first thing you'd want to work out?", hint: "Accept responses like a map, landmarks, or a starting point. Guide toward: good explorers look for patterns, so they know what's coming next. That's exactly what we're doing today — looking for a pattern right from the first page of the Bible." },
            { type: "story", text: "In the beginning, God created the heavens and the earth. He made the sky, the sea and the land. He made the sun, moon and stars, every plant and tree, and every kind of animal." },
            { type: "story", text: "Everything God made was very good. Last of all, God made people — so that they could know him. Adam and Eve lived in a perfect relationship with God, with each other, and with everything he had made." },
            { type: "question", text: "Think about one of the best days you've ever had. What made it so good?", hint: "Accept any answers. Use this to help students imagine just how good \u2018very good\u2019 must have felt for Adam and Eve — no sadness, no arguments, nothing broken between them and God." },
            { type: "verse", reference: "Genesis 1:1 (CEV)", text: "\u201cIn the beginning God created the heavens and the earth.\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together two or three times." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 1–2",
            topic: "In the beginning...",
            bigIdea: "Right from the very beginning, people keep breaking their relationship with God through sin — but every single time, God responds with grace instead of giving up on them. Genesis 1–11 sets the stage for the biggest act of grace yet: God's promises to Abraham.",
            learningIntentions: [
              "We are learning that God created everything, including people, and that all of it was very good.",
              "We are learning that Adam and Eve lived in a perfect relationship with God, each other, and creation.",
              "I can say this term's new memory verse, Genesis 1:1.",
            ],
            assessment: "Listen for whether students can describe creation as \u2018very good\u2019 in their own words, and can explain what made Eden's relationships between God, people, and creation perfect.",
            resources: [
              "CEV Bible (optional, for reading Genesis 1:1 aloud)",
            ],
            script: [
              {
                heading: "Exploring, starting today",
                minutes: "2–3 min",
                teacherTalk: "Open by framing the whole term as an exploring theme leading to Abraham next week, then ask the warm-up question.",
                activityNote: null,
                keyQuestion: "This term we're going exploring — all the way back to the very start of the Bible, to a story that leads up to a man named Abraham, who we'll meet next week. If you were exploring a brand new place, what's the first thing you'd want to work out?",
                teacherGuidance: "Accept responses like a map, landmarks, or a starting point. Guide toward: good explorers look for patterns, so they know what's coming next. That's exactly what we're doing today — looking for a pattern right from the first page of the Bible.",
              },
              {
                heading: "Everything, and it was very good",
                minutes: "3–4 min",
                teacherTalk: "Read through the two creation story blocks together, keeping the tone celebratory — this is the high point before things go wrong tomorrow.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Your best day ever",
                minutes: "2–3 min",
                teacherTalk: "Ask the question and let students share freely — there's no wrong answer here.",
                activityNote: null,
                keyQuestion: "Think about one of the best days you've ever had. What made it so good?",
                teacherGuidance: "Accept any answers. Use this to help students imagine just how good \u2018very good\u2019 must have felt for Adam and Eve — no sadness, no arguments, nothing broken between them and God.",
              },
              {
                heading: "This term's memory verse",
                minutes: "2 min",
                teacherTalk: "Introduce Genesis 1:1 as the new memory verse for this term's unit and say it together a few times.",
                activityNote: "Use the built-in verse block for Genesis 1:1, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 2 shows what happens when that perfect relationship breaks down for the first time.",
          },
        },
        // ---------------- DAY 2 (TUE) ----------------
        {
          label: "Tuesday",
          theme: "The first cycle",
          blocks: [
            { type: "story", text: "Yesterday we saw Adam and Eve living in a perfect relationship with God, with everything they needed. But that didn't last." },
            { type: "story", text: "God had given Adam and Eve every tree in the garden except one. When they were told that God might be holding out on them, Adam and Eve decided they knew better than God, and disobeyed him." },
            { type: "question", text: "Adam and Eve already had a perfect world — but they still wanted the one thing they weren't allowed to have. Why do you think it can be so tempting to want the one thing you can't have, even when you're surrounded by good things already?", hint: "Accept honest responses — there's no single right answer here. It's a very human pattern: focusing on the one limit rather than everything we already have." },
            { type: "story", text: "Because of their sin, there were real consequences. Life became hard, and Adam and Eve had to leave the garden they had lived in." },
            { type: "question", text: "God could have simply given up on Adam and Eve after this. Instead, before sending them out of the garden, he made them clothes with his own hands. What does that tell you about how God felt toward them, even right after they had sinned against him?", hint: "Guide toward: it shows God still cared for them practically, and that being sent out was part of a plan to eventually save them — not to abandon them for good." },
            { type: "story", text: "This is a pattern we're going to see again and again this week: people SIN against God, there are CONSEQUENCES... but God shows GRACE anyway, giving people something good that they don't deserve." },
            { type: "verse", reference: "Genesis 1:1 (CEV)", text: "\u201cIn the beginning God created the heavens and the earth.\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together — try it once without looking!" },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 3",
            topic: "The first cycle",
            bigIdea: "Right from the very beginning, people keep breaking their relationship with God through sin — but every single time, God responds with grace instead of giving up on them. Genesis 1–11 sets the stage for the biggest act of grace yet: God's promises to Abraham.",
            learningIntentions: [
              "We are learning that Adam and Eve chose to disobey God even though he had already given them everything they needed.",
              "We are learning that God's response to their sin included real consequences, but also real grace.",
              "I can describe the pattern SIN → CONSEQUENCES → GRACE in my own words.",
            ],
            assessment: "Listen for whether students can retell what Adam and Eve did wrong, name a consequence they faced, and identify the clothing God made them as an act of grace.",
            resources: [
              "CEV Bible (optional, for reading Genesis 3:21 aloud)",
            ],
            script: [
              {
                heading: "Recap: a perfect start",
                minutes: "1–2 min",
                teacherTalk: "Briefly recap yesterday's perfect relationship between Adam, Eve, and God before introducing the turn.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "The one thing they wanted",
                minutes: "3–4 min",
                teacherTalk: "Tell the story of the one forbidden tree and the decision to disobey, then ask the question.",
                activityNote: null,
                keyQuestion: "Adam and Eve already had a perfect world — but they still wanted the one thing they weren't allowed to have. Why do you think it can be so tempting to want the one thing you can't have, even when you're surrounded by good things already?",
                teacherGuidance: "Accept honest responses — there's no single right answer here. It's a very human pattern: focusing on the one limit rather than everything we already have.",
              },
              {
                heading: "Consequences, then grace",
                minutes: "4–5 min",
                teacherTalk: "Explain the consequences of the sin, then reveal that God still made them clothes before sending them out, and ask the question.",
                activityNote: null,
                keyQuestion: "God could have simply given up on Adam and Eve after this. Instead, before sending them out of the garden, he made them clothes with his own hands. What does that tell you about how God felt toward them, even right after they had sinned against him?",
                teacherGuidance: "Guide toward: it shows God still cared for them practically, and that being sent out was part of a plan to eventually save them — not to abandon them for good.",
              },
              {
                heading: "Naming the pattern",
                minutes: "1–2 min",
                teacherTalk: "Say the SIN → CONSEQUENCES → GRACE pattern out loud together so it sticks before the memory verse.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Say this week's memory verse together, trying it once without looking at the screen.",
                activityNote: "Use the built-in verse block for Genesis 1:1, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 3 shows the same pattern play out again — this time for the whole world.",
          },
        },
        // ---------------- DAY 3 (WED) ----------------
        {
          label: "Wednesday",
          theme: "The cycle again",
          blocks: [
            { type: "story", text: "Yesterday we saw the pattern for the first time: people SIN, there are CONSEQUENCES, but God shows GRACE anyway. Today we'll see that same pattern again — this time on a much bigger scale." },
            { type: "story", text: "As more people filled the earth, sin spread with them. By the time of a man named Noah, the Bible says people's hearts were only evil, all the time." },
            { type: "question", text: "That's a pretty extreme description — hearts that were only evil, all the time. Why do you think sin tends to spread and grow worse over time, instead of staying small and contained?", hint: "Accept responses. Guide toward: sin doesn't stay isolated — it spreads through choices, relationships, and generations, a bit like the plague described earlier in the manual's Bible background." },
            { type: "story", text: "God saw how bad things had become, and sent a flood as judgement on the world's sin. But he didn't forget Noah and his family — he kept them safe in an ark, exactly as he had planned." },
            { type: "story", text: "After the flood, God made a promise: he would never again destroy the whole earth with a flood. As a sign of that promise, he put a rainbow in the sky." },
            { type: "question", text: "Once again we see SIN, then CONSEQUENCES... and then GRACE — an undeserved promise, with a rainbow as its sign. Why do you think God chose to give people a visible reminder of his promise, rather than just making the promise and leaving it there?", hint: "Guide toward: physical reminders help us remember and trust promises we can't always feel or see day to day — it's a pattern God uses more than once in the Bible." },
            { type: "verse", reference: "Genesis 1:1 (CEV)", text: "\u201cIn the beginning God created the heavens and the earth.\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together one more time — see if we can do it from memory!" },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 6–9",
            topic: "The cycle again",
            bigIdea: "Right from the very beginning, people keep breaking their relationship with God through sin — but every single time, God responds with grace instead of giving up on them. Genesis 1–11 sets the stage for the biggest act of grace yet: God's promises to Abraham.",
            learningIntentions: [
              "We are learning that sin spread across the whole world as more people filled the earth.",
              "We are learning that God judged the world's sin with a flood, but showed grace to Noah's family and made a covenant with a rainbow as its sign.",
              "I can spot the SIN → CONSEQUENCES → GRACE pattern for a second time in this unit.",
            ],
            assessment: "Listen for whether students can identify the flood as the consequence and the rainbow covenant as the grace in this second cycle, without needing it spelled out for them.",
            resources: [],
            script: [
              {
                heading: "Same pattern, bigger scale",
                minutes: "1–2 min",
                teacherTalk: "Frame today as the same pattern from yesterday, now playing out for the whole world rather than just two people.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Sin spreads",
                minutes: "3 min",
                teacherTalk: "Describe how sin spread as the population grew, then ask the question.",
                activityNote: null,
                keyQuestion: "That's a pretty extreme description — hearts that were only evil, all the time. Why do you think sin tends to spread and grow worse over time, instead of staying small and contained?",
                teacherGuidance: "Accept responses. Guide toward: sin doesn't stay isolated — it spreads through choices, relationships, and generations, a bit like the plague described earlier in the manual's Bible background.",
              },
              {
                heading: "The flood and the ark",
                minutes: "3 min",
                teacherTalk: "Tell the flood and ark story briefly, keeping the focus on judgement plus rescue, not on frightening detail.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "A promise with a rainbow",
                minutes: "3–4 min",
                teacherTalk: "Reveal the rainbow covenant, then ask the closing question.",
                activityNote: null,
                keyQuestion: "Once again we see SIN, then CONSEQUENCES... and then GRACE — an undeserved promise, with a rainbow as its sign. Why do you think God chose to give people a visible reminder of his promise, rather than just making the promise and leaving it there?",
                teacherGuidance: "Guide toward: physical reminders help us remember and trust promises we can't always feel or see day to day — it's a pattern God uses more than once in the Bible.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Try the memory verse together, aiming for fully from memory this time.",
                activityNote: "Use the built-in verse block for Genesis 1:1, then the say-it-from-memory activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 4 shows the pattern one more time — but with a piece missing.",
          },
        },
        // ---------------- DAY 4 (THU) ----------------
        {
          label: "Thursday",
          theme: "A cycle with a piece missing",
          blocks: [
            { type: "story", text: "This week we've seen the pattern twice: Adam and Eve, and then the whole world in Noah's time. Each time: SIN, then CONSEQUENCES, then GRACE." },
            { type: "story", text: "After the flood, everyone still spoke the same language. But instead of spreading out across the earth like God had told them to, the people decided to build a great city with a tower reaching to the sky — so they could make a name for themselves and stay together." },
            { type: "question", text: "The people wanted to \u2018make a name for themselves\u2019 instead of trusting God's plan for them. What's the difference between working hard at something, and trying to make yourself great instead of trusting God?", hint: "Accept responses. Guide toward: the problem isn't hard work or ambition itself — it's pride that rejects God's plan and tries to put ourselves at the centre instead of him." },
            { type: "story", text: "So God confused their language, so they couldn't understand each other any more, and scattered them all over the earth. The city they had built became known as Babel." },
            { type: "question", text: "SIN, then CONSEQUENCES... but think back to the pattern from the last two days. What's missing this time?", hint: "Guide toward: there's no GRACE step this time — the cycle looks broken and unfinished, as if God has stopped being kind to his people." },
            { type: "question", text: "Does that mean God has really stopped loving the people he made?", hint: "Guide toward: no — the Bible tells us God never stops loving the people he made. It's fine to leave this question sitting unresolved for now; the class finds out how God answers it next week." },
            { type: "story", text: "Next week, we'll meet a man named Abraham, and find out how God had a plan all along to bring people back to himself — a plan that through one man, the whole world would be blessed." },
            { type: "verse", reference: "Genesis 1:1 (CEV)", text: "\u201cIn the beginning God created the heavens and the earth.\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together one more time — see if we can do it fully from memory!" },
            { type: "prayer", text: "Dear God, thank you that you are loving and kind, and that you keep showing us grace even when we don't deserve it. Please help us trust that you haven't stopped loving your people, even when we can't yet see how. Help us learn all about your plan for Abraham this term. Amen." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 11:1–9",
            topic: "A cycle with a piece missing",
            bigIdea: "Right from the very beginning, people keep breaking their relationship with God through sin — but every single time, God responds with grace instead of giving up on them. Genesis 1–11 sets the stage for the biggest act of grace yet: God's promises to Abraham.",
            learningIntentions: [
              "We are learning that the people at Babel sinned through pride, trying to make a name for themselves instead of trusting God's plan.",
              "We are learning that this third cycle ends with consequences but no visible grace — an unfinished pattern.",
              "I can explain why the missing grace at Babel sets up next week's introduction to Abraham.",
            ],
            assessment: "Listen for whether students can identify that grace is missing from this third cycle, and can hold the tension of \u2018has God stopped loving people?\u2019 without needing it resolved today.",
            resources: [],
            script: [
              {
                heading: "Recap: two cycles so far",
                minutes: "1–2 min",
                teacherTalk: "Recap the two completed cycles from earlier in the week before introducing Babel.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "A tower to the sky",
                minutes: "3 min",
                teacherTalk: "Tell the Tower of Babel story, then ask the pride question.",
                activityNote: null,
                keyQuestion: "The people wanted to \u2018make a name for themselves\u2019 instead of trusting God's plan for them. What's the difference between working hard at something, and trying to make yourself great instead of trusting God?",
                teacherGuidance: "Accept responses. Guide toward: the problem isn't hard work or ambition itself — it's pride that rejects God's plan and tries to put ourselves at the centre instead of him.",
              },
              {
                heading: "Scattered — and something's missing",
                minutes: "3–4 min",
                teacherTalk: "Describe the scattering and confusion of languages, then ask students to spot what's missing from the pattern.",
                activityNote: null,
                keyQuestion: "SIN, then CONSEQUENCES... but think back to the pattern from the last two days. What's missing this time?",
                teacherGuidance: "Guide toward: there's no GRACE step this time — the cycle looks broken and unfinished, as if God has stopped being kind to his people.",
              },
              {
                heading: "Has God stopped loving people?",
                minutes: "2–3 min",
                teacherTalk: "Ask the harder question and let it sit — don't over-resolve it, since next week's lesson is the answer.",
                activityNote: null,
                keyQuestion: "Does that mean God has really stopped loving the people he made?",
                teacherGuidance: "Guide toward: no — the Bible tells us God never stops loving the people he made. It's fine to leave this question sitting unresolved for now; the class finds out how God answers it next week.",
              },
              {
                heading: "Memory verse and closing prayer",
                minutes: "2 min",
                teacherTalk: "Finish the week's memory verse fully from memory, then close together with the prayer in the app.",
                activityNote: "Use the say-it-from-memory activity block, then the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Lesson 12 introduces Abraham, and how God's promises to him begin to answer the missing grace from this week.",
          },
        },
      ],
    },
    "Week 2": {
      lessonTitle: "Promises, promises, promises",
      passage: "Genesis 12:1–9",
      bigIdea: "Last week's pattern seemed to break at Babel, with no grace in sight. This week we find out God never stopped loving his people — he had a plan all along, starting with an ordinary man named Abraham. Through Abraham, and the promises God makes to him, the whole world will be blessed.",
      source: "Connect B1 Upper Primary — Lesson 12",
      days: [
        // ---------------- DAY 1 (MON) ----------------
        {
          label: "Monday",
          theme: "Meet the explorer",
          blocks: [
            { type: "question", text: "If you were about to go exploring somewhere brand new, with no map and no idea exactly where you'd end up, what's one thing that would make it hard to say yes?", hint: "Accept responses like fear of the unknown, leaving family/friends behind, or not knowing what to pack. Use this to set up how big a deal Abraham's obedience is about to be." },
            { type: "story", text: "Last week we left off with a big question hanging in the air: had God really stopped loving the people he made after Babel? Today we find out the answer starts with one very ordinary man." },
            { type: "story", text: "His name was Abraham, and he was actually one of Noah's own great-great-great-great-great-great-great-great-great-grandsons! He was just going about his everyday life with his wife Sarah, in a place called Haran, when God spoke to him." },
            { type: "roleplay", title: "Lesson 12 script: God calls Abraham", characters: ["Abraham", "Sarah", "Lot", "God"], lines: [
              { character: "Abraham", text: "Hi, my name is Abraham. I live in the land of Haran with my wife Sarah and my nephew Lot, and all our extended family." },
              { text: "(Sarah and Lot enter.)", direction: true },
              { character: "Abraham", text: "One day, I was going about my business as usual when God spoke to me. He said..." },
              { character: "God", text: "Leave your country, your family, and your relatives, and go to the land that I will show you. I will bless you and make your descendants into a great nation. You will become famous and be a blessing to others. I will bless anyone who blesses you, but I will put a curse on anyone who puts a curse on you. Everyone on earth will be blessed because of you." },
              { character: "Abraham", text: "It all seemed pretty strange to me. I was 75 years old when the LORD told me to leave Haran. Sarah was only a little younger than me, and we didn't have any children. But I obeyed and left. I took my wife Sarah, Lot, and all the possessions and servants I had collected while in Haran." },
              { text: "(Abraham, Sarah, and Lot act out packing their bags and begin walking on the spot.)", direction: true },
              { character: "Abraham", text: "We walked and walked for ages until finally we came to the land of Canaan. We went as far as the sacred tree of Moreh, in a place called Shechem, and stopped there." },
              { text: "(Abraham, Sarah, and Lot stop walking on the spot.)", direction: true },
              { character: "Abraham", text: "The Canaanites were still living in the land at that time, but the LORD appeared and spoke to me again, and promised..." },
              { character: "God", text: "I will give this land to your family forever." },
              { character: "Abraham", text: "This was a pretty amazing promise! So I built an altar there for the LORD and thanked him for the promises he made to me. I knew that God would keep the promises he made. So I trusted him!" },
              { text: "(Abraham acts out building a stone mound.)", direction: true },
            ] },
            { type: "question", text: "Abraham left his home country without knowing exactly where he'd end up. Do you think you could trust someone enough to do that — pack up and go, just because they told you to?", hint: "Accept honest responses. Guide toward: it's a huge ask, which is exactly why the Bible holds Abraham up as such a striking example of trust in God." },
            { type: "verse", reference: "Numbers 23:19 (CEV)", text: "\u201cGod is no mere human! He doesn\u2019t tell lies or change his mind. God always keeps his promises.\u201d" },
            { type: "activity", text: "This term we have a brand new memory verse. Let's say it together for the first time." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 12:1–7",
            topic: "Meet the explorer",
            bigIdea: "Last week's pattern seemed to break at Babel, with no grace in sight. This week we find out God never stopped loving his people — he had a plan all along, starting with an ordinary man named Abraham. Through Abraham, and the promises God makes to him, the whole world will be blessed.",
            learningIntentions: [
              "We are learning that God called an ordinary man named Abraham to leave his home and go to a land God would show him.",
              "We are learning that Abraham trusted and obeyed God, even without knowing exactly where he was going.",
              "I can say this term's new memory verse, Numbers 23:19, and explain what it means for God to \u2018keep\u2019 a promise.",
            ],
            assessment: "Listen for whether students can retell who Abraham was and what God asked him to do, and can describe Abraham's response as trust rather than certainty.",
            resources: [
              "CEV Bible (optional, for reading Genesis 12:1\u20137 aloud)",
            ],
            script: [
              {
                heading: "Exploring without a map",
                minutes: "2–3 min",
                teacherTalk: "Open with the warm-up question about exploring somewhere new with no map, then bridge into meeting Abraham.",
                activityNote: null,
                keyQuestion: "If you were about to go exploring somewhere brand new, with no map and no idea exactly where you'd end up, what's one thing that would make it hard to say yes?",
                teacherGuidance: "Accept responses like fear of the unknown, leaving family/friends behind, or not knowing what to pack. Use this to set up how big a deal Abraham's obedience is about to be.",
              },
              {
                heading: "An ordinary man",
                minutes: "1–2 min",
                teacherTalk: "Introduce Abraham as an ordinary descendant of Noah, living his everyday life in Haran with Sarah and Lot, before God spoke to him.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Acting out God's call",
                minutes: "4–5 min",
                teacherTalk: "Choose four volunteers for Abraham, Sarah, Lot, and God, and run the built-in script as a fullscreen presenter for the whole class to watch.",
                activityNote: "Use the built-in roleplay block — tap 'Start the script on screen' to open the fullscreen presenter for your four volunteers.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Could you trust that much?",
                minutes: "2–3 min",
                teacherTalk: "Ask the question and let students be honest about how hard that would be.",
                activityNote: null,
                keyQuestion: "Abraham left his home country without knowing exactly where he'd end up. Do you think you could trust someone enough to do that — pack up and go, just because they told you to?",
                teacherGuidance: "Accept honest responses. Guide toward: it's a huge ask, which is exactly why the Bible holds Abraham up as such a striking example of trust in God.",
              },
              {
                heading: "This term's memory verse",
                minutes: "2 min",
                teacherTalk: "Introduce Numbers 23:19 as the new memory verse for this unit and say it together for the first time.",
                activityNote: "Use the built-in verse block for Numbers 23:19, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 2 unpacks the three specific promises God made to Abraham in that call.",
          },
        },
        // ---------------- DAY 2 (TUE) ----------------
        {
          label: "Tuesday",
          theme: "Three big promises",
          blocks: [
            { type: "story", text: "Yesterday we heard God call Abraham to leave everything he knew and go to a land God would show him. But God didn't just give Abraham instructions — he gave him promises." },
            { type: "story", text: "God made THREE big promises to Abraham. First, a LAND to live in. Second, that his family would become a GREAT NATION. Third — and this is the amazing one — that through Abraham, the whole world would be BLESSED." },
            { type: "question", text: "At the time, Abraham and Sarah didn't own any land, and didn't have any children at all. Which of those three promises do you think would have felt hardest for them to believe?", hint: "Accept responses — there's no single right answer. Guide toward: all three would have seemed almost impossible at the time, which is exactly why trusting God's promise mattered so much." },
            { type: "story", text: "These three promises — LAND, GREAT NATION, and BLESSINGS TO THE WORLD — are such a big deal that we're going to keep meeting them again and again for the rest of this term, and really, for the rest of the Bible." },
            { type: "question", text: "The Bible says these promises weren't just for Abraham back then — they matter for people today too, including us. Why do you think a promise made to one man, thousands of years ago, could still matter for us now?", hint: "Guide toward: the third promise — blessing the whole world — is the big clue. It's fine if students can't fully answer this yet; it's something we'll keep discovering this term." },
            { type: "verse", reference: "Numbers 23:19 (CEV)", text: "\u201cGod is no mere human! He doesn\u2019t tell lies or change his mind. God always keeps his promises.\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together again — try it once without looking!" },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 12:1–3",
            topic: "Three big promises",
            bigIdea: "Last week's pattern seemed to break at Babel, with no grace in sight. This week we find out God never stopped loving his people — he had a plan all along, starting with an ordinary man named Abraham. Through Abraham, and the promises God makes to him, the whole world will be blessed.",
            learningIntentions: [
              "We are learning the three specific promises God made to Abraham: land, a great nation, and blessing to the whole world.",
              "We are learning that these promises would have seemed almost impossible to Abraham and Sarah at the time.",
              "I can name all three promises God made to Abraham.",
            ],
            assessment: "Listen for whether students can list all three promises (land, great nation, blessings to the world) without prompting.",
            resources: [],
            script: [
              {
                heading: "Recap: God calls Abraham",
                minutes: "1–2 min",
                teacherTalk: "Briefly recap yesterday's roleplay before unpacking the promises in detail.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Land, nation, blessing",
                minutes: "3–4 min",
                teacherTalk: "Introduce each of the three promises one at a time, giving students a moment to picture what each one meant.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "The hardest promise to believe",
                minutes: "2–3 min",
                teacherTalk: "Ask which promise would have felt hardest to believe, given Abraham and Sarah's circumstances.",
                activityNote: null,
                keyQuestion: "At the time, Abraham and Sarah didn't own any land, and didn't have any children at all. Which of those three promises do you think would have felt hardest for them to believe?",
                teacherGuidance: "Accept responses — there's no single right answer. Guide toward: all three would have seemed almost impossible at the time, which is exactly why trusting God's promise mattered so much.",
              },
              {
                heading: "Promises for us too?",
                minutes: "2–3 min",
                teacherTalk: "Plant the idea that these promises reach beyond Abraham to us today, without fully resolving it yet.",
                activityNote: null,
                keyQuestion: "The Bible says these promises weren't just for Abraham back then — they matter for people today too, including us. Why do you think a promise made to one man, thousands of years ago, could still matter for us now?",
                teacherGuidance: "Guide toward: the third promise — blessing the whole world — is the big clue. It's fine if students can't fully answer this yet; it's something we'll keep discovering this term.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Try the memory verse together, once without looking at the screen.",
                activityNote: "Use the built-in verse block for Numbers 23:19, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 3 looks at how Abraham actually responded to these promises — by trusting and obeying, one step at a time.",
          },
        },
        // ---------------- DAY 3 (WED) ----------------
        {
          label: "Wednesday",
          theme: "Obeying without knowing",
          blocks: [
            { type: "story", text: "We've heard the promises God made. Today let's look more closely at how Abraham actually responded to them." },
            { type: "story", text: "Abraham was 75 years old when God told him to leave Haran. He didn't argue or stall — he packed up his wife Sarah, his nephew Lot, and everything he owned, and set off, even though God hadn't told him exactly where he'd end up." },
            { type: "question", text: "What's the difference between trusting a plan when you can see every single step in advance, and trusting a plan when you can only see the very next step?", hint: "Guide toward: real trust is shown most clearly when you can't see the whole picture — that's exactly the kind of trust Abraham showed." },
            { type: "story", text: "Abraham and his family walked all the way to the land of Canaan, right to a place called Shechem. There, God appeared to him again with an even more specific promise: this land would belong to Abraham's family forever." },
            { type: "story", text: "So what did Abraham do? He built an altar right there and thanked God for his promise." },
            { type: "question", text: "Abraham didn't just say a quiet 'thank you' in his head — he built an altar and worshipped God out in the open, where anyone could see. Why do you think he responded that publicly, rather than keeping it to himself?", hint: "Guide toward: worship isn't just private gratitude — it's a way of publicly declaring that we trust and honour God, and it can encourage others around us too." },
            { type: "verse", reference: "Numbers 23:19 (CEV)", text: "\u201cGod is no mere human! He doesn\u2019t tell lies or change his mind. God always keeps his promises.\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together one more time — see if we can do it from memory!" },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 12:4–7",
            topic: "Obeying without knowing",
            bigIdea: "Last week's pattern seemed to break at Babel, with no grace in sight. This week we find out God never stopped loving his people — he had a plan all along, starting with an ordinary man named Abraham. Through Abraham, and the promises God makes to him, the whole world will be blessed.",
            learningIntentions: [
              "We are learning that Abraham obeyed God immediately, packing up his whole household and setting off without knowing exactly where he'd end up.",
              "We are learning that when God repeated his promise at Shechem, Abraham responded by building an altar and worshipping God publicly.",
              "I can describe Abraham's obedience as trusting one step at a time, rather than seeing the whole plan in advance.",
            ],
            assessment: "Listen for whether students can explain that Abraham obeyed without knowing the destination, and can identify the altar at Shechem as a public act of worship and trust.",
            resources: [
              "CEV Bible (optional, for reading Genesis 12:4\u20137 aloud)",
            ],
            script: [
              {
                heading: "From promise to action",
                minutes: "1–2 min",
                teacherTalk: "Bridge from yesterday's three promises into how Abraham actually responded to them.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Packing up at 75",
                minutes: "2–3 min",
                teacherTalk: "Tell how Abraham obeyed immediately and set off not knowing his destination, then ask the trust question.",
                activityNote: null,
                keyQuestion: "What's the difference between trusting a plan when you can see every single step in advance, and trusting a plan when you can only see the very next step?",
                teacherGuidance: "Guide toward: real trust is shown most clearly when you can't see the whole picture — that's exactly the kind of trust Abraham showed.",
              },
              {
                heading: "An altar at Shechem",
                minutes: "3 min",
                teacherTalk: "Tell how God repeated the land promise at Shechem and Abraham responded by building an altar, then ask the worship question.",
                activityNote: null,
                keyQuestion: "Abraham didn't just say a quiet 'thank you' in his head — he built an altar and worshipped God out in the open, where anyone could see. Why do you think he responded that publicly, rather than keeping it to himself?",
                teacherGuidance: "Guide toward: worship isn't just private gratitude — it's a way of publicly declaring that we trust and honour God, and it can encourage others around us too.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Try the memory verse together, aiming for fully from memory this time.",
                activityNote: "Use the built-in verse block for Numbers 23:19, then the say-it-from-memory activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 4 brings the three promises back together and asks the big question: is God really a promise keeper?",
          },
        },
        // ---------------- DAY 4 (THU) ----------------
        {
          label: "Thursday",
          theme: "Is God a promise keeper?",
          blocks: [
            { type: "story", text: "This week we've met Abraham, heard God's three promises to him — land, a great nation, and blessing to the whole world — and seen how he trusted and obeyed God one step at a time." },
            { type: "question", text: "So here's the big question this whole week has been building to: based on what we've seen so far, do you think God is a promise keeper, or a promise breaker?", hint: "Accept responses, but guide firmly toward: God is a promise keeper — that's exactly what this term's memory verse tells us, and it's what we'll keep seeing all term." },
            { type: "story", text: "Remember last week's cycle — SIN, then CONSEQUENCES, and then no GRACE at Babel? It looked like the pattern was broken forever. But Abraham's story shows us God hadn't stopped loving his people at all." },
            { type: "story", text: "God's plan all along was to bring people back from being scattered all over the earth — by blessing the WHOLE WORLD through just one man, Abraham. That missing grace from Babel was actually on its way the whole time." },
            { type: "question", text: "The Bible tells us these promises weren't only for Abraham — they're for people today too, including us. What do you think it means for you personally that God keeps his promises?", hint: "Accept honest responses. Guide toward: if God always keeps his word, that means we can trust him with the big things in our own lives too, not just admire Abraham's story from a distance." },
            { type: "story", text: "But there's a twist. Next week we'll find out that even though God always keeps his promises, sometimes he doesn't keep them straight away. Abraham is about to learn a hard lesson in waiting." },
            { type: "verse", reference: "Numbers 23:19 (CEV)", text: "\u201cGod is no mere human! He doesn\u2019t tell lies or change his mind. God always keeps his promises.\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together one more time — see if we can do it fully from memory!" },
            { type: "prayer", text: "Dear God, thank you for the promises you made to Abraham. Thank you that you are a God who keeps every promise you make, even when we can't see how yet. Please help us trust you the way Abraham did, one step at a time. Amen." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 12:1–9 (recap)",
            topic: "Is God a promise keeper?",
            bigIdea: "Last week's pattern seemed to break at Babel, with no grace in sight. This week we find out God never stopped loving his people — he had a plan all along, starting with an ordinary man named Abraham. Through Abraham, and the promises God makes to him, the whole world will be blessed.",
            learningIntentions: [
              "We are learning that Abraham's story answers last week's unresolved question — God never stopped loving the people he made.",
              "We are learning that God's promises to Abraham were his plan to bless the whole world, undoing the scattering at Babel.",
              "I can explain, in my own words, why the Bible calls God a promise keeper.",
            ],
            assessment: "Listen for whether students can connect Abraham's story back to the missing grace from last week's Babel cycle, and can explain in their own words why God is described as a promise keeper.",
            resources: [],
            script: [
              {
                heading: "Recap the week",
                minutes: "1–2 min",
                teacherTalk: "Recap Abraham, the three promises, and his obedience before asking the big question.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Promise keeper or promise breaker?",
                minutes: "2–3 min",
                teacherTalk: "Ask the central question of the week and guide students firmly toward the answer.",
                activityNote: null,
                keyQuestion: "So here's the big question this whole week has been building to: based on what we've seen so far, do you think God is a promise keeper, or a promise breaker?",
                teacherGuidance: "Accept responses, but guide firmly toward: God is a promise keeper — that's exactly what this term's memory verse tells us, and it's what we'll keep seeing all term.",
              },
              {
                heading: "The missing grace, found",
                minutes: "2–3 min",
                teacherTalk: "Connect Abraham's call directly back to last week's unfinished Babel cycle — the grace was on its way all along.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "What this means for us",
                minutes: "2–3 min",
                teacherTalk: "Ask what it means personally that God keeps his promises, letting students make it their own.",
                activityNote: null,
                keyQuestion: "The Bible tells us these promises weren't only for Abraham — they're for people today too, including us. What do you think it means for you personally that God keeps his promises?",
                teacherGuidance: "Accept honest responses. Guide toward: if God always keeps his word, that means we can trust him with the big things in our own lives too, not just admire Abraham's story from a distance.",
              },
              {
                heading: "Memory verse and closing prayer",
                minutes: "2 min",
                teacherTalk: "Finish the week's memory verse fully from memory, then close together with the prayer in the app.",
                activityNote: "Use the say-it-from-memory activity block, then the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Lesson 13 shows that even though God keeps every promise, Abraham has to learn to wait a long time for this one to come true.",
          },
        },
      ],
    },
    "Week 3": {
      lessonTitle: "Waiting, waiting, waiting",
      passage: "Genesis 15:1–18:15; 21:1–7",
      bigIdea: "God kept every promise he made to Abraham and Sarah — but it took twenty-five long years. Waiting is hard, and Abraham and Sarah sometimes struggled to trust God's timing along the way. But God never forgot, and he never gave up. Christians believe God can always be trusted to keep his promises, even if he takes far longer than we expect.",
      source: "Connect B1 Upper Primary — Lesson 13",
      days: [
        // ---------------- DAY 1 (MON) ----------------
        {
          label: "Monday",
          theme: "Beginning to wonder",
          blocks: [
            { type: "question", text: "Imagine you sealed up a message today that wouldn't be opened for years and years. Do you think it would be easy or hard to trust that it was still safely there, waiting, the whole time you couldn't see it?", hint: "Accept responses. This is the idea behind a time capsule — something sealed away and easy to forget about, even though it's still there. Use it to introduce this week's big theme: waiting for a promise you can't yet see come true." },
            { type: "story", text: "Last week we heard God make three huge promises to Abraham: a LAND, a GREAT NATION, and that the whole world would be BLESSED through him. Abraham trusted God and set off, not knowing exactly where he'd end up." },
            { type: "story", text: "But here's the problem. Years went by. Abraham and Sarah still didn't have a single child of their own — and without a child, how could Abraham's family ever become a great nation? Abraham began to wonder whether God had forgotten him." },
            { type: "question", text: "Abraham had trusted God enough to leave his whole home behind. But now, years later, with nothing to show for it yet, he was starting to doubt. Why do you think waiting can shake our trust more than the original hard decision did?", hint: "Guide toward: it's often easier to trust God for one big decision than to keep trusting him through a long, uncertain wait with no answer in sight — that ongoing trust is a different, harder kind of faith." },
            { type: "story", text: "God came and spoke to Abraham again. He took him outside at night and made him an incredible promise." },
            { type: "verse", reference: "Genesis 15:4b–5 (CEV)", text: "“You will have a son of your own, and everything you have will be his.” Then the Lord took Abram outside and said, “Look at the sky and see if you can count the stars. That's how many descendants you will have.”" },
            { type: "question", text: "Abraham couldn't count the stars — there were far too many. Why do you think God chose a promise like that, one that was literally impossible to count, instead of just giving Abraham a number?", hint: "Guide toward: it showed the promise was bigger than Abraham could ever measure or fully picture — trusting it meant trusting God's word, not just doing the maths." },
            { type: "story", text: "The Bible tells us Abraham trusted the Lord, and because of his faith, God accepted him as one of his own people." },
            { type: "verse", reference: "Numbers 23:19 (CEV)", text: "“God is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.”" },
            { type: "activity", text: "Let's say this term's memory verse together." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 15:1–6",
            topic: "Beginning to wonder",
            bigIdea: "God kept every promise he made to Abraham and Sarah — but it took twenty-five long years. Waiting is hard, and Abraham and Sarah sometimes struggled to trust God's timing along the way. But God never forgot, and he never gave up. Christians believe God can always be trusted to keep his promises, even if he takes far longer than we expect.",
            learningIntentions: [
              "We are learning that years passed after God's promises to Abraham with no child being born, and that Abraham began to doubt.",
              "We are learning that God reassured Abraham with the promise of descendants as countless as the stars.",
              "I can explain that Abraham trusted God even though he couldn't see how the promise would come true.",
            ],
            assessment: "Listen for whether students can explain why the passing of time (rather than the original promise itself) tested Abraham's trust, and can describe the stars promise in their own words.",
            resources: [
              "CEV Bible (optional, for reading Genesis 15:4b–5 aloud)",
            ],
            script: [
              {
                heading: "A message you can't yet see",
                minutes: "2 min",
                teacherTalk: "Open with the sealed-message/time-capsule warm-up question to introduce the theme of trusting something you can't yet see come true.",
                activityNote: null,
                keyQuestion: "Imagine you sealed up a message today that wouldn't be opened for years and years. Do you think it would be easy or hard to trust that it was still safely there, waiting, the whole time you couldn't see it?",
                teacherGuidance: "Accept responses. This is the idea behind a time capsule — something sealed away and easy to forget about, even though it's still there. Use it to introduce this week's big theme: waiting for a promise you can't yet see come true.",
              },
              {
                heading: "Recap and the problem",
                minutes: "2–3 min",
                teacherTalk: "Briefly recap last week's three promises, then explain that years passed with still no child for Abraham and Sarah.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Waiting shakes trust",
                minutes: "2–3 min",
                teacherTalk: "Ask why an ongoing wait can be harder to trust through than the original decision, letting students reflect honestly.",
                activityNote: null,
                keyQuestion: "Abraham had trusted God enough to leave his whole home behind. But now, years later, with nothing to show for it yet, he was starting to doubt. Why do you think waiting can shake our trust more than the original hard decision did?",
                teacherGuidance: "Guide toward: it's often easier to trust God for one big decision than to keep trusting him through a long, uncertain wait with no answer in sight — that ongoing trust is a different, harder kind of faith.",
              },
              {
                heading: "Count the stars",
                minutes: "3–4 min",
                teacherTalk: "Read Genesis 15:4b–5 together and unpack why God used a promise too big to count.",
                activityNote: null,
                keyQuestion: "Abraham couldn't count the stars — there were far too many. Why do you think God chose a promise like that, one that was literally impossible to count, instead of just giving Abraham a number?",
                teacherGuidance: "Guide toward: it showed the promise was bigger than Abraham could ever measure or fully picture — trusting it meant trusting God's word, not just doing the maths.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Close by explaining that Abraham's trust was credited to him as righteousness, then say this term's memory verse together.",
                activityNote: "Use the built-in verse block for Numbers 23:19, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 2 shows that even Abraham and Sarah, while they waited, sometimes struggled to trust God and tried to take matters into their own hands.",
          },
        },
        // ---------------- DAY 2 (TUE) ----------------
        {
          label: "Tuesday",
          theme: "Taking matters into their own hands",
          blocks: [
            { type: "story", text: "Even after God's amazing star promise, more time passed — and Abraham and Sarah still didn't have a child. The waiting kept going, and it kept being hard." },
            { type: "question", text: "Have you ever wanted something so badly, and waited so long for it, that you were tempted to just make it happen yourself instead of waiting any longer?", hint: "Accept honest responses — most people have felt this. Use it to set up today's story with empathy rather than judgement: waiting is genuinely hard, even for people the Bible holds up as examples of great faith." },
            { type: "story", text: "Sarah grew so tired of waiting that she came up with her own plan. She gave her servant Hagar to Abraham, hoping that Hagar could have a child that would count as theirs instead. Abraham agreed, and Hagar had a son named Ishmael." },
            { type: "story", text: "But this shortcut didn't bring the peace Sarah hoped for. Instead, it caused deep jealousy and hurt in their family, and lasting trouble between Sarah and Hagar." },
            { type: "question", text: "Sarah and Abraham loved God and had already shown real faith in him — but they still tried to solve the waiting their own way, and it went badly. What does that tell us about how hard waiting on God can be, even for people who trust him?", hint: "Guide toward: even people the Bible admires for their faith still struggled with impatience — this isn't really a story about Abraham and Sarah failing so much as a story about how genuinely hard waiting is, and how easy it is to want to force our own solution instead of trusting God's timing." },
            { type: "story", text: "But even after Sarah and Abraham's plan caused so much trouble, God didn't walk away from them. He was still faithful to keep his promise — the real promise, the one he had made himself." },
            { type: "verse", reference: "Numbers 23:19 (CEV)", text: "“God is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.”" },
            { type: "activity", text: "Let's say this week's memory verse together again." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 16",
            topic: "Taking matters into their own hands",
            bigIdea: "God kept every promise he made to Abraham and Sarah — but it took twenty-five long years. Waiting is hard, and Abraham and Sarah sometimes struggled to trust God's timing along the way. But God never forgot, and he never gave up. Christians believe God can always be trusted to keep his promises, even if he takes far longer than we expect.",
            learningIntentions: [
              "We are learning that Sarah and Abraham grew impatient waiting for God's promise and tried to solve it themselves, through Hagar and Ishmael.",
              "We are learning that this shortcut caused jealousy and trouble in their family rather than solving anything.",
              "I can explain that even faithful people can struggle to trust God's timing, and that God stayed faithful anyway.",
            ],
            assessment: "Listen for whether students can retell what Sarah and Abraham did instead of waiting, and can describe the consequence without treating the story as simple failure — aim for empathy alongside honesty.",
            resources: [],
            script: [
              {
                heading: "Still waiting",
                minutes: "1–2 min",
                teacherTalk: "Recap that despite the star promise, more time passed with still no child.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "The temptation to force it",
                minutes: "2 min",
                teacherTalk: "Ask the warm-up question so students can relate personally before hearing today's story.",
                activityNote: null,
                keyQuestion: "Have you ever wanted something so badly, and waited so long for it, that you were tempted to just make it happen yourself instead of waiting any longer?",
                teacherGuidance: "Accept honest responses — most people have felt this. Use it to set up today's story with empathy rather than judgement: waiting is genuinely hard, even for people the Bible holds up as examples of great faith.",
              },
              {
                heading: "Sarah's plan",
                minutes: "3 min",
                teacherTalk: "Tell the story of Hagar and Ishmael and the trouble it caused, keeping the tone gentle rather than harshly critical.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Even faithful people struggle",
                minutes: "2–3 min",
                teacherTalk: "Ask what this reveals about how hard waiting on God can be, guiding students away from judging Abraham and Sarah too harshly.",
                activityNote: null,
                keyQuestion: "Sarah and Abraham loved God and had already shown real faith in him — but they still tried to solve the waiting their own way, and it went badly. What does that tell us about how hard waiting on God can be, even for people who trust him?",
                teacherGuidance: "Guide toward: even people the Bible admires for their faith still struggled with impatience — this isn't really a story about Abraham and Sarah failing so much as a story about how genuinely hard waiting is, and how easy it is to want to force our own solution instead of trusting God's timing.",
              },
              {
                heading: "God stayed faithful anyway",
                minutes: "1–2 min",
                teacherTalk: "Emphasise that God didn't abandon Abraham and Sarah despite their shortcut, then say the memory verse together.",
                activityNote: "Use the built-in verse block for Numbers 23:19, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 3 jumps forward to when Abraham is 99 years old, as God renews his promise and gives Abraham and Sarah brand new names.",
          },
        },
        // ---------------- DAY 3 (WED) ----------------
        {
          label: "Wednesday",
          theme: "Father of many nations",
          blocks: [
            { type: "story", text: "More birthdays passed. And more. And more. Abraham was 75 when God first made his promises. Now, twenty-four birthdays later, Abraham was 99 years old and Sarah was 89 — and they still didn't have a child of their own." },
            { type: "question", text: "If you'd been waiting twenty-four years for something you'd been promised, do you think you'd still be expecting it to happen — or would you have given up hope by then?", hint: "Accept honest responses. Use it to help students feel the weight of just how long this wait really was — this isn't a short story, it's a quarter of a century." },
            { type: "story", text: "God came and spoke to Abraham again. This time, God didn't just repeat the promise — he renewed it as an everlasting covenant, and gave Abraham and Sarah brand new names to go with it." },
            { type: "verse", reference: "Genesis 17:4–5, 15–16 (CEV)", text: "“I promise that you will be the father of many nations. That's why I now change your name from Abram to Abraham … Abraham, your wife's name will now be Sarah instead of Sarai. I will bless her, and you will have a son by her. She will become the mother of nations, and some of her descendants will even be kings.”" },
            { type: "question", text: "Abraham means 'father of many', and Sarah means 'mother of nations' — new names that only made sense if the promise came true. Why do you think God chose to change their names before Isaac had even been born?", hint: "Guide toward: it gave Abraham and Sarah a daily reminder of God's promise, every single time anyone said their names — a sign of God's certainty, even before the promise was fulfilled." },
            { type: "story", text: "God also said something even more specific this time — not just that a son would come one day, but exactly when." },
            { type: "verse", reference: "Genesis 18:10a (CEV)", text: "One of the guests was the Lord, and he said, “I'll come back about this time next year, and when I do, Sarah will already have a son.”" },
            { type: "question", text: "After twenty-four years of waiting with no timeline at all, God suddenly gave Abraham and Sarah an exact promise: one year. How do you think it would feel to finally have a date to look forward to, after waiting that long?", hint: "Accept responses — likely a mix of excitement, disbelief, and maybe still some doubt after so many years of nothing." },
            { type: "verse", reference: "Numbers 23:19 (CEV)", text: "“God is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.”" },
            { type: "activity", text: "Let's say this week's memory verse together — try it once without looking!" },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 17:1–5, 15–17; 18:10a",
            topic: "Father of many nations",
            bigIdea: "God kept every promise he made to Abraham and Sarah — but it took twenty-five long years. Waiting is hard, and Abraham and Sarah sometimes struggled to trust God's timing along the way. But God never forgot, and he never gave up. Christians believe God can always be trusted to keep his promises, even if he takes far longer than we expect.",
            learningIntentions: [
              "We are learning that twenty-four years after the first promise, at age 99, Abraham still had no child of his own.",
              "We are learning that God renewed his covenant with Abraham, changing his and Sarah's names to reflect the promise still to come.",
              "I can explain that God gave Abraham and Sarah a specific one-year timeline for their son to be born.",
            ],
            assessment: "Listen for whether students can state Abraham and Sarah's ages at this point in the story, and can explain why their names were changed before the promise came true.",
            resources: [
              "CEV Bible (optional, for reading Genesis 17:4–5, 15–16 and 18:10a aloud)",
            ],
            script: [
              {
                heading: "Twenty-four birthdays later",
                minutes: "2 min",
                teacherTalk: "Emphasise just how long twenty-four years is, then ask the reflection question.",
                activityNote: null,
                keyQuestion: "If you'd been waiting twenty-four years for something you'd been promised, do you think you'd still be expecting it to happen — or would you have given up hope by then?",
                teacherGuidance: "Accept honest responses. Use it to help students feel the weight of just how long this wait really was — this isn't a short story, it's a quarter of a century.",
              },
              {
                heading: "New names, renewed promise",
                minutes: "3–4 min",
                teacherTalk: "Read Genesis 17:4–5, 15–16 together and explain the covenant renewal and name changes.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Why change the names now?",
                minutes: "2–3 min",
                teacherTalk: "Ask why God changed their names before the promise was fulfilled.",
                activityNote: null,
                keyQuestion: "Abraham means 'father of many', and Sarah means 'mother of nations' — new names that only made sense if the promise came true. Why do you think God chose to change their names before Isaac had even been born?",
                teacherGuidance: "Guide toward: it gave Abraham and Sarah a daily reminder of God's promise, every single time anyone said their names — a sign of God's certainty, even before the promise was fulfilled.",
              },
              {
                heading: "One year from now",
                minutes: "2–3 min",
                teacherTalk: "Read Genesis 18:10a and ask how it would feel to finally have an exact timeline after so long.",
                activityNote: null,
                keyQuestion: "After twenty-four years of waiting with no timeline at all, God suddenly gave Abraham and Sarah an exact promise: one year. How do you think it would feel to finally have a date to look forward to, after waiting that long?",
                teacherGuidance: "Accept responses — likely a mix of excitement, disbelief, and maybe still some doubt after so many years of nothing.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Try the memory verse together, once without looking at the screen.",
                activityNote: "Use the built-in verse block for Numbers 23:19, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 4 acts out that visit to Abraham's tent, hears Sarah's reaction, and finds out whether God really did keep his promise.",
          },
        },
        // ---------------- DAY 4 (THU) ----------------
        {
          label: "Thursday",
          theme: "Is God a promise keeper?",
          blocks: [
            { type: "story", text: "Let's act out what happened on the day God gave Abraham and Sarah that one-year promise." },
            { type: "roleplay", title: "Lesson 13 script: Three visitors at Mamre", characters: ["Narrator", "Abraham", "The LORD", "Sarah"], lines: [
              { character: "Narrator", text: "One hot afternoon, Abraham was resting at the entrance of his tent near the great trees of Mamre. He looked up and saw three visitors standing nearby." },
              { text: "(Abraham jumps up and hurries over, bowing low.)", direction: true },
              { character: "Abraham", text: "Please, don't go on without resting a while. Let me bring water to wash your feet, and some bread to give you strength before you continue your journey." },
              { character: "The LORD", text: "Very well. Do as you have said." },
              { text: "(Abraham hurries to Sarah's tent.)", direction: true },
              { character: "Abraham", text: "Sarah — quickly! Take our best flour and bake some bread for our guests!" },
              { text: "(Abraham chooses a tender calf to be prepared, then serves the visitors as they eat under a tree.)", direction: true },
              { character: "The LORD", text: "Where is your wife Sarah?" },
              { character: "Abraham", text: "She is there, in the tent." },
              { character: "The LORD", text: "I'll come back about this time next year, and when I do, Sarah will already have a son." },
              { character: "Narrator", text: "Sarah was listening at the entrance to the tent behind him. Abraham and Sarah were very old, and Sarah was well past the age for having children." },
              { text: "(Sarah laughs quietly to herself.)", direction: true },
              { character: "Sarah", text: "Now that I am worn out, and my husband is old, will I really know such happiness?" },
              { character: "The LORD", text: "Why did Sarah laugh and say, 'Can I really have a child now that I am so old?' Is anything too hard for the Lord? I'll come back about this time next year, and Sarah will have a son." },
              { character: "Sarah", text: "I didn't laugh." },
              { character: "The LORD", text: "Yes, you did laugh." },
            ] },
            { type: "question", text: "Sarah thought the idea of having a baby at 89 was so unlikely that she laughed. Do you think you would have believed the promise if you were her — after everything that had already happened?", hint: "Accept honest responses. Guide toward: it's completely understandable that Sarah struggled to believe it after so many years — the question isn't really whether her doubt makes sense, but whether God kept his word anyway." },
            { type: "story", text: "Well, another birthday came around. Abraham turned 100. Sarah turned 90. And exactly as God had promised, one year on — Abraham and Sarah had a baby boy!" },
            { type: "story", text: "God KEPT his promise to Abraham. They named their son Isaac, which means 'he laughed' — because both Abraham and Sarah had laughed in disbelief when they first heard the promise, and now they were laughing with joy instead." },
            { type: "question", text: "So here's the big question this whole week has been building to: after twenty-five years of waiting, doubting, and even trying to take matters into their own hands — did God turn out to be a promise keeper, or a promise breaker?", hint: "Accept responses, but guide firmly toward: God is a promise keeper — he kept every single promise, exactly as he said he would, even though it took twenty-five years." },
            { type: "story", text: "Think about the message sealed away that we talked about on Monday. A promise can be sealed away for a really long time, and it might even seem like everyone has forgotten about it. But when the time is right, it's opened — and it's exactly what was promised, all along." },
            { type: "question", text: "God's timing wasn't the same as Abraham and Sarah's. Is there something in your own life that you're waiting for right now, where it's hard to trust God's timing?", hint: "Accept honest, personal responses — this can be kept private if a student prefers. Guide toward: waiting is genuinely hard, but this week's story is proof that God's promises are worth trusting even when the timing feels slow." },
            { type: "verse", reference: "Numbers 23:19 (CEV)", text: "“God is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.”" },
            { type: "activity", text: "Let's say this week's memory verse together one more time — see if we can do it fully from memory!" },
            { type: "prayer", text: "Dear God, thank you for the promises you made to Abraham. Thank you that you kept your promise to give Sarah and Abraham a son. Thank you that the Bible shows us you are a promise keeper. Help us to enjoy learning about your promises this term. Amen." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 18:1–15; 21:1–7",
            topic: "Is God a promise keeper?",
            bigIdea: "God kept every promise he made to Abraham and Sarah — but it took twenty-five long years. Waiting is hard, and Abraham and Sarah sometimes struggled to trust God's timing along the way. But God never forgot, and he never gave up. Christians believe God can always be trusted to keep his promises, even if he takes far longer than we expect.",
            learningIntentions: [
              "We are learning what happened when the Lord visited Abraham's tent and told Sarah she would have a son within the year.",
              "We are learning that despite Sarah's disbelief, God kept his promise exactly on time — Isaac was born when Abraham was 100 and Sarah was 90.",
              "I can explain, in my own words, why the Bible calls God a promise keeper even when a promise takes a long time.",
            ],
            assessment: "Listen for whether students can retell the visit to Abraham's tent and Sarah's reaction in their own words, and can explain why God is described as a promise keeper despite the twenty-five year wait.",
            resources: [
              "Volunteers to read Abraham, the LORD, Sarah, and Narrator for the roleplay",
            ],
            script: [
              {
                heading: "Acting out the visit",
                minutes: "4–5 min",
                teacherTalk: "Choose four volunteers for Narrator, Abraham, the LORD, and Sarah, and run the built-in script as a fullscreen presenter for the whole class to watch.",
                activityNote: "Use the built-in roleplay block — tap 'Start the script on screen' to open the fullscreen presenter for your four volunteers.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Would you have believed it?",
                minutes: "2 min",
                teacherTalk: "Ask whether students think they'd have believed the promise in Sarah's position.",
                activityNote: null,
                keyQuestion: "Sarah thought the idea of having a baby at 89 was so unlikely that she laughed. Do you think you would have believed the promise if you were her — after everything that had already happened?",
                teacherGuidance: "Accept honest responses. Guide toward: it's completely understandable that Sarah struggled to believe it after so many years — the question isn't really whether her doubt makes sense, but whether God kept his word anyway.",
              },
              {
                heading: "Isaac is born",
                minutes: "2 min",
                teacherTalk: "Tell how, exactly one year later, Isaac was born and explain the meaning of his name.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Promise keeper or promise breaker?",
                minutes: "2–3 min",
                teacherTalk: "Ask the central question of the week and guide students firmly toward the answer.",
                activityNote: null,
                keyQuestion: "So here's the big question this whole week has been building to: after twenty-five years of waiting, doubting, and even trying to take matters into their own hands — did God turn out to be a promise keeper, or a promise breaker?",
                teacherGuidance: "Accept responses, but guide firmly toward: God is a promise keeper — he kept every single promise, exactly as he said he would, even though it took twenty-five years.",
              },
              {
                heading: "What are you waiting for?",
                minutes: "2–3 min",
                teacherTalk: "Revisit Monday's sealed-message idea, then invite students to name something they're waiting on God for personally.",
                activityNote: null,
                keyQuestion: "God's timing wasn't the same as Abraham and Sarah's. Is there something in your own life that you're waiting for right now, where it's hard to trust God's timing?",
                teacherGuidance: "Accept honest, personal responses — this can be kept private if a student prefers. Guide toward: waiting is genuinely hard, but this week's story is proof that God's promises are worth trusting even when the timing feels slow.",
              },
              {
                heading: "Memory verse and closing prayer",
                minutes: "2 min",
                teacherTalk: "Finish the week's memory verse fully from memory, then close together with the prayer in the app.",
                activityNote: "Use the say-it-from-memory activity block, then the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Lesson 14 moves on to a drama based on the story of Isaac and Rebekah.",
          },
        },
      ],
    },
    "Week 4": {
      lessonTitle: "God's family grows",
      passage: "Genesis 24",
      bigIdea: "Over sixty years after God first promised Abraham a family as countless as the stars, Isaac still had no wife — and without a wife, the promise couldn't grow any further. God used the careful obedience of an unnamed servant, and the willing trust of a young woman named Rebekah, to move his promise forward another step. Christians believe God can be trusted to work through ordinary people, and even the small details of an ordinary day, to keep his promises.",
      source: "Connect B1 Upper Primary — Lesson 14",
      days: [
        // ---------------- DAY 1 (MON) ----------------
        {
          label: "Monday",
          theme: "A wife for Isaac",
          blocks: [
            {
              type: "question",
              text: "Has anyone ever made an important decision on your behalf — like a parent choosing your school, or a friend picking a gift for you? How did it feel to trust someone else with something that mattered?",
              hint: "Accept responses. Use this to set up today's story, where Abraham trusts his servant to make one of the most important decisions of Isaac's life for him.",
            },
            {
              type: "story",
              text: "It had been over sixty years since God first promised Abraham a land, a great family, and blessing for the whole world. Sarah had died, and Abraham was now very old. His son Isaac was forty years old — and still had no wife.",
            },
            {
              type: "question",
              text: "Without a wife for Isaac, Abraham's family couldn't grow into the great nation God had promised. Why do you think this moment mattered so much for God's promise to keep moving forward?",
              hint: "Guide toward: the promise depended on Isaac having children of his own one day — no wife meant no next generation, and no next generation meant the promise couldn't grow any further.",
            },
            {
              type: "story",
              text: "So Abraham called his most trusted servant and gave him a very important job: travel back to Abraham's own homeland and family, far away, and find a wife there for Isaac. Abraham was firm that Isaac's wife must not come from the local Canaanite people they now lived among.",
            },
            {
              type: "question",
              text: "The servant wasn't so sure about this plan. What if the woman he found didn't want to leave her home and travel back with him? Should he just bring Isaac to meet her instead? What do you think Abraham said to that?",
              hint: "Accept guesses, then reveal: Abraham said no — Isaac must stay in the land God had promised him. If the woman wasn't willing to come, the servant was free to come back alone, but Isaac himself was not to leave.",
            },
            {
              type: "story",
              text: "Abraham trusted that God had a plan in this too — he even told his servant that God would send an angel ahead of him to prepare the way. So the servant loaded ten camels with valuable gifts and set off on the long journey, trusting God with a job he couldn't fully control.",
            },
            {
              type: "verse",
              reference: "Numbers 23:19 (CEV)",
              text: "\u201cGod is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.\u201d",
            },
            {
              type: "activity",
              text: "Let's say this week's memory verse together.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 24:1–9",
            topic: "A wife for Isaac",
            bigIdea: "Over sixty years after God first promised Abraham a family as countless as the stars, Isaac still had no wife — and without a wife, the promise couldn't grow any further. God used the careful obedience of an unnamed servant, and the willing trust of a young woman named Rebekah, to move his promise forward another step. Christians believe God can be trusted to work through ordinary people, and even the small details of an ordinary day, to keep his promises.",
            learningIntentions: [
              "We are learning that over sixty years after God's first promise, Isaac was forty and still had no wife.",
              "We are learning that Abraham sent his trusted servant to find a wife for Isaac from his own family and homeland, not from the local Canaanite people.",
              "I can explain why Isaac having a wife mattered for God's promise to Abraham to keep moving forward.",
            ],
            assessment: "Listen for whether students can explain, in their own words, why a wife for Isaac was necessary for God's promise of a great family to continue.",
            resources: [
              "CEV Bible (optional, for reading Genesis 24:1–9 aloud)",
            ],
            script: [
              {
                heading: "Trusting someone else's choice",
                minutes: "2 min",
                teacherTalk: "Open with the warm-up question about trusting someone else with an important decision.",
                activityNote: null,
                keyQuestion: "Has anyone ever made an important decision on your behalf — like a parent choosing your school, or a friend picking a gift for you? How did it feel to trust someone else with something that mattered?",
                teacherGuidance: "Accept responses. Use this to set up today's story, where Abraham trusts his servant to make one of the most important decisions of Isaac's life for him.",
              },
              {
                heading: "Sixty years on",
                minutes: "2 min",
                teacherTalk: "Recap the promise so far and introduce the problem: Isaac is forty and unmarried.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Why this moment mattered",
                minutes: "2–3 min",
                teacherTalk: "Ask why a wife for Isaac was so important for the promise, guiding toward the idea of the next generation.",
                activityNote: null,
                keyQuestion: "Without a wife for Isaac, Abraham's family couldn't grow into the great nation God had promised. Why do you think this moment mattered so much for God's promise to keep moving forward?",
                teacherGuidance: "Guide toward: the promise depended on Isaac having children of his own one day — no wife meant no next generation, and no next generation meant the promise couldn't grow any further.",
              },
              {
                heading: "Abraham sends his servant",
                minutes: "3 min",
                teacherTalk: "Tell how Abraham commissioned his servant, insisting Isaac's wife come from his own family and homeland rather than the local Canaanites.",
                activityNote: null,
                keyQuestion: "The servant wasn't so sure about this plan. What if the woman he found didn't want to leave her home and travel back with him? Should he just bring Isaac to meet her instead? What do you think Abraham said to that?",
                teacherGuidance: "Accept guesses, then reveal: Abraham said no — Isaac must stay in the land God had promised him. If the woman wasn't willing to come, the servant was free to come back alone, but Isaac himself was not to leave.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Explain the servant set off trusting God with the outcome, then say this week's memory verse together.",
                activityNote: "Use the built-in verse block for Numbers 23:19, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 2 follows the servant to a well, where he prays for a very specific sign.",
          },
        },
        // ---------------- DAY 2 (TUE) ----------------
        {
          label: "Tuesday",
          theme: "A prayer with a sign",
          blocks: [
            {
              type: "story",
              text: "The servant travelled a long way with his ten loaded camels until he reached the city where Abraham's brother lived. As evening came, he stopped outside the city at a well — the place where the young women of the town would come to draw water.",
            },
            {
              type: "question",
              text: "If you had to pick out one specific person, out of everyone who might walk by, using only God's help — would you feel confident asking God for something that exact, or would it feel too risky?",
              hint: "Accept honest responses. Use this to set up how bold the servant's prayer is about to be — he's not just asking for guidance in general, but for one very specific, testable sign.",
            },
            {
              type: "story",
              text: "While the camels rested, the servant prayed a very particular prayer. He asked God to keep his promise to Abraham, and then set up an exact test: he would ask a young woman for a drink of water, and if she offered water for his camels too — without being asked — he would know she was the one God had chosen for Isaac.",
            },
            {
              type: "question",
              text: "Offering a stranger a drink would be normal politeness. But offering to water ten thirsty camels too — that's a lot of extra work no one would expect. Why do you think the servant chose a sign that was so specific and so costly to fulfil?",
              hint: "Guide toward: a small, ordinary kindness could happen by chance, but going out of her way to water ten camels as well would be a clear, unmistakable answer — proof that God himself was at work, not just good luck.",
            },
            {
              type: "story",
              text: "Before the servant had even finished praying, a young woman named Rebekah came to the well to fill her jar. The servant didn't yet know it, but she was the granddaughter of Abraham's own brother — exactly the family Abraham had sent him to find.",
            },
            {
              type: "story",
              text: "The servant asked her for a drink. Rebekah gave him one straight away — and then, without being asked, she offered to draw water for all his camels too, until they had all finished drinking.",
            },
            {
              type: "question",
              text: "Rebekah had no idea she was answering anyone's prayer, or being tested for anything at all — she was simply being kind to a tired traveller. What does it show us about God's promises that he can work through something as ordinary as one person's everyday kindness?",
              hint: "Guide toward: God doesn't need dramatic miracles to keep his promises — he can work through completely ordinary moments and ordinary kindness, even when the person involved has no idea they're part of God's plan.",
            },
            {
              type: "verse",
              reference: "Numbers 23:19 (CEV)",
              text: "\u201cGod is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.\u201d",
            },
            {
              type: "activity",
              text: "Let's say this week's memory verse together again.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 24:10–21",
            topic: "A prayer with a sign",
            bigIdea: "Over sixty years after God first promised Abraham a family as countless as the stars, Isaac still had no wife — and without a wife, the promise couldn't grow any further. God used the careful obedience of an unnamed servant, and the willing trust of a young woman named Rebekah, to move his promise forward another step. Christians believe God can be trusted to work through ordinary people, and even the small details of an ordinary day, to keep his promises.",
            learningIntentions: [
              "We are learning that the servant prayed for a specific, testable sign at the well to know which young woman God had chosen for Isaac.",
              "We are learning that Rebekah unknowingly matched the sign exactly, offering to water all ten camels without being asked.",
              "I can explain what this story shows us about God working through ordinary moments and ordinary kindness.",
            ],
            assessment: "Listen for whether students can describe the servant's specific test, and can explain why Rebekah's actions mattering so precisely shows God at work.",
            resources: [
              "CEV Bible (optional, for reading Genesis 24:12–14 aloud)",
            ],
            script: [
              {
                heading: "Arriving at the well",
                minutes: "1–2 min",
                teacherTalk: "Set the scene: the servant arrives at the well in the evening, the place where the town's young women came to draw water.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "A risky kind of prayer",
                minutes: "2 min",
                teacherTalk: "Ask the warm-up question about how confident students would feel asking God for something that specific.",
                activityNote: null,
                keyQuestion: "If you had to pick out one specific person, out of everyone who might walk by, using only God's help — would you feel confident asking God for something that exact, or would it feel too risky?",
                teacherGuidance: "Accept honest responses. Use this to set up how bold the servant's prayer is about to be — he's not just asking for guidance in general, but for one very specific, testable sign.",
              },
              {
                heading: "The servant's test",
                minutes: "2–3 min",
                teacherTalk: "Explain the servant's specific prayer and sign — water for him and for all his camels.",
                activityNote: null,
                keyQuestion: "Offering a stranger a drink would be normal politeness. But offering to water ten thirsty camels too — that's a lot of extra work no one would expect. Why do you think the servant chose a sign that was so specific and so costly to fulfil?",
                teacherGuidance: "Guide toward: a small, ordinary kindness could happen by chance, but going out of her way to water ten camels as well would be a clear, unmistakable answer — proof that God himself was at work, not just good luck.",
              },
              {
                heading: "Rebekah arrives",
                minutes: "2–3 min",
                teacherTalk: "Tell how Rebekah appeared before the servant had even finished praying, and matched the sign exactly without knowing it.",
                activityNote: null,
                keyQuestion: "Rebekah had no idea she was answering anyone's prayer, or being tested for anything at all — she was simply being kind to a tired traveller. What does it show us about God's promises that he can work through something as ordinary as one person's everyday kindness?",
                teacherGuidance: "Guide toward: God doesn't need dramatic miracles to keep his promises — he can work through completely ordinary moments and ordinary kindness, even when the person involved has no idea they're part of God's plan.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Say this week's memory verse together again.",
                activityNote: "Use the built-in verse block for Numbers 23:19, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 3 follows the servant to Rebekah's family, and Rebekah's own choice about whether to go.",
          },
        },
        // ---------------- DAY 3 (WED) ----------------
        {
          label: "Wednesday",
          theme: "Rebekah says yes",
          blocks: [
            {
              type: "story",
              text: "The servant was overjoyed. He gave Rebekah gold jewellery as gifts, and asked to meet her family right away — he had something very important to tell them. Rebekah ran home, and the servant followed with his camels.",
            },
            {
              type: "story",
              text: "The servant explained everything to Rebekah's father and her brother Laban: who he was, how rich and blessed his master Abraham was, and how he had prayed at the well and God had answered by sending Rebekah, exactly as he'd asked.",
            },
            {
              type: "question",
              text: "This was a huge, sudden request — a stranger asking a family to send their daughter far away to marry a man she'd never met. Rebekah's father and Laban didn't want her to leave home for a distant land. What do you think helped them decide what to do?",
              hint: "Accept responses. Reveal: they chose to trust that this was God's doing, because of how exactly the servant's prayer had been answered — so, despite not wanting Rebekah to leave, they agreed to let her choose for herself.",
            },
            {
              type: "story",
              text: "So they asked Rebekah herself what she wanted to do. Rebekah didn't hesitate. She said yes — she would go and be Isaac's wife.",
            },
            {
              type: "question",
              text: "The Bible makes a point of showing that Rebekah's family asked HER, and that she made the choice herself, rather than her father or brother deciding for her. Why do you think that detail matters?",
              hint: "Guide toward: Rebekah's trust in God had to be her own, not just something decided for her — real faith means choosing to trust God yourself, even when it's a huge, costly decision, like leaving your whole family and home behind.",
            },
            {
              type: "story",
              text: "Rebekah's family blessed her and prayed she would have many children. They were sad to see her go, and Laban even asked the servant to let her stay just a little longer — but when they asked Rebekah one more time if she was ready to leave straight away, she said yes again. So Rebekah packed up and set off across the desert toward a new home, and a husband she had never met.",
            },
            {
              type: "verse",
              reference: "Numbers 23:19 (CEV)",
              text: "\u201cGod is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.\u201d",
            },
            {
              type: "activity",
              text: "Let's say this week's memory verse together — try it once without looking!",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 24:22–58",
            topic: "Rebekah says yes",
            bigIdea: "Over sixty years after God first promised Abraham a family as countless as the stars, Isaac still had no wife — and without a wife, the promise couldn't grow any further. God used the careful obedience of an unnamed servant, and the willing trust of a young woman named Rebekah, to move his promise forward another step. Christians believe God can be trusted to work through ordinary people, and even the small details of an ordinary day, to keep his promises.",
            learningIntentions: [
              "We are learning that the servant explained his prayer and how God had answered it to Rebekah's father and brother, Laban.",
              "We are learning that Rebekah's family chose to trust God, even though they didn't want her to leave home for a distant land.",
              "I can explain why the Bible shows Rebekah being asked, and choosing for herself, to go and be Isaac's wife.",
            ],
            assessment: "Listen for whether students can retell why Rebekah's family agreed to let her go, and can explain why Rebekah being asked personally matters.",
            resources: [],
            script: [
              {
                heading: "Meeting the family",
                minutes: "2 min",
                teacherTalk: "Tell how the servant gave gifts and explained his mission to Rebekah's father and Laban.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "A hard decision",
                minutes: "2–3 min",
                teacherTalk: "Ask what helped the family decide to trust God with such a big, sudden request.",
                activityNote: null,
                keyQuestion: "This was a huge, sudden request — a stranger asking a family to send their daughter far away to marry a man she'd never met. Rebekah's father and Laban didn't want her to leave home for a distant land. What do you think helped them decide what to do?",
                teacherGuidance: "Accept responses. Reveal: they chose to trust that this was God's doing, because of how exactly the servant's prayer had been answered — so, despite not wanting Rebekah to leave, they agreed to let her choose for herself.",
              },
              {
                heading: "Rebekah's own choice",
                minutes: "2–3 min",
                teacherTalk: "Tell how Rebekah was asked directly, and said yes, then discuss why this detail matters.",
                activityNote: null,
                keyQuestion: "The Bible makes a point of showing that Rebekah's family asked HER, and that she made the choice herself, rather than her father or brother deciding for her. Why do you think that detail matters?",
                teacherGuidance: "Guide toward: Rebekah's trust in God had to be her own, not just something decided for her — real faith means choosing to trust God yourself, even when it's a huge, costly decision, like leaving your whole family and home behind.",
              },
              {
                heading: "Leaving home",
                minutes: "2 min",
                teacherTalk: "Tell how the family blessed Rebekah, and how she confirmed she was ready to leave straight away.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Try saying this week's memory verse together once without looking.",
                activityNote: "Use the built-in verse block for Numbers 23:19, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 4 acts out the whole story as a class script, then looks at how everyone in it trusted God.",
          },
        },
        // ---------------- DAY 4 (THU) ----------------
        {
          label: "Thursday",
          theme: "Acting it out: God's family grows",
          blocks: [
            {
              type: "story",
              text: "This week we've followed the whole story of how Isaac got a wife: Abraham sending his servant, the servant's specific prayer at the well, Rebekah's unknowing answer to it, and her family's — and her own — choice to trust God. Today, let's act the whole thing out together.",
            },
            {
              type: "roleplay",
              title: "Lesson 14 script: God's family grows",
              characters: ["Narrator", "Abraham", "Servant", "Rebekah", "Laban"],
              lines: [
                { character: "Narrator", text: "Isaac grew up and became a man. His mother Sarah had died and his father Abraham was very old. God had made Abraham a rich and successful man. Abraham called his servant to him one day for a very important chat." },
                { character: "Abraham", text: "You need to go and find a wife for my son Isaac. Go to the distant land I came from and find a wife for Isaac from there. Do not choose a wife from the land near here, where we live." },
                { character: "Narrator", text: "The servant wasn't too sure about this. He said:" },
                { character: "Servant", text: "What if the woman doesn't want to come with me and be Isaac's wife? Should I come back and get Isaac?" },
                { character: "Abraham", text: "No, Isaac must stay here. If she isn't willing to come, you may come back alone." },
                { character: "Narrator", text: "So the servant loaded ten of Abraham's camels with valuable gifts for Isaac's new wife. He then set off for a city in northern Syria where Abraham's brother lived. When the servant arrived, he stopped at a well, and while the camels rested, he prayed." },
                { character: "Servant", text: "Dear God, please keep your promise to Abraham and let me find a wife for Isaac today. I will ask a lady for a drink of water for me and the camels. If she says yes and gets me one, I will know she is the one you have chosen to marry Isaac. Amen." },
                { character: "Narrator", text: "While the servant was still praying, a beautiful young woman came up to get some water. She was the granddaughter of Abraham's brother — though the servant didn't know it." },
                { character: "Servant", text: "Excuse me. May I please have a drink of water?" },
                { character: "Rebekah", text: "I will be glad to give you one. And some for your camels too." },
                { character: "Narrator", text: "The servant was very excited at this. He gave the young woman some gold bracelets and a ring, and asked if he could meet her family right away, as he had something very important to tell them all. Rebekah and the servant ran straight home to her family." },
                { character: "Servant", text: "I need to tell you why I have come here. I am Abraham's servant. The Lord has been good to my master, Abraham, and made him very rich. He has many sheep, camels, goats, cattle and donkeys, gold, silver, and servants. But he has only one son, Isaac, and Isaac doesn't have a wife. I promised I would come and find a wife from Abraham's family for Isaac, so that Abraham's land will stay in his family. Today at the well I prayed that God would show me the young woman to be Isaac's wife. Rebekah came, and now I am here." },
                { character: "Narrator", text: "Rebekah's dad and her brother, Laban, both wondered what she was going to say. This kind of thing didn't happen every day. They didn't want Rebekah to go away to a distant land, but they chose to trust God." },
                { character: "Laban", text: "Dad and I believe this is what God wants. Let's ask Rebekah what she wants to do." },
                { character: "Narrator", text: "They asked Rebekah if she would go with the servant. And she replied:" },
                { character: "Rebekah", text: "Yes, I will be Isaac's wife." },
                { character: "Narrator", text: "Rebekah's family gave her their blessing, and said they would pray that she would have many children and grandchildren. They were very sad to see her leave, but they knew that, somehow, this was all part of God's plan. The servant got ready to leave, but Laban, who loved his sister very much, tried to delay him." },
                { character: "Laban", text: "Please can you wait a week or ten days, so we can be with Rebekah longer?" },
                { character: "Servant", text: "No, don't make me wait any longer. I must get back to my master Abraham." },
                { character: "Narrator", text: "Laban thought he'd try again." },
                { character: "Laban", text: "Let's ask Rebekah what she would like to do! Rebekah, are you happy to leave now to go and be Isaac's wife?" },
                { character: "Rebekah", text: "Yes. I am ready." },
                { character: "Narrator", text: "The servant and Rebekah loaded up the camels and then set off across the desert. The end." },
              ],
            },
            {
              type: "question",
              text: "Think back over everyone in this story — Abraham, the servant, Rebekah, and even Rebekah's family. How did each of them show they trusted God, even when it was hard or uncertain?",
              hint: "Guide through each: Abraham trusted God enough to send his servant on the journey instead of going himself; the servant trusted God enough to pray for a specific sign and act on it; Rebekah trusted God enough to leave her whole family and home; her family trusted God enough to let her go, and to let her make that choice herself.",
            },
            {
              type: "question",
              text: "Was God keeping his promise to grow Abraham's family into a great nation, through everything that happened this week?",
              hint: "Accept responses. Guide toward: yes — not the whole promise all at once, but another real step forward. Isaac and Rebekah's marriage was the next generation of the family God had promised, moving one step closer to becoming as many as the stars.",
            },
            {
              type: "story",
              text: "Abraham's family was growing! Through an old man's trust, a servant's careful prayer, and a young woman's brave 'yes,' God kept moving his promise forward — one ordinary, everyday step at a time.",
            },
            {
              type: "verse",
              reference: "Numbers 23:19 (CEV)",
              text: "\u201cGod is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.\u201d",
            },
            {
              type: "activity",
              text: "Let's finish by saying this week's memory verse together, all from memory.",
            },
            {
              type: "prayer",
              text: "Dear Lord, thank you that the servant and Rebekah trusted you and were obedient. Thank you for the way the Bible shows how you keep your promises, and that people today can trust you and your promises too. Amen.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 24 (recap)",
            topic: "Acting it out: God's family grows",
            bigIdea: "Over sixty years after God first promised Abraham a family as countless as the stars, Isaac still had no wife — and without a wife, the promise couldn't grow any further. God used the careful obedience of an unnamed servant, and the willing trust of a young woman named Rebekah, to move his promise forward another step. Christians believe God can be trusted to work through ordinary people, and even the small details of an ordinary day, to keep his promises.",
            learningIntentions: [
              "We are recapping the whole story of Genesis 24 by acting it out as a class.",
              "We are learning to identify how each character in the story — Abraham, the servant, Rebekah, and her family — showed trust in God.",
              "I can explain how this story shows God moving his promise to Abraham forward, one step at a time.",
            ],
            assessment: "Listen for whether students can name how each character trusted God, and can explain that this story represents real (if partial) progress toward God's promise, not its full completion.",
            resources: [
              "Four (or five) student volunteers to read the Abraham, Servant, Rebekah, and Laban parts on screen, with the teacher or another volunteer reading Narrator",
            ],
            script: [
              {
                heading: "Recap the week",
                minutes: "1 min",
                teacherTalk: "Briefly recap the week's story before acting it out together.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Acting out Genesis 24",
                minutes: "6–8 min",
                teacherTalk: "Choose volunteers for Abraham, the Servant, Rebekah, and Laban, and run the built-in script as a fullscreen presenter for the whole class to watch and follow along.",
                activityNote: "Use the built-in roleplay block — tap 'Start the script on screen' to open the fullscreen presenter for your volunteers.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Who trusted God?",
                minutes: "2–3 min",
                teacherTalk: "Ask students to identify how each character in the story showed trust in God.",
                activityNote: null,
                keyQuestion: "Think back over everyone in this story — Abraham, the servant, Rebekah, and even Rebekah's family. How did each of them show they trusted God, even when it was hard or uncertain?",
                teacherGuidance: "Guide through each: Abraham trusted God enough to send his servant on the journey instead of going himself; the servant trusted God enough to pray for a specific sign and act on it; Rebekah trusted God enough to leave her whole family and home; her family trusted God enough to let her go, and to let her make that choice herself.",
              },
              {
                heading: "God's promise, one step further",
                minutes: "2 min",
                teacherTalk: "Ask whether God was keeping his promise this week, and tie it back to the ongoing growth of Abraham's family.",
                activityNote: null,
                keyQuestion: "Was God keeping his promise to grow Abraham's family into a great nation, through everything that happened this week?",
                teacherGuidance: "Accept responses. Guide toward: yes — not the whole promise all at once, but another real step forward. Isaac and Rebekah's marriage was the next generation of the family God had promised, moving one step closer to becoming as many as the stars.",
              },
              {
                heading: "Memory verse and closing prayer",
                minutes: "2 min",
                teacherTalk: "Finish the week's memory verse fully from memory, then close together with the prayer in the app.",
                activityNote: "Use the say-it-from-memory activity block, then the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Lesson 15 continues the story of Isaac and Rebekah's family.",
          },
        },
      ],
    },
    "Week 5": {
      lessonTitle: "Chalk and cheese",
      passage: "Genesis 25:19–34",
      bigIdea: "Twenty years after Isaac married Rebekah, God again answered prayer for a childless couple — but this time with unexpected twins who were fighting each other even before birth. God told Rebekah that the older twin would serve the younger, turning everyone's expectations upside down. As Jacob and Esau grew up to be complete opposites, favouritism split the family in two, and Esau carelessly traded away his birthright — and the promises attached to it — for a single bowl of stew. Christians believe God keeps his promises to his people, but not always through the people we'd expect, or in the way we'd expect.",
      source: "Connect B1 Upper Primary — Lesson 15",
      days: [
        // ---------------- DAY 1 (MON) ----------------
        {
          label: "Monday",
          theme: "Fighting before they were even born",
          blocks: [
            {
              type: "question",
              text: "Do you think it's possible for two people to become rivals before they've even met properly, or said a single word to each other? What would that even look like?",
              hint: "Accept guesses. Use this to set up today's very unusual detail: two brothers who were already fighting each other before either of them was even born.",
            },
            {
              type: "story",
              text: "Isaac was forty years old when he married Rebekah. Just like his father Abraham and mother Sarah before him, Isaac and Rebekah were unable to have children — for almost twenty years. So Isaac prayed to the LORD for his wife, and the LORD answered his prayer.",
            },
            {
              type: "question",
              text: "This is now the second time in this family's story that God's promise has depended on a couple who couldn't have children for years and years. Why do you think God kept letting this happen?",
              hint: "Guide toward: it makes it completely clear that any child born is a gift from God, answered through prayer — not something Isaac and Rebekah achieved by themselves. It shows the promise depends on God's power, not human effort.",
            },
            {
              type: "story",
              text: "Rebekah became pregnant — but this was no ordinary pregnancy. She could feel the babies inside her, fighting each other. It was so difficult and painful that Rebekah asked the LORD why this was happening to her.",
            },
            {
              type: "image",
              key: "wk5-01-rebekah-pregnant",
              caption: "Rebekah, expecting twins who were already fighting each other inside her.",
            },
            {
              type: "question",
              text: "What do you think it might have felt like for Rebekah to feel her own unborn babies fighting inside her, even before she'd met them?",
              hint: "Accept honest responses — confusing, worrying, painful. This is what led her to go and ask God directly what was happening.",
            },
            {
              type: "story",
              text: "The LORD told Rebekah: her two sons would become two separate nations. One of these nations would be stronger than the other — and the older twin would serve the younger.",
            },
            {
              type: "question",
              text: "In those days, everyone expected the oldest son to be the most important one, the one in charge. What does it tell us about God, that here he flips that expectation and chooses to bless the younger twin instead?",
              hint: "Guide toward: God doesn't work the way people expect him to. He isn't bound by human traditions about who deserves to be first — he's free to choose whoever he wants for his plans.",
            },
            {
              type: "verse",
              reference: "Numbers 23:19 (CEV)",
              text: "\u201cGod is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.\u201d",
            },
            {
              type: "activity",
              text: "Let's say this week's memory verse together.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 25:19–23",
            topic: "Fighting before they were even born",
            bigIdea: "Twenty years after Isaac married Rebekah, God again answered prayer for a childless couple — but this time with unexpected twins who were fighting each other even before birth. God told Rebekah that the older twin would serve the younger, turning everyone's expectations upside down. As Jacob and Esau grew up to be complete opposites, favouritism split the family in two, and Esau carelessly traded away his birthright — and the promises attached to it — for a single bowl of stew. Christians believe God keeps his promises to his people, but not always through the people we'd expect, or in the way we'd expect.",
            learningIntentions: [
              "We are learning that Isaac and Rebekah, like Abraham and Sarah before them, were unable to have children for many years until God answered prayer.",
              "We are learning that Rebekah's pregnancy was unusually difficult, and that God told her the older of her twin sons would serve the younger.",
              "I can explain why God choosing the younger twin was the opposite of what people in that culture would have expected.",
            ],
            assessment: "Listen for whether students can explain why the prophecy about the older serving the younger was so unexpected for its time.",
            resources: [
              "CEV Bible (optional, for reading Genesis 25:19–23 aloud)",
            ],
            script: [
              {
                heading: "Rivals before they'd met",
                minutes: "2 min",
                teacherTalk: "Open with the warm-up question about two people becoming rivals before they've even met.",
                activityNote: null,
                keyQuestion: "Do you think it's possible for two people to become rivals before they've even met properly, or said a single word to each other? What would that even look like?",
                teacherGuidance: "Accept guesses. Use this to set up today's very unusual detail: two brothers who were already fighting each other before either of them was even born.",
              },
              {
                heading: "Answered prayer, again",
                minutes: "2 min",
                teacherTalk: "Recap Isaac and Rebekah's marriage and their twenty years without children, until God answered prayer.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Why God keeps doing this",
                minutes: "2–3 min",
                teacherTalk: "Ask why God might have let another couple in this family struggle to have children before answering prayer.",
                activityNote: null,
                keyQuestion: "This is now the second time in this family's story that God's promise has depended on a couple who couldn't have children for years and years. Why do you think God kept letting this happen?",
                teacherGuidance: "Guide toward: it makes it completely clear that any child born is a gift from God, answered through prayer — not something Isaac and Rebekah achieved by themselves. It shows the promise depends on God's power, not human effort.",
              },
              {
                heading: "A painful, unusual pregnancy",
                minutes: "2–3 min",
                teacherTalk: "Describe Rebekah's difficult pregnancy and show the image of her in distress, then ask the follow-up question.",
                activityNote: "Use the built-in image block showing Rebekah expecting the fighting twins.",
                keyQuestion: "What do you think it might have felt like for Rebekah to feel her own unborn babies fighting inside her, even before she'd met them?",
                teacherGuidance: "Accept honest responses — confusing, worrying, painful. This is what led her to go and ask God directly what was happening.",
              },
              {
                heading: "The LORD's answer",
                minutes: "2–3 min",
                teacherTalk: "Reveal God's prophecy to Rebekah, then discuss how it reversed cultural expectations.",
                activityNote: null,
                keyQuestion: "In those days, everyone expected the oldest son to be the most important one, the one in charge. What does it tell us about God, that here he flips that expectation and chooses to bless the younger twin instead?",
                teacherGuidance: "Guide toward: God doesn't work the way people expect him to. He isn't bound by human traditions about who deserves to be first — he's free to choose whoever he wants for his plans.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Say this week's memory verse together.",
                activityNote: "Use the built-in verse block for Numbers 23:19, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 2 follows the twins' births, and how completely different Jacob and Esau turned out to be.",
          },
        },
        // ---------------- DAY 2 (TUE) ----------------
        {
          label: "Tuesday",
          theme: "Chalk and cheese",
          blocks: [
            {
              type: "story",
              text: "When the twins were born, the first baby came out covered in red hair — so they named him Esau. The second baby came out gripping his brother's heel, as though trying to pull him back or push past him — so they named him Jacob, which means 'grabs the heel.' Isaac was sixty years old when they were born.",
            },
            {
              type: "question",
              text: "Even the way Jacob was born — grabbing at his brother's heel — hints at something about him. What do you think that detail might suggest about how Jacob will act later in this story?",
              hint: "Accept guesses, then reveal: Jacob's name became linked to grabbing and getting ahead by any means — which foreshadows exactly how he behaves later, trying to grab hold of things that aren't his yet.",
            },
            {
              type: "story",
              text: "As the boys grew up, they turned out to be nothing alike. Esau became a skilful hunter who loved being out in the open country. Jacob was quieter, preferring to stay closer to home. Esau and Jacob were like chalk and cheese.",
            },
            {
              type: "question",
              text: "Does anyone know what the saying 'chalk and cheese' means? Can you think of two people you know — maybe even in your own family — who are chalk and cheese?",
              hint: "It means two things, or two people, that are completely different from each other, even though you might expect them to be similar.",
            },
            {
              type: "story",
              text: "These differences didn't stay just between the brothers — they split the rest of the family too. Esau would bring home the meat of the animals he'd hunted, and Isaac loved him for it. But Jacob was his mother Rebekah's favourite.",
            },
            {
              type: "question",
              text: "How do you think it might have felt to grow up in a family where each parent openly favoured a different child?",
              hint: "Accept responses — hurtful, confusing, likely to cause jealousy and rivalry between the brothers. This favouritism is part of what fuels the conflict still to come in this story.",
            },
            {
              type: "verse",
              reference: "Numbers 23:19 (CEV)",
              text: "\u201cGod is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.\u201d",
            },
            {
              type: "activity",
              text: "Let's say this week's memory verse together again.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 25:24–28",
            topic: "Chalk and cheese",
            bigIdea: "Twenty years after Isaac married Rebekah, God again answered prayer for a childless couple — but this time with unexpected twins who were fighting each other even before birth. God told Rebekah that the older twin would serve the younger, turning everyone's expectations upside down. As Jacob and Esau grew up to be complete opposites, favouritism split the family in two, and Esau carelessly traded away his birthright — and the promises attached to it — for a single bowl of stew. Christians believe God keeps his promises to his people, but not always through the people we'd expect, or in the way we'd expect.",
            learningIntentions: [
              "We are learning how Esau and Jacob got their names, and how completely different they turned out to be as they grew up.",
              "We are learning that Isaac favoured Esau while Rebekah favoured Jacob, splitting the family's loyalties.",
              "I can explain what the saying 'chalk and cheese' means and how it applies to these two brothers.",
            ],
            assessment: "Listen for whether students can describe at least two ways Jacob and Esau were different from each other, and explain how parental favouritism affected the family.",
            resources: [
              "CEV Bible (optional, for reading Genesis 25:24–28 aloud)",
            ],
            script: [
              {
                heading: "The twins are born",
                minutes: "2 min",
                teacherTalk: "Tell how Esau and Jacob got their names at birth.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "A hint in Jacob's name",
                minutes: "2 min",
                teacherTalk: "Ask what Jacob grabbing his brother's heel might foreshadow about him.",
                activityNote: null,
                keyQuestion: "Even the way Jacob was born — grabbing at his brother's heel — hints at something about him. What do you think that detail might suggest about how Jacob will act later in this story?",
                teacherGuidance: "Accept guesses, then reveal: Jacob's name became linked to grabbing and getting ahead by any means — which foreshadows exactly how he behaves later, trying to grab hold of things that aren't his yet.",
              },
              {
                heading: "Chalk and cheese",
                minutes: "2–3 min",
                teacherTalk: "Describe how differently the boys grew up, then ask about the saying 'chalk and cheese.'",
                activityNote: null,
                keyQuestion: "Does anyone know what the saying 'chalk and cheese' means? Can you think of two people you know — maybe even in your own family — who are chalk and cheese?",
                teacherGuidance: "It means two things, or two people, that are completely different from each other, even though you might expect them to be similar.",
              },
              {
                heading: "A divided family",
                minutes: "2–3 min",
                teacherTalk: "Explain how Isaac favoured Esau and Rebekah favoured Jacob, then discuss what that might have felt like.",
                activityNote: null,
                keyQuestion: "How do you think it might have felt to grow up in a family where each parent openly favoured a different child?",
                teacherGuidance: "Accept responses — hurtful, confusing, likely to cause jealousy and rivalry between the brothers. This favouritism is part of what fuels the conflict still to come in this story.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Say this week's memory verse together again.",
                activityNote: "Use the built-in verse block for Numbers 23:19, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 3 sees the family's rivalry come to a head over a bowl of stew.",
          },
        },
        // ---------------- DAY 3 (WED) ----------------
        {
          label: "Wednesday",
          theme: "A bowl of stew",
          blocks: [
            {
              type: "question",
              text: "As the eldest son, Esau's birthright entitled him to a double share of the family inheritance, and to become the family's leader when Isaac died. But for this particular family, it meant something even bigger. What do you think the birthright represented for Isaac's family, beyond just money or land?",
              hint: "Guide toward: for this family, the birthright carried God's promise to Abraham forward — the land, the great nation, the blessing for the whole world. It wasn't just an inheritance, it was part of God's plan.",
            },
            {
              type: "story",
              text: "One day, Jacob was cooking a pot of stew when Esau came home exhausted and starving from hunting. 'Quick, give me some of that red stew,' Esau said, 'I'm about to die of hunger!'",
            },
            {
              type: "image",
              key: "wk5-02-jacob-esau-stew",
              caption: "Jacob offers Esau a bowl of stew — in exchange for his birthright.",
            },
            {
              type: "story",
              text: "Jacob saw his chance. 'First, sell me your rights as the firstborn son,' he said. Esau, thinking only of his hunger, replied, 'I'm about to die — what good will my birthright do me?' So Esau promised Jacob his birthright, right there on the spot, in exchange for some bread and stew.",
            },
            {
              type: "question",
              text: "Esau said, 'What good will those rights do me if I'm about to die?' What does this tell us about how much Esau actually valued the promises God had made to his family?",
              hint: "Guide toward: Esau cared more about the comfort of the moment than about something with lasting, far greater value — he despised his birthright rather than treasuring it.",
            },
            {
              type: "question",
              text: "And what does Jacob's willingness to take advantage of his own brother's hunger tell us about him?",
              hint: "Guide toward: Jacob was cunning and opportunistic, willing to exploit his brother's weak moment — even though, unlike Esau, he did seem to understand how valuable the birthright really was.",
            },
            {
              type: "story",
              text: "And that's exactly what Esau did — he ate, drank, got up, and left, showing just how little he thought of his rights as the firstborn.",
            },
            {
              type: "verse",
              reference: "Numbers 23:19 (CEV)",
              text: "\u201cGod is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.\u201d",
            },
            {
              type: "activity",
              text: "Let's say this week's memory verse together — try it once without looking!",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 25:29–34",
            topic: "A bowl of stew",
            bigIdea: "Twenty years after Isaac married Rebekah, God again answered prayer for a childless couple — but this time with unexpected twins who were fighting each other even before birth. God told Rebekah that the older twin would serve the younger, turning everyone's expectations upside down. As Jacob and Esau grew up to be complete opposites, favouritism split the family in two, and Esau carelessly traded away his birthright — and the promises attached to it — for a single bowl of stew. Christians believe God keeps his promises to his people, but not always through the people we'd expect, or in the way we'd expect.",
            learningIntentions: [
              "We are learning what a birthright meant in this culture, and why it mattered especially for Isaac's family.",
              "We are learning that Esau sold his birthright to Jacob for a single bowl of stew.",
              "I can explain what this trade shows about how Esau and Jacob each valued God's promises.",
            ],
            assessment: "Listen for whether students can explain why the birthright mattered so much for this family, and can describe what Esau's choice reveals about his priorities.",
            resources: [
              "CEV Bible (optional, for reading Genesis 25:29–34 aloud)",
            ],
            script: [
              {
                heading: "What a birthright meant",
                minutes: "2–3 min",
                teacherTalk: "Ask what the birthright represented for this particular family, beyond ordinary inheritance.",
                activityNote: null,
                keyQuestion: "As the eldest son, Esau's birthright entitled him to a double share of the family inheritance, and to become the family's leader when Isaac died. But for this particular family, it meant something even bigger. What do you think the birthright represented for Isaac's family, beyond just money or land?",
                teacherGuidance: "Guide toward: for this family, the birthright carried God's promise to Abraham forward — the land, the great nation, the blessing for the whole world. It wasn't just an inheritance, it was part of God's plan.",
              },
              {
                heading: "Esau comes home starving",
                minutes: "2 min",
                teacherTalk: "Tell how Esau came home exhausted and begged Jacob for stew.",
                activityNote: "Show the image of Jacob offering Esau the stew.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "The trade",
                minutes: "2 min",
                teacherTalk: "Describe how Jacob demanded the birthright in exchange, and Esau agreed.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "What Esau's choice shows",
                minutes: "2–3 min",
                teacherTalk: "Ask what Esau's willingness to trade away his birthright reveals about his priorities.",
                activityNote: null,
                keyQuestion: "Esau said, 'What good will those rights do me if I'm about to die?' What does this tell us about how much Esau actually valued the promises God had made to his family?",
                teacherGuidance: "Guide toward: Esau cared more about the comfort of the moment than about something with lasting, far greater value — he despised his birthright rather than treasuring it.",
              },
              {
                heading: "What Jacob's choice shows",
                minutes: "2 min",
                teacherTalk: "Ask what Jacob's willingness to exploit his brother reveals about him.",
                activityNote: null,
                keyQuestion: "And what does Jacob's willingness to take advantage of his own brother's hunger tell us about him?",
                teacherGuidance: "Guide toward: Jacob was cunning and opportunistic, willing to exploit his brother's weak moment — even though, unlike Esau, he did seem to understand how valuable the birthright really was.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Try saying this week's memory verse together once without looking.",
                activityNote: "Use the built-in verse block for Numbers 23:19, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 4 reads back through the whole story together and reflects on what it shows us about God.",
          },
        },
        // ---------------- DAY 4 (THU) ----------------
        {
          label: "Thursday",
          theme: "Reading it together: Chalk and cheese",
          blocks: [
            {
              type: "story",
              text: "This week we've followed the whole story of Jacob and Esau: their difficult, fighting-filled birth, how completely different they turned out to be, and how Esau traded away his birthright for a single bowl of stew. Today, let's read the whole passage together, straight from the Bible.",
            },
            {
              type: "dictation",
              title: "Lesson 15 dictation: Genesis 25:19–34",
              lines: [
                { text: "Isaac was the son of Abraham, and he was forty years old when he married Rebekah, the daughter of Bethuel. She was also the sister of Laban, the Aramean from northern Syria." },
                { text: "Almost twenty years later, Rebekah still had no children. So Isaac asked the LORD to let her have a child, and the LORD answered his prayer." },
                { text: "Before Rebekah gave birth, she knew she was going to have twins, because she could feel them inside her, fighting each other. She thought, 'Why is this happening to me?' Finally, she asked the LORD why her twins were fighting, and he told her:" },
                { text: "'Your two sons will become two separate nations. The younger of the two will be stronger, and the older son will be his servant.'" },
                { text: "When Rebekah gave birth, the first baby was covered with red hair, so he was named Esau. The second baby grabbed on to his brother's heel, so they named him Jacob. Isaac was sixty years old when they were born." },
                { text: "As Jacob and Esau grew older, Esau liked the outdoors and became a good hunter, while Jacob settled down and became a shepherd. Esau would take the meat of wild animals to his father Isaac, and so Isaac loved him more, but Jacob was his mother's favourite son." },
                { text: "One day, Jacob was cooking some stew, when Esau came home hungry and said, 'I'm starving to death! Give me some of that red stew right now!' That's how Esau got the name 'Edom.'" },
                { text: "Jacob replied, 'Sell me your rights as the firstborn son.' 'I'm about to die,' Esau answered. 'What good will those rights do me?'" },
                { text: "But Jacob said, 'Promise me your birthright, here and now!' And that's what Esau did. Jacob then gave Esau some bread and some of the bean stew, and when Esau had finished eating and drinking, he just got up and left, showing how little he thought of his rights as the firstborn." },
              ],
            },
            {
              type: "question",
              text: "Out of the two brothers, who ended up walking away with the promises God had made to this family — even though he wasn't the one born first?",
              hint: "Jacob did — through Esau's own careless choice to sell his birthright away, not through anything unfair Jacob did to take it (yet — there's more to Jacob's story still to come).",
            },
            {
              type: "question",
              text: "Thinking back over this whole week — was God keeping his promise to Abraham and Isaac in the way we might have expected, or in a surprising way?",
              hint: "Guide toward: a surprising way. Nobody would have expected the younger twin to be chosen over the older, or for the promise to be won through a bowl of stew rather than a formal blessing. God keeps his promises but not always in the way we expect him to.",
            },
            {
              type: "story",
              text: "Jacob and Esau were like chalk and cheese — but they had one thing in common: neither of them turned out to be a particularly admirable man. Yet God's promise didn't depend on either of them being good enough to deserve it. It depended on God being powerful enough to keep it.",
            },
            {
              type: "verse",
              reference: "Numbers 23:19 (CEV)",
              text: "\u201cGod is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.\u201d",
            },
            {
              type: "activity",
              text: "Let's finish by saying this week's memory verse together, all from memory.",
            },
            {
              type: "prayer",
              text: "Dear God, thank you that you are in control. Thank you that you have always had a plan to save your people from sin through Jesus. Thank you that nothing can stand in the way of you keeping your promises. Thank you that you are a powerful promise keeper! Amen.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 25:19–34 (recap)",
            topic: "Reading it together: Chalk and cheese",
            bigIdea: "Twenty years after Isaac married Rebekah, God again answered prayer for a childless couple — but this time with unexpected twins who were fighting each other even before birth. God told Rebekah that the older twin would serve the younger, turning everyone's expectations upside down. As Jacob and Esau grew up to be complete opposites, favouritism split the family in two, and Esau carelessly traded away his birthright — and the promises attached to it — for a single bowl of stew. Christians believe God keeps his promises to his people, but not always through the people we'd expect, or in the way we'd expect.",
            learningIntentions: [
              "We are recapping the whole story of Genesis 25:19–34 by reading it together as a class.",
              "We are learning to identify how the story's ending was different from what people at the time would have expected.",
              "I can explain that God's promise didn't depend on Jacob or Esau being especially good people, but on God's own power to keep his word.",
            ],
            assessment: "Listen for whether students can retell how Jacob ended up with the birthright, and can explain why the outcome was unexpected.",
            resources: [
              "A confident reader (or the teacher) to lead the class through the built-in dictation reading",
            ],
            script: [
              {
                heading: "Recap the week",
                minutes: "1 min",
                teacherTalk: "Briefly recap the week's story before reading it together.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Reading Genesis 25:19–34 together",
                minutes: "5–6 min",
                teacherTalk: "Lead the class through the built-in dictation as a fullscreen read-together, or invite a confident reader to lead it.",
                activityNote: "Use the built-in dictation block — tap 'Start the script on screen' to open the fullscreen presenter for the whole class to read together.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Who won the promise?",
                minutes: "1–2 min",
                teacherTalk: "Ask which brother ended up with the birthright, and how.",
                activityNote: null,
                keyQuestion: "Out of the two brothers, who ended up walking away with the promises God had made to this family — even though he wasn't the one born first?",
                teacherGuidance: "Jacob did — through Esau's own careless choice to sell his birthright away, not through anything unfair Jacob did to take it (yet — there's more to Jacob's story still to come).",
              },
              {
                heading: "An unexpected way of keeping a promise",
                minutes: "2 min",
                teacherTalk: "Ask whether God kept his promise the way people would have expected, tying back to the lesson's big idea.",
                activityNote: null,
                keyQuestion: "Thinking back over this whole week — was God keeping his promise to Abraham and Isaac in the way we might have expected, or in a surprising way?",
                teacherGuidance: "Guide toward: a surprising way. Nobody would have expected the younger twin to be chosen over the older, or for the promise to be won through a bowl of stew rather than a formal blessing. God keeps his promises but not always in the way we expect him to.",
              },
              {
                heading: "Memory verse and closing prayer",
                minutes: "2 min",
                teacherTalk: "Finish the week's memory verse fully from memory, then close together with the prayer in the app.",
                activityNote: "Use the say-it-from-memory activity block, then the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Lesson 16 continues the story of Jacob and Esau.",
          },
        },
      ],
    },
    "Week 6": {
      lessonTitle: "Sibling rivalry",
      passage: "Genesis 27:1–40",
      bigIdea: "God had already chosen Jacob, before he was even born, to be the one through whom he would keep his promises. But everyone in Isaac's family went about it in the worst possible way. Isaac tried to hand Esau the blessing in secret, going around God's own words to Rebekah. Rebekah and Jacob answered secrecy with deceit, tricking a blind old man into giving away what he thought he was choosing freely. Nobody in this story played fair, and nobody comes out looking good. Yet the blessing still ended up exactly where God had already said it would. Christians believe this shows how powerful God is: he doesn't need anyone's good behaviour to keep his promises — not even the sinful scheming of the very family he's working through.",
      source: "Connect B1 Upper Primary — Lesson 16",
      days: [
        // ---------------- DAY 1 (MON) ----------------
        {
          label: "Monday",
          theme: "Two brothers, still fighting",
          blocks: [
            {
              type: "question",
              text: "Have you ever seen two animals — maybe dogs, or even kangaroos — squaring up and shoving each other, both trying to come out on top? What does that kind of fight usually look like?",
              hint: "Accept any answer describing pushing, posturing, or wrestling for dominance. Use this to introduce today's theme: Jacob and Esau are about to have their biggest fight yet — not with fists, but with tricks.",
            },
            {
              type: "story",
              text: "Last week we left Jacob and Esau as grown men. Esau had already given away his birthright for a bowl of stew, because he didn't think it was worth much. But Isaac and Rebekah still knew God had chosen Jacob — the younger twin — to be the one through whom God would keep his promises.",
            },
            {
              type: "question",
              text: "Since Isaac and Rebekah both already knew that God had chosen Jacob for the blessing, who would you expect Isaac to want to give the blessing to?",
              hint: "Guide toward: Jacob, since that's who God had already said would receive it. This sets up today's twist — Isaac does the opposite.",
            },
            {
              type: "story",
              text: "Isaac had grown old and had lost his sight. Not knowing when he might die, he decided it was time to give his final blessing — the blessing that came with all of God's promises attached to it. But instead of giving it to Jacob, Isaac called for his favourite son, Esau, and asked him to hunt some wild game and cook him a delicious meal, so that Isaac could bless him properly — in secret, without saying a word to Rebekah or Jacob.",
            },
            {
              type: "question",
              text: "How do you feel, hearing that Isaac tried to do this important blessing quietly, behind his family's back — even though he already knew God had chosen Jacob?",
              hint: "Accept honest responses. Isaac's secrecy here is his own way of going around what he knew God had said — not so different from how Rebekah and Jacob are about to go around Isaac.",
            },
            {
              type: "image",
              key: "wk5-02-jacob-esau-stew",
              caption: "A reminder from last week: Esau had already traded away his birthright for a single bowl of stew.",
            },
            {
              type: "story",
              text: "But Rebekah overheard everything Isaac had planned. And instead of trusting God to sort it out, she decided to take matters into her own hands — by helping her favourite son, Jacob, steal the blessing before Esau ever got the chance.",
            },
            {
              type: "verse",
              reference: "Numbers 23:19 (CEV)",
              text: "“God is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.”",
            },
            {
              type: "question",
              text: "Even though Isaac was about to try to give the blessing to the wrong son, do you think that could actually stop God's plan from happening?",
              hint: "Guide toward: no. As we'll see today and tomorrow, no amount of human scheming — not Isaac's secrecy, not Rebekah's trickery — can stop God from keeping the promise he'd already made.",
            },
            {
              type: "prayer",
              text: "Dear God, thank you that you are powerful enough to keep your promises no matter what people around us try to do. Help us to trust you instead of taking matters into our own hands. Amen.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 27:1–4 (context)",
            topic: "Isaac's secret plan",
            bigIdea: "Even though Isaac and Rebekah both already knew God had chosen Jacob to carry his promises, Isaac tried to give his final blessing to his favourite son Esau instead — and to do it secretly. This sets up a whole family who each try to handle God's promise their own way rather than trusting God with it.",
            learningIntentions: [
              "We are recapping Jacob and Esau's rivalry from last week.",
              "We are learning that Isaac tried to give the blessing to Esau in secret, even though God had already chosen Jacob.",
              "I can explain that no human secrecy or scheming can stop God from keeping his promises.",
            ],
            assessment: "Listen for whether students can explain who Isaac tried to bless, and why that was surprising given what God had already said about Jacob.",
            resources: [
              "Recap image: the Jacob-and-Esau stew scene from last week",
            ],
            script: [
              {
                heading: "Way in: sibling rivalry",
                minutes: "2 min",
                teacherTalk: "Ask the warm-up question about animals or siblings fighting for dominance to set the scene for today's story.",
                activityNote: null,
                keyQuestion: "Have you ever seen two animals — maybe dogs, or even kangaroos — squaring up and shoving each other, both trying to come out on top? What does that kind of fight usually look like?",
                teacherGuidance: "Accept any answer describing pushing, posturing, or wrestling for dominance. Use this to introduce today's theme: Jacob and Esau are about to have their biggest fight yet — not with fists, but with tricks.",
              },
              {
                heading: "Recap last week",
                minutes: "2 min",
                teacherTalk: "Recap that Esau sold his birthright, and that God had already chosen Jacob before he was born.",
                activityNote: "Display the recap image of the stew scene.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Isaac's secret plan",
                minutes: "5–6 min",
                teacherTalk: "Read through the story of Isaac's plan to secretly bless Esau, and Rebekah overhearing it.",
                activityNote: null,
                keyQuestion: "How do you feel, hearing that Isaac tried to do this important blessing quietly, behind his family's back — even though he already knew God had chosen Jacob?",
                teacherGuidance: "Accept honest responses. Isaac's secrecy here is his own way of going around what he knew God had said — not so different from how Rebekah and Jacob are about to go around Isaac.",
              },
              {
                heading: "Memory verse and closing prayer",
                minutes: "2 min",
                teacherTalk: "Read the memory verse together and close with the built-in prayer.",
                activityNote: "Use the verse block, then the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Tomorrow: Jacob disguises himself and steals the blessing meant for Esau.",
          },
        },
        // ---------------- DAY 2 (TUE) ----------------
        {
          label: "Tuesday",
          theme: "Jacob steals the blessing",
          blocks: [
            {
              type: "question",
              text: "Yesterday we heard that Rebekah overheard Isaac's secret plan. If you were Rebekah, what might you have done next?",
              hint: "Accept any guesses. Rebekah's actual plan involved deception, not honesty — set up today's story with this question before revealing what she actually did.",
            },
            {
              type: "story",
              text: "Rebekah called for Jacob and told him everything she'd overheard. Then she came up with a plan of her own: she told Jacob to fetch two young goats from the flock so she could cook up a delicious meal, just the way Isaac liked it — so that Jacob could bring it in and pretend to be Esau.",
            },
            {
              type: "question",
              text: "There's a problem with this plan straight away — something obvious that could give Jacob away the moment he walked in. What do you think it might be?",
              hint: "Guide toward: Esau was a hairy, outdoorsy hunter, while Jacob was smooth-skinned and stayed close to home. If Isaac touched Jacob, he might immediately know it wasn't Esau.",
            },
            {
              type: "story",
              text: "Rebekah had thought of that too. She dressed Jacob in Esau's clothes, and covered his hands and neck with the skins of the goats, so that he would feel just like his hairy brother. Jacob did exactly what his mother told him, and carried the food in to his father, pretending the whole time to be Esau.",
            },
            {
              type: "image",
              key: "wk6-01-isaac-blesses-jacob",
              caption: "Jacob, dressed in Esau's clothes and covered in goat skin, kneels before his father Isaac to receive the blessing meant for his brother.",
            },
            {
              type: "question",
              text: "The Bible tells us Isaac hesitated at first — something about the voice made him unsure. Why do you think Isaac went along with it anyway, even though part of him suspected something was wrong?",
              hint: "Accept honest guesses — perhaps he wanted to believe it was Esau, or the disguise was convincing enough to overrule his doubts. However it happened, Isaac was fully deceived and went ahead with the blessing.",
            },
            {
              type: "story",
              text: "Isaac ate the meal Jacob brought him, and then gave him the blessing — the very words that carried God's promises to Abraham and Isaac's family: the promise of land, of becoming a great nation, and of blessing the whole world. Jacob walked out with everything, and Isaac still believed he had just blessed Esau.",
            },
            {
              type: "question",
              text: "Jacob now has the blessing God always intended him to have. But think carefully — was the way he got it a good thing to copy, even though the outcome matched what God had planned?",
              hint: "Guide toward: no. Getting the right result through lying and deceiving your own father is not something to imitate. God's plan succeeding doesn't make Jacob and Rebekah's methods okay — it shows God is powerful enough to work his plan out even through people behaving badly.",
            },
            {
              type: "prayer",
              text: "Dear God, thank you that your plans don't depend on people doing the right thing. Help us to be honest with the people around us, even when it feels easier not to be. Amen.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 27:5–29",
            topic: "Jacob steals the blessing",
            bigIdea: "Rebekah and Jacob answered Isaac's secrecy with deceit of their own — disguising Jacob as Esau so thoroughly that Isaac was completely fooled, and gave Jacob the blessing that carried all of God's promises. The outcome matched what God had already planned, but the method was dishonest and wrong.",
            learningIntentions: [
              "We are learning how Rebekah and Jacob disguised Jacob to steal Esau's blessing.",
              "We are learning to identify what was wrong with the way Jacob got the blessing.",
              "I can explain that God's plan succeeding doesn't make Jacob and Rebekah's deception acceptable.",
            ],
            assessment: "Listen for whether students can describe the disguise Jacob used and can identify that deceiving Isaac was wrong, even though the result matched God's plan.",
            resources: [
              "Image: Isaac blessing the disguised Jacob",
            ],
            script: [
              {
                heading: "Recap Rebekah's plan",
                minutes: "1–2 min",
                teacherTalk: "Ask what students think Rebekah might have done after overhearing Isaac's plan, before revealing the actual story.",
                activityNote: null,
                keyQuestion: "Yesterday we heard that Rebekah overheard Isaac's secret plan. If you were Rebekah, what might you have done next?",
                teacherGuidance: "Accept any guesses. Rebekah's actual plan involved deception, not honesty — set up today's story with this question before revealing what she actually did.",
              },
              {
                heading: "The disguise",
                minutes: "5–6 min",
                teacherTalk: "Read through how Rebekah dressed Jacob in Esau's clothes and goat skin, and how Jacob deceived Isaac to receive the blessing.",
                activityNote: "Display the image of Isaac blessing the disguised Jacob.",
                keyQuestion: "There's a problem with this plan straight away — something obvious that could give Jacob away the moment he walked in. What do you think it might be?",
                teacherGuidance: "Guide toward: Esau was a hairy, outdoorsy hunter, while Jacob was smooth-skinned and stayed close to home. If Isaac touched Jacob, he might immediately know it wasn't Esau.",
              },
              {
                heading: "Was this okay?",
                minutes: "2–3 min",
                teacherTalk: "Discuss whether Jacob's method of getting the blessing was acceptable, even though the outcome matched God's plan.",
                activityNote: null,
                keyQuestion: "Jacob now has the blessing God always intended him to have. But think carefully — was the way he got it a good thing to copy, even though the outcome matched what God had planned?",
                teacherGuidance: "Guide toward: no. Getting the right result through lying and deceiving your own father is not something to imitate. God's plan succeeding doesn't make Jacob and Rebekah's methods okay — it shows God is powerful enough to work his plan out even through people behaving badly.",
              },
              {
                heading: "Closing prayer",
                minutes: "1–2 min",
                teacherTalk: "Close together with the built-in prayer.",
                activityNote: "Use the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Tomorrow: Esau returns and discovers what's happened.",
          },
        },
        // ---------------- DAY 3 (WED) ----------------
        {
          label: "Wednesday",
          theme: "Esau's fury",
          blocks: [
            {
              type: "question",
              text: "Imagine working hard on something — hunting, cooking, getting everything ready — only to find out someone else already took what you were working towards. How do you think that would feel?",
              hint: "Accept honest responses — frustrating, unfair, angry. This sets up how Esau is about to feel when he returns from the hunt.",
            },
            {
              type: "story",
              text: "Not long after Jacob left his father's tent, Esau came back from hunting. He prepared the delicious meal Isaac had asked for and brought it in, ready to receive his father's blessing at last.",
            },
            {
              type: "question",
              text: "What do you think Isaac and Esau discovered when Esau walked in?",
              hint: "Guide toward: that Jacob had already been there, disguised as Esau, and had already received the blessing meant for Esau. There was nothing left to give.",
            },
            {
              type: "story",
              text: "Isaac began to tremble violently when he realised what had happened — someone had already come in, pretending to be Esau, and Isaac had already given away the blessing. When Esau heard this, he cried out in a loud and bitter voice, begging his father for some blessing — any blessing — but the one that carried God's full promises to Abraham's family was already gone.",
            },
            {
              type: "question",
              text: "What was really wrong with how Jacob got this blessing? How did he actually get it?",
              hint: "Accept responses. Jacob got it by disguising himself and lying directly to his father's face — cheating and deceiving him, not by anything fair or honest.",
            },
            {
              type: "story",
              text: "Esau was furious, and he began to plot how he might get revenge on his brother once their father had died. But notice something about Esau, too: he wasn't upset because he suddenly cared deeply about God's promises. He was upset because he hated losing — the very same attitude that had made him carelessly trade his birthright away for a bowl of stew in the first place.",
            },
            {
              type: "question",
              text: "Isaac tried to bless the wrong son in secret. Rebekah and Jacob lied and disguised themselves to steal the blessing. Esau cared more about winning than about God's promises. Was there anyone in this story who comes across as clearly the 'good guy'?",
              hint: "Guide toward: no — everyone in this family acted selfishly, secretly, or dishonestly in this story. Nobody here deserved God's blessing based on their own behaviour.",
            },
            {
              type: "verse",
              reference: "Numbers 23:19 (CEV)",
              text: "“God is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.”",
            },
            {
              type: "prayer",
              text: "Dear God, thank you that even when the people around us let us down or treat each other unfairly, your promises don't depend on any of us being good enough. Amen.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 27:30–40",
            topic: "Esau's fury",
            bigIdea: "When Esau returned from hunting, he discovered that Jacob had already stolen his blessing by deception. Esau's fury reveals that not one person in this story — Isaac, Rebekah, Jacob, or Esau — acted well or deserved God's blessing on their own merit.",
            learningIntentions: [
              "We are learning what happened when Esau discovered Jacob had taken his blessing.",
              "We are learning to identify that every character in this story acted selfishly or dishonestly.",
              "I can explain that God's promises don't depend on any person deserving them.",
            ],
            assessment: "Listen for whether students can explain why Esau was upset, and whether they can identify that no character in the story behaved well.",
            resources: [],
            script: [
              {
                heading: "Way in: losing out",
                minutes: "2 min",
                teacherTalk: "Ask students to imagine working hard toward something only to find someone else already took it.",
                activityNote: null,
                keyQuestion: "Imagine working hard on something — hunting, cooking, getting everything ready — only to find out someone else already took what you were working towards. How do you think that would feel?",
                teacherGuidance: "Accept honest responses — frustrating, unfair, angry. This sets up how Esau is about to feel when he returns from the hunt.",
              },
              {
                heading: "Esau's discovery",
                minutes: "5 min",
                teacherTalk: "Read through Esau's return, Isaac's trembling, and Esau's bitter cry for a blessing.",
                activityNote: null,
                keyQuestion: "What was really wrong with how Jacob got this blessing? How did he actually get it?",
                teacherGuidance: "Accept responses. Jacob got it by disguising himself and lying directly to his father's face — cheating and deceiving him, not by anything fair or honest.",
              },
              {
                heading: "Nobody's the good guy",
                minutes: "2–3 min",
                teacherTalk: "Discuss how every character in the story acted badly in some way.",
                activityNote: null,
                keyQuestion: "Isaac tried to bless the wrong son in secret. Rebekah and Jacob lied and disguised themselves to steal the blessing. Esau cared more about winning than about God's promises. Was there anyone in this story who comes across as clearly the 'good guy'?",
                teacherGuidance: "Guide toward: no — everyone in this family acted selfishly, secretly, or dishonestly in this story. Nobody here deserved God's blessing based on their own behaviour.",
              },
              {
                heading: "Memory verse and closing prayer",
                minutes: "2 min",
                teacherTalk: "Read the memory verse together and close with the built-in prayer.",
                activityNote: "Use the verse block, then the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Tomorrow: we retell the whole story as a boxing match commentary, and talk about what it shows us about God.",
          },
        },
        // ---------------- DAY 4 (THU) ----------------
        {
          label: "Thursday",
          theme: "Reading it as a boxing match",
          blocks: [
            {
              type: "roleplay",
              title: "Lesson 16 script: Jacob and Esau's title fight",
              characters: [
                { name: "Commentator", color: "gold" },
                { name: "Team Esau", color: "red" },
                { name: "Team Jacob", color: "blue" },
              ],
              lines: [
                { character: "Commentator", text: "Welcome, everyone, to the biggest title fight this family has ever seen — two brothers who've been battling each other since before they were even born!", direction: true },
                { character: "Commentator", text: "In the red corner, weighing in as the hairy outdoorsman and champion hunter — it's Esau!" },
                { character: "Team Esau", text: "Esau! Esau! Esau!" },
                { character: "Commentator", text: "And in the blue corner, the smooth-skinned home-body — it's Jacob!" },
                { character: "Team Jacob", text: "Jacob! Jacob! Jacob!" },
                { character: "Commentator", text: "Isaac is old now, and he's lost his sight. Not sure how much time he has left, he calls in his favourite son, Esau, wanting to give him the big blessing before he dies." },
                { character: "Team Esau", text: "Yes! That's our man!" },
                { character: "Commentator", text: "But here's the catch — Isaac wants to do this quietly, without telling Rebekah or Jacob a thing." },
                { character: "Team Jacob", text: "Boo! That's not fair play!" },
                { character: "Commentator", text: "Esau heads out to hunt down some wild game for his father's favourite meal, just like Isaac asked." },
                { character: "Team Esau", text: "Esau! Esau!" },
                { character: "Commentator", text: "But Rebekah has been listening at the tent the whole time!" },
                { character: "Team Jacob", text: "Boo!", direction: true },
                { character: "Commentator", text: "She calls in her own favourite — Jacob — and comes up with a sneaky plan of her own." },
                { character: "Team Jacob", text: "Jacob! Jacob!" },
                { character: "Team Esau", text: "Boo! Boo!", direction: true },
                { character: "Commentator", text: "Jacob does exactly what his mother tells him. He fetches two young goats from the flock..." },
                { character: "Team Jacob", text: "Jacob! Jacob!" },
                { character: "Commentator", text: "...Rebekah cooks up the meal, dresses Jacob in his brother's clothes, and straps goat skin to his hands and neck so he'll feel just like hairy Esau." },
                { character: "Commentator", text: "Jacob carries the food in to his father, pretending the whole time to be his brother!" },
                { character: "Team Jacob", text: "Jacob! Jacob! Jacob!" },
                { character: "Commentator", text: "Isaac isn't totally sure at first — something about that voice — but he's fooled! He gives Jacob the blessing meant for Esau!" },
                { character: "Team Jacob", text: "JACOB! JACOB! JACOB!" },
                { character: "Commentator", text: "Esau comes back from the hunt with a feast fit for a king, ready to finally get his blessing..." },
                { character: "Team Esau", text: "Esau! Esau!" },
                { character: "Commentator", text: "...only to find out there's nothing left. Jacob has already taken it!" },
                { character: "Team Jacob", text: "Jacob wins!" },
                { character: "Commentator", text: "Ding, ding, ding! Esau is furious, and he's already plotting revenge on his brother." },
                { character: "Team Esau", text: "Boo! Get him back, Esau!" },
                { character: "Commentator", text: "So — Jacob has snuck away with the win. But let's be honest, everyone in this fight has played dirty, right from Isaac's secret plan to Rebekah and Jacob's disguise.", direction: true },
                { character: "Team Esau", text: "Boo! Boo! Boo!", direction: true },
                { character: "Team Jacob", text: "Boo! Boo! Boo!", direction: true },
              ],
            },
            {
              type: "question",
              text: "Now that we've replayed the whole story as a boxing match — what was actually wrong with how Jacob won this 'fight'?",
              hint: "Guide toward: Jacob tricked and cheated his own father and brother to get the blessing, even though God had already promised it to him. Winning the right result the wrong way is still wrong.",
            },
            {
              type: "question",
              text: "It's hard to believe God would put up with a family behaving like this. So what does this story actually show us about God?",
              hint: "Guide toward: it shows how amazing and powerful God is — he planned to save people through this exact family, even though every single person in it acted selfishly, secretly, or dishonestly. Nothing they did could stop God's plan.",
            },
            {
              type: "story",
              text: "God had a plan to save his people from sin, right from the very beginning — and that plan has always been about Jesus. God set that plan in motion through the promises he made to Abraham, and nothing can get in the way of God keeping those promises — not even sinful, scheming people. God is powerful, and he is able to keep his promises. He's a promise keeper!",
            },
            {
              type: "question",
              text: "Why do you think God chooses to work through unexpected, imperfect people instead of only ever using people who deserve it?",
              hint: "Accept responses. He does this so that people remember he is God, and they are not — so people won't take the good things God gives them for granted, and so people will put their trust in him rather than in themselves.",
            },
            {
              type: "verse",
              reference: "Numbers 23:19 (CEV)",
              text: "“God is no mere human! He doesn't tell lies or change his mind. God always keeps his promises.”",
            },
            {
              type: "activity",
              text: "Let's say this week's memory verse together, all from memory.",
            },
            {
              type: "prayer",
              text: "Dear God, thank you that you are powerful in keeping your promises. Thank you that nothing can stand in the way of you keeping your promises — not even people's sinfulness. Thank you that you kept your promises to Abraham, Isaac, and Jacob, even though they didn't deserve it. Amen.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 27:1–40 (recap)",
            topic: "Reading it as a boxing match: what this shows us about God",
            bigIdea: "Retelling the whole week's story as a boxing-match commentary helps highlight that nobody in this fight played fair — yet God's plan for Jacob to receive the blessing still went ahead exactly as promised. This shows how powerful and trustworthy God is: his promises don't depend on people's good behaviour.",
            learningIntentions: [
              "We are recapping the whole story of Genesis 27:1–40 through an acted-out boxing commentary.",
              "We are learning to identify that everyone in the story played dishonestly, yet God's plan still succeeded.",
              "I can explain that God is powerful enough to keep his promises even through sinful people.",
            ],
            assessment: "Listen for whether students can explain what was wrong with how Jacob won the blessing, and what the story shows about God's power to keep his promises.",
            resources: [
              "A few confident volunteers to read the Commentator, Team Esau, and Team Jacob parts, plus the rest of the class to join in cheering",
            ],
            script: [
              {
                heading: "Act it out: the boxing commentary",
                minutes: "6–7 min",
                teacherTalk: "Assign volunteers to the Commentator, Team Esau, and Team Jacob roles (or split the class into two cheering sides) and run the built-in roleplay script on screen.",
                activityNote: "Use the built-in roleplay block — tap 'Start the script on screen' to open the fullscreen presenter.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "What was wrong with the win?",
                minutes: "2 min",
                teacherTalk: "Discuss what was actually wrong with how Jacob won the blessing.",
                activityNote: null,
                keyQuestion: "Now that we've replayed the whole story as a boxing match — what was actually wrong with how Jacob won this 'fight'?",
                teacherGuidance: "Guide toward: Jacob tricked and cheated his own father and brother to get the blessing, even though God had already promised it to him. Winning the right result the wrong way is still wrong.",
              },
              {
                heading: "What this shows us about God",
                minutes: "2–3 min",
                teacherTalk: "Draw out the big idea: God is powerful enough to keep his promises even through a sinful, scheming family.",
                activityNote: null,
                keyQuestion: "It's hard to believe God would put up with a family behaving like this. So what does this story actually show us about God?",
                teacherGuidance: "Guide toward: it shows how amazing and powerful God is — he planned to save people through this exact family, even though every single person in it acted selfishly, secretly, or dishonestly. Nothing they did could stop God's plan.",
              },
              {
                heading: "Memory verse and closing prayer",
                minutes: "2 min",
                teacherTalk: "Finish the week's memory verse fully from memory, then close together with the prayer in the app.",
                activityNote: "Use the say-it-from-memory activity block, then the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Lesson 17 continues the story of Jacob.",
          },
        },
      ],
    },
    "Week 7": {
      lessonTitle: "Growing into greatness",
      passage: "Genesis 29:31–30:24; 37",
      bigIdea: "God had promised Abraham a family as countless as the stars, and that promise kept growing — through Isaac, through Jacob, and now through Jacob's twelve sons, the beginning of the twelve tribes of Israel. But this family was far from perfect. Jacob loved Rachel's son Joseph best of all, and made that favouritism obvious with a special coat, which only deepened the hatred his brothers already felt. When Joseph made things worse by sharing dreams of his whole family bowing down to him, his brothers' hatred turned into a plan to get rid of him. They didn't kill him, but they did sell him into slavery in Egypt. It looked like the worst thing that could happen to this growing family — but Christians believe God was already at work, even through this terrible act, planning to use Joseph to rescue and preserve his people.",
      source: "Connect B1 Upper Primary — Lesson 17",
      days: [
        // ---------------- DAY 1 (MON) ----------------
        {
          label: "Monday",
          theme: "Jacob's family keeps growing",
          blocks: [
            {
              type: "question",
              text: "Last week, Jacob tricked his own brother to get what he wanted. Do you think someone who tricks people usually gets away with it forever, or does it usually catch up with them somehow?",
              hint: "Accept any answer. Today's story shows the trickster get tricked himself — Jacob is about to find out what it feels like to be on the receiving end.",
            },
            {
              type: "story",
              text: "After tricking Esau out of the blessing, Jacob fled to his uncle Laban's home to escape his brother's anger. There, Jacob fell deeply in love with Laban's younger daughter, Rachel, and agreed to work for Laban for seven years so he could marry her.",
            },
            {
              type: "question",
              text: "Rachel had an older sister named Leah who wasn't yet married. What do you think might go wrong with Jacob's wedding plans?",
              hint: "Guide toward: Laban might try to marry off his older daughter first, before Rachel. Let students guess before revealing the twist.",
            },
            {
              type: "story",
              text: "On the wedding day, Laban tricked Jacob — the same way Jacob had once tricked his own father — and gave him Leah instead of Rachel. By the time Jacob realised what had happened, it was already done. Because he loved Rachel so much, Jacob agreed to work another seven years for Laban so he could marry her too.",
            },
            {
              type: "question",
              text: "How do you think it felt for Jacob to be deceived like this, after everything he'd done to deceive his own father and brother?",
              hint: "Accept honest responses. It's a fitting turn — the deceiver gets deceived. This doesn't erase what Jacob did to Esau, but it shows Jacob is now living with the same kind of hurt he caused.",
            },
            {
              type: "story",
              text: "So Jacob ended up married to both Leah and Rachel — and a fierce rivalry grew between the sisters as each wanted to be more loved by Jacob than the other. Between Leah, Rachel, and their servants, Jacob ended up with twelve sons altogether.",
            },
            {
              type: "verse",
              reference: "Romans 8:28a (CEV)",
              text: "“We know that God is always at work for the good of everyone who loves him.”",
            },
            {
              type: "question",
              text: "This week we've got a brand new memory verse. Even with all this family rivalry and trickery going on, what do you think this verse means for how God was working in Jacob's messy family?",
              hint: "Guide toward: God was still at work for good, even through a complicated, rivalry-filled family. This verse will keep coming back all week, including tomorrow when God speaks to Jacob directly, and later when we see it stretch all the way to Joseph.",
            },
            {
              type: "prayer",
              text: "Dear God, thank you that you are always at work for good, even in families that don't always get along. Help us to trust that you're at work in our own families too. Amen.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 29:31–30:24",
            topic: "Jacob's family keeps growing",
            bigIdea: "Jacob, who once tricked his own father and brother, was tricked himself by his uncle Laban into marrying Leah before Rachel. Jacob ended up married to both sisters, and amid their rivalry, Jacob's family grew to twelve sons — God's promise to Abraham of a great family continuing to unfold.",
            learningIntentions: [
              "We are learning how Jacob was tricked by Laban into marrying Leah before Rachel.",
              "We are learning that Jacob's family grew to twelve sons through Leah, Rachel, and their servants.",
              "I can explain that this week's new memory verse teaches that God is always at work for good, even in a rivalry-filled family.",
            ],
            assessment: "Listen for whether students can explain how Laban tricked Jacob, and whether they can recite or paraphrase this week's new memory verse.",
            resources: [],
            script: [
              {
                heading: "Way in: does trickery catch up with you?",
                minutes: "2 min",
                teacherTalk: "Ask the warm-up question about whether tricking people usually catches up with someone eventually.",
                activityNote: null,
                keyQuestion: "Last week, Jacob tricked his own brother to get what he wanted. Do you think someone who tricks people usually gets away with it forever, or does it usually catch up with them somehow?",
                teacherGuidance: "Accept any answer. Today's story shows the trickster get tricked himself — Jacob is about to find out what it feels like to be on the receiving end.",
              },
              {
                heading: "Jacob is tricked by Laban",
                minutes: "5 min",
                teacherTalk: "Read through Jacob falling in love with Rachel, working seven years for her, and being tricked into marrying Leah first.",
                activityNote: null,
                keyQuestion: "How do you think it felt for Jacob to be deceived like this, after everything he'd done to deceive his own father and brother?",
                teacherGuidance: "Accept honest responses. It's a fitting turn — the deceiver gets deceived. This doesn't erase what Jacob did to Esau, but it shows Jacob is now living with the same kind of hurt he caused.",
              },
              {
                heading: "New memory verse",
                minutes: "3–4 min",
                teacherTalk: "Introduce this week's new memory verse and discuss what it might mean given Jacob's messy, rivalry-filled family.",
                activityNote: "Display the verse block.",
                keyQuestion: "This week we've got a brand new memory verse. Even with all this family rivalry and trickery going on, what do you think this verse means for how God was working in Jacob's messy family?",
                teacherGuidance: "Guide toward: God was still at work for good, even through a complicated, rivalry-filled family. This verse will keep coming back all week, including tomorrow when God speaks to Jacob directly, and later when we see it stretch all the way to Joseph.",
              },
              {
                heading: "Closing prayer",
                minutes: "1–2 min",
                teacherTalk: "Close together with the built-in prayer.",
                activityNote: "Use the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Tomorrow: God speaks to Jacob again and gives him a new name.",
          },
        },
        // ---------------- DAY 2 (TUE) ----------------
        {
          label: "Tuesday",
          theme: "A new name, an old promise",
          blocks: [
            {
              type: "question",
              text: "If someone gave you a brand new name to remind you of something important, what would you want that name to remind you of?",
              hint: "Accept any answer. Today we see God give Jacob a whole new name — one meant to remind him of God's promises for the rest of his life.",
            },
            {
              type: "story",
              text: "Jacob's family kept growing, and God hadn't forgotten his promise to Abraham. Some time later, God appeared to Jacob again and gave him a new name and a blessing.",
            },
            {
              type: "verse",
              reference: "Genesis 35:9–12 (CEV, paraphrased)",
              text: "God told Jacob: “I am God All-Powerful, and from now on your name will be Israel instead of Jacob. You will have many children, and your family will grow into whole nations. I will give you the same land I promised Abraham and Isaac, and it will belong to your family forever.”",
            },
            {
              type: "question",
              text: "God changed Jacob's name to Israel. Why do you think God wanted Jacob to have a new name, rather than just keep making the same promise using his old one?",
              hint: "Guide toward: the name itself became a permanent, everyday reminder of God's promise — every time someone said Jacob's new name, it pointed back to what God had promised him. It wasn't just words spoken once; it became part of who he was.",
            },
            {
              type: "story",
              text: "Jacob — now called Israel — had twelve sons altogether: Reuben, Simeon, Levi, Judah, Dan, Naphtali, Gad, Asher, Issachar, Zebulun, Joseph, and Benjamin. These twelve sons and their families would one day grow into the twelve tribes of Israel — God's own chosen people.",
            },
            {
              type: "activity",
              text: "Without looking anything up, see if your group can say all twelve of Jacob's sons in order, from the eldest to the youngest: Reuben, Simeon, Levi, Judah, Dan, Naphtali, Gad, Asher, Issachar, Zebulun, Joseph, Benjamin.",
            },
            {
              type: "question",
              text: "Near the end of his life, Jacob gathered all twelve of his sons to bless them. What do you think it shows us that the writer of Genesis records the names of every single one of Jacob's sons?",
              hint: "Guide toward: it shows that Jacob's family truly was becoming the great nation God had promised Abraham — each son mattered enough to be named, because each one would become the head of a whole tribe of Israel.",
            },
            {
              type: "verse",
              reference: "Romans 8:28a (CEV)",
              text: "“We know that God is always at work for the good of everyone who loves him.”",
            },
            {
              type: "prayer",
              text: "Dear God, thank you that you kept your promise to Abraham by growing his family into the twelve tribes of Israel. Thank you that you're always at work for good, even when we can't see the whole plan yet. Amen.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 35:9–12; 49:28 (context)",
            topic: "A new name, an old promise",
            bigIdea: "God appeared to Jacob again, renamed him Israel, and renewed his promise of land and a great family. Jacob's twelve sons became the beginning of the twelve tribes of Israel, showing God's promise to Abraham continuing to unfold exactly as he'd said.",
            learningIntentions: [
              "We are learning that God renamed Jacob 'Israel' and renewed his promise to him.",
              "We are learning the names of Jacob's twelve sons and that they became the twelve tribes of Israel.",
              "I can explain that Jacob's growing family shows God keeping his promise to Abraham.",
            ],
            assessment: "Listen for whether students can explain why God changed Jacob's name, and whether they can name several of Jacob's twelve sons.",
            resources: [
              "None — this is a text/discussion-based day (see the file's header notes for why this lesson ships without images)",
            ],
            script: [
              {
                heading: "Way in: the meaning of a new name",
                minutes: "2 min",
                teacherTalk: "Ask the warm-up question about what a new name might be chosen to remind someone of.",
                activityNote: null,
                keyQuestion: "If someone gave you a brand new name to remind you of something important, what would you want that name to remind you of?",
                teacherGuidance: "Accept any answer. Today we see God give Jacob a whole new name — one meant to remind him of God's promises for the rest of his life.",
              },
              {
                heading: "God renames Jacob 'Israel'",
                minutes: "4–5 min",
                teacherTalk: "Read God's words to Jacob from Genesis 35:9–12, renaming him Israel and renewing the promise of land and family.",
                activityNote: "Display the verse block with Genesis 35:9–12.",
                keyQuestion: "God changed Jacob's name to Israel. Why do you think God wanted Jacob to have a new name, rather than just keep making the same promise using his old one?",
                teacherGuidance: "Guide toward: the name itself became a permanent, everyday reminder of God's promise — every time someone said Jacob's new name, it pointed back to what God had promised him. It wasn't just words spoken once; it became part of who he was.",
              },
              {
                heading: "Twelve sons, twelve tribes",
                minutes: "4–5 min",
                teacherTalk: "Introduce Jacob's twelve sons by name and try the ordering activity as a group.",
                activityNote: "Use the built-in activity block to try naming all twelve sons in birth order.",
                keyQuestion: "Near the end of his life, Jacob gathered all twelve of his sons to bless them. What do you think it shows us that the writer of Genesis records the names of every single one of Jacob's sons?",
                teacherGuidance: "Guide toward: it shows that Jacob's family truly was becoming the great nation God had promised Abraham — each son mattered enough to be named, because each one would become the head of a whole tribe of Israel.",
              },
              {
                heading: "Memory verse and closing prayer",
                minutes: "2 min",
                teacherTalk: "Read the memory verse together and close with the built-in prayer.",
                activityNote: "Use the verse block, then the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Tomorrow: we meet Jacob's favourite son, Joseph, and find out why his brothers grew to hate him.",
          },
        },
        // ---------------- DAY 3 (WED) ----------------
        {
          label: "Wednesday",
          theme: "Jacob's favourite son",
          blocks: [
            {
              type: "question",
              text: "Have you ever felt like someone had an obvious favourite — maybe a favourite student, a favourite sibling, a favourite friend? How did that make everyone else feel?",
              hint: "Accept honest responses — left out, jealous, unfair. This sets up how Joseph's brothers are about to feel toward him.",
            },
            {
              type: "story",
              text: "Out of all twelve of his sons, Jacob loved Joseph the most. Joseph was the first son born to Rachel, Jacob's favourite wife, and Jacob made his favouritism obvious for everyone to see: he gave Joseph a beautiful, special coat that none of his other sons received.",
            },
            {
              type: "question",
              text: "Put yourself in the shoes of one of Joseph's ten older brothers, watching your father give this one brother a special coat that none of you got. How would you feel toward Joseph?",
              hint: "Guide toward: jealous, resentful, angry — maybe even hateful. The Bible tells us this is exactly how Joseph's brothers felt.",
            },
            {
              type: "story",
              text: "It didn't help that Joseph brought his father bad reports about his brothers' behaviour. And then Joseph made things even worse: he had two dreams, and instead of keeping them to himself, he told his brothers all about them. In both dreams, his whole family — his brothers, and even his parents — were bowing down to him, as if he was a king and they were his servants.",
            },
            {
              type: "question",
              text: "Do you think it was wise for Joseph to share these dreams with his brothers, who already hated him? Why or why not?",
              hint: "Guide toward: no — even if the dreams were true and came from God, sharing them this way, to brothers who already resented him, only poured fuel on the fire. Joseph wasn't necessarily wrong to have the dreams, but boasting about them wasn't wise.",
            },
            {
              type: "story",
              text: "As a result, Joseph's brothers hated him more than ever. Between the special coat, the bad reports, and now these dreams of ruling over his own family, their hatred for Joseph grew until they began to plan how they might get rid of him for good.",
            },
            {
              type: "question",
              text: "Even though Joseph's brothers were about to do something terrible, this week's memory verse says God is always at work for the good of everyone who loves him. What do you think that might mean for what happens next?",
              hint: "Accept guesses — this is meant to build anticipation, not be fully answered yet. Guide toward: it hints that even the very worst things Joseph's brothers plan to do won't be outside of God's control — but don't give away tomorrow's ending yet.",
            },
            {
              type: "verse",
              reference: "Romans 8:28a (CEV)",
              text: "“We know that God is always at work for the good of everyone who loves him.”",
            },
            {
              type: "prayer",
              text: "Dear God, thank you that even when families struggle with jealousy and favouritism, you are still at work. Help us to treat the people in our own families fairly, and to trust you when things feel unfair. Amen.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 37:2–11",
            topic: "Jacob's favourite son",
            bigIdea: "Jacob's obvious favouritism toward Joseph — shown through the special coat — combined with Joseph's own bad reports and boastful dreams of ruling over his family, caused his ten older brothers' hatred to grow until they began plotting to get rid of him.",
            learningIntentions: [
              "We are learning why Joseph's brothers grew to hate him: favouritism, bad reports, and his dreams.",
              "We are learning to identify why sharing the dreams the way Joseph did wasn't wise.",
              "I can explain how favouritism and jealousy built up inside Jacob's family.",
            ],
            assessment: "Listen for whether students can explain the three reasons Joseph's brothers hated him, and whether they can evaluate why sharing the dreams wasn't wise.",
            resources: [],
            script: [
              {
                heading: "Way in: obvious favourites",
                minutes: "2 min",
                teacherTalk: "Ask the warm-up question about how it feels when someone has an obvious favourite.",
                activityNote: null,
                keyQuestion: "Have you ever felt like someone had an obvious favourite — maybe a favourite student, a favourite sibling, a favourite friend? How did that make everyone else feel?",
                teacherGuidance: "Accept honest responses — left out, jealous, unfair. This sets up how Joseph's brothers are about to feel toward him.",
              },
              {
                heading: "The coat and the dreams",
                minutes: "5–6 min",
                teacherTalk: "Read through Jacob's favouritism toward Joseph, the special coat, Joseph's bad reports, and his two dreams.",
                activityNote: null,
                keyQuestion: "Do you think it was wise for Joseph to share these dreams with his brothers, who already hated him? Why or why not?",
                teacherGuidance: "Guide toward: no — even if the dreams were true and came from God, sharing them this way, to brothers who already resented him, only poured fuel on the fire. Joseph wasn't necessarily wrong to have the dreams, but boasting about them wasn't wise.",
              },
              {
                heading: "Building anticipation",
                minutes: "2 min",
                teacherTalk: "Use the memory verse to build anticipation for tomorrow's story without giving away the ending.",
                activityNote: null,
                keyQuestion: "Even though Joseph's brothers were about to do something terrible, this week's memory verse says God is always at work for the good of everyone who loves him. What do you think that might mean for what happens next?",
                teacherGuidance: "Accept guesses — this is meant to build anticipation, not be fully answered yet. Guide toward: it hints that even the very worst things Joseph's brothers plan to do won't be outside of God's control — but don't give away tomorrow's ending yet.",
              },
              {
                heading: "Closing prayer",
                minutes: "1–2 min",
                teacherTalk: "Close together with the built-in prayer.",
                activityNote: "Use the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Tomorrow: Joseph's brothers finally act on their hatred, and we find out what God was really doing all along.",
          },
        },
        // ---------------- DAY 4 (THU) ----------------
        {
          label: "Thursday",
          theme: "Sold, but not forgotten",
          blocks: [
            {
              type: "question",
              text: "Yesterday we heard Joseph's brothers were plotting to get rid of him. If you were one of the brothers, what's the worst plan you can imagine them coming up with?",
              hint: "Accept any guesses. The real story is bad enough without needing to imagine worse — use this to set up today's account.",
            },
            {
              type: "story",
              text: "One day, Jacob sent Joseph out to check on his older brothers, who were out looking after the family's sheep. Joseph was still wearing his special coat. His brothers saw him coming from a distance, and before he even arrived, they were already plotting to kill him and tell their father a wild animal had done it.",
            },
            {
              type: "question",
              text: "What do you think stopped the brothers from actually going through with killing Joseph?",
              hint: "Guide toward: one brother, Reuben, convinced the others not to kill him outright — though as we'll hear, that didn't mean Joseph was safe.",
            },
            {
              type: "story",
              text: "In the end, the brothers didn't kill Joseph. Instead, they stripped him of his special coat and threw him into a dry well. Just then, a group of Midianite traders came travelling down the road on their way to Egypt — so the brothers pulled Joseph out of the well and sold him to the traders for twenty pieces of silver.",
            },
            {
              type: "question",
              text: "The brothers then had to explain to their father why Joseph didn't come home. What lie do you think they came up with?",
              hint: "Guide toward: they dipped Joseph's coat in goat's blood and brought it to Jacob, letting him believe a wild animal had killed Joseph — never admitting what they had actually done.",
            },
            {
              type: "story",
              text: "Jacob was devastated. He tore his clothes and grieved for his son for a very long time — no one could comfort him. Meanwhile, the Midianite traders took Joseph all the way to Egypt and sold him again, this time to an Egyptian official named Potiphar.",
            },
            {
              type: "question",
              text: "From where we're sitting, this looks like one of the worst things that could happen to this family God had been growing all week. So why do you think this story is still part of God keeping his promise to Abraham?",
              hint: "Guide toward: even though Joseph's brothers meant this for evil, God was already at work — planning to use Joseph's time in Egypt to eventually save his whole family from a coming famine. This is exactly what this week's memory verse has been pointing toward.",
            },
            {
              type: "story",
              text: "This is what Christians mean when they say God is always at work for the good of everyone who loves him. It doesn't mean bad things don't happen, or that what Joseph's brothers did was somehow okay — it wasn't. It means that even in the worst moments, God is still working out his plan, and nothing — not jealousy, not betrayal, not slavery — can stop him from keeping his promises to Abraham's family.",
            },
            {
              type: "verse",
              reference: "Romans 8:28a (CEV)",
              text: "“We know that God is always at work for the good of everyone who loves him.”",
            },
            {
              type: "activity",
              text: "Let's say this week's memory verse together, all from memory.",
            },
            {
              type: "prayer",
              text: "Dear God, thank you that you are always at work for good, even when things look their very worst. Thank you that nothing Joseph's brothers did could stop your plan for Joseph, or your promises to Abraham's family. Help us trust you the same way when hard things happen to us. Amen.",
            },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Genesis 37:12–36",
            topic: "Sold, but not forgotten",
            bigIdea: "Joseph's brothers, driven by hatred, sold him into slavery in Egypt and deceived their father into believing he was dead. It looked like the end for Joseph and for God's growing promise — but this sets up God working through Joseph's suffering for the good of his whole family, exactly as this week's memory verse describes.",
            learningIntentions: [
              "We are learning what happened when Joseph's brothers sold him into slavery.",
              "We are learning how the brothers deceived Jacob into believing Joseph was dead.",
              "I can explain that God was at work for good even through this terrible act, in line with this week's memory verse.",
            ],
            assessment: "Listen for whether students can retell how Joseph was sold, and whether they can explain what this week's memory verse means in light of it.",
            resources: [],
            script: [
              {
                heading: "Way in: imagining the plan",
                minutes: "2 min",
                teacherTalk: "Ask students to imagine what plan the brothers might have come up with, before revealing the real story.",
                activityNote: null,
                keyQuestion: "Yesterday we heard Joseph's brothers were plotting to get rid of him. If you were one of the brothers, what's the worst plan you can imagine them coming up with?",
                teacherGuidance: "Accept any guesses. The real story is bad enough without needing to imagine worse — use this to set up today's account.",
              },
              {
                heading: "Joseph is sold into slavery",
                minutes: "5–6 min",
                teacherTalk: "Read through Joseph being thrown into the well, sold to the Midianite traders, and taken to Egypt, and the brothers' lie to Jacob.",
                activityNote: null,
                keyQuestion: "From where we're sitting, this looks like one of the worst things that could happen to this family God had been growing all week. So why do you think this story is still part of God keeping his promise to Abraham?",
                teacherGuidance: "Guide toward: even though Joseph's brothers meant this for evil, God was already at work — planning to use Joseph's time in Egypt to eventually save his whole family from a coming famine. This is exactly what this week's memory verse has been pointing toward.",
              },
              {
                heading: "Memory verse from memory, and closing prayer",
                minutes: "3 min",
                teacherTalk: "Finish the week's memory verse fully from memory, then close together with the prayer in the app.",
                activityNote: "Use the say-it-from-memory activity block, then the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Lesson 18 continues Joseph's story in Egypt.",
          },
        },
      ],
    },
});
