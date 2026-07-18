// ============================================================
// DEVOTION DATA — STUDENT-FACING PRESENTATION — CONNECT B2 UPPER PRIMARY — WEEKS 1–10
// FILE CHUNKING: split across data_b2_wk{N}-{N+9}.js files (10 weeks/file), all
// merging into the same global window.DEVOTIONS, under a separate term key
// ("Connect B2 Upper Primary") from the existing B1 material so week numbers
// don't collide. Load in ascending order in index.html, after the B1 files.
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
//  - 'roleplay' : a scripted scene students act out (see B1 files for full shape/notes).
//                 Not used in Weeks 4–6 — the manual has no named-character script
//                 for these lessons.
//
// NOTE: `hint` only renders on `question` blocks, never on `activity` blocks.
//
// WEEKS 4–6 SOURCE: Connect B2 Upper Primary teacher's manual, Lessons 4–6
// (Exodus 11–14, 19–20, 25–40). This is a DIFFERENT level/track from the
// existing "Connect B1 Upper Primary" material in data_wk1-10.js /
// data_wk11-20.js, so it lives under its own term key rather than
// continuing the B1 week numbers. Week numbers here match the manual's own
// Lesson numbers (Lesson 4 = "Week 4", etc.) for traceability. Lessons 1–3
// for this track were not supplied and are NOT built yet — there is
// intentionally a gap before Week 4.
//
// WEEKS 4–6 NOTE ON IMAGES: see images_data_b2_wk1-10.js — the Lesson 4
// PowerPoint (the only one supplied) contains no comic panels, only
// decorative background textures, so these weeks ship text/verse-forward
// with no images, per the visual style discipline rule.
//
// RECURRING MEMORY VERSE FOR THIS UNIT: confirmed directly from each
// lesson's own "Memory verse" box in the manual.
//   - Lessons 4–5: Deuteronomy 4:39 (CEV) — "So remember that the Lord is
//     the only true God, whether in the sky above or on the earth below."
//   - Lesson 6: the manual's own memory verse box changes to Psalm 117:2
//     (CEV) — "His love for us is wonderful, his faithfulness never ends.
//     Shout praises to the Lord!" This is a genuine change flagged in the
//     manual itself, not an error — Week 6 uses the new verse throughout,
//     introduced explicitly as "a new memory verse" on Day 1.
// ============================================================

window.DEVOTIONS = window.DEVOTIONS || {};
window.DEVOTIONS["Connect B2 Upper Primary"] = Object.assign(window.DEVOTIONS["Connect B2 Upper Primary"] || {}, {
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
