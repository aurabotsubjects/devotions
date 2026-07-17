// ============================================================
// DEVOTION DATA — STUDENT-FACING PRESENTATION — WEEKS 21–30
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
// CURRICULUM NOTE: Weeks 1–20 were built from "Connect B1 Upper Primary" (Luke's
// Gospel). Week 21 begins a deliberate switch to "Connect B2 Upper Primary"
// (Exodus), starting at that book's Lesson 1. Weeks 11–20 remain an intentional
// gap to be filled in later.
// ============================================================

window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Term 1"] = Object.assign(window.DEVOTIONS["Term 1"] || {}, {
    "Week 21": {
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
            { type: "question", text: "Why do you think Jacob's family needed to move all the way to Egypt?", hint: "Guide toward: there was a severe famine in their own land, and Joseph — through God's plan — was in a position in Egypt to save his family from starving." },
            { type: "story", text: "Years passed. Jacob, Joseph, and all of that generation eventually died. But their families kept having children, and grandchildren, and great-grandchildren — until the whole region of Goshen, where they lived, was full of them." },
            { type: "question", text: "Remember God's promise to Abraham, that his family would become a great nation, too many to count? What do you notice happening to that family here, generations later, in Egypt?", hint: "Guide toward: God's promise was quietly coming true, even in a foreign country, far from home — the Israelites were multiplying exactly as God had said they would." },
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
                teacherTalk: "Tell the story of Jacob moving his family of seventy \u2014 eleven sons and their households \u2014 to Egypt to be near Joseph, who had become a powerful leader there.",
                activityNote: null,
                keyQuestion: "Why do you think Jacob's family needed to move all the way to Egypt?",
                teacherGuidance: "Guide toward: there was a severe famine in their own land, and Joseph \u2014 through God's plan \u2014 was in a position in Egypt to save his family from starving.",
              },
              {
                heading: "A family that keeps growing",
                minutes: "3\u20134 min",
                teacherTalk: "\u201cYears passed. Jacob, Joseph, and all of that generation eventually died. But their families kept having children, and grandchildren, and great-grandchildren \u2014 until the whole region of Goshen was full of them.\u201d",
                activityNote: null,
                keyQuestion: "Remember God's promise to Abraham, that his family would become a great nation? What do you notice happening to that family here, generations later, in Egypt?",
                teacherGuidance: "Guide toward: God's promise was quietly coming true, even in a foreign country, far from home \u2014 the Israelites were multiplying exactly as God had said they would.",
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
            { type: "story", text: "But here's the surprising part: the harder the Egyptians worked the Israelites, the more the Israelite families kept growing! Nothing the king did could stop it." },
            { type: "question", text: "The Israelites were suffering as slaves, yet they kept growing in number. What does that tell us about God's promises, even during hard and unfair times?", hint: "Guide toward: God's promise didn't stop just because life got hard \u2014 he was still faithfully keeping his word to Abraham, even in the middle of real suffering." },
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
                teacherTalk: "Show the comic panel and explain that the king made the Israelites into slaves, forcing them into hard labour building his cities.",
                activityNote: "Show comic panel wk21-01-slave-labour.",
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
            { type: "story", text: "Last time, we saw the king of Egypt force the Israelites into hard slave labour \u2014 but they kept growing in number anyway. So the king came up with an even crueller plan: he ordered that every baby boy born to the Israelites should be thrown into the Nile River." },
            { type: "question", text: "How do you think Israelite parents felt when they heard this terrible order?", hint: "Accept any answer that captures fear, grief, or desperation \u2014 it must have felt like their hope for the future was under attack." },
            { type: "story", text: "During this time, a mother from the tribe of Levi had a baby boy. She hid him at home for three months. When she couldn't hide him safely any longer, she made a basket out of reeds, covered it with tar so it wouldn't leak, and placed it among the reeds at the edge of the Nile River. The baby's older sister stood nearby, watching to see what would happen to him." },
            { type: "image", key: "wk21-02-basket-in-reeds", caption: "The baby's mother placed him in a basket among the reeds, and his sister watched from a distance." },
            { type: "question", text: "This mother trusted God with her baby's life in an incredibly scary situation. What do you think gave her the courage to do this?", hint: "Guide toward: faith that the same God who had kept his promise to Abraham could be trusted with her son's life too, even when she couldn't control what happened next." },
            { type: "verse", reference: "Deuteronomy 4:39 (CEV)", text: "\u201cRemember that the Lord is the only true God, whether in the sky above or on the earth below.\u201d" },
            { type: "prayer", text: "Dear God, please give us courage to trust you in scary situations, like this mother did with her baby son. Help us remember that you are watching over us even when we feel afraid. Amen." },
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
                heading: "The king's cruel order",
                minutes: "3\u20134 min",
                teacherTalk: "\u201cThe king came up with an even crueller plan: he ordered that every baby boy born to the Israelites should be thrown into the Nile River.\u201d",
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
                minutes: "3\u20134 min",
                teacherTalk: "Pause on the enormity of what this mother did before opening the question to the class.",
                activityNote: null,
                keyQuestion: "This mother trusted God with her baby's life in an incredibly scary situation. What do you think gave her the courage to do this?",
                teacherGuidance: "Guide toward: faith that the same God who had kept his promise to Abraham could be trusted with her son's life too, even when she couldn't control what happened next.",
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
            { type: "story", text: "Soon, one of Pharaoh's own daughters came down to bathe in the river. She noticed the basket in the reeds and sent a servant to bring it to her. When she opened it, she found the crying baby inside \u2014 and she felt sorry for him. She knew right away he must be one of the Hebrew babies." },
            { type: "story", text: "Just then, the baby's sister came up and bravely asked the princess, \u2018Do you want me to find a Hebrew woman to nurse the baby for you?\u2019 The princess agreed \u2014 and, without realising it, the girl went and brought back the baby's own mother to care for him!" },
            { type: "question", text: "Isn't that amazing? Out of everyone in Egypt, this baby's own mother ended up being the one who got to raise him \u2014 with Pharaoh's daughter's protection. What do you think this shows us about God?", hint: "Guide toward: God was working behind the scenes the whole time, even in what looked like pure chance, to protect and provide for this baby." },
            { type: "story", text: "When the boy was old enough, his mother brought him to Pharaoh's daughter, who adopted him as her own son. She named him Moses, because she said, \u2018I pulled him out of the water.\u2019" },
            { type: "question", text: "Years earlier, God had told Abraham that his family would live as slaves in a foreign land \u2014 but that God would rescue them and keep his promise. How does baby Moses's rescue connect to that promise?", hint: "Guide toward: this baby, saved in such an unlikely way and raised right inside Pharaoh's own palace, was being prepared by God to one day become exactly the person he would use to rescue his people and keep his promise to Abraham." },
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
                heading: "Memory verse, from memory",
                minutes: "2 min",
                teacherTalk: "Close the week by inviting the class to say the memory verse together entirely from memory, without looking at the screen.",
                activityNote: "Use the built-in verse block, then the say-it-together activity that follows it in the app.",
                keyQuestion: null,
                teacherGuidance: null,
              },
            ],
            whereToNext: "Week 22 (Lesson 2) picks up with Moses as a grown man, his flight from Egypt, and God calling him at the burning bush.",
          },
        },
      ],
    },
});
