export const stepsResources = [
{
    step: 1,
    title: "Step 1: We admitted we were powerless over alcohol—that our lives had become unmanageable.",
    instructions: "Write examples of how each of the following have shown up in your life. Include your emotional response to each example, such as pain, anger, shame, guilt, and fear.",

    subsections: {
      powerlessness: {
        label: "Powerlessness",
        description: "Powerlessness over alcohol means the inability to consistently control alcohol use despite consequences.",
        prompts: [
          "PROGRESSION: This may mean using alcohol more often or for longer periods of time, increasing or losing tolerance",
          "LOSS OF CONTROL: Trying to cut down on use, not using and then using as much or more, long periods of abstinence followed by relapse",
          "DESTRUCTIVE BEHAVIOR: Physical or verbal abuse, destruction of property, suicide attempts, self-destructive behaviors",
          "PREOCCUPATION: Looking forward to using, setting up situations to use, keeping a constant supply",
          "PROTECTIONS: Hiding bottles, sneaking alcohol, using breath sprays, switching liquor stores",
          "JUSTIFYING ALCOHOL USE: Blaming others or situations, making excuses, rationalizing continued drinking",
          "PHYSICAL DETERIORATION: Continued use despite health problems, liver issues, weight changes, sleep/eating disturbances",
          "SEXUAL PROBLEMS: Impotence, indifference, inappropriate behavior, identity conflicts"
          // Add the exact 8 you want here
        ]
      },
      unmanageability: {
        label: "Unmanageability",
        description: "Unmanageability refers to the chaos and disorder in our lives resulting from alcoholism, whether actively drinking or not.",
        prompts: [
          "FINANCIAL PROBLEMS: Spending money on alcohol over essentials, no savings, poor financial decisions",
          "WORK PROBLEMS: Job loss, frequent changes, poor performance, absenteeism, disorganized home",
          "SPIRITUAL EMPTINESS: Conflict between values and behavior, resentment toward God, feeling spiritually disconnected",
          "FAMILY AND SOCIAL PROBLEMS: Communication breakdown, loss of relationships, isolation, separation/divorce",
          "EMOTIONAL PROBLEMS: Extreme anxiety, mood swings, depression, loneliness, difficulty expressing feelings",
          "LIFE GOAL PROBLEMS: Education issues, frequent moves, relationship instability, inability to follow through on goals"
          // Add the exact 6 here
        ]
      }
    }
  },
  {
    step: 2,
    title: "Step 2: Came to believe that a Power greater than ourselves could restore us to sanity.",
    instructions: "Reflect on your beliefs and experiences with hope. Consider times when you acted insanely due to your addiction and what it might mean to be restored.",
    subsections: {
      belief: {
        label: "Coming to Believe",
        description: "This step is about opening your mind to the possibility of help from a power greater than yourself—whatever that means to you.",
        prompts: [
          "PAST BELIEFS: What were your beliefs about God or a Higher Power before you started drinking/using? How did those beliefs change during active addiction?",
          "BARRIERS TO BELIEF: What obstacles prevent you from believing in a power greater than yourself? Fear, past religious experiences, intellectual doubts?",
          "EVIDENCE OF HELP: Have there been times in your life when you received help from an unexpected source? Describe these experiences.",
          "DEFINING YOUR POWER: What does 'a Power greater than ourselves' mean to you right now? It doesn't have to be God—it could be the group, nature, or something else.",
          "WILLINGNESS: Are you willing to believe that something could help you, even if you don't fully understand it? What would that look like?"
        ]
      },
      sanity: {
        label: "Restored to Sanity",
        description: "Sanity in this context means soundness of mind—the ability to think and act rationally. Insanity is repeating the same behaviors expecting different results.",
        prompts: [
          "INSANE THINKING: List examples of insane thinking related to your addiction—times you convinced yourself that 'this time would be different.'",
          "INSANE ACTIONS: Describe behaviors you engaged in while drinking/using that a sane person would not do.",
          "DENIAL PATTERNS: How did you deny or minimize the severity of your problem? What lies did you tell yourself?",
          "MOMENTS OF CLARITY: Have you had moments when you saw your situation clearly? What happened during those times?",
          "VISION OF SANITY: What would a sane, sober life look like for you? What would be different about your thinking and behavior?"
        ]
      }
    }
  },
  {
    step: 3,
    title: "Step 3: Made a decision to turn our will and our lives over to the care of God as we understood Him.",
    instructions: "This step is about making a decision—not achieving perfection. Reflect on what it means to let go of self-will and trust in something greater.",
    subsections: {
      selfWill: {
        label: "Self-Will Run Riot",
        description: "Before we can turn our will over, we must understand how self-will has driven our lives and caused problems.",
        prompts: [
          "CONTROL ISSUES: In what ways have you tried to control people, places, and things? How has this worked out?",
          "PLAYING GOD: Describe times when you acted as if you were in charge of the universe, making demands about how things should be.",
          "SELF-CENTEREDNESS: How has selfishness and self-centeredness been the root of your troubles? Give specific examples.",
          "FEAR-BASED DECISIONS: What decisions have you made based on fear rather than faith? What were the consequences?",
          "RESENTMENT FROM CONTROL: When things didn't go your way, how did you react? What resentments formed?"
        ]
      },
      surrender: {
        label: "Surrender and Trust",
        description: "Surrender is not weakness—it's the recognition that our way hasn't worked and we're willing to try a different path.",
        prompts: [
          "UNDERSTANDING GOD: How do you understand God or your Higher Power today? This is personal—there's no wrong answer.",
          "PAST SURRENDERS: Have there been times when you let go of something and it turned out better than expected? Describe these.",
          "FEARS ABOUT SURRENDER: What fears come up when you think about turning your will over? Loss of control? Being taken advantage of?",
          "DAILY DECISION: What would it look like to turn your will over just for today? What practical actions might that involve?",
          "TRUST BUILDING: What small steps can you take to begin trusting your Higher Power? How will you know if it's working?"
        ]
      }
    }
  },
  {
    step: 4,
    title: "Step 4: Made a searching and fearless moral inventory of ourselves.",
    instructions: "Write a thorough and honest inventory. This is about identifying patterns, not wallowing in guilt. Include resentments, fears, harms to others, and sexual conduct.",
    subsections: {
      resentments: {
        label: "Resentments",
        description: "Resentment is the 'number one offender.' It destroys more alcoholics than anything else. We list people, institutions, and principles we resent.",
        prompts: [
          "THE LIST: Who or what are you resentful toward? List people, institutions, and principles that have caused you anger.",
          "THE CAUSE: For each resentment, what happened? What did they do that upset you?",
          "AFFECTS MY: How did each resentment affect you? Consider self-esteem, security, ambitions, personal relationships, sex relations.",
          "MY PART: What was your part in each situation? Where were you selfish, dishonest, self-seeking, or frightened?",
          "PATTERNS: What patterns do you notice in your resentments? Do you resent authority? People who have what you want?"
        ]
      },
      fears: {
        label: "Fears",
        description: "Fear is the chief activator of our character defects. We list our fears and examine why we have them.",
        prompts: [
          "FEAR INVENTORY: What are you afraid of? List all fears—big and small—about people, finances, health, relationships, the future.",
          "FEAR'S ORIGIN: Where does each fear come from? When did it start? What experience created it?",
          "SELF-RELIANCE: How have you tried to manage life based on self-reliance, only to find it didn't work?",
          "FEAR'S IMPACT: How has fear affected your decisions and relationships? What have you avoided because of fear?",
          "FAITH VS FEAR: What would your life look like if you weren't ruled by fear? How might trusting a Higher Power help?"
        ]
      },
      harms: {
        label: "Harms Done to Others",
        description: "We list people we have hurt through our actions and attitudes, preparing for the amends process in later steps.",
        prompts: [
          "HARM LIST: Who have you harmed? Include family, friends, employers, strangers—anyone affected by your behavior.",
          "NATURE OF HARM: What specifically did you do? Be concrete—theft, lies, broken promises, emotional abuse, neglect.",
          "EFFECTS ON OTHERS: How do you think your actions affected each person? What did it cost them emotionally, financially, or otherwise?",
          "RATIONALIZATIONS: How did you justify your behavior at the time? What excuses did you make?",
          "PATTERNS: What patterns do you see in how you've hurt people? Do you harm those closest to you? Strangers?"
        ]
      },
      sexConduct: {
        label: "Sexual Conduct",
        description: "We review our past sexual conduct to identify where we have been selfish, dishonest, or caused harm.",
        prompts: [
          "SEXUAL INVENTORY: Where have you been selfish in your sexual relationships? Where have you been dishonest?",
          "HARM CAUSED: Who have you hurt through your sexual conduct? Consider emotional harm, betrayal, using people.",
          "JEALOUSY AND SUSPICION: Have jealousy, suspicion, or bitterness affected your relationships? How?",
          "IDEALS: What do you believe are the right ideals for your sexual conduct going forward?",
          "MAKING IT RIGHT: What amends might you need to make regarding past sexual conduct?"
        ]
      }
    }
  },
  {
    step: 5,
    title: "Step 5: Admitted to God, to ourselves, and to another human being the exact nature of our wrongs.",
    instructions: "This step requires courage. We share our inventory with our Higher Power, acknowledge it to ourselves, and share it with another person—usually a sponsor.",
    subsections: {
      preparation: {
        label: "Preparing to Share",
        description: "Before sharing your inventory, prepare yourself mentally and spiritually. This is about honesty, not performance.",
        prompts: [
          "RESISTANCE: What fears or reservations do you have about sharing your inventory? What are you tempted to leave out?",
          "SECRETS: Are there things you've never told anyone? What would it mean to finally let these go?",
          "CHOOSING WHO: Who will you share your Fifth Step with? Why did you choose this person?",
          "PRAYER: Have you asked your Higher Power for help in being honest and thorough?",
          "TIMING: When and where will you do this? Have you set aside enough uninterrupted time?"
        ]
      },
      afterSharing: {
        label: "After Sharing",
        description: "The Fifth Step is often a profound spiritual experience. Take time to reflect on what happened.",
        prompts: [
          "IMMEDIATE FEELINGS: How did you feel immediately after completing your Fifth Step? Relief? Fear? Peace?",
          "WHAT WAS REVEALED: Did anything new come up during the sharing that you hadn't written down?",
          "SPIRITUAL EXPERIENCE: Did you sense the presence of your Higher Power during or after this experience?",
          "FORGIVENESS: Do you feel any sense of forgiveness—from yourself, from your Higher Power, from the person you shared with?",
          "REMAINING WORK: Is there anything you held back that you still need to address?"
        ]
      }
    }
  },
  {
    step: 6,
    title: "Step 6: Were entirely ready to have God remove all these defects of character.",
    instructions: "This step is about willingness. We identify our character defects and become ready—not perfect, but willing—to have them removed.",
    subsections: {
      defects: {
        label: "Identifying Defects",
        description: "Character defects are the underlying patterns of thinking and behavior that drove our harmful actions.",
        prompts: [
          "DEFECT LIST: Based on your Fourth Step, what character defects can you identify? Pride, greed, lust, anger, gluttony, envy, sloth?",
          "DEFECT ORIGINS: Where do you think each defect came from? Survival mechanisms? Learned behavior? Trauma responses?",
          "DEFECT PAYOFFS: What have you gotten out of each defect? What perceived benefit has it provided?",
          "DEFECT COSTS: What has each defect cost you? Relationships? Opportunities? Peace of mind?",
          "CONNECTED DEFECTS: How are your defects connected to your fears, resentments, and harms from Step 4?"
        ]
      },
      willingness: {
        label: "Becoming Willing",
        description: "Willingness is the key to this step. We may not want to give up all our defects, but we become willing to become willing.",
        prompts: [
          "RELUCTANCE: Which defects are you reluctant to let go of? Why? What would you lose?",
          "HALF MEASURES: Have you tried to manage or moderate your defects rather than have them removed? How has that worked?",
          "ENTIRELY READY: What does 'entirely ready' mean to you? Is it possible to be 100% ready?",
          "ASKING FOR HELP: Are you willing to ask your Higher Power to make you ready, even if you're not there yet?",
          "FAITH IN CHANGE: Do you believe change is possible? What evidence do you have that people can change?"
        ]
      }
    }
  },
  {
    step: 7,
    title: "Step 7: Humbly asked Him to remove our shortcomings.",
    instructions: "This step is about humility and asking for help. We don't remove our own defects—we ask our Higher Power to do so.",
    subsections: {
      humility: {
        label: "Understanding Humility",
        description: "Humility is not thinking less of yourself—it's thinking of yourself less. It's an accurate assessment of who we are.",
        prompts: [
          "DEFINING HUMILITY: What does humility mean to you? How is it different from humiliation?",
          "PRIDE'S ROLE: How has pride prevented you from asking for help in the past?",
          "HONEST SELF-VIEW: Can you see yourself clearly—neither inflated nor deflated? What is an honest assessment of your strengths and weaknesses?",
          "TEACHABILITY: Are you teachable? Are you willing to learn new ways of living?",
          "RIGHT-SIZING: What does it mean to be 'right-sized'—not better or worse than others, just human?"
        ]
      },
      asking: {
        label: "Asking for Removal",
        description: "We humbly ask our Higher Power to remove our shortcomings, trusting that this will happen in its own time and way.",
        prompts: [
          "THE ASK: Have you formally asked your Higher Power to remove your shortcomings? What words did you use or will you use?",
          "EXPECTATIONS: What do you expect to happen? Instant change? Gradual improvement? Nothing?",
          "CONTINUED EFFORT: What is your role in this process? What actions support the removal of defects?",
          "PROGRESS NOT PERFECTION: How will you handle it when defects reappear? What does 'progress not perfection' mean?",
          "GRATITUDE: What defects have already been lessened or removed? What are you grateful for?"
        ]
      }
    }
  },
  {
    step: 8,
    title: "Step 8: Made a list of all persons we had harmed, and became willing to make amends to them all.",
    instructions: "This step is about making a list and becoming willing. The actual amends come in Step 9. Be thorough but not obsessive.",
    subsections: {
      theList: {
        label: "Making the List",
        description: "We create a comprehensive list of people we have harmed, drawing from our Fourth Step work.",
        prompts: [
          "NAMES: List everyone you have harmed. Start with the obvious ones, then add others as they come to mind.",
          "NATURE OF HARM: For each person, briefly note what you did. Financial harm? Emotional harm? Broken trust? Neglect?",
          "SELF ON THE LIST: Have you put yourself on the list? How have you harmed yourself?",
          "INSTITUTIONS: Are there businesses, organizations, or institutions you've harmed?",
          "DIFFICULT NAMES: Who are the hardest people to put on this list? Why?"
        ]
      },
      willingness: {
        label: "Becoming Willing",
        description: "Willingness to make amends is separate from the ability to do so. Some amends may seem impossible—but we become willing anyway.",
        prompts: [
          "UNWILLINGNESS: Who on your list are you unwilling to make amends to? What's blocking you?",
          "JUSTIFIED HARM: Do you feel some people 'deserved' what you did? How does that affect your willingness?",
          "FEAR OF AMENDS: What fears come up about making amends? Rejection? Legal consequences? Reopening wounds?",
          "RESENTMENT CHECK: Do you still hold resentments toward people on your list? How does this affect willingness?",
          "PRAYER FOR WILLINGNESS: Can you pray for willingness regarding the people you're most resistant to?"
        ]
      }
    }
  },
  {
    step: 9,
    title: "Step 9: Made direct amends to such people wherever possible, except when to do so would injure them or others.",
    instructions: "Make amends thoughtfully and with guidance. Some amends are direct, some are living amends. Never make amends that would cause more harm.",
    subsections: {
      directAmends: {
        label: "Making Direct Amends",
        description: "Direct amends involve going to the person, acknowledging the harm, and asking what you can do to make it right.",
        prompts: [
          "APPROACH: How will you approach each person? What will you say? Keep it simple and focused on your behavior, not theirs.",
          "FINANCIAL AMENDS: Do you owe money to anyone? What is your plan for repayment?",
          "TIMING: When is the right time for each amends? Have you discussed timing with your sponsor?",
          "NO EXPECTATIONS: Are you prepared to make amends without expecting forgiveness or a particular response?",
          "FOLLOW-THROUGH: What commitments are you making? How will you ensure you follow through?"
        ]
      },
      exceptions: {
        label: "When Not to Make Amends",
        description: "Some amends would cause more harm than good. We must carefully consider the impact on others.",
        prompts: [
          "POTENTIAL HARM: Which amends might injure the other person or third parties if made directly?",
          "SECRETS: Are there situations where revealing the truth would cause unnecessary pain?",
          "LIVING AMENDS: For some people, the best amends is changed behavior over time. Who falls into this category?",
          "DECEASED: How will you make amends to those who have passed away?",
          "SPONSOR GUIDANCE: Have you discussed each amends with your sponsor? What was their advice?"
        ]
      }
    }
  },
  {
    step: 10,
    title: "Step 10: Continued to take personal inventory and when we were wrong promptly admitted it.",
    instructions: "This is a maintenance step. We continue the inventory process daily, catching our mistakes quickly and making prompt amends.",
    subsections: {
      dailyInventory: {
        label: "Daily Inventory",
        description: "A daily inventory helps us stay aware of our thoughts, feelings, and behaviors before they become major problems.",
        prompts: [
          "DAILY REVIEW: How will you incorporate a daily inventory into your routine? Morning? Evening? Both?",
          "WHAT TO REVIEW: What questions will you ask yourself each day? Resentments? Fears? Selfishness? Dishonesty?",
          "SPOT-CHECK: Throughout the day, how will you remain aware of your emotional state and behavior?",
          "PATTERNS: Over time, what patterns are you noticing in your daily inventories?",
          "BALANCE SHEET: Are you noting your positives as well as your negatives? What good did you do today?"
        ]
      },
      promptAdmission: {
        label: "Prompt Admission",
        description: "When we are wrong, we promptly admit it—to ourselves, to our Higher Power, and to the person we've harmed.",
        prompts: [
          "QUICK AMENDS: When you wrong someone, how quickly do you acknowledge it? What delays you?",
          "PRIDE BARRIER: How does pride prevent you from admitting when you're wrong?",
          "APOLOGY VS AMENDS: What's the difference between saying 'I'm sorry' and making a genuine amends?",
          "RECURRING WRONGS: What wrongs do you find yourself repeating? What's the underlying cause?",
          "CONTINUOUS IMPROVEMENT: How has your ability to admit wrongs improved since beginning recovery?"
        ]
      }
    }
  },
  {
    step: 11,
    title: "Step 11: Sought through prayer and meditation to improve our conscious contact with God as we understood Him, praying only for knowledge of His will for us and the power to carry that out.",
    instructions: "Develop a consistent practice of prayer and meditation. This is about relationship with your Higher Power, not religious performance.",
    subsections: {
      prayer: {
        label: "Prayer",
        description: "Prayer is talking to your Higher Power. It can take many forms—formal, informal, written, spoken, or silent.",
        prompts: [
          "CURRENT PRACTICE: What is your current prayer practice? If you don't have one, what has prevented you?",
          "TYPES OF PRAYER: What kinds of prayer resonate with you? Gratitude? Petition? Confession? Praise?",
          "MORNING PRAYER: What does your morning prayer look like? Do you ask for guidance for the day?",
          "EVENING PRAYER: Do you review your day with your Higher Power? What does that look like?",
          "KNOWLEDGE AND POWER: What does it mean to pray 'only for knowledge of His will and the power to carry it out'?"
        ]
      },
      meditation: {
        label: "Meditation",
        description: "Meditation is listening to your Higher Power. It's about quieting the mind and being receptive.",
        prompts: [
          "MEDITATION PRACTICE: What is your experience with meditation? What methods have you tried?",
          "OBSTACLES: What prevents you from meditating? Restlessness? Time? Feeling like you're doing it wrong?",
          "SIMPLE START: Can you commit to just a few minutes of quiet each day? What would that look like?",
          "GUIDANCE RECEIVED: Have you ever received guidance or insight during meditation? Describe the experience.",
          "CONSCIOUS CONTACT: What does 'conscious contact' with your Higher Power feel like? How do you know when you have it?"
        ]
      }
    }
  },
  {
    step: 12,
    title: "Step 12: Having had a spiritual awakening as the result of these steps, we tried to carry this message to alcoholics, and to practice these principles in all our affairs.",
    instructions: "This step is about living the program and helping others. The spiritual awakening comes from working all the steps.",
    subsections: {
      awakening: {
        label: "Spiritual Awakening",
        description: "A spiritual awakening is a profound change in perspective and way of living. It may be sudden or gradual.",
        prompts: [
          "YOUR AWAKENING: How would you describe your spiritual awakening? When did you first notice a change?",
          "PERSONALITY CHANGE: What changes have others noticed in you? What do you see differently about yourself?",
          "NEW PERSPECTIVE: How has your outlook on life changed? What matters now that didn't before? What no longer matters?",
          "RELATIONSHIP WITH HP: How has your relationship with your Higher Power evolved through working the steps?",
          "GRATITUDE: What are you most grateful for in your recovery?"
        ]
      },
      carryingMessage: {
        label: "Carrying the Message",
        description: "We keep what we have by giving it away. Helping other alcoholics is essential to our own recovery.",
        prompts: [
          "SERVICE WORK: What service work are you currently doing? Sponsoring? Meetings? Helping newcomers?",
          "YOUR MESSAGE: What is the message you carry? What would you want a newcomer to know?",
          "ATTRACTION VS PROMOTION: How do you practice attraction rather than promotion? How do you share without preaching?",
          "TWELFTH STEP CALLS: Have you done Twelfth Step work with someone still suffering? What was that experience like?",
          "GIVING BACK: How do you give back to the fellowship and community that has helped you?"
        ]
      },
      principles: {
        label: "Principles in All Affairs",
        description: "We practice these principles—honesty, hope, faith, courage, integrity, willingness, humility, love, discipline, patience, awareness, service—in all areas of life.",
        prompts: [
          "AT WORK: How do you practice recovery principles at work or in your profession?",
          "IN RELATIONSHIPS: How do you apply these principles in your relationships with family, friends, and partners?",
          "IN CHALLENGES: When facing difficulties, which principles do you rely on most?",
          "AREAS OF GROWTH: In what areas of your life do you still struggle to practice these principles?",
          "DAILY PRACTICE: What does it look like to practice these principles on a daily basis? Give specific examples."
        ]
      }
    }
  }
]
