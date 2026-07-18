// ============================================================
// DEVOTION DATA — STUDENT-FACING PRESENTATION — TERM 3
// FILE STRUCTURE: one file per term (data_term3.js), each holding up to 10 weeks
// (= 10 lessons) of that term, merged into window.DEVOTIONS["Term 3"]. Load all
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
// TERM 3 SOURCE: Connect B2 Upper Primary teacher's manual — a different
// level/year of the same curriculum from Term 1/Term 2's B1 book, with its
// own Lesson numbering starting back at Lesson 1 (Exodus). Term 3 Week N =
// that book's Lesson N.
//
// TERM 3 STATUS: Weeks 1–6 built (Lessons 1–6: "Survivor: Egypt Begins,"
// "The Leader," "The Challenge," "The Rescue," "The Law," "The
// Tabernacle" — Exodus 1-14, 19-20, 25-40). Weeks 7-10 (Lessons 7-10) still
// need to be built once their manual pages/PowerPoints are available.
//
// RECURRING MEMORY VERSE FOR THIS TERM: confirmed directly from each
// lesson's own "Memory verse" box in the manual.
//   - Weeks 1–5: Deuteronomy 4:39 (CEV) — "So remember that the Lord is
//     the only true God, whether in the sky above or on the earth below."
//   - Week 6: the manual's own memory verse box changes to Psalm 117:2
//     (CEV) — "His love for us is wonderful, his faithfulness never ends.
//     Shout praises to the Lord!" This is a genuine change flagged in the
//     manual itself, not an error.
//
// NOTE ON IMAGES: Week 1 (originally built as standalone "Week 21" before
// this term-based numbering existed) kept its original wk21- key prefix
// when folded in and renumbered — the prefix is just a lookup key and does
// not need to match the week number. Weeks 2–6 ship without images: either
// no usable comic panels were found in the source PowerPoints, or (Weeks
// 4–6) the deck was actually a "Survivor" game-show visual aid with no
// comic panels at all, only decorative textures, per the visual style
// discipline rule.
// ============================================================

