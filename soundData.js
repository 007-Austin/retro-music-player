const soundData = {
    // Template 
    // "Name of Game (as it appears in gamehook mapper)" : {
    //     "name" : "Pokemon Crystal",
    //     "ch5" : "channel5MusicID", 
    //     "ch8" : "channel8MusicID",
    //     //you can add more channels here if you need
    //     //the left side should always be "ch#"
    //     //the right side should be the channel property name as seen in gamehook

    //     "sounds" : [
    //         {    
    //         //     "sound": "sample",
    //         //     "file": "music/crystal/02.mp3", //relative file path
    //         //     "channel5MusicID": 512,
    //         //     //"channel8MusicID": 125,
    //         //     only use one id per sound or it may play twice
    //         }
    //     ]
    // },
    "Pokemon Crystal" : {
        "name" : "Pokemon Crystal",
        "ch5" : "channel5MusicID",
        "ch8" : "channel8MusicID",
        "sounds" : [
            {    
            //     "sound": "sample",
            //     "file": "music/crystal/02.mp3",
            //     "channel5MusicID": 512,
            //     "channel8MusicID": 125,
            }
        ]
    },
    "Pokemon Yellow" : {
        "name" : "Pokemon Yellow",
        "ch5" : "channel5",
        "ch6" : "channel6",
        "ch8" : "channel8",
        "sounds" : [
            {    
                "sound": "silence",
                "file": "music/silent.wav",
                "channel5": 0,
            },
            {    
                "sound": "item",
                "file": "sounds/yellow/SFX_LEVEL_UP.wav",
                "channel6": 134,
                "category" : "event",
                "context" : "Trainer",
                "context2" : "Wild",
            },
            {    
                "sound": "item",
                "file": "sounds/yellow/SFX_GET_ITEM_1.wav",
                "channel5": 134,
                "category" : "event",
                "context" : "None"
            },
            
            {    
                "sound": "Hidden Item",
                "file": "sounds/yellow/SFX_GET_ITEM_2.wav",
                "channel5": 137,
                "category" : "event",
            },
            {    
                "sound": "tink",
                "file": "sounds/yellow/SFX_TINK.wav",
                "channel5": 140,
                "category" : "event",
            },
            {    
                "sound": "Heal Up",
                "file": "sounds/yellow/SFX_HEAL_UP.wav",
                "channel5": 141,
                "category" : "event",
            },
            {    
                "sound": "Heal Ailment",
                "file": "sounds/yellow/SFX_HEAL_AILMENT.wav",
                "channel5": 142,
                "category" : "event",
            },
            {    
                "sound": "Start Menu",
                "file": "sounds/yellow/SFX_START_MENU.wav",
                "channel8": 143,
                "category" : "event",
            },
            {    
                "sound": "click",
                "file": "sounds/yellow/SFX_PRESS_AB.wav",
                "channel5": 144,
                "type" :"click",
                "category" : "battle",
            },
            {    
                "sound": "Ball Toss",
                "file": "sounds/yellow/SFX_BALL_TOSS.wav",
                "channel5": 145,
                "category" : "battle",
            },
            {    
                "sound": "Ball Poof",
                "file": "sounds/yellow/SFX_BALL_POOF.wav",
                "channel5": 147,
                "category" : "battle",
            },
            {    
                "sound": "Key Item",
                "file": "sounds/yellow/SFX_GET_KEY_ITEM.wav",
                "channel5": 148,
                "category" : "event",
            },
            {    
                "sound": "Faint Thud",
                "file": "sounds/yellow/SFX_FAINT_THUD.wav",
                "channel5": 149,
                "category" : "battle",
            },
            {    
                "sound": "Poison",
                "file": "sounds/yellow/SFX_POISONED.wav",
                "channel5": 151,
                "category" : "world",
                "type" : "poison",
            },
            {    
                "sound": "Run Away",
                "file": "sounds/yellow/SFX_RUN.wav",
                "channel8": 151,
                "category" : "battle",
            },
            // {    
            //     "sound": "Pokedex Page Added",
            //     "file": "sounds/yellow/SFX_DEX_PAGE_ADDED.wav",
            //     "channel5": 152,
            //     "category" : "event",
            // },
            {    
                "sound": "PC Boot Up",
                "file": "sounds/yellow/SFX_TURN_ON_PC.wav",
                "channel5": 153,
                "category" : "event",
            },
            {    
                "sound": "PC Log Off",
                "file": "sounds/yellow/SFX_TURN_OFF_PC.wav",
                "channel5": 154,
                "category" : "event",
                "context" : "None"
            },
            {    
                "sound": "Ball Caught",
                "file": "sounds/yellow/SFX_CAUGHT_MON.wav",
                "channel5": 154,
                "category" : "battle",
                "context" : "Wild"
            },
            {    
                "sound": "PC Enter",
                "file": "sounds/yellow/SFX_ENTER_PC.wav",
                "channel5": 155,
                "category" : "event",
                "context" : "None"
            },
            {    
                "sound": "Shrink",
                "file": "sounds/yellow/SFX_SHRINK.wav",
                "channel5": 156,
                "category" : "world",
            },
            {    
                "sound": "Faint Fall",
                "file": "sounds/yellow/SFX_FAINT_FALL.wav",
                "channel5": 158,
                "category" : "battle",
                "context" : "Trainer",
            },
            
            {    
                "sound": "Healing Machine",
                "file": "sounds/yellow/SFX_HEALING_MACHINE.wav",
                "channel5": 158,
                "category" : "world",
                "context" : "None",
            },
            {    
                "sound": "Teleport Long",
                "file": "sounds/yellow/SFX_TELEPORT_EXIT_1.wav",
                "channel5": 159,
                "category" : "world",
            },
            {    
                "sound": "Ledge",
                "file": "sounds/yellow/SFX_LEDGE.wav",
                "channel5": 162,
                "category" : "world",
            },
            {    
                "sound": "Fly",
                "file": "sounds/yellow/SFX_FLY.wav",
                "channel8": 164,
                "category" : "world",
            },
            {    
                "sound": "Denied",
                "file": "sounds/yellow/SFX_DENIED.wav",
                "channel5": 165,
                "category" : "event",
            },
            {    
                "sound": "Normal Damage",
                "file": "sounds/yellow/battle/GEN 1 SFX - Attack Moves - RBY/IMHIT_Damage.wav",
                "channel8": 166,
                "category" : "battle",
            },
            {    
                "sound": "Not Very Effective",
                "file": "sounds/yellow/battle/GEN 1 SFX - Attack Moves - RBY/IMHITWEAK_Not_Very_Effective.wav",
                "channel8": 167,
                "category" : "battle",
            },
            {    
                "sound": "Boulder",
                "file": "sounds/yellow/SFX_PUSH_BOULDER.wav",
                "channel8": 168,
                "category" : "world",
                "type" : "boulder"
            },
            {    
                "sound": "SS Anne Horn",
                "file": "sounds/yellow/SFX_SS_ANNE_HORN.wav",
                "channel5": 169,
                "category" : "event",
            },
            {    
                "sound": "Deposit",
                "file": "sounds/yellow/SFX_WITHDRAW_DEPOSIT.wav",
                "channel5": 171,
                "category" : "event",
            },
            {    
                "sound": "Cut",
                "file": "sounds/yellow/SFX_CUT.wav",
                "channel8": 172,
                "category" : "world",
                "type" : "cut"
            },
            {    
                "sound": "Enter Building",
                "file": "sounds/yellow/SFX_GO_INSIDE.wav",
                "channel8": 173,
                "category" : "world",
                "type" : "door",
            },
            {    
                "sound": "Swap",
                "file": "sounds/yellow/SFX_SWAP.wav",
                "channel5": 174,
                "category" : "world",
            },
            {    
                "sound": "Super Effective",
                "file": "sounds/yellow/battle/GEN 1 SFX - Attack Moves - RBY/IMHITSUPER_Super_Effective.wav",
                "channel8": 176,
                "category" : "battle",
            },
            {    
                "sound": "Purchase",
                "file": "sounds/yellow/SFX_PURCHASE.wav",
                "channel5": 178,
                "category" : "event",
            },
            {    
                "sound": "bonk",
                "file": "sounds/yellow/SFX_COLLISION.wav",
                "channel5": 180,
                "type" :"bonk",
                "category" : "world",
            },
            {    
                "sound": "Exit Building",
                "file": "sounds/yellow/SFX_GO_OUTSIDE.wav",
                "channel8": 181,
                "category" : "world",
                "type" : "door",
            },
            {    
                "sound": "Save",
                "file": "sounds/yellow/SFX_SAVE.wav",
                "channel5": 182,
                "category" : "event",
            },
            {    
                "sound": "Intro Crash",
                "file": "sounds/yellow/SFX_INTRO_CRASH.wav",
                "channel8": 188,
                "category" : "world",
            },
            {    
                "sound": "Pi-ka-chu",
                "file": "music/yellow/57.mp3",
                "channel8": 189,
                "category" : "event",
            },
            {    
                "sound": "Shooting Stars",
                "file": "sounds/yellow/SFX_SHOOTING_STAR.wav",
                "channel5": 194,
                "category" : "event",
            },
            {    
                "sound": "Trainer Battle Start",
                "file": "sounds/yellow/SFX_TRIANGLE_3.wav",
                "channel5": 233,
                "category" : "battle",
            },
        ],
        
    },
    "Pokemon Red and Blue" : {
        "name" : "Pokemon Red and Blue",
        "ch4" : "channel4",
        "ch5" : "channel5",
        "ch7" : "channel7",
        "ch8" : "channel8",
        "sounds" : [
            {    
                "sound": "silence",
                "file": "music/silent.wav",
                "channel4": 0,
            },
            {    
                "sound": "item",
                "file": "sounds/yellow/SFX_LEVEL_UP.wav",
                "channel5": 134,
                "category" : "event",
                "context" : "Trainer",
                "context2" : "Wild",
            },
            {    
                "sound": "item",
                "file": "sounds/yellow/SFX_GET_ITEM_1.wav",
                "channel4": 134,
                "category" : "event",
                "context" : "None"
            },
            
            {    
                "sound": "Hidden Item",
                "file": "sounds/yellow/SFX_GET_ITEM_2.wav",
                "channel4": 137,
                "category" : "event",
            },
            {    
                "sound": "tink",
                "file": "sounds/yellow/SFX_TINK.wav",
                "channel4": 140,
                "category" : "event",
            },
            {    
                "sound": "Heal Up",
                "file": "sounds/yellow/SFX_HEAL_UP.wav",
                "channel4": 141,
                "category" : "event",
            },
            {    
                "sound": "Heal Ailment",
                "file": "sounds/yellow/SFX_HEAL_AILMENT.wav",
                "channel4": 142,
                "category" : "event",
            },
            {    
                "sound": "Start Menu",
                "file": "sounds/yellow/SFX_START_MENU.wav",
                "channel7": 143,
                "category" : "event",
            },
            {    
                "sound": "click",
                "file": "sounds/yellow/SFX_PRESS_AB.wav",
                "channel4": 144,
                "type" :"click",
                "category" : "battle",
            },
            {    
                "sound": "Ball Toss",
                "file": "sounds/yellow/SFX_BALL_TOSS.wav",
                "channel4": 145,
                "category" : "battle",
            },
            {    
                "sound": "Ball Poof",
                "file": "sounds/yellow/SFX_BALL_POOF.wav",
                "channel4": 147,
                "category" : "battle",
            },
            {    
                "sound": "Key Item",
                "file": "sounds/yellow/SFX_GET_KEY_ITEM.wav",
                "channel4": 148,
                "category" : "event",
            },
            {    
                "sound": "Faint Thud",
                "file": "sounds/yellow/SFX_FAINT_THUD.wav",
                "channel4": 149,
                "category" : "battle",
            },
            {    
                "sound": "Poison",
                "file": "sounds/yellow/SFX_POISONED.wav",
                "channel4": 151,
                "category" : "world",
                "type" : "poison",
            },
            {    
                "sound": "Run Away",
                "file": "sounds/yellow/SFX_RUN.wav",
                "channel7": 151,
                "category" : "battle",
            },
            // {    
            //     "sound": "Pokedex Page Added",
            //     "file": "sounds/yellow/SFX_DEX_PAGE_ADDED.wav",
            //     "channel4": 152,
            //     "category" : "event",
            // },
            {    
                "sound": "PC Boot Up",
                "file": "sounds/yellow/SFX_TURN_ON_PC.wav",
                "channel4": 153,
                "category" : "event",
            },
            {    
                "sound": "PC Log Off",
                "file": "sounds/yellow/SFX_TURN_OFF_PC.wav",
                "channel4": 154,
                "category" : "event",
                "context" : "None"
            },
            {    
                "sound": "Ball Caught",
                "file": "sounds/yellow/SFX_CAUGHT_MON.wav",
                "channel4": 154,
                "category" : "battle",
                "context" : "Wild"
            },
            {    
                "sound": "PC Enter",
                "file": "sounds/yellow/SFX_ENTER_PC.wav",
                "channel4": 155,
                "category" : "event",
                "context" : "None"
            },
            {    
                "sound": "Shrink",
                "file": "sounds/yellow/SFX_SHRINK.wav",
                "channel4": 156,
                "category" : "world",
            },
            {    
                "sound": "Faint Fall",
                "file": "sounds/yellow/SFX_FAINT_FALL.wav",
                "channel4": 158,
                "category" : "battle",
                "context" : "Trainer",
            },
            {    
                "sound": "Healing Machine",
                "file": "sounds/yellow/SFX_HEALING_MACHINE.wav",
                "channel4": 158,
                "category" : "world",
                "context" : "None",
            },
            {    
                "sound": "Teleport Long",
                "file": "sounds/yellow/SFX_TELEPORT_EXIT_1.wav",
                "channel4": 159,
                "category" : "world",
            },
            {    
                "sound": "Ledge",
                "file": "sounds/yellow/SFX_LEDGE.wav",
                "channel4": 162,
                "category" : "world",
            },
            {    
                "sound": "Fly",
                "file": "sounds/yellow/SFX_FLY.wav",
                "channel7": 164,
                "category" : "world",
            },
            {    
                "sound": "Denied",
                "file": "sounds/yellow/SFX_DENIED.wav",
                "channel4": 165,
                "category" : "event",
            },
            {    
                "sound": "Normal Damage",
                "file": "sounds/yellow/battle/GEN 1 SFX - Attack Moves - RBY/IMHIT_Damage.wav",
                "channel7": 166,
                "category" : "battle",
            },
            {    
                "sound": "Not Very Effective",
                "file": "sounds/yellow/battle/GEN 1 SFX - Attack Moves - RBY/IMHITWEAK_Not_Very_Effective.wav",
                "channel7": 167,
                "category" : "battle",
            },
            {    
                "sound": "Boulder",
                "file": "sounds/yellow/SFX_PUSH_BOULDER.wav",
                "channel7": 168,
                "category" : "world",
                "type" : "boulder"
            },
            {    
                "sound": "SS Anne Horn",
                "file": "sounds/yellow/SFX_SS_ANNE_HORN.wav",
                "channel4": 169,
                "category" : "event",
            },
            {    
                "sound": "Deposit",
                "file": "sounds/yellow/SFX_WITHDRAW_DEPOSIT.wav",
                "channel4": 171,
                "category" : "event",
            },
            {    
                "sound": "Cut",
                "file": "sounds/yellow/SFX_CUT.wav",
                "channel7": 172,
                "category" : "world",
                "type" : "cut"

            },
            {    
                "sound": "Enter Building",
                "file": "sounds/yellow/SFX_GO_INSIDE.wav",
                "channel7": 173,
                "category" : "world",
                "type" : "door",
            },
            {    
                "sound": "Swap",
                "file": "sounds/yellow/SFX_SWAP.wav",
                "channel4": 174,
                "category" : "world",
            },
            {    
                "sound": "Super Effective",
                "file": "sounds/yellow/battle/GEN 1 SFX - Attack Moves - RBY/IMHITSUPER_Super_Effective.wav",
                "channel7": 176,
                "category" : "battle",
            },
            {    
                "sound": "Purchase",
                "file": "sounds/yellow/SFX_PURCHASE.wav",
                "channel4": 178,
                "category" : "event",
            },
            {    
                "sound": "bonk",
                "file": "sounds/yellow/SFX_COLLISION.wav",
                "channel4": 180,
                "type" :"bonk",
                "category" : "world",
            },
            {    
                "sound": "Exit Building",
                "file": "sounds/yellow/SFX_GO_OUTSIDE.wav",
                "channel7": 181,
                "category" : "world",
                "type" : "door",
            },
            {    
                "sound": "Save",
                "file": "sounds/yellow/SFX_SAVE.wav",
                "channel4": 182,
                "category" : "event",
            },
            {    
                "sound": "Intro Crash",
                "file": "sounds/yellow/SFX_INTRO_CRASH.wav",
                "channel7": 188,
                "category" : "world",
            },
            {    
                "sound": "Shooting Stars",
                "file": "sounds/yellow/SFX_SHOOTING_STAR.wav",
                "channel4": 194,
                "category" : "event",
            },
            {    
                "sound": "Trainer Battle Start",
                "file": "sounds/yellow/SFX_TRIANGLE_3.wav",
                "channel4": 233,
                "category" : "battle",
            },
        ]
    }
}