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
// begin!" / Genesis 1-11) and Week 2 (Lesson 12, "Promises, promises,
// promises" / Genesis 12:1-9, memory verse switches to Numbers 23:19 CEV)
// are built. Lessons 13-20 (Weeks 3-10) still need to be built from the
// manual. Week 2 ships with no images: its PowerPoint (Lesson 12) contains
// only title/word cards, a SIN-CONSEQUENCES-GRACE cycle recap diagram, and
// a maze puzzle — no comic-style panel art — so per the visual style rules
// it's text/verse-forward, same as Term 3 Weeks 2-6. This is the
// highest-priority gap in the whole app right now.
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
});
