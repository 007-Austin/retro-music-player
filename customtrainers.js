const customTrainers = {
    "Pokemon FireRed and LeafGreen" : {
        //please be aware that some trainers ie the elite four use their own name as their class, may need to test
        //for now things are implemented such that trainers like Red, Lance, Falkner etc should work whether you put them
        //in the class section or trainer section
        "trainers": [
            // {
            //     /*format example*/
            //     // "opponent": "RIVAL_OAKS_LAB_CHARMANDER",
            //     // "file": "music/heartgold/78 - Battle! (Champion).flac"
            // },
            // {
            //     /*format example*/
            //     "opponent": "ELITE_FOUR_LORELEI",
            //     "file": "music/heartgold/78 - Battle! (Champion).flac"
            // },
            {
                /*format example*/
                "opponent": "ELITE_FOUR_BRUNO",
                "file": "music/firered/24. Guide.flac"
            },
            // {
            //     /*format example*/
            //     "opponent": "ELITE_FOUR_AGATHA",
            //     "file": "music/firered/66. Mystery Gift.flac"
            // },
            // {
            //     /*format example*/
            //     "opponent": "ELITE_FOUR_LANCE",
            //     "file": "music/Let's Go/24 Battle! (Gym Leader Battle).mp3"
            // },
            // {
            //     /*format example*/
            //     "opponent": "ELITE_FOUR_AGATHA",
            //     "file": "music/firered/66. Mystery Gift.flac"
            // },
            // {
            //     /*format example*/
            //     // "opponent": "RIVAL_OAKS_LAB_CHARMANDER",
            //     // "file": "music/heartgold/78 - Battle! (Champion).flac"
            // },
        ],
        "types" : [
            //this is for a few specific battle types
            //trainer, gymLeader, champion
            // {
            //     "type" : "champion",
            //     "file" : "music/heartgold/78 - Battle! (Champion).flac",
            // },
        ]
    },
    "Pokemon Emerald" : {
        
        "trainers": [
            {
                /*format example*/
                "opponentA": "RIVAL_STEVEN",
                "file": "music/emerald/83. Battle! (Super-Ancient Pokémon).flac"
            },
        ],
        "types" : [
            //this is for a few specific battle types
            //trainer, gymLeader, champion, eliteFour
            // {
            //     "type" : "champion",
            //     "file" : "music/heartgold/78 - Battle! (Champion).flac",
            // },
        ]
    },
    "Pokemon Crystal" : {
        //please be aware that some trainers ie the elite four use their own name as their class, may need to test
        //for now things are implemented such that trainers like Red, Lance, Falkner etc should work whether you put them
        //in the class section or trainer section. If they don't work in classes though try in trainers
        "classes": [
            // {
            //     //format example
            //     "class" : "EXECUTIVE M",
            //     "file" : "music/heartgold/35 - Battle! (Team Rocket).flac"
            // },
            // {
            //     //format example
            //     "class" : "EXECUTIVE F",
            //     "file" : "music/heartgold/35 - Battle! (Team Rocket).flac"
            // },
            {
                //format example
                // "class": "RED",
                // "file": "music/heartgold/78 - Battle! (Champion).flac"
            },
        ],
        "trainers": [
            {
                //format example
                //"name": "RED",
                //"file": "music/heartgold/78 - Battle! (Champion).flac"
            },
            // {
            //     //format example
            //     "name": "WILL",
            //     "file": "music/heartgold/78 - Battle! (Champion).flac"
            // },
            // {
            //     //format example
            //     "name": "BRUNO",
            //     "file": "music/heartgold/04 - Battle! (Gym Leader - Kanto).flac"
            // },
        ],
        "types" : [
            //this is for a few specific battle types
            //trainer, gymLeader, champion
            // {
            //     "type" : "champion",
            //     "file" : "music/heartgold/78 - Battle! (Champion).flac",
            // },

        ]
    },

    "Pokemon Yellow" : {
        //please be aware that some trainers ie the elite four use their own name as their class, may need to test
        //for now things are implemented such that trainers like Red, Lance, Falkner etc should work whether you put them
        //in the class section or trainer section
        "classes": [
            // {
            //     //format example
            //     "class" : "EXECUTIVE M",
            //     "file" : "music/heartgold/35 - Battle! (Team Rocket).flac"
            // },
            // {
            //     //format example
            //     "class" : "EXECUTIVE F",
            //     "file" : "music/heartgold/35 - Battle! (Team Rocket).flac"
            // },
            
        ],
        "trainers": [
            // {
            //     //format example
            //     "name": "LANCE",
            //     "file": "music/heartgold/78 - Battle! (Champion).flac"
            // },
            {
                "name": "BRUNO",
                "file": "music/yellow/16 Guide.mp3"
            },
            // {
            //     "name": "GIOVANNI",
            //     "file": "music/yellow/49 Unknown Song.mp3"
            // },
        ],
        "types" : [
            //this is for a few specific battle types
            //trainer, gymLeader, champion
            // {
            //     "type" : "champion",
            //     "file" : "music/bw2/05 - Battle! (Champion - Kanto).flac",
            // },

        ]
    },
    "Pokemon Red and Blue" : {
        //please be aware that some trainers ie the elite four use their own name as their class, may need to test
        //for now things are implemented such that trainers like Red, Lance, Falkner etc should work whether you put them
        //in the class section or trainer section
        "classes": [
            // {
            //     //format example
            //     "class" : "EXECUTIVE M",
            //     "file" : "music/heartgold/35 - Battle! (Team Rocket).flac"
            // },
            // {
            //     //format example
            //     "class" : "EXECUTIVE F",
            //     "file" : "music/heartgold/35 - Battle! (Team Rocket).flac"
            // },
        ],
        "trainers": [
            // {
            //     //format example
            //     "name": "LANCE",
            //     "file": "music/heartgold/78 - Battle! (Champion).flac"
            // },
            {
                "name": "BRUNO",
                "file": "music/yellow/16 Guide.mp3"
            },
            // {
            //     "name": "GIOVANNI",
            //     "file": "music/yellow/49 Unknown Song.mp3"
            // },
        ],
        "types" : [
            //this is for a few specific battle types
            //trainer, gymLeader, champion
            // {
            //     "type" : "champion",
            //     "file" : "music/bw2/05 - Battle! (Champion - Kanto).flac",
            // },

        ]
    },
}