window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 3"] = Object.assign(window.DEVOTIONS["Term 3"] || {}, {
    "Week 1": {
      lessonTitle: "Survivor: Egypt Begins",
      passage: "Exodus 1:1—2:10",
      bigIdea: "God keeps his promises, even when things look hopeless.",
      source: "Connect B2 Upper Primary — Lesson 1",
      days: [
        // ---------------- DAY 1 (MON) ----------------
        {
          label: "Monday",
          theme: "A big family in Egypt",
          blocks: [
            { type: "story", text: "Welcome back! We're starting a brand new Bible story today, from a book called Exodus. It's about a man named Moses — but before we meet him, we need to go back and see how his people ended up in Egypt in the first place." },
            { type: "story", text: "Long ago, God promised a man named Abraham that his family would grow into a great nation, as many as the stars in the sky. Today's story shows that promise starting to come true — in a place nobody would have expected." },
            { type: "story", text: "Abraham's grandson Jacob had a son named Joseph, who became a powerful leader in Egypt. When hard times came, Jacob moved his whole family — eleven other sons and all their households, seventy people in total — down to Egypt to live near Joseph." },
            { type: "story", text: "Jacob's family settled in a region called Goshen — good land for grazing their sheep and goats. After so many years apart, and after everything Joseph's brothers had once done to him, the family was finally reunited, safe, and fed, all because of the position God had put Joseph in." },
            { type: "question", text: "Why do you think Jacob's family needed to move all the way to Egypt?", hint: "Guide toward: there was a severe famine in their own land, and Joseph — through God's plan — was in a position in Egypt to save his family from starving." },
            { type: "story", text: "Years passed. Jacob, Joseph, and all of that generation eventually died. But their families kept having children, and grandchildren, and great-grandchildren — until the whole region of Goshen, where they lived, was full of them." },
            { type: "story", text: "Jacob's twelve sons — Reuben, Simeon, Levi, Judah, and the rest — each became the father of a whole tribe. That's where the twelve tribes of Israel come from: an entire nation, all descended from one family that started with just seventy people in Goshen." },
            { type: "question", text: "Remember God's promise to Abraham, that his family would become a great nation, too many to count? What do you notice happening to that family here, generations later, in Egypt?", hint: "Guide toward: God's promise was quietly coming true, even in a foreign country, far from home — the Israelites were multiplying exactly as God had said they would." },
            { type: "activity", text: "Retelling relay: with a partner, take turns retelling today's story in just three sentences each — one about God's promise to Abraham, one about Jacob's move to Egypt, and one about how the family grew into twelve tribes. See how much detail you can pack in!" },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "activity", text: "Let's read this week's memory verse together two or three times, then try saying it once without looking!" },
            { type: "prayer", text: "Dear God, thank you that you are always faithful to your promises, even when we can't see it happening. Thank you for growing Abraham's family, just like you said you would. Help us trust that you keep your word. Amen." },
          ],
          lessonPlan: {
            duration: "10\u201315 minutes",
            passage: "Exodus 1:1\u20137",
            topic: "A big family in Egypt",
            bigIdea: "God keeps his promises, even when things look hopeless.",
            learningIntentions: [
              "We are learning how Abraham's family came to live in Egypt.",
              "We are learning that God's promise to Abraham — that his family would become a great nation — was coming true, generation by generation.",
              "I can explain why Jacob's family moved to Egypt.",
            ],
            assessment: "Check that students can retell, in their own words, how Jacob's family ended up in Egypt and can connect their growth in numbers to God's promise to Abraham.",
            resources: [
              "Screen/device to display the week's content (already embedded in the app)",
            ],
            script: [
              {
                heading: "Introducing a new story",
                minutes: "2\u20133 min",
                teacherTalk: "\u201cWe're starting a brand new Bible story today, from a book called Exodus, about a man named Moses. But first we need to see how his people ended up in Egypt.\u201d Briefly remind students of God's promise to Abraham (a great nation, descendants like the stars) if they covered this in earlier terms \u2014 otherwise just introduce it fresh.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Jacob's family moves to Egypt",
                minutes: "3\u20134 min",
                teacherTalk: "Tell the story of Jacob moving his family of seventy \u2014 eleven sons and their households \u2014 to Egypt to be near Joseph, who had become a powerful leader there. Mention that they settled in Goshen, good land for their flocks, and that the family was finally reunited after everything that had happened between Joseph and his brothers.",
                activityNote: null,
                keyQuestion: "Why do you think Jacob's family needed to move all the way to Egypt?",
                teacherGuidance: "Guide toward: there was a severe famine in their own land, and Joseph \u2014 through God's plan \u2014 was in a position in Egypt to save his family from starving.",
              },
              {
                heading: "A family that keeps growing",
                minutes: "3\u20134 min",
                teacherTalk: "\u201cYears passed. Jacob, Joseph, and all of that generation eventually died. But their families kept having children, and grandchildren, and great-grandchildren \u2014 until the whole region of Goshen was full of them.\u201d Explain that Jacob's twelve sons each became the father of a whole tribe \u2014 that's where the twelve tribes of Israel come from.",
                activityNote: null,
                keyQuestion: "Remember God's promise to Abraham, that his family would become a great nation? What do you notice happening to that family here, generations later, in Egypt?",
                teacherGuidance: "Guide toward: God's promise was quietly coming true, even in a foreign country, far from home \u2014 the Israelites were multiplying exactly as God had said they would.",
              },
              {
                heading: "Retelling relay",
                minutes: "2\u20133 min",
                teacherTalk: "Pair students up and have them retell today's story in three sentences each \u2014 God's promise to Abraham, Jacob's move to Egypt, and the growth into twelve tribes.",
                activityNote: "Use the built-in retelling relay activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Memory verse",
                minutes: "2\u20133 min",
                teacherTalk: "Introduce this unit's memory verse, Deuteronomy 4:39 (CEV). Read it together two or three times, then try it once without looking.",
                activityNote: "Use the built-in verse block, then the say-it-together activity that follows it in the app.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 2 introduces a new king of Egypt who turns on the Israelites and forces them into slavery \u2014 even though it doesn't stop their numbers from growing.",
          },
        },
        // ---------------- DAY 2 (TUE) ----------------
        {
          label: "Tuesday",
          theme: "A king who forgot",
          blocks: [
            { type: "story", text: "Last time, we saw Jacob's family grow into a huge nation while living in Egypt \u2014 just like God had promised Abraham it would. But years later, everything changed." },
            { type: "story", text: "A new king came to power in Egypt. He had never known Joseph, and he didn't care what Joseph had once done for the country. When he looked at the Israelites, all he saw was a huge crowd of foreigners \u2014 and he got scared." },
            { type: "question", text: "Why do you think this new king felt threatened by how big the Israelite family had grown?", hint: "Guide toward: he worried they were too powerful, that they might join Egypt's enemies in a war, or even take over. It's worth noticing the irony \u2014 the very growth that showed God keeping his promise is exactly what frightened the king." },
            { type: "image", key: "wk21-01-slave-labour", caption: "So the king made the Israelites into slaves, forcing them into hard labour building his cities." },
            { type: "story", text: "The Israelites were forced to build entire cities for the king — Pithom and Rameses — hauling bricks and stone under harsh taskmasters, day after day, with no mercy shown to them at all." },
            { type: "activity", text: "Everyone stand up. Mime stacking heavy bricks as fast as you can for five seconds... now stop and sit back down. Imagine doing that all day long, every single day, for years — that's what the Israelites endured." },
            { type: "story", text: "But here's the surprising part: the harder the Egyptians worked the Israelites, the more the Israelite families kept growing! Nothing the king did could stop it." },
            { type: "question", text: "The Israelites were suffering as slaves, yet they kept growing in number. What does that tell us about God's promises, even during hard and unfair times?", hint: "Guide toward: God's promise didn't stop just because life got hard \u2014 he was still faithfully keeping his word to Abraham, even in the middle of real suffering." },
            { type: "question", text: "The harder the king tried to crush the Israelites, the more God's promise kept coming true anyway. Why do you think the king couldn't stop something God had promised?", hint: "Guide toward: no earthly king, no matter how powerful, can overpower God's plans. This sets up the whole rest of the Exodus story — a human king going head-to-head with God, and losing." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "prayer", text: "Dear God, thank you that you don't stop keeping your promises, even when life feels hard or unfair. Help us to trust you when things around us don't make sense. Amen." },
          ],
          lessonPlan: {
            duration: "10\u201315 minutes",
            passage: "Exodus 1:8\u201314",
            topic: "A king who forgot",
            bigIdea: "God keeps his promises, even when things look hopeless.",
            learningIntentions: [
              "We are learning that a new king in Egypt turned against the Israelites out of fear.",
              "We are learning that the Israelites were forced into hard slave labour, but kept growing in number anyway.",
              "I can explain why the growth of Abraham's family both showed God's promise and provoked the king's fear.",
            ],
            assessment: "Listen for whether students can articulate why the king felt threatened, and whether they can connect the Israelites' continued growth under oppression back to God's faithfulness.",
            resources: [
              "Screen/device to display the comic panel and week's content (already embedded in the app)",
            ],
            script: [
              {
                heading: "Recap and a new king",
                minutes: "2\u20133 min",
                teacherTalk: "\u201cLast time, we saw Jacob's family grow into a huge nation while living in Egypt. But years later, everything changed.\u201d Introduce the new king who never knew Joseph and feared the Israelites.",
                activityNote: null,
                keyQuestion: "Why do you think this new king felt threatened by how big the Israelite family had grown?",
                teacherGuidance: "Guide toward: he worried they were too powerful, that they might join Egypt's enemies in a war, or even take over. Notice the irony \u2014 the very growth that showed God's promise is what frightened the king.",
              },
              {
                heading: "Forced into slavery",
                minutes: "3\u20134 min",
                teacherTalk: "Show the comic panel and explain that the king made the Israelites into slaves, forcing them into hard labour building his cities, Pithom and Rameses, under harsh taskmasters.",
                activityNote: "Show comic panel wk21-01-slave-labour.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Feel the labour",
                minutes: "1\u20132 min",
                teacherTalk: "Have the whole class stand and mime stacking heavy bricks as fast as they can for five seconds, then sit. Point out that the Israelites did that all day, every day, for years.",
                activityNote: "Use the built-in brick-miming activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Growing anyway",
                minutes: "3\u20134 min",
                teacherTalk: "\u201cThe harder the Egyptians worked the Israelites, the more the Israelite families kept growing! Nothing the king did could stop it.\u201d",
                activityNote: null,
                keyQuestion: "The Israelites were suffering as slaves, yet they kept growing in number. What does that tell us about God's promises, even during hard and unfair times?",
                teacherGuidance: "Guide toward: God's promise didn't stop just because life got hard \u2014 he was still faithfully keeping his word to Abraham, even in the middle of real suffering.",
              },
              {
                heading: "A king versus God",
                minutes: "2\u20133 min",
                teacherTalk: "Open the second question about why the king couldn't stop what God had promised.",
                activityNote: null,
                keyQuestion: "The harder the king tried to crush the Israelites, the more God's promise kept coming true anyway. Why do you think the king couldn't stop something God had promised?",
                teacherGuidance: "Guide toward: no earthly king, no matter how powerful, can overpower God's plans. This sets up the whole rest of the Exodus story \u2014 a human king going head-to-head with God, and losing.",
              },
              {
                heading: "Memory verse",
                minutes: "2 min",
                teacherTalk: "Repeat this unit's memory verse, Deuteronomy 4:39 (CEV), together as a class.",
                activityNote: "Use the built-in verse block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 3 shows the king's cruelty getting worse still, and a mother's brave plan to save her baby son.",
          },
        },
        // ---------------- DAY 3 (WED) ----------------
        {
          label: "Wednesday",
          theme: "A basket of hope",
          blocks: [
            { type: "story", text: "Last time, we saw the king of Egypt force the Israelites into hard slave labour \u2014 but they kept growing in number anyway. The king tried something sneakier next: he told two Hebrew midwives, named Shiphrah and Puah, to secretly kill any baby boy they helped deliver." },
            { type: "story", text: "But Shiphrah and Puah feared God more than they feared Pharaoh. They refused to obey his order, and let the baby boys live \u2014 even though disobeying the most powerful man in Egypt was incredibly dangerous for them." },
            { type: "question", text: "Why do you think the midwives were willing to disobey Pharaoh's direct order, even though it put them at risk?", hint: "Guide toward: their respect and fear of God went deeper than their fear of Pharaoh \u2014 they trusted that obeying God, even at personal cost, mattered more than obeying an unjust human command." },
            { type: "story", text: "So the king came up with an even crueller plan: he ordered that every baby boy born to the Israelites should be thrown into the Nile River." },
            { type: "question", text: "How do you think Israelite parents felt when they heard this terrible order?", hint: "Accept any answer that captures fear, grief, or desperation \u2014 it must have felt like their hope for the future was under attack." },
            { type: "story", text: "During this time, a mother from the tribe of Levi had a baby boy. She hid him at home for three months. When she couldn't hide him safely any longer, she made a basket out of reeds, covered it with tar so it wouldn't leak, and placed it among the reeds at the edge of the Nile River. The baby's older sister stood nearby, watching to see what would happen to him." },
            { type: "image", key: "wk21-02-basket-in-reeds", caption: "The baby's mother placed him in a basket among the reeds, and his sister watched from a distance." },
            { type: "question", text: "This mother trusted God with her baby's life in an incredibly scary situation. What do you think gave her the courage to do this?", hint: "Guide toward: faith that the same God who had kept his promise to Abraham could be trusted with her son's life too, even when she couldn't control what happened next." },
            { type: "activity", text: "Turn to a partner and name two acts of courage from today's story \u2014 one from the midwives, and one from the baby's mother. Talk together about which one you think would have been harder to do." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "prayer", text: "Dear God, please give us courage to trust you in scary situations, like the midwives and this mother did. Help us remember that you are watching over us even when we feel afraid. Amen." },
          ],
          lessonPlan: {
            duration: "10\u201315 minutes",
            passage: "Exodus 1:15\u201322; 2:1\u20134",
            topic: "A basket of hope",
            bigIdea: "God keeps his promises, even when things look hopeless.",
            learningIntentions: [
              "We are learning about Pharaoh's order to kill Israelite baby boys.",
              "We are learning how one mother bravely protected her son by placing him in a basket on the Nile.",
              "I can describe the courage and trust this mother showed in a frightening situation.",
            ],
            assessment: "Check that students can retell the basket scene accurately and can articulate what trust in God might have looked like for this mother.",
            resources: [
              "Screen/device to display the comic panel and week's content (already embedded in the app)",
            ],
            script: [
              {
                heading: "Shiphrah and Puah's courage",
                minutes: "3\u20134 min",
                teacherTalk: "Introduce Pharaoh's first, sneakier plan: telling the Hebrew midwives Shiphrah and Puah to secretly kill baby boys at birth. They feared God more than Pharaoh, and refused.",
                activityNote: null,
                keyQuestion: "Why do you think the midwives were willing to disobey Pharaoh's direct order, even though it put them at risk?",
                teacherGuidance: "Guide toward: their respect and fear of God went deeper than their fear of Pharaoh \u2014 they trusted that obeying God, even at personal cost, mattered more than obeying an unjust human command.",
              },
              {
                heading: "The king's cruel order",
                minutes: "2\u20133 min",
                teacherTalk: "\u201cSo the king came up with an even crueller plan: he ordered that every baby boy born to the Israelites should be thrown into the Nile River.\u201d",
                activityNote: null,
                keyQuestion: "How do you think Israelite parents felt when they heard this terrible order?",
                teacherGuidance: "Accept any answer that captures fear, grief, or desperation \u2014 it must have felt like their hope for the future was under attack.",
              },
              {
                heading: "A mother's brave plan",
                minutes: "3\u20134 min",
                teacherTalk: "Tell the story of the Levite mother hiding her son for three months, then placing him in a tar-covered basket among the reeds of the Nile, with his sister watching nearby. Show the comic panel.",
                activityNote: "Show comic panel wk21-02-basket-in-reeds.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Where did her courage come from?",
                minutes: "2\u20133 min",
                teacherTalk: "Pause on the enormity of what this mother did before opening the question to the class.",
                activityNote: null,
                keyQuestion: "This mother trusted God with her baby's life in an incredibly scary situation. What do you think gave her the courage to do this?",
                teacherGuidance: "Guide toward: faith that the same God who had kept his promise to Abraham could be trusted with her son's life too, even when she couldn't control what happened next.",
              },
              {
                heading: "Naming the courage",
                minutes: "1\u20132 min",
                teacherTalk: "Have partners name and compare the two acts of courage from today's story: the midwives and the mother.",
                activityNote: "Use the built-in partner-discussion activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Memory verse",
                minutes: "2 min",
                teacherTalk: "Repeat this unit's memory verse, Deuteronomy 4:39 (CEV), together as a class.",
                activityNote: "Use the built-in verse block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 4 reveals who finds the basket \u2014 and how this baby's rescue connects all the way back to God's promise to Abraham.",
          },
        },
        // ---------------- DAY 4 (THU) ----------------
        {
          label: "Thursday",
          theme: "Pulled out of the water",
          blocks: [
            { type: "story", text: "Last time, a Levite mother placed her baby son in a basket among the reeds of the Nile River, with his sister watching from a distance to see what would happen to him." },
            { type: "story", text: "Soon, one of Pharaoh's own daughters came down to the riverbank to bathe. Walking along the water's edge with her attendants, she spotted the strange little basket tucked among the reeds and sent a servant to fetch it for her." },
            { type: "story", text: "When she opened the basket, she found the crying baby inside \u2014 and she felt sorry for him. She knew right away he must be one of the Hebrew babies, the very babies her own father had ordered to be thrown into this same river." },
            { type: "story", text: "Just then, the baby's sister came up and bravely asked the princess, \u2018Do you want me to find a Hebrew woman to nurse the baby for you?\u2019 The princess agreed \u2014 and, without realising it, the girl went and brought back the baby's own mother to care for him!" },
            { type: "question", text: "Isn't that amazing? Out of everyone in Egypt, this baby's own mother ended up being the one who got to raise him \u2014 with Pharaoh's daughter's protection. What do you think this shows us about God?", hint: "Guide toward: God was working behind the scenes the whole time, even in what looked like pure chance, to protect and provide for this baby." },
            { type: "story", text: "When the boy was old enough, his mother brought him to Pharaoh's daughter, who adopted him as her own son. She named him Moses, because she said, \u2018I pulled him out of the water.\u2019" },
            { type: "question", text: "Years earlier, God had told Abraham that his family would live as slaves in a foreign land \u2014 but that God would rescue them and keep his promise. How does baby Moses's rescue connect to that promise?", hint: "Guide toward: this baby, saved in such an unlikely way and raised right inside Pharaoh's own palace, was being prepared by God to one day become exactly the person he would use to rescue his people and keep his promise to Abraham." },
            { type: "activity", text: "Whole-week recap relay: in table groups, retell the whole week's story in order, one sentence each \u2014 the family growing in Egypt, the cruel king and slavery, the basket in the reeds, and finally baby Moses being rescued and named. See if your group can get through it without missing a part!" },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together one more time \u2014 see if we can do it from memory!" },
            { type: "prayer", text: "Dear God, thank you that you had a plan all along for Moses, even when things looked hopeless. Thank you that you have a plan for us too. Help us trust you, even when we can't see how things will work out. Amen." },
          ],
          lessonPlan: {
            duration: "10\u201315 minutes",
            passage: "Exodus 2:5\u201310",
            topic: "Pulled out of the water",
            bigIdea: "God keeps his promises, even when things look hopeless.",
            learningIntentions: [
              "We are learning how Pharaoh's daughter found and adopted baby Moses.",
              "We are learning that God was working behind the scenes to protect Moses and provide for him through his own mother.",
              "I can connect Moses's rescue back to God's promise to Abraham about rescuing his people.",
            ],
            assessment: "Check that students can retell how Moses was found and named, and can explain in their own words how his rescue connects to God's bigger promise to Abraham.",
            resources: [
              "Screen/device to display the week's content (already embedded in the app)",
            ],
            script: [
              {
                heading: "The princess finds the basket",
                minutes: "3\u20134 min",
                teacherTalk: "\u201cOne of Pharaoh's own daughters came down to bathe in the river, noticed the basket, and found the crying baby inside. She felt sorry for him and knew he must be one of the Hebrew babies.\u201d",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "A surprising turn",
                minutes: "3\u20134 min",
                teacherTalk: "\u201cThe baby's sister bravely asked the princess if she wanted a Hebrew woman to nurse the baby \u2014 and without realising it, brought back the baby's own mother!\u201d",
                activityNote: null,
                keyQuestion: "Out of everyone in Egypt, this baby's own mother ended up being the one who got to raise him. What do you think this shows us about God?",
                teacherGuidance: "Guide toward: God was working behind the scenes the whole time, even in what looked like pure chance, to protect and provide for this baby.",
              },
              {
                heading: "Moses is named",
                minutes: "2\u20133 min",
                teacherTalk: "\u201cWhen the boy was old enough, his mother brought him to Pharaoh's daughter, who adopted him as her own son and named him Moses, because she said, \u2018I pulled him out of the water.\u2019\u201d",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Connecting back to the promise",
                minutes: "3\u20134 min",
                teacherTalk: "Remind students of God's promise to Abraham that his family would be rescued from slavery in a foreign land, then open the closing question.",
                activityNote: null,
                keyQuestion: "How does baby Moses's rescue connect to God's promise to Abraham?",
                teacherGuidance: "Guide toward: this baby, saved in such an unlikely way and raised right inside Pharaoh's own palace, was being prepared by God to one day become exactly the person he would use to rescue his people and keep his promise to Abraham.",
              },
              {
                heading: "Whole-week recap relay",
                minutes: "2\u20133 min",
                teacherTalk: "In table groups, have students retell the whole week's story in order, one sentence each: the family growing in Egypt, the cruel king and slavery, the basket in the reeds, and Moses's rescue and naming.",
                activityNote: "Use the built-in whole-week recap relay activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Memory verse, from memory",
                minutes: "2 min",
                teacherTalk: "Close the week by inviting the class to say the memory verse together entirely from memory, without looking at the screen.",
                activityNote: "Use the built-in verse block, then the say-it-together activity that follows it in the app.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Week 2 (Lesson 2) picks up with Moses as a grown man, his flight from Egypt, and God calling him at the burning bush.",
          },
        },
      ],
    },
    "Week 2": {
      lessonTitle: "The Leader",
      passage: "Exodus 3:1—4:17",
      bigIdea: "God chooses ordinary, reluctant people and equips them for his extraordinary plans.",
      source: "Connect B2 Upper Primary — Lesson 2",
      days: [
        // ---------------- DAY 1 (MON) ----------------
        {
          label: "Monday",
          theme: "A blazing bush",
          blocks: [
            { type: "story", text: "Last time, baby Moses was rescued from the Nile and raised in Pharaoh's own palace. Today's story jumps ahead many years, to when Moses had grown into a man." },
            { type: "story", text: "One day, Moses saw an Egyptian mistreating one of his own Israelite people, and in anger, Moses killed the Egyptian. Afraid of what Pharaoh would do, Moses fled far away to a land called Midian, where he became a shepherd, married a woman named Zipporah, and quietly looked after his father-in-law's flock for years." },
            { type: "story", text: "Think about that change: Moses had grown up with every comfort in Pharaoh's own palace. Now, decades later, he was just an ordinary shepherd in the middle of nowhere, herding sheep for his father-in-law. It must have felt like his exciting future was long behind him." },
            { type: "story", text: "One ordinary day, while Moses was out with the sheep near a mountain called Horeb, he noticed something strange: a bush was on fire, blazing away — but it never burned up. Curious, Moses decided to go over and take a closer look." },
            { type: "question", text: "Why do you think Moses stopped to look closer at the bush, instead of just walking past it?", hint: "Accept any answer that notices Moses's curiosity at something so unusual — a fire that didn't destroy what it was burning. This small choice to pay attention is what led him to encounter God." },
            { type: "story", text: "As Moses got closer, God called out to him from the bush: \u201cMoses, Moses!\u201d Then God said, \u201cDo not come any closer. Take off your sandals, because the place where you are standing is holy ground.\u201d God then said, \u201cI am the God of your father — the God of Abraham, Isaac, and Jacob.\u201d At this, Moses hid his face, because he was afraid to look directly at God." },
            { type: "activity", text: "Everyone, mime slipping off your shoes right now, just like Moses did. Then turn to a partner: why do you think taking off your shoes was such an important way to show respect for where Moses was standing?" },
            { type: "question", text: "What does God's instruction \u2014 to take off his sandals because the ground was holy \u2014 tell us about who God is?", hint: "Guide toward: God is holy and set apart from everything else, worthy of reverence and respect. The ordinary ground became special simply because God was present there." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "activity", text: "Let's read this week's memory verse together two or three times, then try saying it once without looking!" },
            { type: "prayer", text: "Dear God, thank you that you are holy, and that you still choose to speak to ordinary people like Moses \u2014 and like us. Help us to notice when you are trying to get our attention. Amen." },
          ],
          lessonPlan: {
            duration: "10\u201315 minutes",
            passage: "Exodus 3:1\u20136",
            topic: "A blazing bush",
            bigIdea: "God chooses ordinary, reluctant people and equips them for his extraordinary plans.",
            learningIntentions: [
              "We are learning how Moses ended up as a shepherd in Midian, far from Egypt.",
              "We are learning how God called out to Moses from a bush that burned but was never consumed.",
              "I can explain what God's instruction about holy ground tells us about who God is.",
            ],
            assessment: "Check that students can retell how Moses came to be in Midian and can describe what happened at the burning bush, including why God told him to remove his sandals.",
            resources: [
              "Screen/device to display the week's content (already embedded in the app)",
            ],
            script: [
              {
                heading: "From the palace to the desert",
                minutes: "3\u20134 min",
                teacherTalk: "\u201cLast time, baby Moses was rescued from the Nile and raised in Pharaoh's palace. Today we jump ahead many years.\u201d Explain that Moses killed an Egyptian who was mistreating an Israelite, then fled to Midian out of fear, where he became a shepherd and started a family. Pause on the huge change from palace prince to ordinary shepherd.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "A strange sight",
                minutes: "2\u20133 min",
                teacherTalk: "\u201cOne ordinary day, while Moses was out with the sheep near Mount Horeb, he noticed a bush blazing with fire \u2014 but it never burned up.\u201d",
                activityNote: null,
                keyQuestion: "Why do you think Moses stopped to look closer at the bush, instead of just walking past it?",
                teacherGuidance: "Accept any answer that notices Moses's curiosity at something so unusual. This small choice to pay attention is what led him to encounter God.",
              },
              {
                heading: "Holy ground",
                minutes: "3\u20134 min",
                teacherTalk: "\u201cAs Moses got closer, God called out to him from the bush and told him to take off his sandals, because the ground he stood on was holy.\u201d Mention that God identified himself as the God of Abraham, Isaac, and Jacob, and that Moses hid his face, afraid to look at God directly.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Taking off our shoes",
                minutes: "1\u20132 min",
                teacherTalk: "Have the class mime removing their shoes like Moses, then discuss with a partner why that gesture mattered.",
                activityNote: "Use the built-in shoes-off activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "What holy ground tells us",
                minutes: "2\u20133 min",
                teacherTalk: "Open the question about what this moment tells us about God's character.",
                activityNote: null,
                keyQuestion: "What does God's instruction about holy ground tell us about who God is?",
                teacherGuidance: "Guide toward: God is holy and set apart from everything else, worthy of reverence and respect. The ordinary ground became special simply because God was present there.",
              },
              {
                heading: "Memory verse",
                minutes: "2\u20133 min",
                teacherTalk: "Introduce this unit's memory verse, Deuteronomy 4:39 (CEV) \u2014 the same verse used across this unit. Read it together two or three times, then try it once without looking.",
                activityNote: "Use the built-in verse block, then the say-it-together activity that follows it in the app.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 2 hears God's rescue plan for Israel and the mission he gives Moses.",
          },
        },
        // ---------------- DAY 2 (TUE) ----------------
        {
          label: "Tuesday",
          theme: "God's rescue plan",
          blocks: [
            { type: "story", text: "Last time, God spoke to Moses out of a bush that burned without being burned up, and told him he was standing on holy ground. God wasn't finished talking \u2014 he had a plan to share." },
            { type: "story", text: "God told Moses, \u201cI have seen how my people are suffering as slaves in Egypt. I have heard their cries, and I have come down to rescue them and bring them into a good land, a land flowing with milk and honey.\u201d Then God said something that must have made Moses's heart race: \u201cSo now, go. I am sending you to Pharaoh, to bring my people out of Egypt.\u201d" },
            { type: "question", text: "How do you think Moses felt in that moment, when God told him rescuing his whole people was going to be his job?", hint: "Guide toward: Moses likely felt shocked, unqualified, and afraid \u2014 he was a shepherd hiding out in the desert, not a powerful leader, and Pharaoh was the most powerful man in Egypt." },
            { type: "story", text: "Moses's very first response was, \u201cWho am I, that I should go to Pharaoh and bring the Israelites out of Egypt?\u201d It's the first of many excuses Moses is about to make this week! God's answer was simple: \u201cI will be with you.\u201d The mission was never going to depend on how qualified Moses felt \u2014 it depended on God being with him." },
            { type: "activity", text: "Turn to a partner: if God asked you to do something that felt way too big for you \u2014 like it did for Moses \u2014 what's the first thing you think you'd say back? Share one word or phrase with your partner." },
            { type: "story", text: "Moses asked God, \u201cWhen I go to the Israelites and say their God sent me, and they ask me his name, what should I tell them?\u201d God replied, \u201cI AM WHO I AM. Tell them: I AM has sent me to you.\u201d God explained he was the same God who had made promises to Abraham, Isaac, and Jacob." },
            { type: "question", text: "What do you think it means that God calls himself \u2018I AM'?", hint: "Guide toward: God has always existed and never changes \u2014 he is the same faithful God who made promises long ago to Abraham, and he is still that same God now, showing up for his people exactly when they need him." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "prayer", text: "Dear God, thank you that you see and hear when your people are suffering, and that you always keep your promises. Thank you that you are the same faithful \u2018I AM' today, and that you are with us even when we feel unqualified. Amen." },
          ],
          lessonPlan: {
            duration: "10\u201315 minutes",
            passage: "Exodus 3:7\u201315",
            topic: "God's rescue plan",
            bigIdea: "God chooses ordinary, reluctant people and equips them for his extraordinary plans.",
            learningIntentions: [
              "We are learning that God saw and heard the suffering of the Israelites in Egypt.",
              "We are learning that God sent Moses with a mission to bring his people out of Egypt.",
              "I can explain what God's name \u2018I AM' tells us about who he is.",
            ],
            assessment: "Check that students can explain God's rescue plan and mission for Moses, and can say in their own words what the name \u2018I AM' reveals about God's character.",
            resources: [
              "Screen/device to display the week's content (already embedded in the app)",
            ],
            script: [
              {
                heading: "God has seen and heard",
                minutes: "3\u20134 min",
                teacherTalk: "\u201cGod told Moses, \u2018I have seen how my people are suffering as slaves in Egypt. I have heard their cries, and I have come down to rescue them.'\u201d",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "The mission",
                minutes: "2\u20133 min",
                teacherTalk: "\u201cGod said, \u2018So now, go. I am sending you to Pharaoh, to bring my people out of Egypt.'\u201d",
                activityNote: null,
                keyQuestion: "How do you think Moses felt in that moment, when God told him rescuing his whole people was going to be his job?",
                teacherGuidance: "Guide toward: Moses likely felt shocked, unqualified, and afraid \u2014 he was a shepherd hiding out in the desert, not a powerful leader, and Pharaoh was the most powerful man in Egypt.",
              },
              {
                heading: "\u2018Who am I?'",
                minutes: "2\u20133 min",
                teacherTalk: "\u201cMoses's first response was, \u2018Who am I, that I should go to Pharaoh?' God's answer was simple: \u2018I will be with you.' The mission never depended on Moses feeling qualified.\u201d",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Making it personal",
                minutes: "1\u20132 min",
                teacherTalk: "Have partners share what they'd say back if God asked them to do something that felt too big.",
                activityNote: "Use the built-in partner-sharing activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "I AM WHO I AM",
                minutes: "3\u20134 min",
                teacherTalk: "\u201cMoses asked what he should say God's name was. God replied, \u2018I AM WHO I AM \u2014 tell them I AM has sent me to you,' explaining he was the same God who had promised Abraham, Isaac, and Jacob.\u201d",
                activityNote: null,
                keyQuestion: "What do you think it means that God calls himself \u2018I AM'?",
                teacherGuidance: "Guide toward: God has always existed and never changes \u2014 he is the same faithful God who made promises long ago, still showing up for his people exactly when they need him.",
              },
              {
                heading: "Memory verse",
                minutes: "2 min",
                teacherTalk: "Repeat this unit's memory verse, Deuteronomy 4:39 (CEV), together as a class.",
                activityNote: "Use the built-in verse block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 3 shows Moses making excuses \u2014 and the signs God gives him to prove he really was sent by God.",
          },
        },
        // ---------------- DAY 3 (WED) ----------------
        {
          label: "Wednesday",
          theme: "Moses makes excuses",
          blocks: [
            { type: "story", text: "Last time, God told Moses his rescue plan and gave him a mission: go to Pharaoh and bring God's people out of Egypt. God told Moses to first gather the elders of Israel, explain the plan, and then go together to ask Pharaoh's permission to worship God in the wilderness." },
            { type: "story", text: "But Moses started to worry. \u201cWhat if they don't believe me, or listen to me?\u201d he asked God. So God gave Moses some proof to convince people God had really sent him: Moses's shepherd's staff turned into a snake, and then back into a staff again." },
            { type: "activity", text: "Everyone, pretend you're holding a shepherd's staff. Now imagine it suddenly turns into a snake right at your feet \u2014 act out Moses's reaction! (The Bible says he ran away from it.) Now freeze, reach down bravely, and pick it back up like Moses did when God told him to." },
            { type: "story", text: "Next, God made Moses's hand suddenly become covered in a skin disease, then healed it again, right in front of him. And God gave a third sign too: if people still didn't believe, Moses could pour water from the Nile onto the ground, and it would turn to blood." },
            { type: "question", text: "Why do you think God gave Moses these miraculous signs to perform, instead of just telling him to go and trust that people would believe him?", hint: "Guide toward: the signs gave Moses \u2014 and later, the Israelites and Pharaoh \u2014 real evidence that God's power was truly behind him. Seeing helped people believe." },
            { type: "question", text: "Moses kept coming up with reasons why he couldn't do what God asked. Have you ever felt like Moses \u2014 like you weren't good enough or ready enough for something you were asked to do?", hint: "Accept personal responses. Connect it back to the big idea: God equips the people he calls: he doesn't wait for us to feel confident before he can use us." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "prayer", text: "Dear God, thank you that you don't need us to feel brave or ready before you can use us. Help us to trust you, even when we feel unsure of ourselves. Amen." },
          ],
          lessonPlan: {
            duration: "10\u201315 minutes",
            passage: "Exodus 3:16\u20144:9",
            topic: "Moses makes excuses",
            bigIdea: "God chooses ordinary, reluctant people and equips them for his extraordinary plans.",
            learningIntentions: [
              "We are learning that Moses doubted whether the Israelites would believe or listen to him.",
              "We are learning about the miraculous signs God gave Moses as proof of his calling.",
              "I can connect Moses's self-doubt to times I've felt unsure about something I was asked to do.",
            ],
            assessment: "Check that students can describe at least one of the signs God gave Moses and can explain why God provided this kind of proof.",
            resources: [
              "Screen/device to display the week's content (already embedded in the app)",
            ],
            script: [
              {
                heading: "The plan so far",
                minutes: "2\u20133 min",
                teacherTalk: "Recap that God told Moses to gather the elders of Israel, explain the plan, and then go together to ask Pharaoh's permission to worship God in the wilderness.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Moses worries \u2014 and the first sign",
                minutes: "2\u20133 min",
                teacherTalk: "\u201cMoses worried, \u2018What if they don't believe me?' So God gave him a sign: his staff turning into a snake and back again.\u201d",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Act it out",
                minutes: "1\u20132 min",
                teacherTalk: "Have the class mime holding a staff that suddenly becomes a snake, acting out Moses's fear, then bravely picking it back up.",
                activityNote: "Use the built-in staff-to-snake activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Two more signs",
                minutes: "2\u20133 min",
                teacherTalk: "\u201cGod made Moses's hand become diseased, then healed it. And a third sign: water from the Nile poured on the ground would turn to blood.\u201d",
                activityNote: null,
                keyQuestion: "Why do you think God gave Moses these miraculous signs, instead of just telling him to trust that people would believe him?",
                teacherGuidance: "Guide toward: the signs gave Moses \u2014 and later the Israelites and Pharaoh \u2014 real evidence that God's power was truly behind him. Seeing helped people believe.",
              },
              {
                heading: "Making it personal",
                minutes: "3\u20134 min",
                teacherTalk: "Invite students to reflect honestly on times they've felt unqualified or unready for something.",
                activityNote: null,
                keyQuestion: "Have you ever felt like Moses \u2014 like you weren't good enough or ready enough for something you were asked to do?",
                teacherGuidance: "Accept personal responses. Connect it back to the big idea: God equips the people he calls: he doesn't wait for us to feel confident before he can use us.",
              },
              {
                heading: "Memory verse",
                minutes: "2 min",
                teacherTalk: "Repeat this unit's memory verse, Deuteronomy 4:39 (CEV), together as a class.",
                activityNote: "Use the built-in verse block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 4 shows Moses's final excuse \u2014 and how God provides his brother Aaron to help him.",
          },
        },
        // ---------------- DAY 4 (THU) ----------------
        {
          label: "Thursday",
          theme: "Moses and his helper",
          blocks: [
            { type: "story", text: "Last time, God gave Moses miraculous signs to prove that God had really sent him. But Moses had one more excuse left." },
            { type: "story", text: "\u201cPardon me, Lord,\u201d Moses said, \u201cI have never been a good speaker. I am slow of speech and tongue.\u201d He begged God to send someone else instead of him." },
            { type: "story", text: "This time, God's anger burned against Moses \u2014 after everything God had shown him, Moses was still trying to wriggle out of the job! But even angry, God didn't give up on Moses or walk away from the plan." },
            { type: "story", text: "Instead, God had an answer ready. He reminded Moses that his brother Aaron was already on his way to meet him, and that Aaron could speak on Moses's behalf, while Moses told him what to say and performed the signs God had given him. Together, the two brothers would go to Pharaoh." },
            { type: "question", text: "What does it show us about God that he had already arranged for Aaron to help Moses \u2014 even before Moses asked for help, and even while God was frustrated with him?", hint: "Guide toward: God knows our weaknesses ahead of time and provides exactly what we need to obey him. His patience and his provision go together \u2014 he doesn't demand that we do everything completely alone, even when he's disappointed in our reluctance." },
            { type: "activity", text: "Whole-week recap relay: in table groups, retell this whole week's story in order, one sentence each \u2014 the burning bush and holy ground, God's rescue plan and the name \u2018I AM', Moses's doubts and the three signs, and finally God providing Aaron. See if your group can get all the way through!" },
            { type: "question", text: "Think back over this whole week's story. Moses started out hiding by a burning bush, full of excuses and doubts. By the end, was he ready to go? What changed?", hint: "Guide toward: Moses wasn't naturally brave or qualified, but God's patient reassurance, the signs, and Aaron's help gave him what he needed to obey \u2014 even while he was probably still nervous." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together one more time \u2014 see if we can do it from memory!" },
            { type: "prayer", text: "Dear God, thank you that you knew exactly what Moses needed, even before he asked, and that you didn't give up on him even when he kept making excuses. Thank you that you know what we need too. Help us to trust you and obey, even when we feel unsure. Amen." },
          ],
          lessonPlan: {
            duration: "10\u201315 minutes",
            passage: "Exodus 4:10\u201317",
            topic: "Moses and his helper",
            bigIdea: "God chooses ordinary, reluctant people and equips them for his extraordinary plans.",
            learningIntentions: [
              "We are learning about Moses's final excuse \u2014 that he wasn't a good speaker.",
              "We are learning how God provided Aaron to help Moses speak to Pharaoh.",
              "I can explain what God providing Aaron shows us about how God equips the people he calls.",
            ],
            assessment: "Check that students can explain Moses's final objection and describe how God's provision of Aaron addressed it, and can summarise how Moses changed across the week.",
            resources: [
              "Screen/device to display the week's content (already embedded in the app)",
            ],
            script: [
              {
                heading: "One last excuse",
                minutes: "2\u20133 min",
                teacherTalk: "\u201cMoses said, \u2018Pardon me, Lord, I have never been a good speaker. I am slow of speech and tongue.' He begged God to send someone else instead.\u201d",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "God's anger \u2014 and God's provision",
                minutes: "2\u20133 min",
                teacherTalk: "\u201cGod's anger burned against Moses for still trying to get out of the job \u2014 but even angry, God didn't give up on him.\u201d Explain that God reminded Moses his brother Aaron was already on his way to meet him, and that Aaron could speak on Moses's behalf while Moses told him what to say.",
                activityNote: null,
                keyQuestion: "What does it show us about God that he had already arranged for Aaron to help Moses, even before Moses asked, and even while God was frustrated with him?",
                teacherGuidance: "Guide toward: God knows our weaknesses ahead of time and provides exactly what we need to obey him. His patience and his provision go together \u2014 he doesn't demand that we do everything completely alone, even when he's disappointed in our reluctance.",
              },
              {
                heading: "Whole-week recap relay",
                minutes: "2\u20133 min",
                teacherTalk: "In table groups, have students retell the whole week's story in order: the burning bush and holy ground, God's rescue plan and the name \u2018I AM', Moses's doubts and the three signs, and God providing Aaron.",
                activityNote: "Use the built-in whole-week recap relay activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Looking back over the week",
                minutes: "2\u20133 min",
                teacherTalk: "Invite students to reflect on how Moses changed across the whole week's story, from hiding by the bush to finally being ready to go.",
                activityNote: null,
                keyQuestion: "Moses started out full of excuses and doubts. By the end, was he ready to go? What changed?",
                teacherGuidance: "Guide toward: Moses wasn't naturally brave or qualified, but God's patient reassurance, the signs, and Aaron's help gave him what he needed to obey \u2014 even while he was probably still nervous.",
              },
              {
                heading: "Memory verse, from memory",
                minutes: "2 min",
                teacherTalk: "Close the week by inviting the class to say the memory verse together entirely from memory, without looking at the screen.",
                activityNote: "Use the built-in verse block, then the say-it-together activity that follows it in the app.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Week 3 (Lesson 3) picks up with Moses and Aaron confronting Pharaoh, and the start of the plagues on Egypt.",
          },
        },
      ],
    },
    "Week 3": {
      "lessonTitle": "The Challenge",
      "passage": "Exodus 7:1\u201410:29",
      "bigIdea": "God is more powerful than every false god Egypt worshipped \u2014 and no amount of stubbornness could stop his plan.",
      "source": "Connect B2 Upper Primary \u2014 Lesson 3",
      "days": [
        {
          "label": "Monday",
          "theme": "Let my people go!",
          "blocks": [
            {
              "type": "story",
              "text": "Last week, Moses ran out of excuses at the burning bush, and God provided his brother Aaron to help him speak. Today, the two brothers finally stand face to face with the most powerful man in Egypt \u2014 Pharaoh, the king."
            },
            {
              "type": "story",
              "text": "Before they went in, God warned Moses exactly what to expect. He told Moses that Pharaoh's heart would stay hard, and that God himself would keep multiplying signs and wonders in Egypt \u2014 not because he'd failed, but because he had a bigger plan: to make sure all of Egypt knew, without any doubt, exactly who the true God really was."
            },
            {
              "type": "story",
              "text": "So Moses and Aaron went in before Pharaoh, just as God had commanded. Aaron threw down his shepherd's staff, and it became a snake right there on the palace floor. But Pharaoh called for his own wise men and magicians, and they did the same trick with their secret arts \u2014 each of their staffs became a snake too."
            },
            {
              "type": "story",
              "text": "Then something remarkable happened: Aaron's snake swallowed up every single one of the magicians' snakes. Even after seeing that, Pharaoh's heart stayed hard. He wouldn't listen to Moses and Aaron, exactly as the Lord had said would happen."
            },
            {
              "type": "question",
              "text": "Aaron's snake swallowed all of the magicians' snakes \u2014 a clear sign of whose power was greater. Why do you think Pharaoh still refused to listen, even after seeing that?",
              "hint": "Guide toward: the sign should have convinced anyone watching honestly, but Pharaoh's pride and stubbornness weren't really about evidence \u2014 he simply didn't want to give up his slaves or admit another king had power over him. This sets the pattern for the whole lesson: God keeps proving his power, and Pharaoh keeps refusing anyway."
            },
            {
              "type": "story",
              "text": "The next morning, Moses and Aaron met Pharaoh by the Nile River and gave him fair warning: let God's people go, or the Lord would turn every drop of water in Egypt \u2014 the whole Nile, every canal, pond, and even the water stored in jars \u2014 into blood."
            },
            {
              "type": "story",
              "text": "Pharaoh refused, so Aaron struck the water of the Nile with his staff in front of the king and his officials. Instantly the whole river turned to blood. The fish in it died, the river stank so badly no one could bear to drink from it, and the Egyptians had to dig along the riverbank just to find water that wasn't blood."
            },
            {
              "type": "story",
              "text": "But Pharaoh's own magicians used their secret arts to do the same trick with a small amount of water \u2014 so Pharaoh's heart stayed hard, and he simply turned and walked back into his palace as if nothing serious had happened. Seven whole days went by with the Nile still like this."
            },
            {
              "type": "question",
              "text": "Imagine living in Egypt for seven days with no clean water to drink, while Pharaoh just walked back into his palace. What does that tell you about the cost of one man's stubborn pride?",
              "hint": "Guide toward: ordinary Egyptian families suffered real hardship because of Pharaoh's refusal to listen \u2014 his stubbornness wasn't a private matter, it affected everyone around him. It also shows he cared more about not losing face than about his own people's suffering."
            },
            {
              "type": "story",
              "text": "So the Lord sent Moses back to Pharaoh with another warning: let my people go, or frogs would swarm out of the Nile into every single corner of Egypt \u2014 into people's houses, bedrooms, and beds, into the ovens and kneading bowls where bread was made, and even into Pharaoh's own palace."
            },
            {
              "type": "story",
              "text": "Pharaoh still refused, so Aaron stretched out his hand over the waters of Egypt, and frogs came up and covered the whole land. The magicians copied this too, bringing up even more frogs \u2014 but this time, for the first time, Pharaoh cracked."
            },
            {
              "type": "story",
              "text": "He called for Moses and Aaron and begged them to pray to the Lord to take the frogs away, promising that he would let the people go. Moses let Pharaoh choose the exact time, and the next day, the frogs died everywhere except in the Nile itself. The Egyptians piled up the dead frogs into stinking heaps across the land."
            },
            {
              "type": "story",
              "text": "But the moment Pharaoh saw there was relief, he hardened his heart all over again and refused to keep his promise \u2014 exactly as the Lord had said would happen."
            },
            {
              "type": "activity",
              "text": "Freeze-frame the frogs! In small groups, act out being an Egyptian family who wakes up to find frogs in your bed, hopping out of your oven, and floating in your kitchen bowls. When I call out \u201cFrogs!\u201d, freeze in your funniest startled pose."
            },
            {
              "type": "verse",
              "reference": "Deuteronomy 4:39 (CEV)",
              "text": "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d"
            },
            {
              "type": "activity",
              "text": "Let's read this week's memory verse together two or three times, then try saying it once without looking!"
            },
            {
              "type": "prayer",
              "text": "Dear God, thank you that you are more powerful than every false god and every stubborn heart. Thank you that you kept your promise to rescue your people, even when Pharaoh refused again and again. Help us to listen to you the first time, instead of only turning to you when things get hard. Amen."
            }
          ],
          "lessonPlan": {
            "duration": "10\u201315 minutes",
            "passage": "Exodus 7:1\u20138:15",
            "topic": "Let my people go!",
            "bigIdea": "God is more powerful than every false god Egypt worshipped \u2014 and no amount of stubbornness could stop his plan.",
            "learningIntentions": [
              "We are learning how Moses and Aaron first confronted Pharaoh, and how his heart stayed hard even after Aaron's staff-snake swallowed the magicians' snakes.",
              "We are learning about the first two plagues \u2014 blood and frogs \u2014 and how Pharaoh's promises during the frogs plague didn't last.",
              "I can describe the pattern of Pharaoh refusing, God sending a plague, and Pharaoh's heart hardening again."
            ],
            "assessment": "Check that students can describe the confrontation with the staff-snake and retell the first two plagues in order, and can explain in their own words why Pharaoh's change of heart during the frogs plague didn't last.",
            "resources": [
              "Screen/device to display the week's content (already embedded in the app)"
            ],
            "script": [
              {
                "heading": "Face to face with Pharaoh",
                "minutes": "2\u20133 min",
                "teacherTalk": "Recap that Moses and Aaron are now ready to confront Pharaoh. Tell how Aaron's staff became a snake, how the magicians copied the trick, and how Aaron's snake swallowed all of theirs \u2014 yet Pharaoh's heart stayed hard.",
                "activityNote": null,
                "keyQuestion": "Aaron's snake swallowed all of the magicians' snakes \u2014 why do you think Pharaoh still refused to listen, even after seeing that?",
                "teacherGuidance": "Guide toward: the sign should have convinced anyone watching honestly, but Pharaoh's pride and stubbornness weren't really about evidence \u2014 he simply didn't want to give up his slaves or admit another king had power over him."
              },
              {
                "heading": "Plague 1: Blood",
                "minutes": "3 min",
                "teacherTalk": "Tell how Moses and Aaron warned Pharaoh at the Nile, how Aaron struck the water and it turned to blood, killing the fish and making the water undrinkable \u2014 but the magicians copied it, so Pharaoh's heart stayed hard for seven days.",
                "activityNote": null,
                "keyQuestion": "Imagine living in Egypt for seven days with no clean water to drink, while Pharaoh just walked back into his palace. What does that tell you about the cost of one man's stubborn pride?",
                "teacherGuidance": "Guide toward: ordinary Egyptian families suffered real hardship because of Pharaoh's refusal to listen \u2014 his stubbornness wasn't a private matter, it affected everyone around him."
              },
              {
                "heading": "Plague 2: Frogs",
                "minutes": "3\u20134 min",
                "teacherTalk": "Tell how frogs swarmed every corner of Egypt, how Pharaoh finally begged Moses and Aaron to pray for relief and promised to let the people go \u2014 but broke his promise the moment the frogs were gone.",
                "activityNote": "Use the built-in freeze-frame frogs activity block.",
                "keyQuestion": null,
                "teacherGuidance": null
              },
              {
                "heading": "Memory verse",
                "minutes": "2\u20133 min",
                "teacherTalk": "Introduce (or continue) this week's memory verse and practise it together as a class.",
                "activityNote": "Use the built-in verse block, then the say-it-together activity that follows it in the app.",
                "keyQuestion": null,
                "teacherGuidance": null
              }
            ],
            "whereToNext": "Day 2 continues the plagues with gnats, flies, and diseased livestock, and shows God protecting his own people in Goshen."
          }
        },
        {
          "label": "Tuesday",
          "theme": "Bugs, flies, and sick animals",
          "blocks": [
            {
              "type": "story",
              "text": "Last time, frogs covered the whole land of Egypt, and Pharaoh promised to let God's people go \u2014 then broke that promise the moment the frogs were gone. Today, the plagues keep coming, but something new starts to happen too."
            },
            {
              "type": "story",
              "text": "God told Aaron to strike the dust of the ground with his staff. All the dust throughout Egypt turned into gnats, swarming over people and animals everywhere. This time, Pharaoh's magicians tried their secret arts \u2014 but they couldn't do it. Even they had to admit to Pharaoh that this had to be God's own doing."
            },
            {
              "type": "question",
              "text": "Pharaoh's own magicians \u2014 the people he trusted most \u2014 told him this plague was from God. Why do you think that mattered, and why do you think Pharaoh still refused to listen?",
              "hint": "Guide toward: it removed any excuse Pharaoh might have had \u2014 he wasn't just facing Moses's word, but his own trusted advisors admitting God's power. His continued refusal became entirely his own stubborn choice, not a lack of evidence."
            },
            {
              "type": "story",
              "text": "Next came flies \u2014 but this time God did something different. He promised that Goshen, the region where the Israelites lived, would have no flies at all, so that Pharaoh would know the Lord was at work right there in the middle of Egypt. Pharaoh still refused, and thick swarms of flies filled his palace and covered the ground \u2014 but Goshen stayed completely clear."
            },
            {
              "type": "story",
              "text": "Pharaoh tried bargaining this time. First he offered to let the Israelites sacrifice to God without leaving Egypt. Then he offered to let them go a little way into the desert \u2014 but only if Moses would pray for the flies to stop. The moment Moses prayed and the flies left, Pharaoh's heart hardened again, and he refused to let the people go, just like before."
            },
            {
              "type": "story",
              "text": "Then God warned Pharaoh about a terrible disease that would strike every animal in Egypt \u2014 horses, donkeys, camels, cattle, sheep, and goats \u2014 but not a single animal belonging to Israel would be touched. The next day, exactly as promised, all of Egypt's livestock died. Pharaoh even sent people to check on Israel's animals in Goshen \u2014 not one of them had died. Yet his heart stayed hard, and he still wouldn't let the people go."
            },
            {
              "type": "question",
              "text": "Three plagues in a row now, God has drawn a clear, obvious line between Goshen, where the Israelites lived, and the rest of Egypt. Why do you think God kept making that difference so obvious?",
              "hint": "Guide toward: it proved these plagues weren't random bad luck or coincidence, but entirely under God's control \u2014 he was showing his power and specifically protecting his own people, leaving Pharaoh with no excuse to pretend it was just misfortune."
            },
            {
              "type": "activity",
              "text": "Talk with a partner: if you were an Egyptian farmer who had just lost every single one of your animals, but you noticed your Israelite neighbour's animals were completely fine \u2014 what would you start to wonder about the God of Israel?"
            },
            {
              "type": "verse",
              "reference": "Deuteronomy 4:39 (CEV)",
              "text": "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d"
            },
            {
              "type": "activity",
              "text": "Say this week's memory verse together, and see if anyone can say it without looking at the screen yet!"
            },
            {
              "type": "prayer",
              "text": "Dear God, thank you that nothing that happens is outside of your control \u2014 not even swarms of insects or sick animals. Thank you for how carefully you looked after your people in Goshen. Help us trust that you're looking after us too, even when things around us feel chaotic. Amen."
            }
          ],
          "lessonPlan": {
            "duration": "10\u201315 minutes",
            "passage": "Exodus 8:16\u20139:7",
            "topic": "Bugs, flies, and sick animals",
            "bigIdea": "God is more powerful than every false god Egypt worshipped \u2014 and no amount of stubbornness could stop his plan.",
            "learningIntentions": [
              "We are learning about the plagues of gnats, flies, and diseased livestock, and how each one Pharaoh's own advisors or actions confirmed came from God.",
              "We are learning how God specifically protected the Israelites in Goshen during these plagues.",
              "I can explain why God made the difference between Goshen and the rest of Egypt so obvious."
            ],
            "assessment": "Check that students can describe all three plagues in this section and explain what the protection of Goshen showed about God's power and control.",
            "resources": [
              "Screen/device to display the week's content (already embedded in the app)"
            ],
            "script": [
              {
                "heading": "Plague 3: Gnats",
                "minutes": "2\u20133 min",
                "teacherTalk": "Tell how Aaron struck the dust and it became gnats across Egypt, and how this time the magicians couldn't copy it \u2014 they had to admit to Pharaoh that this had to be God's own doing.",
                "activityNote": null,
                "keyQuestion": "Pharaoh's own magicians told him this plague was from God. Why do you think that mattered, and why do you think Pharaoh still refused to listen?",
                "teacherGuidance": "Guide toward: it removed any excuse Pharaoh might have had \u2014 his continued refusal became entirely his own stubborn choice, not a lack of evidence."
              },
              {
                "heading": "Plague 4: Flies (and Goshen protected)",
                "minutes": "3 min",
                "teacherTalk": "Tell how God promised Goshen would have no flies, how Pharaoh bargained and offered partial deals, and how his heart hardened again the moment relief came.",
                "activityNote": null,
                "keyQuestion": null,
                "teacherGuidance": null
              },
              {
                "heading": "Plague 5: Livestock",
                "minutes": "3 min",
                "teacherTalk": "Tell how every Egyptian animal died from disease, but not one Israelite animal was touched \u2014 Pharaoh even checked and confirmed it himself, yet still refused.",
                "activityNote": null,
                "keyQuestion": "Three plagues in a row now, God has drawn a clear line between Goshen and the rest of Egypt. Why do you think he kept making that difference so obvious?",
                "teacherGuidance": "Guide toward: it proved these plagues weren't random bad luck, but entirely under God's control \u2014 leaving Pharaoh with no excuse to pretend it was just misfortune."
              },
              {
                "heading": "Partner talk and memory verse",
                "minutes": "3\u20134 min",
                "teacherTalk": "Run the partner discussion activity, then practise the memory verse together.",
                "activityNote": "Use the built-in partner-talk activity block, then the built-in verse block and say-it-together activity.",
                "keyQuestion": null,
                "teacherGuidance": null
              }
            ],
            "whereToNext": "Day 3 continues with boils, the worst hailstorm in Egypt's history, and a devastating swarm of locusts."
          }
        },
        {
          "label": "Wednesday",
          "theme": "Boils, hail, and locusts",
          "blocks": [
            {
              "type": "story",
              "text": "So far, God had sent gnats, flies, and a disease that wiped out Egypt's livestock \u2014 all while Pharaoh kept refusing to let God's people go. Today, the plagues get even more serious."
            },
            {
              "type": "story",
              "text": "Moses threw handfuls of ashes from a furnace into the air right in front of Pharaoh. The ash became a fine dust that settled over all of Egypt, and painful, festering boils broke out on people and animals everywhere. This time, even Pharaoh's own magicians couldn't stand before Moses \u2014 they were covered in boils themselves, just like everyone else."
            },
            {
              "type": "story",
              "text": "Up until now, the Bible has said again and again that Pharaoh's own heart was hard \u2014 his own stubborn choice. But from this point in the story, it starts to say that the Lord hardened Pharaoh's heart. Pharaoh had chosen stubbornness for so long that God confirmed him in the choice he kept making for himself."
            },
            {
              "type": "story",
              "text": "Next, God warned Pharaoh that the worst hailstorm in Egypt's entire history was coming \u2014 hail mixed with fire, striking down anyone or anything left out in the open fields. This time, God gave a warning ahead of time: bring your animals and workers inside for shelter. Some of Pharaoh's officials believed the warning and obeyed. Others ignored it completely and left everything out in the open."
            },
            {
              "type": "story",
              "text": "The hail fell exactly as God had said, flattening crops and stripping trees across the whole land \u2014 except in Goshen, where the Israelites lived, where there was no hail at all. Terrified, Pharaoh called for Moses, admitted he had sinned this time, and begged him to pray for the storm to stop, promising once again to let the people go."
            },
            {
              "type": "story",
              "text": "Moses prayed, and the storm stopped completely. But the very moment it did, Pharaoh sinned again \u2014 he hardened his heart and broke his promise, exactly as he had every time before."
            },
            {
              "type": "question",
              "text": "Pharaoh kept promising to let Israel go the moment a plague hit hard, then broke his promise the instant the trouble stopped \u2014 over and over. What does that pattern tell us about the difference between real regret and only being sorry you got caught?",
              "hint": "Guide toward: Pharaoh's \u2018sorry' was about escaping pain, not about truly caring for the Israelites or turning back to God \u2014 real repentance leads to lasting change in how you act, not just relief-driven bargaining that disappears the moment things get easier."
            },
            {
              "type": "activity",
              "text": "Act it out with a partner: take turns being \u2018Pharaoh', dramatically begging for the trouble to stop and promising to let the people go \u2014 then the instant the trouble stops, flip around, change your mind, and cross your arms stubbornly!"
            },
            {
              "type": "story",
              "text": "Even Pharaoh's own officials had had enough, begging him to let the people go before Egypt was completely ruined. So Pharaoh called Moses and Aaron back and asked exactly who would be going. Moses answered: everyone \u2014 young and old, sons and daughters, and all their flocks and herds \u2014 because they were going to hold a festival to the Lord."
            },
            {
              "type": "story",
              "text": "Furious, Pharaoh only agreed to let the men go, and had Moses and Aaron thrown out of his presence. So the Lord sent a strong east wind that blew locusts into Egypt \u2014 more locusts than anyone had ever seen before or would ever see again. They covered the ground until the land looked black, and ate every single plant and every piece of fruit left after the hailstorm, until nothing green remained anywhere in Egypt."
            },
            {
              "type": "story",
              "text": "Pharaoh hastily called Moses and Aaron back one more time, admitting he had sinned against the Lord and against them, and begging them to pray for forgiveness. Moses prayed, and the Lord sent a powerful wind that swept every last locust into the Red Sea \u2014 not one was left anywhere in Egypt. But once again, the Lord hardened Pharaoh's heart, and he would not let the people go."
            },
            {
              "type": "verse",
              "reference": "Deuteronomy 4:39 (CEV)",
              "text": "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d"
            },
            {
              "type": "activity",
              "text": "Let's say this week's memory verse together \u2014 try it one more time, and see how many people can say it from memory now."
            },
            {
              "type": "prayer",
              "text": "Dear God, thank you that you are patient, even with people who keep breaking their promises to you. Help us to be honest with you when we're sorry \u2014 not just sorry the trouble is happening, but truly ready to change. Thank you that your plan to rescue your people never stopped moving forward, no matter how many times Pharaoh said no. Amen."
            }
          ],
          "lessonPlan": {
            "duration": "10\u201315 minutes",
            "passage": "Exodus 9:8\u201310:20",
            "topic": "Boils, hail, and locusts",
            "bigIdea": "God is more powerful than every false god Egypt worshipped \u2014 and no amount of stubbornness could stop his plan.",
            "learningIntentions": [
              "We are learning about the plagues of boils, hail, and locusts, and how each one grew more serious than the last.",
              "We are noticing the shift in the story from Pharaoh hardening his own heart to the Lord hardening Pharaoh's heart.",
              "I can explain the difference between Pharaoh's fear-driven promises and genuine repentance."
            ],
            "assessment": "Check that students can describe the three plagues in order and can explain, in their own words, why Pharaoh's repeated promises during the hail and locusts didn't reflect real change.",
            "resources": [
              "Screen/device to display the week's content (already embedded in the app)"
            ],
            "script": [
              {
                "heading": "Plague 6: Boils",
                "minutes": "2 min",
                "teacherTalk": "Tell how Moses threw ashes into the air and boils broke out on people and animals, even affecting the magicians themselves. Note the shift in the text \u2014 now it says the Lord hardened Pharaoh's heart.",
                "activityNote": null,
                "keyQuestion": null,
                "teacherGuidance": null
              },
              {
                "heading": "Plague 7: Hail",
                "minutes": "3 min",
                "teacherTalk": "Tell how God warned of the worst hailstorm in Egypt's history, how some officials heeded the warning and some didn't, how Goshen was untouched, and how Pharaoh's promise collapsed the moment the storm stopped.",
                "activityNote": null,
                "keyQuestion": "Pharaoh kept promising to let Israel go the moment a plague hit hard, then broke his promise the instant the trouble stopped. What does that tell us about the difference between real regret and only being sorry you got caught?",
                "teacherGuidance": "Guide toward: Pharaoh's \u2018sorry' was about escaping pain, not truly caring for the Israelites or turning back to God \u2014 real repentance leads to lasting change, not relief-driven bargaining."
              },
              {
                "heading": "Act it out: fear vs. real change",
                "minutes": "2 min",
                "teacherTalk": "Run the partner act-it-out activity dramatising Pharaoh's pattern of promising then reneging.",
                "activityNote": "Use the built-in act-it-out activity block.",
                "keyQuestion": null,
                "teacherGuidance": null
              },
              {
                "heading": "Plague 8: Locusts",
                "minutes": "3 min",
                "teacherTalk": "Tell how Pharaoh's own officials begged him to relent, how his final offer excluded the flocks and herds, and how the locust swarm stripped Egypt of everything green before being swept into the Red Sea \u2014 yet Pharaoh's heart was hardened again.",
                "activityNote": null,
                "keyQuestion": null,
                "teacherGuidance": null
              },
              {
                "heading": "Memory verse",
                "minutes": "2 min",
                "teacherTalk": "Practise the memory verse together, encouraging students to try it from memory.",
                "activityNote": "Use the built-in verse block and say-it-together activity.",
                "keyQuestion": null,
                "teacherGuidance": null
              }
            ],
            "whereToNext": "Day 4 brings the ninth and final plague of this lesson \u2014 three days of total darkness \u2014 and looks back over the whole week's story."
          }
        },
        {
          "label": "Thursday",
          "theme": "Three days of darkness",
          "blocks": [
            {
              "type": "story",
              "text": "This week we've watched plague after plague strike Egypt \u2014 blood, frogs, gnats, flies, sick animals, boils, hail, and locusts \u2014 eight plagues so far, and Pharaoh has refused every single time to fully let God's people go. Today brings the ninth."
            },
            {
              "type": "story",
              "text": "Moses stretched out his hand toward the sky, and total darkness fell across the whole of Egypt \u2014 so thick and heavy that no one could see anyone else or move from their place for three whole days. But everywhere the Israelites lived, there was light, exactly as there had been safety in Goshen through every plague before this one."
            },
            {
              "type": "story",
              "text": "Pharaoh called Moses one final time. He offered his biggest deal yet \u2014 everyone could go this time, even the children \u2014 but only if they left their flocks and herds behind in Egypt. Moses refused. Every single animal had to go too, he said, because the Israelites didn't yet know what they would need for their sacrifices to the Lord \u2014 not one hoof could stay behind."
            },
            {
              "type": "story",
              "text": "Pharaoh was enraged. He shouted at Moses to get out of his sight, warning that if Moses ever appeared before him again, he would die. Moses answered calmly \u2014 Pharaoh had spoken correctly, because Moses would never appear before him again."
            },
            {
              "type": "question",
              "text": "After nine plagues \u2014 after everything Pharaoh had seen with his own eyes \u2014 he still refused to fully let God's people go. What does his refusal, even now, tell us about how far pride and stubbornness can carry a person?",
              "hint": "Guide toward: Pharaoh's heart had become so hardened that even overwhelming evidence, again and again, didn't change him \u2014 a sober reminder of how serious it is to keep refusing God. It also shows how powerless his stubbornness really was against God's plan, which kept moving forward no matter what Pharaoh chose."
            },
            {
              "type": "activity",
              "text": "Whole-week recap relay: in table groups, retell this whole week's story in order, one sentence each \u2014 the staff-turned-snake, then each plague: blood, frogs, gnats, flies, sick animals, boils, hail, locusts, and finally darkness. See if your group can make it all the way through every plague!"
            },
            {
              "type": "question",
              "text": "Looking back over all nine plagues this week, what do you think God was trying to show Pharaoh and the whole of Egypt through them?",
              "hint": "Guide toward: many of these plagues struck directly at things the Egyptians treated as gods \u2014 the Nile, frogs, livestock, the sun. Through every single plague, the Lord kept proving, again and again, that he alone is the true and living God, and that Egypt's gods were powerless beside him."
            },
            {
              "type": "verse",
              "reference": "Deuteronomy 4:39 (CEV)",
              "text": "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d"
            },
            {
              "type": "activity",
              "text": "Let's say this week's memory verse together one final time \u2014 see if the whole class can say it entirely from memory!"
            },
            {
              "type": "prayer",
              "text": "Dear God, thank you that you are the only true God, in the sky above and on the earth below, more powerful than every false god Egypt trusted in. Thank you that your plan to rescue your people never failed, even after nine plagues and a king who refused you every time. Help us to trust you fully, the first time you ask, rather than only turning to you when things get hard. Amen."
            }
          ],
          "lessonPlan": {
            "duration": "10\u201315 minutes",
            "passage": "Exodus 10:21\u201329",
            "topic": "Three days of darkness",
            "bigIdea": "God is more powerful than every false god Egypt worshipped \u2014 and no amount of stubbornness could stop his plan.",
            "learningIntentions": [
              "We are learning about the ninth plague \u2014 three days of darkness \u2014 and Pharaoh's final, angry refusal in this lesson's passage.",
              "We are looking back over the whole week to retell all nine plagues in order.",
              "I can explain what the nine plagues, taken together, show us about God's power over Egypt's false gods."
            ],
            "assessment": "Check that students can describe the plague of darkness and Pharaoh's final offer and refusal, can retell the whole week's sequence of plagues in order, and can explain what the plagues showed about God's power over Egypt's false gods.",
            "resources": [
              "Screen/device to display the week's content (already embedded in the app)"
            ],
            "script": [
              {
                "heading": "Plague 9: Darkness",
                "minutes": "3 min",
                "teacherTalk": "Tell how Moses stretched out his hand and three days of total darkness covered Egypt, while the Israelites had light. Describe Pharaoh's final offer \u2014 letting everyone go but not their animals \u2014 and Moses's refusal, ending in Pharaoh's furious threat.",
                "activityNote": null,
                "keyQuestion": "After nine plagues, Pharaoh still refused to fully let God's people go. What does his refusal, even now, tell us about how far pride and stubbornness can carry a person?",
                "teacherGuidance": "Guide toward: Pharaoh's heart had become so hardened that even overwhelming evidence didn't change him \u2014 a sober reminder of how serious it is to keep refusing God, and how powerless his stubbornness really was against God's plan."
              },
              {
                "heading": "Whole-week recap relay",
                "minutes": "3\u20134 min",
                "teacherTalk": "In table groups, have students retell the whole week's story in order: the staff-turned-snake, then all nine plagues \u2014 blood, frogs, gnats, flies, sick animals, boils, hail, locusts, and darkness.",
                "activityNote": "Use the built-in whole-week recap relay activity block.",
                "keyQuestion": null,
                "teacherGuidance": null
              },
              {
                "heading": "What was God showing Egypt?",
                "minutes": "2\u20133 min",
                "teacherTalk": "Invite students to reflect on the purpose behind all nine plagues together.",
                "activityNote": null,
                "keyQuestion": "Looking back over all nine plagues this week, what do you think God was trying to show Pharaoh and the whole of Egypt through them?",
                "teacherGuidance": "Guide toward: many of these plagues struck directly at things the Egyptians treated as gods \u2014 the Nile, frogs, livestock, the sun. Through every plague, the Lord kept proving that he alone is the true and living God."
              },
              {
                "heading": "Memory verse, from memory",
                "minutes": "2 min",
                "teacherTalk": "Close the week by inviting the class to say the memory verse together entirely from memory, without looking at the screen.",
                "activityNote": "Use the built-in verse block, then the say-it-together activity that follows it in the app.",
                "keyQuestion": null,
                "teacherGuidance": null
              }
            ],
            "whereToNext": "Week 4 (Lesson 4) picks up with the tenth and final plague, and the story of the first Passover."
          }
        }
      ]
    },
    "Week 4": {
      lessonTitle: "The Rescue",
      passage: "Exodus 11–14",
      bigIdea: "God is willing and able to rescue his people from what looks like an impossible situation — from the plagues in Egypt, through the Passover, and all the way through the Red Sea. This same rescuing God still saves people from slavery to sin today, through Jesus.",
      source: "Connect B2 Upper Primary — Lesson 4",
      days: [
        // ---------------- DAY 1 (MON) ----------------
        {
          label: "Monday",
          theme: "The last plague",
          blocks: [
            { type: "question", text: "So far, God has sent nine plagues on Egypt, but Pharaoh still won't let God's people go. If you were God, and you'd already given someone nine warnings, what would you do next?", hint: "Accept responses. Use this to set up how serious the tenth and final plague was — this wasn't God acting rashly, it was the last of ten clear warnings." },
            { type: "story", text: "God told Moses there would be one more plague — the worst one yet. At midnight, the Lord would strike down the firstborn son in every Egyptian family, from Pharaoh's own household right down to the lowest servant. But God had a way to protect his own people from this judgement." },
            { type: "story", text: "Each Israelite family was told to kill a lamb and paint its blood on the sides and top of their doorframes. When the Lord came to judge Egypt that night, he would pass over any house marked with the blood, and no one inside would be harmed." },
            { type: "question", text: "Why do you think God asked his people to do something — painting blood on their doorframes — rather than just automatically protecting them?", hint: "Accept responses. Guide toward: God still asked for trust and obedience even in the middle of rescuing them. Their protection came from trusting the Lord and doing what he said, not from anything special about themselves." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cSo remember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "activity", text: "Let's read this week's memory verse together and say it out loud two or three times." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Exodus 11:1–10; 12:1–28",
            topic: "The last plague",
            bigIdea: "God is willing and able to rescue his people from what looks like an impossible situation — from the plagues in Egypt, through the Passover, and all the way through the Red Sea. This same rescuing God still saves people from slavery to sin today, through Jesus.",
            learningIntentions: [
              "We are learning that the tenth plague was God's final and most serious warning to Pharaoh.",
              "We are learning that God protected his people through the blood of the Passover lamb, on the condition they trusted and obeyed him.",
              "I can begin learning this term's memory verse, Deuteronomy 4:39.",
            ],
            assessment: "Listen for whether students can explain why the blood on the doorframes mattered, and can connect obeying God's instructions with being kept safe.",
            resources: [
              "CEV Bible (optional, for reading the Passover instructions aloud)",
            ],
            script: [
              {
                heading: "Nine warnings so far",
                minutes: "2 min",
                teacherTalk: "Recap that God has already sent nine plagues and Pharaoh still refuses, then ask the warm-up question.",
                activityNote: null,
                keyQuestion: "So far, God has sent nine plagues on Egypt, but Pharaoh still won't let God's people go. If you were God, and you'd already given someone nine warnings, what would you do next?",
                teacherGuidance: "Accept responses. Use this to set up how serious the tenth and final plague was — this wasn't God acting rashly, it was the last of ten clear warnings.",
              },
              {
                heading: "The tenth plague announced",
                minutes: "3 min",
                teacherTalk: "Tell how God warned Pharaoh of the death of the firstborn as his final, most serious plague.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Blood on the doorframes",
                minutes: "3–4 min",
                teacherTalk: "Explain the Passover instructions, and how the blood on the doorframes protected Israelite households.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Why did God ask for obedience?",
                minutes: "3 min",
                teacherTalk: "Ask why God required an action from his people rather than protecting them automatically.",
                activityNote: null,
                keyQuestion: "Why do you think God asked his people to do something — painting blood on their doorframes — rather than just automatically protecting them?",
                teacherGuidance: "Accept responses. Guide toward: God still asked for trust and obedience even in the middle of rescuing them. Their protection came from trusting the Lord and doing what he said, not from anything special about themselves.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Introduce this term's new memory verse and try saying it together a few times.",
                activityNote: "Use the built-in verse block for Deuteronomy 4:39, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 2 picks up right after the Passover, as Pharaoh finally lets Israel go — and then changes his mind.",
          },
        },
        // ---------------- DAY 2 (TUE) ----------------
        {
          label: "Tuesday",
          theme: "Pharaoh's army",
          blocks: [
            { type: "story", text: "That very night, Pharaoh sent for Moses and Aaron and told them to take the Israelites and leave Egypt at last. The Egyptians were so afraid and eager for them to go that they gave the Israelites gold, silver and clothing — so as they left, Israel carried away the wealth of Egypt." },
            { type: "story", text: "God led his people out with a pillar of cloud by day and a pillar of fire by night, so they could see where to go. But God told Moses to lead them to camp beside the Red Sea — in a spot where it would look like they were trapped." },
            { type: "question", text: "Why do you think God deliberately led his people into a spot that looked like a trap, instead of a safer route?", hint: "Guide toward Exodus 14:1–4: God wanted to use this moment to show his power over Pharaoh and the Egyptian army, so that everyone would know he is the Lord — not because he'd made a mistake." },
            { type: "story", text: "Sure enough, Pharaoh changed his mind again and set out after the Israelites with his whole army and six hundred of his best chariots. When the Israelites saw the Egyptian army coming, they were terrified and cried out to the Lord." },
            { type: "question", text: "The Israelites had just watched God defeat Egypt through ten plagues and the Passover — yet now they were terrified again. Why do you think it's so easy to become afraid again, even after we've seen God come through before?", hint: "Accept responses. Guide toward: fear can make us forget what we already know about God, which is exactly why Moses' next words were so important." },
            { type: "story", text: "But Moses answered the people, 'Don't be afraid! Be brave, and you will see the Lord save you today. These Egyptians will never bother you again. The Lord will fight for you, and you won't have to do a thing.'" },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cSo remember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together, one more time." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Exodus 12:31–36; 13:17–22; 14:1–14",
            topic: "Pharaoh's army",
            bigIdea: "God is willing and able to rescue his people from what looks like an impossible situation — from the plagues in Egypt, through the Passover, and all the way through the Red Sea. This same rescuing God still saves people from slavery to sin today, through Jesus.",
            learningIntentions: [
              "We are learning that Pharaoh let Israel go, and that God led them with a pillar of cloud and fire.",
              "We are learning that God deliberately led Israel to a place that looked like a trap, so he could show his power when Pharaoh's army pursued them.",
              "I can explain what Moses meant when he told the frightened Israelites, 'The Lord will fight for you.'",
            ],
            assessment: "Listen for whether students can explain why God led Israel into a seemingly trapped position on purpose, and can describe Moses' response to the people's fear.",
            resources: [],
            script: [
              {
                heading: "Leaving Egypt at last",
                minutes: "2–3 min",
                teacherTalk: "Tell how Pharaoh finally let Israel go, and how the Egyptians sent them off with gold, silver and clothing.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Led into a trap — on purpose",
                minutes: "3 min",
                teacherTalk: "Describe the pillar of cloud and fire, and God's deliberate choice to camp near the Red Sea, then ask why.",
                activityNote: null,
                keyQuestion: "Why do you think God deliberately led his people into a spot that looked like a trap, instead of a safer route?",
                teacherGuidance: "Guide toward Exodus 14:1–4: God wanted to use this moment to show his power over Pharaoh and the Egyptian army, so that everyone would know he is the Lord — not because he'd made a mistake.",
              },
              {
                heading: "Pharaoh's army arrives",
                minutes: "3 min",
                teacherTalk: "Tell how Pharaoh changed his mind and pursued Israel, and how the people responded in fear.",
                activityNote: null,
                keyQuestion: "The Israelites had just watched God defeat Egypt through ten plagues and the Passover — yet now they were terrified again. Why do you think it's so easy to become afraid again, even after we've seen God come through before?",
                teacherGuidance: "Accept responses. Guide toward: fear can make us forget what we already know about God, which is exactly why Moses' next words were so important.",
              },
              {
                heading: "'The Lord will fight for you'",
                minutes: "2–3 min",
                teacherTalk: "Read Moses' reassurance to the people, then close with the memory verse.",
                activityNote: "Use the built-in verse block for Deuteronomy 4:39, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 3 finds out exactly how God rescues Israel from the Egyptian army at the Red Sea.",
          },
        },
        // ---------------- DAY 3 (WED) ----------------
        {
          label: "Wednesday",
          theme: "A road through the water",
          blocks: [
            { type: "question", text: "Yesterday we left the Israelites trapped between Pharaoh's army and the Red Sea. If you were one of the Israelites at that moment, what do you think would be going through your mind?", hint: "Accept responses. This sets up just how impossible the situation looked, right before God acts." },
            { type: "story", text: "God told Moses to stretch his walking stick out over the sea. That night, the Lord sent a strong east wind that blew all night, and the sea split apart, leaving dry ground with walls of water on either side." },
            { type: "story", text: "All that time, God's angel and the pillar of cloud moved from in front of Israel's camp to behind it, standing between the Israelites and the Egyptians. The cloud gave light to Israel, but made it dark for the Egyptians, so they couldn't get close during the night." },
            { type: "story", text: "The Israelites walked right through the sea on dry ground, with a wall of water on their left and their right. When the Egyptian army followed them into the sea, the Lord threw them into a panic, and their chariot wheels got stuck." },
            { type: "story", text: "Then the Lord told Moses to stretch out his hand again. As morning came, the sea rushed back to its normal place — and the entire Egyptian army was swept away in the water. Not one of them survived." },
            { type: "question", text: "How did God save the Israelites from the Egyptian army?", hint: "Accept responses that mention the parting of the sea, the pillar of cloud/angel holding back the Egyptians overnight, and the sea closing over the army the next morning. All three parts worked together." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cSo remember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "activity", text: "Try saying this week's memory verse from memory, without looking!" },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Exodus 14:15–31",
            topic: "A road through the water",
            bigIdea: "God is willing and able to rescue his people from what looks like an impossible situation — from the plagues in Egypt, through the Passover, and all the way through the Red Sea. This same rescuing God still saves people from slavery to sin today, through Jesus.",
            learningIntentions: [
              "We are learning exactly how God parted, and then closed, the Red Sea to rescue Israel and defeat the Egyptian army.",
              "We are learning that God's angel and the pillar of cloud protected Israel by holding the Egyptians back overnight.",
              "I can retell, in my own words, how God saved the Israelites from the Egyptian army.",
            ],
            assessment: "Listen for whether students can retell the sequence of the Red Sea crossing accurately (parting, crossing, closing) using their own words.",
            resources: [],
            script: [
              {
                heading: "An impossible situation",
                minutes: "1–2 min",
                teacherTalk: "Recap yesterday's cliffhanger and ask the warm-up question before revealing what happens.",
                activityNote: null,
                keyQuestion: "Yesterday we left the Israelites trapped between Pharaoh's army and the Red Sea. If you were one of the Israelites at that moment, what do you think would be going through your mind?",
                teacherGuidance: "Accept responses. This sets up just how impossible the situation looked, right before God acts.",
              },
              {
                heading: "The sea parts",
                minutes: "3 min",
                teacherTalk: "Tell how Moses stretched out his staff and the sea split, and how the cloud/angel protected Israel overnight.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Through on dry ground",
                minutes: "3 min",
                teacherTalk: "Describe the crossing and the Egyptian army's pursuit and panic.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "The sea closes",
                minutes: "2 min",
                teacherTalk: "Tell how the sea rushed back and swept the Egyptian army away, then ask students to retell the whole rescue.",
                activityNote: null,
                keyQuestion: "How did God save the Israelites from the Egyptian army?",
                teacherGuidance: "Accept responses that mention the parting of the sea, the pillar of cloud/angel holding back the Egyptians overnight, and the sea closing over the army the next morning. All three parts worked together.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Try the memory verse together without looking, if the class is ready.",
                activityNote: "Use the say-it-from-memory activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 4 asks what this rescue still means for people today.",
          },
        },
        // ---------------- DAY 4 (THU) ----------------
        {
          label: "Thursday",
          theme: "Rescued like Israel",
          blocks: [
            { type: "story", text: "This week we've seen an amazing rescue — nobody but God could have saved Israel from Pharaoh's army the way he did. And that wasn't the only time God has rescued people." },
            { type: "question", text: "Who else can you think of, from anything you already know about the Bible, that God has rescued?", hint: "Accept responses, e.g. Noah, or Jesus rescuing people from sin. This connects the Exodus rescue pattern to the wider Bible story students may already know." },
            { type: "story", text: "The New Testament tells us that all people need rescuing today too — not from slavery in Egypt, but from slavery to sin. And God sent Jesus to rescue people, just like he rescued the Israelites through Moses." },
            { type: "verse", reference: "1 Timothy 2:5 (CEV)", text: "\u201cThere is only one God, and Christ Jesus is the only one who can bring us to God. Jesus was truly human, and he gave himself to rescue all of us.\u201d" },
            { type: "question", text: "How does Jesus rescue his people today?", hint: "Accept responses. Guide toward: Jesus died on the cross and rose again so that everyone who trusts him can be forgiven and brought back into a right relationship with God — his death and resurrection do for us today what nothing else could." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cSo remember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together one final time, all from memory." },
            { type: "prayer", text: "Dear God, thank you that you rescued your people from Egypt, and thank you that you sent Jesus to rescue us from our sin. Help us to remember and trust that you are the one true God, in heaven and on earth. Amen." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "1 Timothy 2:5",
            topic: "Rescued like Israel",
            bigIdea: "God is willing and able to rescue his people from what looks like an impossible situation — from the plagues in Egypt, through the Passover, and all the way through the Red Sea. This same rescuing God still saves people from slavery to sin today, through Jesus.",
            learningIntentions: [
              "We are learning that the Exodus rescue points forward to people's need for rescue from sin.",
              "We are learning that Jesus is the one who rescues people and brings them to God, as 1 Timothy 2:5 says.",
              "I can say this week's memory verse, Deuteronomy 4:39, fully from memory.",
            ],
            assessment: "Listen for whether students can explain, in simple terms, how Jesus' rescue relates to the rescue God gave Israel at the Red Sea.",
            resources: [
              "CEV Bible (optional, for reading 1 Timothy 2:5 aloud)",
            ],
            script: [
              {
                heading: "One more rescue",
                minutes: "2 min",
                teacherTalk: "Recap this week's rescue, then ask students to think of other rescues in the Bible.",
                activityNote: null,
                keyQuestion: "Who else can you think of, from anything you already know about the Bible, that God has rescued?",
                teacherGuidance: "Accept responses, e.g. Noah, or Jesus rescuing people from sin. This connects the Exodus rescue pattern to the wider Bible story students may already know.",
              },
              {
                heading: "Rescued from sin",
                minutes: "2–3 min",
                teacherTalk: "Explain that all people need rescuing from sin today, and that God sent Jesus to do this.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "How Jesus rescues us",
                minutes: "3 min",
                teacherTalk: "Read 1 Timothy 2:5, then ask how Jesus rescues his people today.",
                activityNote: null,
                keyQuestion: "How does Jesus rescue his people today?",
                teacherGuidance: "Accept responses. Guide toward: Jesus died on the cross and rose again so that everyone who trusts him can be forgiven and brought back into a right relationship with God — his death and resurrection do for us today what nothing else could.",
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
            whereToNext: "Lesson 5 moves on to Mount Sinai, where God gives his rescued people his Law to show them how to live as his special people.",
          },
        },
      ],
    },
    "Week 5": {
      lessonTitle: "The Law",
      passage: "Exodus 19–20",
      bigIdea: "God rescued Israel out of slavery in Egypt, and now, at Mount Sinai, he gives them his Law to show his people how to live as his special, treasured people — not to earn his rescue, but because he had already saved them.",
      source: "Connect B2 Upper Primary — Lesson 5",
      days: [
        // ---------------- DAY 1 (MON) ----------------
        {
          label: "Monday",
          theme: "God's promise to his people",
          blocks: [
            { type: "question", text: "Last week we saw God rescue Israel out of Egypt and through the Red Sea. If God has just done something amazing to save you, what do you think he might want from you next?", hint: "Accept responses. Guide toward: not payment or earning the rescue back, but a relationship — as we'll see today, God's answer was to invite Israel into a special relationship with him." },
            { type: "story", text: "Three months after leaving Egypt, Moses led God's people to Mount Sinai, and Israel camped at the bottom of the mountain. Moses went up the mountain to meet with God." },
            { type: "story", text: "God told Moses to say this to the people: 'You saw for yourselves how I rescued you out of Egypt... Now, if you will faithfully obey me and keep my covenant, you will be my own special possession, my treasured people, out of all the nations on earth.'" },
            { type: "question", text: "What do you think it would mean to be God's 'treasured possession' out of every nation on earth?", hint: "Accept responses. Guide toward: being specially chosen, loved, and set apart by God — not because Israel had earned it, but because God graciously chose them." },
            { type: "story", text: "Moses went back down and told the people everything the Lord had said. And the people answered together, 'We will do everything the Lord has said.' So Moses took their answer back to God." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cSo remember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "activity", text: "This week's memory verse is the same one from last week. Let's say it together." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Exodus 19:1–8",
            topic: "God's promise to his people",
            bigIdea: "God rescued Israel out of slavery in Egypt, and now, at Mount Sinai, he gives them his Law to show his people how to live as his special, treasured people — not to earn his rescue, but because he had already saved them.",
            learningIntentions: [
              "We are learning that God led Israel to Mount Sinai and offered them a special covenant relationship.",
              "We are learning that Israel agreed to obey everything the Lord had said.",
              "I can explain what it means that Israel would be God's 'treasured possession'.",
            ],
            assessment: "Listen for whether students can explain, in their own words, what God offered Israel at Sinai and how the people responded.",
            resources: [],
            script: [
              {
                heading: "What comes after a rescue?",
                minutes: "2 min",
                teacherTalk: "Recap last week's rescue at the Red Sea, then ask the warm-up question.",
                activityNote: null,
                keyQuestion: "Last week we saw God rescue Israel out of Egypt and through the Red Sea. If God has just done something amazing to save you, what do you think he might want from you next?",
                teacherGuidance: "Accept responses. Guide toward: not payment or earning the rescue back, but a relationship — as we'll see today, God's answer was to invite Israel into a special relationship with him.",
              },
              {
                heading: "Arriving at Sinai",
                minutes: "2–3 min",
                teacherTalk: "Tell how Israel travelled to Mount Sinai and Moses went up to meet with God.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "God's treasured possession",
                minutes: "3–4 min",
                teacherTalk: "Read God's covenant offer to the people, then ask what being God's 'treasured possession' would mean.",
                activityNote: null,
                keyQuestion: "What do you think it would mean to be God's 'treasured possession' out of every nation on earth?",
                teacherGuidance: "Accept responses. Guide toward: being specially chosen, loved, and set apart by God — not because Israel had earned it, but because God graciously chose them.",
              },
              {
                heading: "'We will do everything the Lord has said'",
                minutes: "2 min",
                teacherTalk: "Tell how the people responded together, then introduce the memory verse (carried over from last week).",
                activityNote: "Use the built-in verse block for Deuteronomy 4:39, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 2 finds out exactly what God's Law said, starting with the Ten Commandments.",
          },
        },
        // ---------------- DAY 2 (TUE) ----------------
        {
          label: "Tuesday",
          theme: "Loving God first",
          blocks: [
            { type: "question", text: "If you were making a list of rules for how to live well, what do you think should come first on the list?", hint: "Accept responses. Use this to set up how the Ten Commandments begin — not with rules about people, but about our relationship with God first." },
            { type: "story", text: "God spoke his Ten Commandments to Moses on Mount Sinai. The first four are all about how God's people should relate to God himself." },
            { type: "story", text: "'Do not worship any god except me. Do not make idols that look like anything in the sky or on the earth or in the ocean, and do not bow down and worship them. Do not misuse my name. Remember that the Sabbath Day belongs to me — you have six days when you can work, but the seventh day of each week belongs to me, your God.'" },
            { type: "question", text: "Why do you think God put commandments about himself first, before commandments about how to treat other people?", hint: "Guide toward: our relationship with God comes first and shapes everything else — how we treat others flows out of how we treat God." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cSo remember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together again." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Exodus 20:1–8",
            topic: "Loving God first",
            bigIdea: "God rescued Israel out of slavery in Egypt, and now, at Mount Sinai, he gives them his Law to show his people how to live as his special, treasured people — not to earn his rescue, but because he had already saved them.",
            learningIntentions: [
              "We are learning the first four of the Ten Commandments, which are about our relationship with God.",
              "We are learning that these commandments teach Israel to worship only the Lord, and to keep the Sabbath as belonging to him.",
              "I can explain why commandments about God come before commandments about people.",
            ],
            assessment: "Listen for whether students can name at least one of the first four commandments and explain, broadly, what it teaches about our relationship with God.",
            resources: [],
            script: [
              {
                heading: "What comes first?",
                minutes: "2 min",
                teacherTalk: "Ask the warm-up question before revealing how the Ten Commandments actually begin.",
                activityNote: null,
                keyQuestion: "If you were making a list of rules for how to live well, what do you think should come first on the list?",
                teacherGuidance: "Accept responses. Use this to set up how the Ten Commandments begin — not with rules about people, but about our relationship with God first.",
              },
              {
                heading: "The first four commandments",
                minutes: "4 min",
                teacherTalk: "Read through the first four commandments together, about worship, idols, God's name, and the Sabbath.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Why God first?",
                minutes: "3 min",
                teacherTalk: "Ask why commandments about God come before commandments about people.",
                activityNote: null,
                keyQuestion: "Why do you think God put commandments about himself first, before commandments about how to treat other people?",
                teacherGuidance: "Guide toward: our relationship with God comes first and shapes everything else — how we treat others flows out of how we treat God.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Say the memory verse together again.",
                activityNote: "Use the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 3 covers the rest of the Ten Commandments — how to treat other people.",
          },
        },
        // ---------------- DAY 3 (WED) ----------------
        {
          label: "Wednesday",
          theme: "Loving our neighbour",
          blocks: [
            { type: "story", text: "The last six of the Ten Commandments are about how God's people should treat each other: 'Respect your father and your mother. Do not murder. Be faithful in marriage. Do not steal. Do not tell lies about each other. Do not want anything that belongs to someone else.'" },
            { type: "question", text: "Which of these six commandments do you think would have been the hardest for people to keep, and why?", hint: "Accept any reasonable answer with a real reason. There's no wrong answer here — the goal is for students to notice these commandments are still genuinely hard to keep today." },
            { type: "story", text: "Israel had already agreed to keep the whole Law — all ten commandments, and everything else God gave them through Moses at Sinai — because God had graciously rescued them first." },
            { type: "question", text: "Why do you think it mattered that God rescued Israel before he gave them the Law, rather than the other way around?", hint: "Guide toward: obedience wasn't how Israel earned their rescue — the rescue came first. Keeping the Law was meant to be a grateful response to what God had already done for them, not a way of earning it." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cSo remember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "activity", text: "Say this week's memory verse together one more time, trying it without looking if you can." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Exodus 20:12–17; 19:3–8 (recap)",
            topic: "Loving our neighbour",
            bigIdea: "God rescued Israel out of slavery in Egypt, and now, at Mount Sinai, he gives them his Law to show his people how to live as his special, treasured people — not to earn his rescue, but because he had already saved them.",
            learningIntentions: [
              "We are learning the last six of the Ten Commandments, which are about how to treat other people.",
              "We are learning that Israel agreed to keep God's Law only after God had already rescued them.",
              "I can explain why the rescue came before the Law, not after it.",
            ],
            assessment: "Listen for whether students can explain that obedience was Israel's grateful response to being rescued, not a way of earning God's rescue.",
            resources: [],
            script: [
              {
                heading: "The last six commandments",
                minutes: "3 min",
                teacherTalk: "Read through the last six commandments together, about how to treat other people.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "The hardest one",
                minutes: "3 min",
                teacherTalk: "Ask which commandment students think would be hardest to keep, and why.",
                activityNote: null,
                keyQuestion: "Which of these six commandments do you think would have been the hardest for people to keep, and why?",
                teacherGuidance: "Accept any reasonable answer with a real reason. There's no wrong answer here — the goal is for students to notice these commandments are still genuinely hard to keep today.",
              },
              {
                heading: "Rescue before Law",
                minutes: "3–4 min",
                teacherTalk: "Recap that Israel agreed to the Law only after being rescued, then ask why the order matters.",
                activityNote: null,
                keyQuestion: "Why do you think it mattered that God rescued Israel before he gave them the Law, rather than the other way around?",
                teacherGuidance: "Guide toward: obedience wasn't how Israel earned their rescue — the rescue came first. Keeping the Law was meant to be a grateful response to what God had already done for them, not a way of earning it.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Try the memory verse together without looking, if the class is ready.",
                activityNote: "Use the say-it-from-memory activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 4 looks at how Jesus summed up the whole Law in just two commandments.",
          },
        },
        // ---------------- DAY 4 (THU) ----------------
        {
          label: "Thursday",
          theme: "The Law summed up",
          blocks: [
            { type: "story", text: "Years later, someone asked Jesus which commandment in the Law was the most important. Jesus answered: 'Love the Lord your God with all your heart, all your soul, and all your mind. This is the first and most important commandment. The second most important commandment is this: Love others as much as you love yourself. All the Law and the Books of the Prophets are based on these two commandments.'" },
            { type: "question", text: "How do Jesus' two commandments — love God, and love others — connect to the Ten Commandments we've learned about this week?", hint: "Guide toward: the first four commandments are all about loving God, and the last six are all about loving others — Jesus wasn't giving a new rule, he was summing up the whole Law we've already learned." },
            { type: "question", text: "What has God shown us about how to live today?", hint: "Accept responses. Guide toward: the Bible — God's word — still shows people today how to live as his people, out of love and gratitude for what he's done, not to earn his love." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cSo remember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "activity", text: "Say this week's memory verse together, fully from memory, one last time." },
            { type: "prayer", text: "Dear God, thank you that you rescued us first, before ever asking anything of us. Thank you for your Law that shows us how to live — to love you and love others. Help us to obey you out of love and gratitude, not because we have to earn your rescue. Amen." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Matthew 22:36–40",
            topic: "The Law summed up",
            bigIdea: "God rescued Israel out of slavery in Egypt, and now, at Mount Sinai, he gives them his Law to show his people how to live as his special, treasured people — not to earn his rescue, but because he had already saved them.",
            learningIntentions: [
              "We are learning that Jesus summed up the whole Law in two commandments: love God, and love others.",
              "We are learning how the Ten Commandments fit under these two headings.",
              "I can say this week's memory verse, Deuteronomy 4:39, fully from memory.",
            ],
            assessment: "Listen for whether students can sort the Ten Commandments correctly under 'loving God' and 'loving others', and explain Jesus' summary in their own words.",
            resources: [
              "CEV Bible (optional, for reading Matthew 22:36–40 aloud)",
            ],
            script: [
              {
                heading: "Jesus is asked the question",
                minutes: "2–3 min",
                teacherTalk: "Read Jesus' answer about the most important commandments.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Connecting it back",
                minutes: "3–4 min",
                teacherTalk: "Ask how Jesus' two commandments connect to the Ten Commandments learned this week.",
                activityNote: null,
                keyQuestion: "How do Jesus' two commandments — love God, and love others — connect to the Ten Commandments we've learned about this week?",
                teacherGuidance: "Guide toward: the first four commandments are all about loving God, and the last six are all about loving others — Jesus wasn't giving a new rule, he was summing up the whole Law we've already learned.",
              },
              {
                heading: "How to live today",
                minutes: "2–3 min",
                teacherTalk: "Ask what God has shown us about how to live today.",
                activityNote: null,
                keyQuestion: "What has God shown us about how to live today?",
                teacherGuidance: "Accept responses. Guide toward: the Bible — God's word — still shows people today how to live as his people, out of love and gratitude for what he's done, not to earn his love.",
              },
              {
                heading: "Memory verse and closing prayer",
                minutes: "2 min",
                teacherTalk: "Finish this week's memory verse fully from memory, then close together with the prayer in the app.",
                activityNote: "Use the say-it-from-memory activity block, then the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Lesson 6 moves on to the tabernacle — the special tent where God chose to live among his people.",
          },
        },
      ],
    },
    "Week 6": {
      lessonTitle: "The Tabernacle",
      passage: "Exodus 25–40",
      bigIdea: "God chose to live among his people in the tabernacle — but because God is holy and his people are sinful, he also gave detailed instructions for priests and sacrifices, a way to be made right with him. This whole system points forward to Jesus, whose death lets us come into God's presence forever.",
      source: "Connect B2 Upper Primary — Lesson 6",
      days: [
        // ---------------- DAY 1 (MON) ----------------
        {
          label: "Monday",
          theme: "God wants to live with his people",
          blocks: [
            { type: "question", text: "If God wanted to actually live among his people, right in the middle of their camp, what do you think that tent or building would need to be like?", hint: "Accept responses. Use this to set up just how detailed and careful God's instructions for the tabernacle were." },
            { type: "story", text: "God told Moses to have the people bring gifts — gold, silver, fine cloth, and more — so that a sacred tent could be built. God said, 'Make me a sacred tent, so that I can live among my people.'" },
            { type: "story", text: "God gave Moses an extremely detailed pattern to follow — exact measurements, materials, and instructions for the sacred chest, the table, the lampstand, the curtains, and everything else. Moses had to build it exactly to the pattern God had shown him." },
            { type: "question", text: "Why do you think it mattered so much that Moses build the tabernacle exactly to God's pattern, instead of using his own ideas?", hint: "Guide toward Hebrews 8:1–5: the tabernacle was a copy of something real in heaven, so getting the earthly copy exactly right mattered — it wasn't just decoration, it showed something true about God." },
            { type: "verse", reference: "Psalm 117:2 (CEV)", text: "\u201cHis love for us is wonderful, his faithfulness never ends. Shout praises to the Lord!\u201d" },
            { type: "activity", text: "This week we have a new memory verse. Let's read it together and say it two or three times." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Exodus 25:1–9",
            topic: "God wants to live with his people",
            bigIdea: "God chose to live among his people in the tabernacle — but because God is holy and his people are sinful, he also gave detailed instructions for priests and sacrifices, a way to be made right with him. This whole system points forward to Jesus, whose death lets us come into God's presence forever.",
            learningIntentions: [
              "We are learning that God wanted to live among his people, and asked them to build him a sacred tent.",
              "We are learning that God gave Moses an exact pattern to follow for the tabernacle.",
              "I can begin learning this week's new memory verse, Psalm 117:2.",
            ],
            assessment: "Listen for whether students can explain why God wanted a tabernacle, and why building it exactly to the pattern mattered.",
            resources: [],
            script: [
              {
                heading: "A home for God?",
                minutes: "2 min",
                teacherTalk: "Ask the warm-up question before describing the tabernacle.",
                activityNote: null,
                keyQuestion: "If God wanted to actually live among his people, right in the middle of their camp, what do you think that tent or building would need to be like?",
                teacherGuidance: "Accept responses. Use this to set up just how detailed and careful God's instructions for the tabernacle were.",
              },
              {
                heading: "'Make me a sacred tent'",
                minutes: "3 min",
                teacherTalk: "Tell how God asked for gifts to build the tabernacle, so he could live among his people.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "An exact pattern",
                minutes: "3–4 min",
                teacherTalk: "Describe how detailed God's instructions were, then ask why the exact pattern mattered.",
                activityNote: null,
                keyQuestion: "Why do you think it mattered so much that Moses build the tabernacle exactly to God's pattern, instead of using his own ideas?",
                teacherGuidance: "Guide toward Hebrews 8:1–5: the tabernacle was a copy of something real in heaven, so getting the earthly copy exactly right mattered — it wasn't just decoration, it showed something true about God.",
              },
              {
                heading: "New memory verse",
                minutes: "1–2 min",
                teacherTalk: "Introduce this week's new memory verse, Psalm 117:2, and try saying it together.",
                activityNote: "Use the built-in verse block for Psalm 117:2, then the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 2 looks at why priests and sacrifices were needed before anyone could enter God's presence.",
          },
        },
        // ---------------- DAY 2 (TUE) ----------------
        {
          label: "Tuesday",
          theme: "Priests and sacrifices",
          blocks: [
            { type: "story", text: "The tabernacle had different areas — an outer courtyard, a holy place, and finally the most holy place, right where God's presence lived. But not just anyone could walk in and visit God." },
            { type: "story", text: "God is completely holy, and his people were sinful — so God set up priests, whose job was to offer sacrifices on behalf of the people, to deal with their sin. Only the high priest was allowed to go into the most holy place, and even then only once a year." },
            { type: "question", text: "Why do you think God set up such careful rules about who could come near him, and how?", hint: "Guide toward: God's holiness and people's sinfulness don't mix — the sacrifices and priesthood were God's own gracious way of dealing with sin so his people could still be near him safely, not humans just making it hard for themselves." },
            { type: "question", text: "What does this tell us about how seriously God takes sin?", hint: "Accept responses. Guide toward: sin is a genuinely serious problem that needed real dealing with — through the blood of an animal sacrifice, standing in for the person's sin, every single day." },
            { type: "verse", reference: "Psalm 117:2 (CEV)", text: "\u201cHis love for us is wonderful, his faithfulness never ends. Shout praises to the Lord!\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together again." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Exodus 40 (overview)",
            topic: "Priests and sacrifices",
            bigIdea: "God chose to live among his people in the tabernacle — but because God is holy and his people are sinful, he also gave detailed instructions for priests and sacrifices, a way to be made right with him. This whole system points forward to Jesus, whose death lets us come into God's presence forever.",
            learningIntentions: [
              "We are learning that the tabernacle had separate areas, with the most holy place reserved for God's presence.",
              "We are learning that priests and sacrifices were needed because of the seriousness of sin.",
              "I can explain why not just anyone could enter the most holy place.",
            ],
            assessment: "Listen for whether students can explain, simply, why priests and sacrifices were necessary before anyone could approach God.",
            resources: [],
            script: [
              {
                heading: "Areas of the tabernacle",
                minutes: "2–3 min",
                teacherTalk: "Describe the courtyard, holy place, and most holy place, and who could go where.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Priests and sacrifices",
                minutes: "3 min",
                teacherTalk: "Explain the role of priests and daily sacrifices in dealing with the people's sin.",
                activityNote: null,
                keyQuestion: "Why do you think God set up such careful rules about who could come near him, and how?",
                teacherGuidance: "Guide toward: God's holiness and people's sinfulness don't mix — the sacrifices and priesthood were God's own gracious way of dealing with sin so his people could still be near him safely, not humans just making it hard for themselves.",
              },
              {
                heading: "How seriously God takes sin",
                minutes: "3 min",
                teacherTalk: "Ask what the sacrifice system tells us about how seriously God takes sin.",
                activityNote: null,
                keyQuestion: "What does this tell us about how seriously God takes sin?",
                teacherGuidance: "Accept responses. Guide toward: sin is a genuinely serious problem that needed real dealing with — through the blood of an animal sacrifice, standing in for the person's sin, every single day.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Say this week's memory verse together again.",
                activityNote: "Use the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 3 finds out how Jesus' death changed all of this, once and for all.",
          },
        },
        // ---------------- DAY 3 (WED) ----------------
        {
          label: "Wednesday",
          theme: "Jesus, our once-for-all sacrifice",
          blocks: [
            { type: "story", text: "Hundreds of years later, when Jesus died on the cross, something remarkable happened at the temple in Jerusalem — the huge curtain separating the most holy place from everyone else was torn in two, from top to bottom." },
            { type: "question", text: "Why do you think it's significant that the curtain tore from top to bottom, rather than being ripped from the bottom by a person?", hint: "Guide toward: it showed this was God's own doing, not a human tearing it — signalling that the barrier between God and his people had been dealt with by God himself, through Jesus." },
            { type: "story", text: "The book of Hebrews tells us that Jesus, our great high priest, offered himself once for all as the perfect sacrifice — so that his people no longer need priests to offer sacrifices for sin, over and over, every single day." },
            { type: "question", text: "How is what Jesus did different from what the priests did about sin?", hint: "Guide toward: priests could never take away sin, only cover it temporarily — but Jesus' one sacrifice deals with sin completely and forever, so that people who trust him are set free from sin." },
            { type: "verse", reference: "Psalm 117:2 (CEV)", text: "\u201cHis love for us is wonderful, his faithfulness never ends. Shout praises to the Lord!\u201d" },
            { type: "activity", text: "Say this week's memory verse together once more." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Mark 15:37–39; Hebrews 10:11–14",
            topic: "Jesus, our once-for-all sacrifice",
            bigIdea: "God chose to live among his people in the tabernacle — but because God is holy and his people are sinful, he also gave detailed instructions for priests and sacrifices, a way to be made right with him. This whole system points forward to Jesus, whose death lets us come into God's presence forever.",
            learningIntentions: [
              "We are learning that the temple curtain tore in two when Jesus died, from top to bottom.",
              "We are learning that Jesus offered himself once for all as our great high priest, so the old sacrifice system was no longer needed.",
              "I can explain how Jesus' death is different from the priests' sacrifices.",
            ],
            assessment: "Listen for whether students can connect the torn curtain to what Jesus' death achieved, and explain why his sacrifice was 'once for all'.",
            resources: [],
            script: [
              {
                heading: "The curtain tears",
                minutes: "2–3 min",
                teacherTalk: "Tell how the temple curtain tore when Jesus died, then ask why the direction of the tear matters.",
                activityNote: null,
                keyQuestion: "Why do you think it's significant that the curtain tore from top to bottom, rather than being ripped from the bottom by a person?",
                teacherGuidance: "Guide toward: it showed this was God's own doing, not a human tearing it — signalling that the barrier between God and his people had been dealt with by God himself, through Jesus.",
              },
              {
                heading: "Our great high priest",
                minutes: "3 min",
                teacherTalk: "Explain that Jesus offered himself once for all as the perfect sacrifice.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "Once for all",
                minutes: "3 min",
                teacherTalk: "Ask how Jesus' sacrifice is different from what the priests did about sin.",
                activityNote: null,
                keyQuestion: "How is what Jesus did different from what the priests did about sin?",
                teacherGuidance: "Guide toward: priests could never take away sin, only cover it temporarily — but Jesus' one sacrifice deals with sin completely and forever, so that people who trust him are set free from sin.",
              },
              {
                heading: "Memory verse",
                minutes: "1–2 min",
                teacherTalk: "Say this week's memory verse together once more.",
                activityNote: "Use the say-it-together activity block.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Day 4 looks forward to when God's people will finally live with him face to face, forever.",
          },
        },
        // ---------------- DAY 4 (THU) ----------------
        {
          label: "Thursday",
          theme: "No more tabernacle needed",
          blocks: [
            { type: "story", text: "This week we've seen how much God wanted to live among his people — first through the tabernacle, with its priests and sacrifices, and then completely and finally through Jesus." },
            { type: "story", text: "The Bible ends with a promise about the future: God's home will be with his people. He will live with them, and they will be his own. God will make his home among his people, and there will be no more death, suffering, crying, or pain." },
            { type: "question", text: "What do you think it will be like to live with God face to face, with no more sin, sadness, or separation between us and him?", hint: "Accept responses — encourage genuine imagination here. Guide toward: this is what the whole tabernacle system was pointing forward to all along — perfect, permanent closeness with God, made possible through Jesus." },
            { type: "question", text: "How does knowing this future change the way we think about following Jesus today?", hint: "Accept responses. Guide toward: it gives us real hope — everything broken about our relationship with God because of sin will one day be completely fixed." },
            { type: "verse", reference: "Psalm 117:2 (CEV)", text: "\u201cHis love for us is wonderful, his faithfulness never ends. Shout praises to the Lord!\u201d" },
            { type: "activity", text: "Let's say this week's memory verse together one last time, fully from memory." },
            { type: "prayer", text: "Dear God, thank you that you have always wanted to live among your people — through the tabernacle, and now through Jesus. Thank you that one day we will live with you forever, with nothing broken between us. Help us trust you and love you until that day comes. Amen." },
          ],
          lessonPlan: {
            duration: "10–15 minutes",
            passage: "Revelation 21:1–4",
            topic: "No more tabernacle needed",
            bigIdea: "God chose to live among his people in the tabernacle — but because God is holy and his people are sinful, he also gave detailed instructions for priests and sacrifices, a way to be made right with him. This whole system points forward to Jesus, whose death lets us come into God's presence forever.",
            learningIntentions: [
              "We are learning that Revelation promises a future where God will live with his people forever, face to face.",
              "We are learning that this future is what the whole tabernacle story, and Jesus' sacrifice, were pointing toward all along.",
              "I can say this week's memory verse, Psalm 117:2, fully from memory.",
            ],
            assessment: "Listen for whether students can explain, in their own words, how the tabernacle story ends with the promise in Revelation 21.",
            resources: [
              "CEV Bible (optional, for reading Revelation 21:1–4 aloud)",
            ],
            script: [
              {
                heading: "The whole week, and beyond",
                minutes: "2 min",
                teacherTalk: "Recap the week's journey from the tabernacle to Jesus.",
                activityNote: null,
                keyQuestion: null,
                teacherGuidance: null,
              },
              {
                heading: "God's home with his people",
                minutes: "3 min",
                teacherTalk: "Read the promise from Revelation 21, then ask students to imagine what it will be like.",
                activityNote: null,
                keyQuestion: "What do you think it will be like to live with God face to face, with no more sin, sadness, or separation between us and him?",
                teacherGuidance: "Accept responses — encourage genuine imagination here. Guide toward: this is what the whole tabernacle system was pointing forward to all along — perfect, permanent closeness with God, made possible through Jesus.",
              },
              {
                heading: "Real hope",
                minutes: "3 min",
                teacherTalk: "Ask how this future promise changes the way we think about following Jesus today.",
                activityNote: null,
                keyQuestion: "How does knowing this future change the way we think about following Jesus today?",
                teacherGuidance: "Accept responses. Guide toward: it gives us real hope — everything broken about our relationship with God because of sin will one day be completely fixed.",
              },
              {
                heading: "Memory verse and closing prayer",
                minutes: "2 min",
                teacherTalk: "Finish this week's memory verse fully from memory, then close together with the prayer in the app.",
                activityNote: "Use the say-it-from-memory activity block, then the built-in prayer block to close.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "This closes out the B2 Upper Primary Exodus material built so far (Lessons 4–6). Lessons 1–3 for this track, and any lessons beyond 6, are not yet built.",
          },
        },
      ],
    },
});
