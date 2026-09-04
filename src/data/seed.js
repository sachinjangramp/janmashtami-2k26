// Seed data for the Janmashtami Pastime Quiz
// 20 modules x 5 questions = 100 total questions
// Source: Krishna, the Supreme Personality of Godhead (Krishna Book) by A.C. Bhaktivedanta Swami Prabhupada
// Difficulty order within each module: Easy, Medium, Medium, Hard, Hard
// NOTE ON FORMAT: extended from the original single-answer template.
// Every question now has "correctIndexes": an array of 0-based indices into "options".
// Easy/Medium questions have exactly 1 correct index. Hard questions have exactly 2
// correct indices (the "select 2" questions), since the game intentionally makes the
// hardest questions require picking two correct options out of four.

export const SEED_MODULES = [
    {
        id: 1,
        title: "Module 1: Pastimes of the Young Lord",
        questions: [
            {
                id: 'm1-q1',
                text: "Who sent the demoness Pūtanā to kill baby Krishna?",
                options: ["Jarāsandha", "Kamsa", "Śiśupāla", "Bāṇāsura"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "Fearing the prophecy of his death at Krishna's hand, Kamsa sent the witch Pūtanā to murder infants across his kingdom.",
            },
            {
                id: 'm1-q2',
                text: "What is the name of the bathing ceremony held for Krishna's first birthday, still performed today?",
                options: ["Abhiṣeka", "Ārati", "Pūjā", "Yajña"],
                correctIndexes: [0],
                difficulty: "medium",
                explanation:
                    "This ritual bathing of Krishna on His birthday is the very ceremony still performed for the Deity every Janmashtami.",
            },
            {
                id: 'm1-q3',
                text: "What household task was Mother Yaśodā doing when the mortar-binding pastime began?",
                options: ["Cooking", "Churning butter", "Sweeping", "Weaving garlands"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Yaśodā loved churning butter herself while singing of Krishna's pastimes, cherishing every moment with her son.",
            },
            {
                id: 'm1-q4',
                text: "Whose sons were Nalakūvara and Maṇigrīva? (Select 2 correct facts)",
                options: [
                    "Sons of Kuvera",
                    "Devotees of Lord Śiva's family alone, unrelated to any curse",
                    "Sons of Indra",
                    "Great devotees favored by Nārada's mercy",
                ],
                correctIndexes: [0, 3],
                difficulty: "hard",
                explanation:
                    "Born to the wealthy Kuvera, these two proud demigods were ultimately saved by Nārada's compassionate curse, which arranged their meeting with Krishna.",
            },
            {
                id: 'm1-q5',
                text: "What did baby Krishna trade with the fruit vendor? (Select 2 correct facts)",
                options: [
                    "A few grains from His palm",
                    "Gold coins",
                    "The grains turned her basket into jewels",
                    "Butter",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Imitating the barter economy He'd seen His parents use, baby Krishna offered a fistful of grains — and the vendor's basket miraculously filled with jewels.",
            },
        ],
    },
    {
        id: 2,
        title: "Module 2: Demons and Devotion",
        questions: [
            {
                id: 'm2-q1',
                text: "Whose younger brother was the demon Aghāsura?",
                options: ["Kāliya's", "Pūtanā and Bakāsura's", "Kaṁsa's", "Dhenukāsura's"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "Continuing a family vendetta, Aghāsura sought to avenge his slain siblings by attacking Krishna and all the cowherd boys at once.",
            },
            {
                id: 'm2-q2',
                text: "What childhood stage had Krishna and Balarāma entered when they began herding cows themselves?",
                options: ["Kaumāra", "Paugaṇḍa", "Kaiśora", "Yauvana"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Having outgrown toddlerhood, Krishna and Balarāma now roamed Vrindavan's forests as older boys of six to ten years, taking full charge of the cows.",
            },
            {
                id: 'm2-q3',
                text: "What had the serpent Kāliya done to the water of the Yamunā?",
                options: ["Frozen it", "Poisoned it", "Dried it up", "Turned it red"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "For years the Yamunā had become a river of death because of Kāliya's venom, killing every bird that flew over it.",
            },
            {
                id: 'm2-q4',
                text: "Which sacrifice were the cowherd men preparing when Krishna questioned Nanda about it? (Select 2 correct facts)",
                options: [
                    "A sacrifice to Indra",
                    "A sacrifice to Varuṇa",
                    "Meant to secure rainfall for the year",
                    "A wedding ceremony",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Every year the Vrajavāsīs performed this offering to thank Indra for rain — but Krishna was determined to redirect their devotion elsewhere.",
            },
            {
                id: 'm2-q5',
                text: "What is the name of the hill Krishna lifted, and which cloud did Indra send to destroy Vrindavan? (Select 2 correct facts)",
                options: ["Govardhana Hill", "Kailāsa Hill", "The Sāṁvartaka cloud", "The Puṣkara cloud"],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "To shelter His devotees from Indra's furious storm, Krishna raised Govardhana Hill like a giant umbrella against the devastating Sāṁvartaka clouds.",
            },
        ],
    },
    {
        id: 3,
        title: "Module 3: The Road to Mathurā",
        questions: [
            {
                id: 'm3-q1',
                text: "Who drove the chariot carrying Krishna and Balarāma to Mathurā?",
                options: ["Uddhava", "Akrūra", "Daruka", "Śatrughna"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "Sent by Kaṁsa under the pretense of invitation, the devoted Akrūra had the sacred duty of bringing the two brothers into the city.",
            },
            {
                id: 'm3-q2',
                text: "Which of Kaṁsa's champion wrestlers did Krishna personally fight?",
                options: ["Muṣṭika", "Kūṭa", "Cāṇūra", "Tośala"],
                correctIndexes: [2],
                difficulty: "medium",
                explanation:
                    "Matched against Kaṁsa's mightiest wrestler, the seemingly delicate Krishna proved that true strength has nothing to do with size.",
            },
            {
                id: 'm3-q3',
                text: "What mystic ability let Pūtanā travel through the sky?",
                options: ["She rode a chariot", "She was a khecarī witch", "She flew on a vulture", "She used a magic broom"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Pūtanā belonged to a class of dark sorceresses who could travel great distances through the air by mystic power alone.",
            },
            {
                id: 'm3-q4',
                text: "Where had Mother Yaśodā placed baby Krishna just before the cart-kicking incident? (Select 2 correct facts)",
                options: [
                    "Underneath a hand-driven cart",
                    "In a cradle outdoors",
                    "She had forgotten to feed Him and left Him hungry",
                    "On the roof of the house",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Busy with birthday guests and having forgotten to feed her hungry, crying child, Yaśodā had laid Krishna beneath a cart loaded with pots and utensils.",
            },
            {
                id: 'm3-q5',
                text: "Why did Mother Yaśodā stop nursing Krishna partway through? (Select 2 correct facts)",
                options: [
                    "The milk on the stove began boiling over",
                    "Krishna fell asleep",
                    "She rushed to save the overflowing milk pan",
                    "A guest arrived unexpectedly",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Torn between her hungry baby and the overflowing milk, Yaśodā set Krishna aside for a moment — enough to provoke His mischievous anger.",
            },
        ],
    },
    {
        id: 4,
        title: "Module 4: Trees, Calves, and Serpents",
        questions: [
            {
                id: 'm4-q1',
                text: "What were Nalakūvara and Maṇigrīva doing when the sage Nārada passed by?",
                options: ["Performing austerities", "Bathing intoxicated with young women", "Meditating", "Fighting demons"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "Drunk and shameless, the two demigods failed even to notice the great sage passing nearby, unlike the women who quickly covered themselves.",
            },
            {
                id: 'm4-q2',
                text: "What shape did the demon Vatsāsura assume to approach Krishna and Balarāma?",
                options: ["A tiger", "A calf", "A snake", "A crow"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Disguised among the herd as an ordinary calf, Vatsāsura hoped to slip close enough to kill the divine brothers.",
            },
            {
                id: 'm4-q3',
                text: "What did the cowherd boys mistake the demon Aghāsura's open mouth for at first?",
                options: ["A cave entrance", "A large statue or strange object", "A mountain peak", "A well"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "So enormous and still was the demon's form that the innocent boys first thought it merely a landmark before realizing it was alive.",
            },
            {
                id: 'm4-q4',
                text: "Which friends specifically asked Krishna and Balarāma to visit the Tālavana forest? (Select 2 correct facts)",
                options: [
                    "Śrīdāmā and Subala were among them",
                    "It was only Balarāma's own idea",
                    "They were drawn by the aroma of ripe palm fruit",
                    "Sent there by Nanda Mahārāja",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Drawn by the sweet aroma of ripe palm fruits, Śrīdāmā, Subala, and Stoka-kṛṣṇa begged the brothers to clear the forest of its guardian demon.",
            },
            {
                id: 'm4-q5',
                text: "What tree did Krishna climb before jumping into the Yamunā to confront Kāliya? (Select 2 correct facts)",
                options: [
                    "A kadamba tree",
                    "A banyan tree",
                    "It was the only living tree left on the poisoned bank",
                    "A mango tree",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "This particular kadamba tree was the only tree still alive by the poisoned riverbank, kept that way just for this very pastime.",
            },
        ],
    },
    {
        id: 5,
        title: "Module 5: Rain, Rescue, and Reunion",
        questions: [
            {
                id: 'm5-q1',
                text: "According to Nanda Mahārāja, why did the cowherd community traditionally worship Indra?",
                options: ["For wealth", "Because rainfall was believed to come by his mercy", "For protection from tigers", "For good marriages"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "Nanda explained that without Indra's rain there could be no successful farming, so honoring him was simply practical gratitude.",
            },
            {
                id: 'm5-q2',
                text: "What type of cloud did Indra summon to try to destroy Vrindavan?",
                options: ["Puṣkara", "Sāṁvartaka", "Jīmūta", "Balāhaka"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Furious that his sacrifice had been stopped, Indra called upon this most destructive class of cloud, meant for universal devastation.",
            },
            {
                id: 'm5-q3',
                text: "What did Akrūra witness in the Yamunā's water while praying on the way to Mathurā?",
                options: ["A golden lotus", "A vision of Krishna's universal (Viṣṇu) form", "A talking fish", "A sunken city"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Overwhelmed with wonder, Akrūra beheld the Lord's cosmic form reflected in the river, confirming who the boy beside him truly was.",
            },
            {
                id: 'm5-q4',
                text: "Which wrestler did Balarāma fight, and what happened to him? (Select 2 correct facts)",
                options: [
                    "Muṣṭika was Balarāma's opponent",
                    "Cāṇūra was Balarāma's opponent",
                    "Muṣṭika vomited blood and died from Balarāma's strokes",
                    "Muṣṭika fled the arena alive",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "While Krishna faced Cāṇūra, His elder brother Balarāma matched the equally formidable Muṣṭika blow for blow until victory was secured.",
            },
            {
                id: 'm5-q5',
                text: "What happened when baby Krishna drank from the poisoned Pūtanā? (Select 2 correct facts)",
                options: [
                    "He sucked out her very life along with the poison",
                    "He immediately fell ill",
                    "She fell dead, crying out for Him to release her",
                    "She turned into a beautiful goddess",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Instead of being harmed, little Krishna drew both the poison and the demoness's life air from her body, ending her attack instantly.",
            },
        ],
    },
    {
        id: 6,
        title: "Module 6: Mischief and Mercy",
        questions: [
            {
                id: 'm6-q1',
                text: "How did baby Krishna cause the cart to collapse?",
                options: ["He pulled a rope", "He kicked His foot against the wheel", "He pushed it with His hand", "He cried loudly and it fell"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "In hungry frustration Krishna kicked out with His little leg, and the mere touch of His foot shattered the wheel.",
            },
            {
                id: 'm6-q2',
                text: "What did angry baby Krishna do to the butter pot after being left alone?",
                options: ["Hid it", "Broke it with a stone and ate the butter", "Gave it to His mother", "Threw it in the river"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Furious at being interrupted while nursing, little Krishna smashed the yogurt pot with a stone and enjoyed the butter Himself.",
            },
            {
                id: 'm6-q3',
                text: "Why did Nārada curse Nalakūvara and Maṇigrīva?",
                options: ["Out of pure anger", "Out of compassion, to arrange their meeting with Krishna", "Because they insulted him", "By accident"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Far from an act of anger, Nārada's curse was a mercy in disguise, designed to bring these two proud souls face to face with the Lord.",
            },
            {
                id: 'm6-q4',
                text: "How exactly did Krishna kill the demon Vatsāsura? (Select 2 correct facts)",
                options: [
                    "He caught him by the hind legs and tail",
                    "He struck him with a stone",
                    "He whirled him around and threw him into a tree",
                    "He drowned him in the Yamunā",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "With effortless strength, young Krishna swung the disguised calf-demon through the air and hurled him into the treetops.",
            },
            {
                id: 'm6-q5',
                text: "How was the giant serpent-demon Aghāsura finally killed? (Select 2 correct facts)",
                options: [
                    "Krishna entered his mouth and expanded His body inside",
                    "Balarāma struck him with a club",
                    "His life air burst out through a hole in his skull",
                    "He was struck by lightning",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Refusing to abandon His swallowed friends, Krishna entered the demon's mouth and swelled so large that Aghāsura's life force was forced out through his head.",
            },
        ],
    },
    {
        id: 7,
        title: "Module 7: Forest Fruits and Fallen Pride",
        questions: [
            {
                id: 'm7-q1',
                text: "In what form did the demon Dhenukāsura live in the Tālavana forest?",
                options: ["A tiger", "An ass (donkey)", "A serpent", "A boar"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "Dhenukāsura and his companions had taken donkey form, making the fruit-laden forest too dangerous to approach for years.",
            },
            {
                id: 'm7-q2',
                text: "How many hoods did the serpent Kāliya have, upon whom Krishna danced?",
                options: ["Ten", "Fifty", "About one hundred", "A thousand"],
                correctIndexes: [2],
                difficulty: "medium",
                explanation:
                    "Despite commanding a hundred hoods to strike with, mighty Kāliya found himself completely overpowered as Krishna danced upon them one by one.",
            },
            {
                id: 'm7-q3',
                text: "What alternative object of worship did Krishna propose instead of the Indra sacrifice?",
                options: ["Lord Śiva", "Govardhana Hill and the local brāhmaṇas", "The river Yamunā", "The demigod Varuṇa"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Krishna urged His father to redirect the same offerings toward Govardhana Hill, since it was the hill and land that truly sustained them daily.",
            },
            {
                id: 'm7-q4',
                text: "How exactly did Krishna lift Govardhana Hill? (Select 2 correct facts)",
                options: [
                    "With one hand, as easily as a child lifts a mushroom",
                    "Using a divine weapon",
                    "On the little finger of His left hand",
                    "With the help of Balarāma",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "What should have been impossible for anyone else was effortless for Krishna, who balanced the entire mountain on His smallest finger.",
            },
            {
                id: 'm7-q5',
                text: "How did the women of Mathurā react on hearing Krishna and Balarāma had entered the city? (Select 2 correct facts)",
                options: [
                    "They rushed to their rooftops in great excitement",
                    "They locked their doors in fear",
                    "Many left meals, baths, or nursing children unfinished",
                    "They fled the city",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Years of longing to see Krishna finally found release as the women of Mathurā abandoned every task mid-motion, racing to catch a glimpse of the brothers.",
            },
        ],
    },
    {
        id: 8,
        title: "Module 8: Wrestlers and Witches",
        questions: [
            {
                id: 'm8-q1',
                text: "How did Krishna kill the wrestler Cāṇūra?",
                options: ["With a sword", "By whirling him around and throwing him down", "By strangling him", "By kicking him off the dais"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "With a single decisive motion, Krishna spun the mighty wrestler through the air, ending Cāṇūra's life the moment he struck the ground.",
            },
            {
                id: 'm8-q2',
                text: "Where had Pūtanā smeared the deadly poison on herself?",
                options: ["Her lips", "Her breast", "Her fingernails", "Her hair"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Intending to kill the infant instantly, Pūtanā coated her breast with venom before placing baby Krishna on her lap to nurse.",
            },
            {
                id: 'm8-q3',
                text: "Who first told the adults that Krishna had caused the cart to collapse?",
                options: ["Nanda Mahārāja himself", "The small children who were playing nearby", "Mother Rohiṇī", "A passing brāhmaṇa"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "While the grown-ups puzzled over the accident, the playing children insisted they'd seen baby Krishna's kick topple the cart — though few believed them.",
            },
            {
                id: 'm8-q4',
                text: "What was Krishna doing when Mother Yaśodā finally found Him after the pot-breaking incident? (Select 2 correct facts)",
                options: [
                    "Sitting atop an overturned wooden mortar",
                    "Hiding behind a tree",
                    "Feeding butter from a hanging pot to the monkeys",
                    "Crying alone in the courtyard",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Krishna had climbed atop an upside-down mortar to reach a butter pot swinging from the ceiling, generously sharing His stolen treasure with the monkeys.",
            },
            {
                id: 'm8-q5',
                text: "What form did Nārada's curse turn the two demigods into? (Select 2 correct facts)",
                options: [
                    "A pair of arjuna trees",
                    "Two mountains",
                    "Standing in Nanda Mahārāja's courtyard",
                    "Two rivers",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Nārada decreed the two would become immovable trees, and by his mercy they grew right in Nanda's own courtyard, awaiting Krishna's touch.",
            },
        ],
    },
    {
        id: 9,
        title: "Module 9: Guardians of Vrindavan",
        questions: [
            {
                id: 'm9-q1',
                text: "What animal did the demon Bakāsura resemble?",
                options: ["An elephant", "A gigantic heron", "A lion", "A crocodile"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "Bakāsura appeared on the riverbank as a monstrous heron with a beak like a thunderbolt, and without warning seized Krishna in his jaws.",
            },
            {
                id: 'm9-q2',
                text: "How old were Krishna and His friends during the Aghāsura pastime?",
                options: ["Ten years old", "Under five years old", "Fifteen years old", "Newborn"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Even as toddlers, Krishna and His playmates faced deadly danger fearlessly, not yet knowing their friend was God Himself.",
            },
            {
                id: 'm9-q3',
                text: "How did Balarāma first cause the palm fruits to fall from the trees?",
                options: ["He climbed and picked them", "He vigorously shook the trees with His arms", "He used a stick", "He asked the monkeys to shake them"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "With the strength of an elephant, Balarāma simply yanked the palm trees, sending ripe fruit crashing down and alerting the demon.",
            },
            {
                id: 'm9-q4',
                text: "Who stayed calm while all of Vrindavan grieved over Krishna's apparent danger in Kāliya's coils? (Select 2 correct facts)",
                options: [
                    "Lord Balarāma alone stayed smiling and calm",
                    "Mother Yaśodā stayed calm",
                    "He knew Krishna's unlimited power made the danger unreal",
                    "Nanda Mahārāja stayed calm",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Balarāma, who knew His younger brother's unlimited power, stood calmly amid the panic, certain no ordinary serpent could ever harm Krishna.",
            },
            {
                id: 'm9-q5',
                text: "What kinds of foods did Krishna instruct be prepared for the Govardhana sacrifice? (Select 2 correct facts)",
                options: [
                    "Rice, dal, and various milk sweets",
                    "Only fruits and flowers",
                    "A festive variety fit for a grand offering",
                    "Meat preparations",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Krishna described a feast fit for the hill itself — heaping preparations meant to be offered with love and shared with everyone afterward.",
            },
        ],
    },
    {
        id: 10,
        title: "Module 10: Strength Beyond Measure",
        questions: [
            {
                id: 'm10-q1',
                text: "With which finger is Krishna described as holding up Govardhana Hill?",
                options: ["His thumb", "His whole hand", "The little finger of His left hand", "His right forefinger"],
                correctIndexes: [2],
                difficulty: "easy",
                explanation:
                    "The residents of Vrindavan watched in astonishment as the entire mountain rested securely on nothing more than Krishna's smallest finger.",
            },
            {
                id: 'm10-q2',
                text: "What did Krishna ask a washerman for while walking through Mathurā's streets?",
                options: ["Food", "Fine clothing", "Directions", "Money"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Though never in need of anything, Krishna made this simple request to show that a devotee's readiness to offer everything to the Lord brings the greatest fortune.",
            },
            {
                id: 'm10-q3',
                text: "What weapon did Balarāma use to kill Kaṁsa's eight younger brothers?",
                options: ["A sword", "A mace", "An elephant's tusk", "His bare hands only"],
                correctIndexes: [2],
                difficulty: "medium",
                explanation:
                    "When Kaṁsa's eight vengeful brothers rushed at Krishna together, Balarāma met them with a tusk in hand, felling them like a lion among deer.",
            },
            {
                id: 'm10-q4',
                text: "What did baby Krishna do while drinking from Pūtanā? (Select 2 correct facts)",
                options: [
                    "He sucked the poisoned milk along with her life air",
                    "He cried and refused to drink",
                    "He killed her while appearing to nurse peacefully",
                    "He turned the poison into nectar",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Instead of being harmed, little Krishna drew both the poison and the demoness's life air from her body, ending the attack in an instant.",
            },
            {
                id: 'm10-q5',
                text: "What form did the demon Tṛṇāvarta take to kidnap Krishna? (Select 2 correct facts)",
                options: [
                    "A whirlwind",
                    "A giant bird",
                    "He carried Krishna high into the sky before being defeated",
                    "A serpent",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Sent by Kaṁsa, Tṛṇāvarta swept in as a furious dust storm, snatching baby Krishna and carrying Him into the sky — only to fall dead moments later.",
            },
        ],
    },
    {
        id: 11,
        title: "Module 11: Bound by Love",
        questions: [
            {
                id: 'm11-q1',
                text: "What did Mother Yaśodā decide to do to Krishna as punishment after catching Him?",
                options: ["Scold Him loudly", "Bind Him to the wooden grinding mortar", "Send Him to bed", "Take away His butter"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "After a breathless chase, Yaśodā caught her naughty child and, setting aside her stick, resolved instead to tie Him up as a gentler correction.",
            },
            {
                id: 'm11-q2',
                text: "For how long were Nalakūvara and Maṇigrīva destined to remain as trees?",
                options: ["Ten years", "One hundred years, by the demigods' count", "Forever", "One day"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "This long celestial wait was simply the time until baby Krishna would appear in Nanda's courtyard and finally set them free.",
            },
            {
                id: 'm11-q3',
                text: "What happened to Bakāsura immediately after he swallowed Krishna?",
                options: ["He fell asleep", "He felt a burning sensation in his throat and spat Krishna back out", "He turned to stone", "He flew away"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "The glow of Krishna's transcendental body scorched the demon's insides like fire, forcing Bakāsura to release his tiny victim almost at once.",
            },
            {
                id: 'm11-q4',
                text: "What did Krishna do after seeing His friends and calves swallowed inside Aghāsura? (Select 2 correct facts)",
                options: [
                    "He also entered the demon's mouth",
                    "He called for Balarāma's help",
                    "He expanded His body within the demon's throat to choke it",
                    "He waited outside for the demon to release them",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Refusing to abandon His friends, Krishna calmly walked into the serpent's mouth and swelled Himself so large that Aghāsura choked to death.",
            },
            {
                id: 'm11-q5',
                text: "How did the demon Dhenukāsura first attack Lord Balarāma? (Select 2 correct facts)",
                options: [
                    "He kicked Balarāma's chest with his hind legs",
                    "He bit Balarāma",
                    "Balarāma responded by whirling him into a tree, killing him",
                    "Balarāma ignored the attack entirely",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Enraged by the noise of falling fruit, Dhenukāsura charged in and kicked Balarāma, only to be whirled around and hurled into the very trees he had guarded.",
            },
        ],
    },
    {
        id: 12,
        title: "Module 12: Mercy on the Mighty",
        questions: [
            {
                id: 'm12-q1',
                text: "Who begged Krishna for mercy on Kāliya's behalf?",
                options: ["Balarāma", "Kāliya's wives, the Nāgapatnīs", "Mother Yaśodā", "Garuḍa"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "Watching their husband beaten and near death, the serpent's wives approached Krishna in tears, pleading for his life to be spared.",
            },
            {
                id: 'm12-q2',
                text: "What is the name of the festival, still celebrated today, honoring Govardhana Hill with mountains of food?",
                options: ["Rāsa-līlā", "Annakūṭa", "Holi", "Ratha-yātrā"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "What began as Krishna's redirection of a single sacrifice became this lasting festival, where mountains of food are still offered in His honor.",
            },
            {
                id: 'm12-q3',
                text: "For about how long did Krishna hold up Govardhana Hill to shelter the villagers?",
                options: ["One day", "About one week", "One month", "A single night"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "For a full week Krishna stood unmoving, sparing no thought for His own hunger or fatigue, so His devotees could stay safe and dry.",
            },
            {
                id: 'm12-q4',
                text: "What happened when the washerman rudely refused Krishna's request for clothing? (Select 2 correct facts)",
                options: [
                    "The washerman worked for and was loyal to Kaṁsa",
                    "Krishna simply walked away",
                    "Krishna struck him and severed his head",
                    "Balarāma warned him instead",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "The washerman's insolence toward the Supreme Lord, compounded by his loyalty to the wicked Kaṁsa, met with swift and decisive justice.",
            },
            {
                id: 'm12-q5',
                text: "How exactly did Krishna kill King Kaṁsa himself? (Select 2 correct facts)",
                options: [
                    "He dragged him down from his dais by the hair",
                    "He shot him with an arrow",
                    "He straddled his chest and struck him repeatedly",
                    "He drowned him",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "The tyrant who had spent his life fearing this moment met it at last — pulled from his throne by the very nephew he had tried so hard to destroy.",
            },
        ],
    },
    {
        id: 13,
        title: "Module 13: The Terrible and the Tender",
        questions: [
            {
                id: 'm13-q1',
                text: "About how large did Pūtanā's body become after she fell dead?",
                options: ["The size of a house", "About twelve miles long", "The size of an elephant", "It stayed human-sized"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "On dying, Pūtanā abandoned her illusion, and her true gigantic form crashed down, stretching for miles.",
            },
            {
                id: 'm13-q2',
                text: "How old was Krishna when Tṛṇāvarta carried Him high into the sky?",
                options: ["Five years old", "Still a small baby, shortly after His first birthday", "Ten years old", "A teenager"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Though barely past infancy, Krishna showed His unlimited power by growing too heavy for the demon to carry.",
            },
            {
                id: 'm13-q3',
                text: "What strange problem kept happening when Yaśodā tried to bind Krishna with rope?",
                options: ["The rope kept breaking", "It always came up about two inches short, no matter how much she added", "Krishna kept untying it", "The rope caught fire"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Yaśodā joined rope after rope from the whole house, yet the binding always fell short by that same small measure, baffling her simple, loving heart.",
            },
            {
                id: 'm13-q4',
                text: "How did Krishna ultimately free Nalakūvara and Maṇigrīva from their tree forms? (Select 2 correct facts)",
                options: [
                    "By dragging the mortar He was bound to between the two trees",
                    "By cutting the trees with an axe",
                    "The trees fell and released two glowing beings",
                    "By speaking a mantra",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Bound as a naughty child to a grinding mortar, Krishna crawled between the twin trees and pulled until they crashed down, releasing two glowing beings.",
            },
            {
                id: 'm13-q5',
                text: "How did Krishna finally kill the heron-demon Bakāsura? (Select 2 correct facts)",
                options: [
                    "He caught the demon's beak in His hands",
                    "He hurled a stone at him",
                    "He split the beak in two",
                    "He let Balarāma finish him off",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "As easily as a child splits a blade of grass, Krishna tore apart the massive beak of Bakāsura before His astonished cowherd friends.",
            },
        ],
    },
    {
        id: 14,
        title: "Module 14: Power Concealed as a Child",
        questions: [
            {
                id: 'm14-q1',
                text: "How did Aghāsura's life air finally leave his body?",
                options: ["Through his mouth", "Through a hole in the top of his skull", "Through his eyes", "It never left; he survived"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "Unable to escape through his own throat, the demon's life force was forced upward, breaking free through his head as he perished.",
            },
            {
                id: 'm14-q2',
                text: "How did Lord Balarāma kill the demon Dhenukāsura?",
                options: ["With a sword", "By whirling him by the legs and throwing him into a tree", "By trampling him", "By burning him"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Balarāma, who is the mighty Ananta Śeṣa in disguise, dispatched the demon with almost casual strength, hurling him into the trees he had guarded.",
            },
            {
                id: 'm14-q3',
                text: "Where did Krishna order Kāliya to go after sparing his life?",
                options: ["Back into the Yamunā", "To leave for the ocean", "To the Himalayas", "Nowhere; he stayed in Vrindavan"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Rather than destroying Kāliya, the merciful Lord simply banished him from Vrindavan's sacred river, commanding him to move to the sea.",
            },
            {
                id: 'm14-q4',
                text: "What extraordinary form did Krishna assume during the Govardhana-pūjā? (Select 2 correct facts)",
                options: [
                    "A great transcendental form as Govardhana Hill itself",
                    "The form of Lord Nṛsiṁha",
                    "He personally consumed the offerings in that form",
                    "He remained invisible throughout",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "To prove He and the hill are non-different, Krishna manifested as the towering form of Govardhana and personally consumed the vast offerings before everyone.",
            },
            {
                id: 'm14-q5',
                text: "What finally made Indra call off the devastating rain? (Select 2 correct facts)",
                options: [
                    "Witnessing Krishna's mystic power in holding up the entire hill",
                    "Nanda Mahārāja's prayers alone",
                    "Indra was humbled and thunderstruck by what he saw",
                    "The clouds simply ran out of water",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Humbled and thunderstruck by what he saw, the once-proud king of heaven realized his power was nothing compared to Krishna's.",
            },
        ],
    },
    {
        id: 15,
        title: "Module 15: Service Rewarded",
        questions: [
            {
                id: 'm15-q1',
                text: "What benediction did Krishna give the tailor who made new clothes for Him and Balarāma?",
                options: ["Wealth only", "Sārūpya-mukti — a spiritual form like Nārāyaṇa's", "A royal title", "A place in the wrestling arena"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "In grateful reward for the tailor's simple service, Krishna promised him the rare gift of an eternal, four-armed form in the spiritual world.",
            },
            {
                id: 'm15-q2',
                text: "What kind of liberation did Kaṁsa attain after being killed by Krishna?",
                options: ["None; he was condemned", "Sārūpya-mukti — a form resembling Lord Viṣṇu's", "He was reborn as a king", "He became a demigod"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Even Kaṁsa's enmity became a strange blessing — his lifelong fearful obsession with Krishna's form still earned him liberation after death.",
            },
            {
                id: 'm15-q3',
                text: "What purification rituals did the gopīs perform on Krishna after Pūtanā's death?",
                options: ["Bathing Him in the Yamunā", "Waving a cow's tail, washing with cow's urine, and sprinkling cow-dust", "Wrapping Him in silk", "Offering Him ghee lamps"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Though Krishna needed no protection, the gopīs lovingly performed these rites, showing the exalted place cows hold in Vedic life.",
            },
            {
                id: 'm15-q4',
                text: "How exactly did Krishna defeat the whirlwind demon Tṛṇāvarta? (Select 2 correct facts)",
                options: [
                    "He made Himself extremely heavy",
                    "He called out to Balarāma",
                    "He gripped the demon's neck until Tṛṇāvarta choked and fell to his death",
                    "He turned invisible",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "As Tṛṇāvarta struggled under an unbearable weight, his eyes bulged and he plummeted to the ground, dying instantly.",
            },
            {
                id: 'm15-q5',
                text: "Why did Krishna eventually allow Himself to be bound by the rope? (Select 2 correct facts)",
                options: [
                    "Out of compassion for His mother's exhausting effort",
                    "Because He was too tired to resist",
                    "He wanted to reward her loving labor by submitting to it",
                    "Because Nanda Mahārāja ordered Him to",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Seeing how hard His mother had labored trying to tie Him, Krishna mercifully let the rope succeed, submitting willingly to her love.",
            },
        ],
    },
    {
        id: 16,
        title: "Module 16: Freed by Grace",
        questions: [
            {
                id: 'm16-q1',
                text: "What did the two demigods do immediately after emerging from the fallen arjuna trees?",
                options: ["Ran away", "They bowed down and offered prayers to Krishna", "They attacked Krishna", "They fell asleep"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "Freed at last from their long imprisonment, the former demigods fell before baby Krishna in gratitude, praising Him as the source of all creation.",
            },
            {
                id: 'm16-q2',
                text: "Whose friend was the demon Bakāsura?",
                options: ["Indra's", "Kaṁsa's", "Śiva's", "Nārada's"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Like so many demons sent against Krishna, Bakāsura acted on behalf of the wicked king Kaṁsa, desperate to eliminate the child of prophecy.",
            },
            {
                id: 'm16-q3',
                text: "How did Krishna revive His friends and the calves after killing Aghāsura?",
                options: ["With Vedic mantras", "With a single transcendental glance", "By reviving them one by one over hours", "By feeding them nectar"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "A mere glance from Krishna was enough to restore full consciousness and life to every boy and calf who had lain lifeless inside the demon.",
            },
            {
                id: 'm16-q4',
                text: "What happened to Dhenukāsura's demon associates after his death? (Select 2 correct facts)",
                options: [
                    "They attacked Krishna and Balarāma in retaliation",
                    "They fled and were never seen again",
                    "They were killed the same way and thrown into the trees",
                    "They surrendered peacefully",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "The remaining ass-demons rushed in for revenge, but Krishna and Balarāma dispatched every one just as easily, filling the trees with their fallen bodies.",
            },
            {
                id: 'm16-q5',
                text: "Why had Kāliya originally come to live in the Yamunā? (Select 2 correct facts)",
                options: [
                    "He was hiding from Garuḍa, who wanted to eat him",
                    "He was born there",
                    "Krishna later assured him Garuḍa would trouble him no more",
                    "He was banished there by Indra",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Kāliya confessed he had fled to the river to escape Garuḍa's appetite — and Krishna's mark upon him would later grant him permanent protection.",
            },
        ],
    },
    {
        id: 17,
        title: "Module 17: Homecomings",
        questions: [
            {
                id: 'm17-q1',
                text: "What warning did Krishna give about neglecting the worship of Govardhana Hill?",
                options: ["A poor harvest would follow", "People who neglect it would be bitten by the hill's snakes", "Rain would never fall again", "The cows would fall ill"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "Krishna made clear this new worship was a serious devotional duty, promising misfortune to anyone who failed to honor the hill.",
            },
            {
                id: 'm17-q2',
                text: "What did Krishna do with Govardhana Hill once the danger had completely passed?",
                options: ["Left it raised permanently", "Carefully replaced it in exactly its original position", "Broke it into pieces", "Gave it to Indra"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Just as gently as He had lifted it, Krishna set the massive hill back down precisely where it belonged.",
            },
            {
                id: 'm17-q3',
                text: "What is the name of the florist in Mathurā who greeted Krishna and Balarāma with great devotion?",
                options: ["Akrūra", "Sudāmā", "Uddhava", "Kubjā"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Falling humbly at Their feet, the florist Sudāmā offered fragrant garlands with pure love, receiving Krishna's promise of eternal service in return.",
            },
            {
                id: 'm17-q4',
                text: "Whom did Krishna and Balarāma release immediately after Kaṁsa's death? (Select 2 correct facts)",
                options: [
                    "Their parents, Vasudeva and Devakī",
                    "All of Mathurā's prisoners",
                    "Who had long been imprisoned by Kaṁsa",
                    "Ugrasena's soldiers only",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "With the tyrant finally gone, Krishna and Balarāma rushed to free the mother and father who had suffered years of captivity simply for having given birth to Him.",
            },
            {
                id: 'm17-q5',
                text: "What did Mother Yaśodā do to protect Krishna's body after the danger had passed? (Select 2 correct facts)",
                options: [
                    "She chanted the names of Lord Viṣṇu over each part of His body",
                    "She hid Him inside the house for a month",
                    "A different divine name was invoked for each limb",
                    "She performed a fire sacrifice alone",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "With great tenderness, Yaśodā invoked a different name of the Lord for every limb of baby Krishna, trusting in His own holy names for protection.",
            },
        ],
    },
    {
        id: 18,
        title: "Module 18: Cursed and Freed, Bound and Released",
        questions: [
            {
                id: 'm18-q1',
                text: "Where did Tṛṇāvarta's body finally fall after the demon died?",
                options: ["Into the Yamunā", "On a stone slab in Vrindavan", "Onto a mountain top", "Into a forest fire"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "The mighty whirlwind that had darkened all of Vrindavan ended as a broken corpse on a rock, proof no demon could withstand the Lord.",
            },
            {
                id: 'm18-q2',
                text: "What did Krishna do after finally being bound to the wooden mortar?",
                options: ["He fell asleep", "He dragged the mortar toward two arjuna trees and pulled them down", "He cried until Yaśodā released Him", "He remained still all day"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Rather than sitting quietly, the bound child crawled toward two trees nearby and, pulling the mortar between them, uprooted both with a tremendous crash.",
            },
            {
                id: 'm18-q3',
                text: "What did Krishna tell the two demigods about their future, once freed?",
                options: ["They must serve Him forever on Earth", "This was their last birth in the material world; they could return home", "They would become trees again", "They must fight more demons"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Krishna assured the grateful pair that their long ordeal had borne fruit — their devotion had earned them liberation from further material birth.",
            },
            {
                id: 'm18-q4',
                text: "What did Upananda propose to the assembled cowherd men after the repeated demon attacks? (Select 2 correct facts)",
                options: [
                    "That the community should relocate to Vrindavan near Govardhana Hill",
                    "That they should fight the demons directly",
                    "He was Nanda Mahārāja's brother and a respected elder",
                    "That Krishna should be sent away for safety",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "After yet another demon attack, the wise elder Upananda — Nanda's own brother — urged the community to relocate to Vrindavan for safety.",
            },
            {
                id: 'm18-q5',
                text: "For how long was the killing of Aghāsura kept unspoken among the villagers of Vrindavan? (Select 2 correct facts)",
                options: [
                    "For one full year",
                    "It was announced immediately",
                    "Until the boys reached the age of six",
                    "It was never discussed at all",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Astonishingly, no one mentioned this miraculous event for an entire year — a mystery King Parīkṣit later asked Śukadeva Gosvāmī to explain.",
            },
        ],
    },
    {
        id: 19,
        title: "Module 19: Devotion's Reward",
        questions: [
            {
                id: 'm19-q1',
                text: "What benefit did the Tālavana forest gain after Dhenukāsura's death?",
                options: ["It vanished entirely", "People could safely collect fruit again, and animals returned to graze", "It became a lake", "It was renamed after Balarāma"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "The once-forbidden forest became peaceful again, its sweetness finally shared with all — a lasting sign of the brothers' protective power.",
            },
            {
                id: 'm19-q2',
                text: "What assurance did Krishna give Kāliya about Garuḍa once he agreed to leave for the ocean?",
                options: ["Garuḍa would still hunt him", "Garuḍa would no longer trouble him, marked by Krishna's footprints", "Garuḍa had already died", "Krishna made no promise"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "The very sign of his defeat became Kāliya's protection — with Krishna's footprints upon him, even mighty Garuḍa would leave him in peace.",
            },
            {
                id: 'm19-q3',
                text: "According to Krishna's explanation to Nanda Mahārāja, what four occupations did He say belong to the vaiśya community?",
                options: ["Teaching, ruling, farming, fighting", "Agriculture, trade, cow protection, and banking", "Priesthood, trade, service, teaching", "Hunting, farming, mining, weaving"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Krishna identified Himself with the vaiśya community, listing these four honest occupations as the proper duties of farmers and traders like Nanda's own family.",
            },
            {
                id: 'm19-q4',
                text: "How did the gopīs express their overwhelming emotion when embracing Krishna after the ordeal ended? (Select 2 correct facts)",
                options: [
                    "They offered Him yogurt mixed with their own tears",
                    "They gave Him gold ornaments",
                    "They poured blessings on Him again and again",
                    "They remained silent out of awe",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Unable to contain their love and gratitude, the gopīs poured out both offerings and tears together, blessing Krishna again and again for saving them all.",
            },
            {
                id: 'm19-q5',
                text: "What did the florist Sudāmā request from Krishna as his choicest desire? (Select 2 correct facts)",
                options: [
                    "To remain Krishna's eternal servant in devotional service",
                    "Riches and a palace",
                    "A wish focused on serving the Lord, not material gain",
                    "To become a king",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Unlike others who might ask for wealth, Sudāmā's only wish was to keep serving the Lord forever — a request Krishna happily granted, along with blessings besides.",
            },
        ],
    },
    {
        id: 20,
        title: "Module 20: The Final Reckoning",
        questions: [
            {
                id: 'm20-q1',
                text: "Besides Kaṁsa himself, which family elder did Kaṁsa order to be killed, whom he called his own father?",
                options: ["Vasudeva", "Ugrasena", "Akrūra", "Nanda Mahārāja"],
                correctIndexes: [1],
                difficulty: "easy",
                explanation:
                    "In his final fury, Kaṁsa ordered even his own father Ugrasena killed for having supported his enemies — a command never carried out, since Kaṁsa himself fell first.",
            },
            {
                id: 'm20-q2',
                text: "What happened when Pūtanā's body was cremated after her death?",
                options: ["Nothing unusual", "A pleasant fragrance rose from the fire instead of a foul smell", "The fire refused to burn her", "Her body vanished instantly"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Because she had unknowingly nursed the Supreme Lord, even her cremation was transformed, filling the air with sweetness as a sign of her purification.",
            },
            {
                id: 'm20-q3',
                text: "What extraordinary vision did Mother Yaśodā see inside Krishna's mouth while nursing Him, after the Tṛṇāvarta incident?",
                options: ["A single lotus flower", "The entire universe — sun, moon, stars, and all creation", "Her own reflection", "Nothing; it was an ordinary mouth"],
                correctIndexes: [1],
                difficulty: "medium",
                explanation:
                    "Opening Krishna's mouth playfully while He nursed, Yaśodā was startled to glimpse the whole cosmos within — a reminder of who her 'ordinary' child truly was.",
            },
            {
                id: 'm20-q4',
                text: "What were the twin arjuna trees that Krishna pulled down actually revealed to be? (Select 2 correct facts)",
                options: [
                    "Two sons of Kuvera, cursed to become trees",
                    "Ordinary trees with no special history",
                    "Named Nalakūvara and Maṇigrīva",
                    "Trees planted by Nārada himself",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "These were no ordinary trees — cursed demigods trapped in wooden form, waiting for Krishna's touch to finally set them free.",
            },
            {
                id: 'm20-q5',
                text: "What did the two demigods do just before finally departing from Krishna's presence? (Select 2 correct facts)",
                options: [
                    "They circumambulated Him several times",
                    "They asked to stay in Vrindavan forever",
                    "They bowed down again and again in gratitude",
                    "They cursed Nārada in return",
                ],
                correctIndexes: [0, 2],
                difficulty: "hard",
                explanation:
                    "Overwhelmed with gratitude, the two demigods honored Krishna with repeated circumambulation before returning at last to their heavenly home.",
            },
        ],
    },
]