const musicData = {
    // Template and info
    // "Pokemon Crystal" : { //name of game as it appears in gamehook mapper meta
    //     "name" : "Pokemon Crystal",
    //     //left side is always "ch#"
    //     //right side should be how it appears in gamehook
    //     //this is to avoid problems when ie crystal and yellow have different property names in gamehook
    //     "ch1" : "channel1MusicID",
    //     "ch2" : "channel2MusicID",

    //     //these are extra properties just in case two songs have the same ID
    //     //this doesn't happen in crystal but does happen in rb/y
    //     "bank" : "musicBank",
    //     "map" : "mapMusic",
    //     "music": [
    //         {
    //             "song": "trainerBattleKanto", //this is just for cosmetic/debugging
    //             "file": "music/crystal/07.mp3", //relative path to file
    //             "channel1MusicID": 1792, 

    //             //omit these if it's not battle music
    //             "battle" : "trainer",    //can be trainer, gymLeader, rocket, rival, or champion
    //             "stage" : "battle"       //battle, victory, or aggro

    //         },
    //     ],
    // },
    "Pokemon FireRed and LeafGreen" : {
        "name" : "Pokemon FireRed and LeafGreen",
        "ch1" : "musicID",
        "ch2" : "",
        "bank" : "",
        "map" : "",
        "music": [
            {
                "song": "silent",
                "file": "music/silent.wav",
                "musicID": 0,
            },
            {
                "song": "MUS_EVOLVED",
                "file": "music/firered/31. Fanfare꞉ Evolution.flac",
                "musicID": 259,
            },
            {
                "song": "MUS_OBTAIN_BADGE",
                "file": "music/firered/29. Fanfare꞉ Badge Obtained.flac",
                "musicID": 260,
            },
            {
                "song": "MUS_EVOLUTION",
                "file": "music/firered/30. Evolution.flac",
                "musicID": 264,
            },
            {
                "song": "MUS_FOLLOW_ME", //bruno music
                "file": "music/firered/24. Guide.flac",
                "musicID": 272,
            },
            {
                "song": "MUS_GAME_CORNER",
                "file": "music/firered/41. Rocket Game Corner.flac",
                "musicID": 273,
            },
            {
                "song": "MUS_ROCKET_HIDEOUT",
                "file": "music/firered/45. Rocket Hideout.flac",
                "musicID": 274,
            },
            {
                "song": "MUS_GYM",
                "file": "music/firered/25. Pokémon Gym.flac",
                "musicID": 275,
            },
            {
                "song": "MUS_JIGGLYPUFF",
                "file": "music/firered/22. Jigglypuff's Song.flac",
                "musicID": 276,
            },
            {
                "song": "MUS_INTRO_FIGHT",
                "file": "music/firered/02. Opening Movie.flac",
                "musicID": 277,
            },
            {
                "song": "MUS_TITLE",
                "file": "music/firered/03. Title Screen.flac",
                "musicID": 278,
            },
            {
                "song": "MUS_CINNABAR",
                "file": "music/firered/55. Cinnabar Island Theme.flac",
                "musicID": 279,
            },
            {
                "song": "MUS_LAVENDER",
                "file": "music/firered/38. Lavender Town Theme.flac",
                "musicID": 280,
            },
            {
                "song": "MUS_CYCLING",
                "file": "music/firered/37. Cycling.flac",
                "musicID": 282,
            },
            {
                "song": "MUS_ENCOUNTER_ROCKET",
                "file": "music/firered/46. A Trainer Appears (Bad Guy Version).flac",
                "musicID": 283,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_ENCOUNTER_GIRL",
                "file": "music/firered/33. A Trainer Appears (Girl Version).flac",
                "musicID": 284,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_ENCOUNTER_BOY",
                "file": "music/firered/20. A Trainer Appears (Boy Version).flac",
                "musicID": 285,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_HALL_OF_FAME",
                "file": "music/firered/72. Hall of Fame.flac",
                "musicID": 286,
            },
            {
                "song": "MUS_VIRIDIAN_FOREST",
                "file": "music/firered/17. Viridian Forest.flac",
                "musicID": 287,
            },
            {
                "song": "MUS_MT_MOON",
                "file": "music/firered/34. Caves of Mt. Moon.flac",
                "musicID": 288,
            },
            {
                "song": "MUS_POKE_MANSION",
                "file": "music/firered/56. Pokémon Mansion.flac",
                "musicID": 289,
            },
            {
                "song": "MUS_CREDITS",
                "file": "music/firered/73. Ending Theme.flac",
                "musicID": 290,
            },
            {
                "song": "MUS_ROUTE1",
                "file": "music/firered/13. Road to Viridian City꞉ Leaving Pallet Town).flac",
                "musicID": 291,
            },
            {
                "song": "MUS_ROUTE24",
                "file": "music/firered/05. Welcome to the World of Pokémon!.flac",
                "musicID": 292,
            },
            {
                "song": "MUS_ROUTE3",
                "file": "music/firered/32. Road to Cerulean City꞉ Leaving Mt. Moon.flac",
                "musicID": 293,
            },
            {
                "song": "MUS_ROUTE11",
                "file": "music/firered/48. Road to Fuchsia City꞉ Leaving Lavender Town.flac",
                "musicID": 294,
            },
            {
                "song": "MUS_VICTORY_ROAD",
                "file": "music/firered/69. The Final Road.flac",
                "musicID": 295,
            },
            {
                "song": "MUS_VS_GYM_LEADER",
                "file": "music/firered/27. Battle! (Gym Leader Battle).flac",
                "musicID": 296,
                "battle" : "gymLeader",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_TRAINER",
                "file": "music/firered/11. Battle! (Trainer Battle).flac",
                "musicID": 297,
                "battle" : "trainer",
                "stage" : "battle" 
            },
            {
                "song": "MUS_VS_WILD",
                "file": "music/firered/18. Battle! (Wild Pokémon).flac",
                "musicID": 298,
                "battle" : "wild",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_CHAMPION",
                "file": "music/firered/70. Final Battle! (Rival).flac",
                "musicID": 299,
                "battle" : "champion",
                "stage" : "battle"
            },
            {
                "song": "MUS_PALLET",
                "file": "music/firered/06. Pallet Town Theme.flac",
                "musicID": 300,
            },
            {
                "song": "MUS_OAK_LAB",
                "file": "music/firered/08. Professor Oak's Laboratory.flac",
                "musicID": 301,
            },
            {
                "song": "MUS_OAK",
                "file": "music/firered/08. Professor Oak's Laboratory.flac",
                "musicID": 302,
            },
            {
                "song": "MUS_POKE_CENTER",
                "file": "music/firered/21. Pokémon Center.flac",
                "musicID": 303,
            },
            {
                "song": "MUS_SS_ANNE",
                "file": "music/firered/36. The S.S. Anne.flac",
                "musicID": 304,
            },
            {
                "song": "MUS_SURF",
                "file": "music/firered/52. The Sea.flac",
                "musicID": 305,
            },
            {
                "song": "MUS_POKE_TOWER",
                "file": "music/firered/39. Pokémon Tower.flac",
                "musicID": 306,
            },
            {
                "song": "MUS_SILPH",
                "file": "music/firered/47. Silph Co..flac",
                "musicID": 307,
            },
            {
                "song": "MUS_FUCHSIA",
                "file": "music/firered/50. Fuchsia City Theme.flac",
                "musicID": 308,
            },
            {
                "song": "MUS_CELADON",
                "file": "music/firered/40. Celadon City Theme.flac",
                "musicID": 309,
            },
            {
                "song": "MUS_VICTORY_TRAINER",
                "file": "music/firered/12. Victory! (Trainer Battle).flac",
                "musicID": 310,
                "battle" : "trainer",
                "stage" : "victory"
            },
            {
                "song": "MUS_VICTORY_WILD",
                "file": "music/firered/19. Victory! (Wild Pokémon).flac",
                "musicID": 311,
                "battle" : "wild",
                "stage" : "victory"
            },
            {
                "song": "MUS_VICTORY_GYM_LEADER",
                "file": "music/firered/28. Victory! (Gym Leader Battle).flac",
                "musicID": 312,
                "battle" : "gymLeader",
                "stage" : "victory"
            },
            {
                "song": "MUS_VERMILLION",
                "file": "music/firered/35. Vermilion City Theme.flac",
                "musicID": 313,
            },
            {
                "song": "MUS_PEWTER",
                "file": "music/firered/15. Pewter City Theme.flac",
                "musicID": 314,
            },
            {
                "song": "MUS_ENCOUNTER_RIVAL",
                "file": "music/firered/10. A Rival Appears.flac",
                "musicID": 315,
                "battle" : "rival",
                "stage" : "aggro"
            },
            {
                "song": "MUS_RIVAL_EXIT",
                "file": "music/firered/10. A Rival Appears.flac", //missing actual file for now
                "musicID": 316,
                "battle" : "rival",
                "stage" : "aggro"
            },
            {
                "song": "MUS_OBTAIN_KEY_ITEM",
                "file": "music/firered/67. Fanfare꞉ Item Obtained (Version 2).flac", //double check this
                "musicID": 318,
            },
            {
                "song": "MUS_POKE_JUMP",
                "file": "music/firered/60. Pokémon Jump.flac",
                "musicID": 326,
            },
            {
                "song": "MUS_UNION_ROOM",
                "file": "music/firered/65. The Union Room.flac",
                "musicID": 327,
            },
            {
                "song": "MUS_NET_CENTER",
                "file": "music/firered/57. Pokémon Net Center.flac",
                "musicID": 328,
            },
            {
                "song": "MUS_MYSTERY_GIFT",
                "file": "music/firered/66. Mystery Gift.flac",
                "musicID": 329,
            },
            {
                "song": "MUS_BERRY_PICK",
                "file": "music/firered/61. Dodrio Berry Picking.flac",
                "musicID": 330,
            },
            {
                "song": "MUS_SEVII_CAVE",
                "file": "music/firered/34. Caves of Mt. Moon.flac",
                "musicID": 331,
            },
            {
                "song": "MUS_TEACHY_TV_SHOW",
                "file": "music/firered/16. Teachy TV Menu.flac",
                "musicID": 332,
            },
            {
                "song": "MUS_SEVII_ROUTE",
                "file": "music/firered/63. Sevii Islands.flac",
                "musicID": 333,
            },
            {
                "song": "MUS_SEVII_DUNGEON",
                "file": "music/firered/45. Rocket Hideout.flac", //need to test this
                "musicID": 334,
            },
            {
                "song": "MUS_SEVII_123",
                "file": "music/firered/15. Pewter City Theme.flac",
                "musicID": 335,
            },
            {
                "song": "MUS_SEVII_45",
                "file": "music/firered/59. Sevii Islands꞉ Four & Five Islands.flac",
                "musicID": 336,
            },
            {
                "song": "MUS_SEVII_67",
                "file": "music/firered/64. Sevii Islands꞉ Six & Seven Islands.flac",
                "musicID": 337,
            },
            {
                "song": "MUS_POKE_FLUTE",
                "file": "music/firered/49. The Poké Flute.flac",
                "musicID": 338,
            },
            {
                "song": "MUS_VS_DEOXYS",
                "file": "music/firered/75. Battle! (Deoxys).flac",
                "musicID": 339,
                "battle" : "legendary",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_MEWTWO",
                "file": "music/firered/68. Battle! (Mewtwo).flac",
                "musicID": 340,
                "battle" : "legendary",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_LEGEND",
                "file": "music/firered/53. Battle! (Legendary Pokémon).flac",
                "musicID": 341,
                "battle" : "legendary",
                "stage" : "battle"
            },
            {
                "song": "MUS_ENCOUNTER_GYM_LEADER",
                "file": "music/firered/26. Tense Battle!.flac",
                "musicID": 342,
                "battle" : "gymLeader",
                "stage" : "aggro"
            },
            {
                "song": "MUS_ENCOUNTER_DEOXYS",
                "file": "music/firered/74. Deoxys Appears.flac",
                "musicID": 343,
                "battle" : "legendary",
                "stage" : "aggro"
            },
            {
                "song": "MUS_TRAINER_TOWER",
                "file": "music/firered/25. Pokémon Gym.flac",
                "musicID": 344,
            },
            {
                "song": "MUS_SLOW_PALLET",
                "file": "music/firered/71. Epilogue.flac",
                "musicID": 345,
            },
            {
                "song": "MUS_TEACHY_TV_MENU",
                "file": "music/firered/16. Teachy TV Menu.flac",
                "musicID": 346,
            },
        ],
    },

    "Pokemon Emerald" : {
        "name" : "Pokemon Emerald",
        "ch1" : "musicID",
        "ch2" : "musicID",
        "bank" : "musicID",
        "map" : "musicID",
        "music": [
            {
                "song": "silent",
                "file": "music/silent.wav",
                "musicID": 0,
            },
            {
                "song": "MUS_VICTORY_WILD",
                "file": "music/emerald/10. Victory! (Wild Pokémon).flac",
                "musicID": 353,
                "battle" : "wild",
                "stage" : "victory"
            },
            {
                "song": "MUS_VICTORY_GYM_LEADER",
                "file": "music/emerald/51. Victory! (Gym Leader).flac",
                "musicID": 354,
                "battle" : "gymLeader",
                "stage" : "victory"
            },
            {
                "song": "MUS_VICTORY_LEAGUE",
                "file": "music/emerald/102. Victory! (Steven).flac",
                "musicID": 355,
                "battle" : "champion",
                "stage" : "victory"
            },
            {
                "song": "MUS_ROUTE101",
                "file": "music/emerald/11. Route 101.flac",
                "musicID": 359,
            },
            {
                "song": "MUS_ROUTE110",
                "file": "music/emerald/34. Route 110.flac",
                "musicID": 360,
            },
            {
                "song": "MUS_ROUTE120",
                "file": "music/emerald/57. Route 120.flac",
                "musicID": 361,
            },
            {
                "song": "MUS_PETALBURG",
                "file": "music/emerald/20. Petalburg City.flac",
                "musicID": 362,
            },
            {
                "song": "MUS_OLDALE",
                "file": "music/emerald/12. Oldale Town.flac",
                "musicID": 363,
            },
            {
                "song": "MUS_GYM",
                "file": "music/emerald/49. Pokémon Gym.flac",
                "musicID": 364,
            },
            {
                "song": "MUS_SURF",
                "file": "music/emerald/54. Surf.flac",
                "musicID": 365,
            },
            {
                "song": "MUS_PETALBURG_WOODS",
                "file": "music/emerald/23. Petalburg Woods.flac",
                "musicID": 366,
            },
            {
                "song": "MUS_OBTAIN_BADGE",
                "file": "music/emerald/52. Obtained a Badge!.flac",
                "musicID": 369,
            },
            {
                "song": "MUS_OBTAIN_ITEM",
                "file": "music/emerald/74. Obtained an Item!.flac",
                "musicID": 370,
            },
            {
                "song": "MUS_EVOLVED",
                "file": "music/emerald67. Congratulations! Your Pokémon Evolved!.flac",
                "musicID": 371,
            },
            {
                "song": "MUS_OBTAIN_TMHM",
                "file": "music/emerald/53. Obtained a TM!.flac",
                "musicID": 372,
            },
            {
                "song": "MUS_LILYCOVE_MUSEUM",
                "file": "music/emerald/62. Museum.flac",
                "musicID": 373,
            },
            {
                "song": "MUS_ROUTE122",
                "file": "music/emerald/04. Introductions.flac",
                "musicID": 374,
            },
            {
                "song": "MUS_OCEANIC_MUSEUM",
                "file": "music/emerald/33. Oceanic Museum.flac",
                "musicID": 375,
            },
            {
                "song": "MUS_EVOLUTION",
                "file": "music/emerald/66. Evolution.flac",
                "musicID": 377,
            },
            {
                "song": "MUS_MOVE_DELETED",
                "file": "music/emerald/63. Move Deleted.flac",
                "musicID": 378,
            },
            {
                "song": "MUS_ENCOUNTER_GIRL",
                "file": "music/emerald/31. Trainers' Eyes Meet (Tuber♀).flac",
                "musicID": 379,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_ENCOUNTER_MALE",
                "file": "music/emerald/15. Trainers' Eyes Meet (Youngster).flac",
                "musicID": 380,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_ABANDONED_SHIP",
                "file": "music/emerald/94. Abandoned Ship.flac",
                "musicID": 381,
            },
            {
                "song": "MUS_FORTREE",
                "file": "music/emerald/56. Fortree City.flac",
                "musicID": 382,
            },
            {
                "song": "MUS_BIRCH_LAB",
                "file": "music/emerald/06. Birch Pokémon Lab.flac",
                "musicID": 383,
            },
            {
                "song": "MUS_B_TOWER_RS",
                "file": "music/emerald/95. Battle Tower.flac",
                "musicID": 384,
            },
            {
                "song": "MUS_ENCOUNTER_SWIMMER",
                "file": "music/emerald/84. Trainers' Eyes Meet (Swimmer♀).flac",
                "musicID": 385,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_CAVE_OF_ORIGIN",
                "file": "music/emerald/82. Cave of Origin.flac",
                "musicID": 386,
            },
            {
                "song": "MUS_OBTAIN_BERRY",
                "file": "music/emerald/86. Obtained a Berry!.flac",
                "musicID": 387,
            },
            {
                "song": "MUS_AWAKEN_LEGEND",
                "file": "music/emerald/77. The Super-Ancient Pokémon Awaken!.flac",
                "musicID": 388,
            },
            {
                "song": "MUS_SLOTS_JACKPOT",
                "file": "music/emerald/40. Jackpot.flac",
                "musicID": 389,
            },
            {
                "song": "MUS_SLOTS_WIN",
                "file": "music/emerald/37. Win.flac",
                "musicID": 390,
            },
            {
                "song": "MUS_TOO_BAD",
                "file": "music/emerald/38. Lose.flac",
                "musicID": 391,
            },
            {
                "song": "MUS_ENCOUNTER_RICH",
                "file": "music/emerald/60. Trainers' Eyes Meet (Gentleman).flac",
                "musicID": 397,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_VERDANTURF",
                "file": "music/emerald/41. Verdanturf Town.flac",
                "musicID": 398,
            },
            {
                "song": "MUS_RUSTBORO",
                "file": "music/emerald/27. Rustboro City.flac",
                "musicID": 399,
            },
            {
                "song": "MUS_POKE_CENTER",
                "file": "music/emerald/13. Pokémon Center.flac",
                "musicID": 400,
            },
            {
                "song": "MUS_ROUTE104",
                "file": "music/emerald/22. Route 104.flac",
                "musicID": 401,
            },
            {
                "song": "MUS_ROUTE119",
                "file": "music/emerald/55. Route 119.flac",
                "musicID": 402,
            },
            {
                "song": "MUS_CYCLING",
                "file": "music/emerald/35. Cycling.flac",
                "musicID": 403,
            },
            {
                "song": "MUS_POKE_MART",
                "file": "music/emerald/68. Poké Mart.flac",
                "musicID": 404,
            },
            {
                "song": "MUS_LITTLEROOT",
                "file": "music/emerald/05. Littleroot Town.flac",
                "musicID": 405,
            },
            {
                "song": "MUS_MT_CHIMNEY",
                "file": "music/emerald/46. Mt. Chimney.flac",
                "musicID": 406,
            },
            {
                "song": "MUS_ENCOUNTER_FEMALE",
                "file": "music/emerald/16. Trainers' Eyes Meet (Lass).flac",
                "musicID": 407,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_LILYCOVE",
                "file": "music/emerald/61. Lilycove City.flac",
                "musicID": 408,
            },
            {
                "song": "MUS_DESERT",
                "file": "music/emerald/48. Route 111.flac",
                "musicID": 409,
            },
            {
                "song": "MUS_HELP",
                "file": "music/emerald/08. H-Help Me!.flac",
                "musicID": 410,
            },
            {
                "song": "MUS_UNDERWATER",
                "file": "music/emerald/80. Dive.flac",
                "musicID": 411,
            },
            {
                "song": "MUS_VICTORY_TRAINER",
                "file": "music/emerald/18. Victory! (Trainer Battle).flac",
                "musicID": 412,
                "battle" : "trainer",
                "stage" : "victory"
            },
            {
                "song": "MUS_TITLE",
                "file": "music/emerald/03. Title Screen꞉ Main Theme.flac",
                "musicID": 413,
            },
            {
                "song": "MUS_INTRO",
                "file": "music/emerald/MUS_INTRO.flac",
                "musicID": 414,
            },
            {
                "song": "MUS_ENCOUNTER_MAY",
                "file": "music/emerald/07. May.flac",
                "musicID": 415,
            },
            {
                "song": "MUS_ENCOUNTER_INTENSE",
                "file": "music/emerald/70. Trainers' Eyes Meet (Psychic).flac", //totally guessed this one, need to check
                "musicID": 416,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_ENCOUNTER_COOL",
                "file": "music/emerald/97. Trainers' Eyes Meet (Cooltrainer).flac",
                "musicID": 417,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_ROUTE113",
                "file": "music/emerald/42. Route 113.flac",
                "musicID": 418,
            },
            {
                "song": "MUS_ENCOUNTER_AQUA",
                "file": "music/emerald/75. Team Aqua Appears!.flac",
                "musicID": 419,
            },
            {
                "song": "MUS_FOLLOW_ME",
                "file": "music/emerald/21. Hurry Along.flac",
                "musicID": 420,
            },
            {
                "song": "MUS_ENCOUNTER_BRENDAN",
                "file": "music/emerald/64. Brendan.flac",
                "musicID": 421,
            },
            {
                "song": "MUS_EVER_GRANDE",
                "file": "music/emerald/85. Ever Grande City.flac",
                "musicID": 422,
            },
            {
                "song": "MUS_ENCOUNTER_SUSPICIOUS",
                "file": "music/emerald/71. Trainers' Eyes Meet (Hex Maniac).flac",
                "musicID": 423,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_VICTORY_AQUA_MAGMA",
                "file": "music/emerald/26. Victory! (Team Aqua ∕ Team Magma).flac",
                "musicID": 424,
                "battle" : "rocket",
                "stage" : "victory"
            },
            {
                "song": "MUS_CABLE_CAR",
                "file": "music/emerald/45. Cable Car.flac",
                "musicID": 425,
            },
            {
                "song": "MUS_GAME_CORNER",
                "file": "music/emerald/36. Game Corner.flac",
                "musicID": 426,
            },
            {
                "song": "MUS_DEWFORD",
                "file": "music/emerald/30. Dewford Town.flac",
                "musicID": 427,
            },
            {
                "song": "MUS_SAFARI_ZONE",
                "file": "music/emerald/59. Safari Zone.flac",
                "musicID": 428,
            },
            {
                "song": "MUS_VICTORY_ROAD",
                "file": "music/emerald/96. Victory Road.flac",
                "musicID": 429,
            },
            {
                "song": "MUS_AQUA_MAGMA_HIDEOUT",
                "file": "music/emerald/73. Hideout.flac",
                "musicID": 430,
            },
            {
                "song": "MUS_SAILING",
                "file": "music/emerald/29. Crossing the Sea.flac",
                "musicID": 431,
            },
            {
                "song": "MUS_MT_PYRE",
                "file": "music/emerald/69. Mt. Pyre.flac",
                "musicID": 432,
            },
            {
                "song": "MUS_SLATEPORT",
                "file": "music/emerald/32. Slateport City.flac",
                "musicID": 433,
            },
            {
                "song": "MUS_MT_PYRE_EXTERIOR",
                "file": "music/emerald/72. Mt. Pyre Exterior.flac",
                "musicID": 434,
            },
            {
                "song": "MUS_SCHOOL",
                "file": "music/emerald/28. Trainers' School.flac",
                "musicID": 435,
            },
            {
                "song": "MUS_HALL_OF_FAME",
                "file": "music/emerald/104. The Hall of Fame.flac",
                "musicID": 436,
            },
            {
                "song": "MUS_FALLARBOR",
                "file": "music/emerald/44. Fallarbor Town.flac",
                "musicID": 437,
            },
            {
                "song": "MUS_SEALED_CHAMBER",
                "file": "music/emerald/91. Sealed Chamber.flac",
                "musicID": 438,
            },
            {
                "song": "MUS_CONTEST_WINNER",
                "file": "music/emerald/90. Contest Winner.flac",
                "musicID": 439,
            },
            {
                "song": "MUS_CONTEST_WINNER",
                "file": "music/emerald/88. Pokémon Contest!.flac",
                "musicID": 440,
            },
            {
                "song": "MUS_ENCOUNTER_MAGMA",
                "file": "music/emerald/24. Team Magma Appears!.flac",
                "musicID": 441,
                "battle" : "aggro",
                "stage" : "battle"
            },
            {
                "song": "MUS_INTRO_BATTLE",
                "file": "music/emerald/02. Opening Movie꞉ Double Battles.flac",
                "musicID": 442,
            },
            {
                "song": "MUS_ABNORMAL_WEATHER",
                "file": "music/emerald/108. Abnormal Weather.flac",
                "musicID": 443,
            },
            {
                "song": "MUS_SOOTOPOLIS",
                "file": "music/emerald/81. Sootopolis City.flac",
                "musicID": 445,
            },
            {
                "song": "MUS_CONTEST_RESULTS",
                "file": "music/emerald/89. Results Announcement.flac",
                "musicID": 446,
            },
            {
                "song": "MUS_HALL_OF_FAME_ROOM",
                "file": "music/emerald/104. The Hall of Fame.flac",
                "musicID": 447,
            },
            {
                "song": "93. The Trick House",
                "file": "music/emerald/93. The Trick House.flac",
                "musicID": 448,
            },
            {
                "song": "MUS_ENCOUNTER_TWINS",
                "file": "music/emerald/43. Twins.flac",
                "musicID": 449,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_ENCOUNTER_ELITE_FOUR",
                "file": "music/emerald/98. The Elite Four Appear!.flac",
                "musicID": 450,
                "battle" : "eliteFour",
                "stage" : "aggro"
            },
            {
                "song": "MUS_ENCOUNTER_HIKER",
                "file": "music/emerald/47. Trainers' Eyes Meet (Hiker).flac",
                "musicID": 451,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "MUS_CONTEST_LOBBY",
                "file": "music/emerald/87. Contest Lobby.flac",
                "musicID": 452,
            },
            {
                "song": "MUS_ENCOUNTER_INTERVIEWER",
                "file": "music/emerald/58. Interviewers.flac",
                "musicID": 453,
            },
            {
                "song": "MUS_ENCOUNTER_CHAMPION",
                "file": "music/emerald/100. Champion Steven.flac",
                "musicID": 454,
            },
            {
                "song": "MUS_CREDITS",
                "file": "music/emerald/music/Emerald/105. Ending Theme.flac.flac",
                "musicID": 455,
            },
            {
                "song": "MUS_END",
                "file": "music/emerald/106. The End.flac",
                "musicID": 456,
            },
            {
                "song": "MUS_B_FRONTIER",
                "file": "music/emerald/110. Battle Frontier.flac",
                "musicID": 457,
            },
            {
                "song": "MUS_B_ARENA",
                "file": "music/emerald/113. Battle Arena.flac",
                "musicID": 458,
            },
            {
                "song": "MUS_OBTAIN_B_POINTS",
                "file": "music/emerald/119. Received Battle Points!.flac",
                "musicID": 459,
            },
            {
                "song": "MUS_REGISTER_MATCH_CALL",
                "file": "music/emerald/107. Match Call.flac",
                "musicID": 460,
            },
            {
                "song": "MUS_B_PYRAMID",
                "file": "music/emerald/117. Battle Pyramid.flac",
                "musicID": 461,
            },
            {
                "song": "MUS_B_PYRAMID_TOP",
                "file": "music/emerald/118. Battle Pyramid Summit.flac",
                "musicID": 462,
            },
            {
                "song": "MUS_B_PALACE",
                "file": "music/emerald/116. Battle Palace.flac",
                "musicID": 463,
            },
            {
                "song": "MUS_RAYQUAZA_APPEARS",
                "file": "music/emerald/109. Rayquaza Appears!.flac",
                "musicID": 464,
            },
            {
                "song": "MUS_B_TOWER",
                "file": "music/emerald/111. Battle Tower (Battle Frontier Version).flac",
                "musicID": 465,
            },
            {
                "song": "MUS_OBTAIN_SYMBOL",
                "file": "music/emerald/121. Battle Symbol Received!.flac",
                "musicID": 466,
            },
            {
                "song": "MUS_B_DOME",
                "file": "music/emerald/114. Battle Dome.flac",
                "musicID": 467,
            },
            {
                "song": "MUS_B_PIKE",
                "file": "music/emerald/115. Battle Pike.flac",
                "musicID": 468,
            },
            {
                "song": "MUS_B_FACTORY",
                "file": "music/emerald/112. Battle Factory.flac",
                "musicID": 469,
            },
            {
                "song": "MUS_VS_RAYQUAZA",
                "file": "music/emerald/83. Battle! (Super-Ancient Pokémon).flac",
                "musicID": 470,
                "battle" : "legendary",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_FRONTIER_BRAIN",
                "file": "music/emerald/120. Battle! (Frontier Brain).flac",
                "musicID": 471,
            },
            {
                "song": "MUS_VS_MEW",
                "file": "music/emerald/122. Battle! (Mew).flac",
                "musicID": 472,
                "battle" : "legendary",
                "stage" : "battle"
            },
            {
                "song": "MUS_B_DOME_LOBBY",
                "file": "music/emerald/013 - 0124.flac",
                "musicID": 473,
            },
            {
                "song": "MUS_VS_WILD",
                "file": "music/emerald/09. Battle! (Wild Pokémon).flac",
                "musicID": 474,
                "battle" : "wild",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_AQUA_MAGMA",
                "file": "music/emerald/25. Battle! (Team Aqua ∕ Team Magma).flac",
                "musicID": 475,
                "battle" : "rocket",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_TRAINER",
                "file": "music/emerald/17. Battle! (Trainer Battle).flac",
                "musicID": 476,
                "battle" : "trainer",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_GYM_LEADER",
                "file": "music/emerald/50. Battle! (Gym Leader).flac",
                "musicID": 477,
                "battle" : "gymLeader",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_CHAMPION",
                "file": "music/emerald/101. Battle! (Steven).flac",
                "musicID": 478,
                "battle" : "champion",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_REGI",
                "file": "music/emerald/92. Battle! (Regirock ∕ Regice ∕ Registeel).flac",
                "musicID": 479,
                "battle" : "legendary",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_KYOGRE_GROUDON",
                "file": "music/emerald/83. Battle! (Super-Ancient Pokémon).flac",
                "musicID": 480,
                "battle" : "legendary",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_RIVAL",
                "file": "music/emerald/65. Battle! (Brendan ∕ May).flac",
                "musicID": 481,
                "battle" : "rival",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_ELITE_FOUR",
                "file": "music/emerald/99. Battle! (Elite Four).flac",
                "musicID": 482,
                "battle" : "eliteFour",
                "stage" : "battle"
            },
            {
                "song": "MUS_VS_AQUA_MAGMA_LEADER",
                "file": "music/emerald/76. Battle! (Team Aqua ∕ Team Magma Leaders).flac",
                "musicID": 483,
                "battle" : "boss",
                "stage" : "battle"
            },
            
            // {
            //     "song": "may",
            //     "file": "music/emerald/107 May (Girl's Theme).mp3",
            //     "musicID": 415,
            //     //LITTLEROOT_TOWN - MAYS_HOUSE_2F
            // },
            // {
            //     "song": "brendan",
            //     "file": "music/emerald/210 Brendan's Theme.mp3",
            //     "musicID": 421,
            //     //LITTLEROOT_TOWN - BRENDANS_HOUSE_2F
            // },
            // {
            //     "song": "littleroot town",
            //     "file": "music/emerald/105 Littleroot Town.mp3",
            //     "musicID": 405,
            //     //LITTLEROOT_TOWN
            // },
            // {
            //     "song": "intro departure",
            //     "file": "music/emerald/101 Title Demo 1 (Departure).mp3",
            //     "musicID": 414,
                
            // },
            // {
            //     "song": "intro main",
            //     "file": "music/emerald/103 Title Demo 3 (Main Theme).mp3",
            //     "musicID": 413,
                
            // },
            // {
            //     "song": "newgame birch opening",
            //     "file": "music/emerald/104 Opening Selection.mp3",
            //     "musicID": 374,
                
            // },
            // {
            //     "song": "interviewer",
            //     "file": "music/emerald/204 Interviewer.mp3",
            //     "musicID": 453,
                
            // },
            // {
            //     "song": "help!",
            //     "file": "music/emerald/108 Help!.mp3",
            //     "musicID": 410,  
            // },
            // {
            //     "song": "wild pokemon battle",
            //     "file": "music/emerald/109 Battle! Wild Pokemon.mp3",
            //     "musicID": 474,
            //     "battle" : "wild",
            //     "stage" : "battle",
            // },
            // {
            //     "song": "wild pokemon victory",
            //     "file": "music/emerald/110 Wild Pokemon Defeated!.mp3",
            //     "musicID": 353,
            //     "battle" : "wild",
            //     "stage" : "victory",
            // },
            // {
            //     "song": "Route 101",
            //     "file": "music/emerald/111 Route 101.mp3",
            //     "musicID": 359,  
            //     //ROUTE 101
            // },
            // {
            //     "song": "Birch lab",
            //     "file": "music/emerald/106 Birch Research Institute.mp3",
            //     "musicID": 383,  
            //     //LITTLEROOT_TOWN - PROFESSOR_BIRCHS_LAB
            // },
            // {
            //     "song": "Oldale Town",
            //     "file": "music/emerald/112 Oldale Town.mp3",
            //     "musicID": 363,  
                
            // },
            // {
            //     "song": "Pokemon Center",
            //     "file": "music/emerald/113 Pokemon Center.mp3",
            //     "musicID": 400,  
            // },
            // {
            //     "song": "Pokemon Mart",
            //     "file": "music/emerald/214 Friendly Shop.mp3",
            //     "musicID": 404,  
            // },
            // {
            //     "song": "rival battle",
            //     "file": "music/emerald/211 Rival Duels! VS May & Brendan.mp3",
            //     "musicID": 481,
            //     "battle" : "rival",
            //     "stage" : "battle",
            // },
            // {
            //     "song": "Trainer victory",
            //     "file": "music/emerald/118 Trainer Defeated.mp3",
            //     "musicID": 412,
            //     "battle" : "trainer",
            //     "stage" : "victory",
            // },
            // {
            //     "song": "look! little kid",
            //     "file": "music/emerald/115 Look! Little Kid.mp3",
            //     "musicID": 143728260,
            //     "battle" : "trainer",
            //     "stage" : "aggro",
            // },
            // {
            //     "song": "trainer battle",
            //     "file": "music/emerald/117 Battle! Trainer.mp3",
            //     "musicID": 144054764,
            //     "battle" : "trainer",
            //     "stage" : "battle",
            // },
            // {
            //     "song": "wild victory ",
            //     "file": "music/emerald/110 Wild Pokemon Defeated!.mp3",
            //     "musicID": 143674500,
            //     "battle" : "wild",
            //     "stage" : "victory",
            // },
            // {
            //     "song": "Petalburg city",
            //     "file": "music/emerald/120 Petalburg City.mp3",
            //     "musicID": 143700056,  
            //     //PETALBURG_CITY
            // },
            // {
            //     "song": "Come Along",
            //     "file": "music/emerald/121 Come Along.mp3",
            //     "musicID": 143861816,  
            //     //PETALBURG_CITY
            // },
            // {
            //     "song": "Gym",
            //     "file": "music/emerald/149 Gym Theme.mp3",
            //     "musicID": 143704900,  
            // },
            // {
            //     "song": "Route 104",
            //     "file": "music/emerald/122 Route 104.mp3",
            //     "musicID": 143771604,  
            //     //ROUTE 104
            // },
            // {
            //     "song": "Rustboro City",
            //     "file": "music/emerald/127 Rustboro City.mp3",
            //     "musicID": 143763404,  
            // },
            // {
            //     "song": "Route 119",
            //     "file": "music/emerald/201 Route 119.mp3",
            //     "musicID": 143779036,  
            //     //ROUTE 119
            //     //402
            // },
            // {
            //     "song": "Fortree City",
            //     "file": "music/emerald/202 Fortree City.mp3",
            //     "musicID": 143732980,  

            // },
            // {
            //     "song": "Gym Leader",
            //     "file": "music/emerald/150 Battle! Gym Leader.mp3",
            //     "musicID": 144058396,  
            //     "battle" : "gymLeader",
            //     "stage" : "battle"
            // },
            // {
            //     "song": "Route 120",
            //     "file": "music/emerald/203 Route 120.mp3",
            //     "musicID": 143697300,  
            // },
            // {
            //     "song": "Surf",
            //     "file": "music/emerald/154 Surfing Theme.mp3",
            //     "musicID": 143708648,  
            // },
            // {
            //     "song": "Mt Pyre",
            //     "file": "music/emerald/215 Mount Pyre.mp3",
            //     "musicID": 143899564,  
            // },
            // {
            //     "song": "Mt Pyre Summit",
            //     "file": "music/emerald/218 Mount Pyre (Outer Wall).mp3",
            //     "musicID": 143916092,  
            // },
            // // {
            // //     "song": "Cave",
            // //     "file": "music/emerald/????",
            // //     "musicID": 143710984,  
            // // },
            // {
            //     "song": "Mt Chimney",
            //     "file": "music/emerald/146 Chimney Mountain.mp3",
            //     "musicID": 143804052,  
            // },
            // {
            //     "song": "Team Hideout",
            //     "file": "music/emerald/219 Magma & Aqua Hideout.mp3",
            //     "musicID": 143892724,  
            // },
            // {
            //     "song": "Team magma/aqua battle",
            //     "file": "music/emerald/125 Aqua & Magma Team Battle!.mp3",
            //     "musicID": 144050504,  
            //     "battle" : "trainer",
            //     "stage" : "battle"  
            // },
            // {
            //     "song": "Team magma/aqua battle victory",
            //     "file": "music/emerald/126 Aqua & Magma Teams Defeated!.mp3",
            //     "musicID": 143872212,  
            //     "battle" : "trainer",
            //     "stage" : "victory"  
            // },
            // {
            //     "song": "Team magma/aqua battle aggro",
            //     "file": "music/emerald/124 Aqua & Magma Teams Appear!.mp3",
            //     "musicID": 143934004,  
            //     "battle" : "trainer",
            //     "stage" : "aggro"  
            // },
            // {
            //     "song": "Team magma/aqua leader battle",
            //     "file": "music/emerald/222 Aqua & Magma Leader Battle!.mp3",
            //     "musicID": 144076416,  
            //     "battle" : "gym leader",
            //     "stage" : "battle"  
            // },
            // {
            //     "song": "Petalberg Forest",
            //     "file": "music/emerald/123 Petalburg Forest.mp3",
            //     "musicID": 143710984,  
            // },
            

        ],
    },

    "Pokemon Crystal" : {
        "name" : "Pokemon Crystal",
        "ch1" : "channel1MusicID",
        "ch2" : "channel2MusicID",
        "bank" : "musicBank",
        "map" : "mapMusic",
        "music": [
            {
                "song": "silent",
                "file": "music/silent.wav",
                "channel1MusicID": 0,
            },
            {
                "song": "crystalMain",
                "file": "music/crystal/01 Pokemon Crystal Main Theme.mp3",
                "channel1MusicID": 256,
            },
            {
                "song": "route1",
                "file": "music/crystal/02.mp3",
                "channel1MusicID": 512
            },
            {
                "song": "route22",
                "file": "music/crystal/03.mp3",
                "channel1MusicID": 768
            },
            {
                "song": "pokeflute",
                "file": "music/crystal/04.mp3",
                "channel1MusicID": 1024
            },
            {
                "song": "magnetTrain",
                "file": "music/crystal/05.mp3",
                "channel1MusicID": 1280
            },
            {
                "song": "gymLeaderBattleKanto",
                "file": "music/crystal/06.mp3",
                "channel1MusicID": 1536,
                "battle" : "gymLeader",
                "stage" : "battle"
            },
            {
                "song": "trainerBattleKanto",
                "file": "music/crystal/07.mp3",
                "channel1MusicID": 1792,
                "battle" : "trainer",
                "stage" : "battle"

            },
            {
                "song": "wildBattleKanto",
                "file": "music/crystal/08.mp3",
                "channel1MusicID": 2048,
                "battle" : "wild",
                "stage" : "battle"
            },
            {
                "song": "pokemonCenter",
                "file": "music/crystal/09.mp3",
                "channel1MusicID": 2304,
            },
            {
                "song": "trainerMaleAggro",
                "file": "music/crystal/10.mp3",
                "channel1MusicID": 2560,
                "battle" : "trainer",
                "stage" : "aggro"

            },
            {
                "song": "trainerFemaleAggro",
                "file": "music/crystal/11.mp3",
                "channel1MusicID": 2816,
                "battle" : "trainer",
                "stage" : "aggro"

            },
            {
                "song": "trainerPoliceAggro",
                "file": "music/crystal/12.mp3",
                "channel1MusicID": 3072,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "healed",
                "file": "music/crystal/13.mp3",
                "heal" : "heal",
                "channel1MusicID": 3328,
            },
            {
                "song": "lavenderTown",
                "file": "music/crystal/14.mp3",
                "channel1MusicID": 3584
            },
            {
                "song": "route2",
                "file": "music/crystal/15.mp3",
                "channel1MusicID": 3840
            },
            {
                "song": "mtMoon",
                "file": "music/crystal/16.mp3",
                "channel1MusicID": 4096
            },
            {
                "song": "hurryAlong2",
                "file": "music/crystal/17.mp3",
                "channel1MusicID": 4352
            },
            {
                "song": "professorOak",
                "file": "music/crystal/30.mp3",
                "channel1MusicID": 7680
            },
            {
                "song": "lucky",
                "file": "music/crystal/18.mp3",
                "channel1MusicID": 4608
            },
            {
                "song": "pokemonCenter",
                "file": "music/crystal/19.mp3",
                "channel1MusicID": 4864,
            },
            {
                "song": "hallOfFame",
                "file": "music/crystal/20.mp3",
                "channel1MusicID": 5120
            },
            {
                "song": "pewterCity",
                "file": "music/crystal/21.mp3",
                "channel1MusicID": 5376
            },
            {
                "song": "fuchsiaCity",
                "file": "music/crystal/22.mp3",
                "channel1MusicID": 5632
            },
            {
                "song": "trainerVictory",
                "file": "music/crystal/23.mp3",
                "channel1MusicID": 5888,
                "battle" : "trainer",
                "stage" : "victory"

            },
            {
                "song": "wildVictory",
                "file": "music/crystal/24.mp3",
                "channel1MusicID": 6144,
                "battle" : "wild",
                "stage" : "victory"

            },
            {
                "song": "gymLeaderVictory",
                "file": "music/crystal/25.mp3",
                "channel1MusicID": 6400,
                "battle" : "gymLeader",
                "stage" : "victory"

            },
            {
                "song": "mtMoonClefairy",
                "file": "music/crystal/26.mp3",
                "channel1MusicID": 6656
            },
            {
                "song": "tower",
                "file": "music/crystal/27.mp3",
                "channel1MusicID": 6912
            },
            {
                "song": "palletTown",
                "file": "music/crystal/28.mp3",
                "channel1MusicID": 7168
            },
            {
                "song": "oaksLab",
                "file": "music/crystal/29.mp3",
                "channel1MusicID": 7424
            },
            {
                "song": "professorOak",
                "file": "music/crystal/30.mp3",
                "channel1MusicID": 7680
            },
            {
                "song": "rivalAggro",
                "file": "music/crystal/31.mp3",
                "channel1MusicID": 7936,
                "battle" : "rival",
                "stage" : "aggro"
            },
            {
                "song": "rivalAfterVictory",
                "file": "music/crystal/32.mp3",
                "channel1MusicID": 8192,
                "battle" : "rival"
            },
            {
                "song": "surf",
                "file": "music/crystal/33.mp3",
                "channel1MusicID": 8448
            },
            {
                "song": "evolution",
                "file": "music/crystal/34.mp3",
                "channel1MusicID": 8704
            },
            {
                "song": "nationalPark",
                "file": "music/crystal/35.mp3",
                "channel1MusicID": 8960
            },
            {
                "song": "credits",
                "file": "music/crystal/36.mp3",
                "channel1MusicID": 9216
            },
            {
                "song": "azaleaTown",
                "file": "music/crystal/37.mp3",
                "channel1MusicID": 9472
            },
            {
                "song": "cherryGroveCity",
                "file": "music/crystal/38.mp3",
                "channel1MusicID": 9728
            },
            {
                "song": "trainerKimonoGirlAggro",
                "file": "music/crystal/39.mp3",
                "channel1MusicID": 9984,
                "battle" : "trainer",
                "stage" : "aggro"

            },
            {
                "song": "ruinsOfAlph",
                "file": "music/crystal/40.mp3",
                "channel1MusicID": 10240
            },
            {
                "song": "wildBattle",
                "file": "music/crystal/41.mp3",
                "channel1MusicID": 10496,
                "battle" : "wild",
                "stage" : "aggro"
            },
            {
                "song": "trainerBattle",
                "file": "music/crystal/42.mp3",
                "channel1MusicID": 10752,
                "battle" : "trainer",
                "stage" : "battle"
            },
            {
                "song": "route30",
                "file": "music/crystal/43.mp3",
                "channel1MusicID": 11008
            },
            {
                "song": "ecruteakCity",
                "file": "music/crystal/44.mp3",
                "channel1MusicID": 11264
            },
            {
                "song": "violetCity",
                "file": "music/crystal/45.mp3",
                "channel1MusicID": 11520
            },
            {
                "song": "gymLeaderBattle",
                "file": "music/crystal/46.mp3",
                "channel1MusicID": 11776,
                "battle" : "gymLeader",
                "stage" : "battle"
            },
            {
                "song": "champion",
                "file": "music/crystal/47.mp3",
                "channel1MusicID": 12032,
                "battle" : "champion",
                "stage" : "battle"
            },
            {
                "song": "rivalBattle",
                "file": "music/crystal/48.mp3",
                "channel1MusicID": 12288,
                "battle" : "rival",
                "stage" : "battle"
            },
            {
                "song": "rocketBattle",
                "file": "music/crystal/49.mp3",
                "channel1MusicID": 12544,
                "battle" : "rocket",
                "stage" : "battle"
            },
            {
                "song": "elmsLab",
                "file": "music/crystal/50.mp3",
                "channel1MusicID": 12800
            },
            {
                "song": "cave",
                "file": "music/crystal/51.mp3",
                "channel1MusicID": 13056
            },
            {
                "song": "route29",
                "file": "music/crystal/52.mp3",
                "channel1MusicID": 13312
            },
            {
                "song": "route46",
                "file": "music/crystal/53.mp3",
                "channel1MusicID": 13568
            },
            {
                "song": "fastShipSsAqua",
                "file": "music/crystal/54.mp3",
                "channel1MusicID": 13824
            },
            {
                "song": "trainerBoyAggro",
                "file": "music/crystal/55.mp3",
                "channel1MusicID": 14080,
                "battle" : "trainer",
                "stage" : "aggro"

            },
            {
                "song": "trainerGirlAggro",
                "file": "music/crystal/56.mp3",
                "channel1MusicID": 14336,
                "battle" : "trainer",
                "stage" : "battle"
            },
            {
                "song": "rocketAggro",
                "file": "music/crystal/57.mp3",
                "channel1MusicID": 14592,
                "battle" : "rocket",
                "stage" : "battle"
            },
            {
                "song": "trainerCreepyAggro",
                "file": "music/crystal/58.mp3",
                "channel1MusicID": 14848,
                "battle" : "trainer",
                "stage" : "aggro"

            },
            {
                "song": "trainerCreepyAggro2",
                "file": "music/crystal/59.mp3",
                "channel1MusicID": 15104,
                "battle" : "trainer",
                "stage" : "battle"
            },
            {
                "song": "newBarkTown",
                "file": "music/crystal/60.mp3",
                "channel1MusicID": 15360
            },
            {
                "song": "goldenrodCity",
                "file": "music/crystal/61.mp3",
                "channel1MusicID": 15616
            },
            {
                "song": "vermilionCity",
                "file": "music/crystal/62.mp3",
                "channel1MusicID": 15872
            },
            {
                "song": "pokeflute",
                "file": "music/crystal/64.mp3",
                "channel1MusicID": 16384
            },
            {
                "song": "tinTower",
                "file": "music/crystal/65.mp3",
                "channel1MusicID": 16640
            },
            {
                "song": "tower",
                "file": "music/crystal/66.mp3",
                "channel1MusicID": 16896
            },
            {
                "song": "burnedTower",
                "file": "music/crystal/67.mp3",
                "channel1MusicID": 17152
            },
            {
                "song": "mtSilver",
                "file": "music/crystal/68.mp3",
                "channel1MusicID": 17408
            },
            {
                "song": "lakeOfRage",
                "file": "music/crystal/69.mp3",
                "channel1MusicID": 17664
            },
            {
                "song": "pkmnLeague",
                "file": "music/crystal/70.mp3",
                "channel1MusicID": 17920
            },
            {
                "song": "route38",
                "file": "music/crystal/71.mp3",
                "channel1MusicID": 18176
            },
            {
                "song": "rocketHideout",
                "file": "music/crystal/72.mp3",
                "channel1MusicID": 18432
            },
            {
                "song": "dragonsDen",
                "file": "music/crystal/73.mp3",
                "channel1MusicID": 18688
            },
            {
                "song": "wildBattleNight",
                "file": "music/crystal/74.mp3",
                "channel1MusicID": 18944,
                "battle" : "wild",
                "stage" : "battle"
            },
            {
                "song": "wildPokemonCatch",
                "file": "music/crystal/24.mp3",
                "channel1MusicID": 19456,
                "battle" : "wild",
                "stage" : "victory"
            },
            {
                "song": "route26",
                "file": "music/crystal/77.mp3",
                "channel1MusicID": 19712
            },
            {
                "song": "hurryAlong",
                "file": "music/crystal/78.mp3",
                "channel1MusicID": 0,
                "channel2MusicID": 19968
            },
            {
                "song": "victoryRoad",
                "file": "music/crystal/79.mp3",
                "channel1MusicID": 20224
            },
            {
                "song": "pokemonLullaby",
                "file": "music/crystal/80.mp3",
                "channel1MusicID": 20480,
            },
            {
                "song": "pokemonMarch",
                "file": "music/crystal/81.mp3",
                "channel1MusicID": 20736,
            },
            {
                "song": "newJourney",
                "file": "music/crystal/84.mp3",
                "channel1MusicID": 21504
            },
            {
                "song": "ruinsOfAlphUnown",
                "file": "music/crystal/85.mp3",
                "channel1MusicID": 21760
            },
            {
                "song": "rocketRadioBroadcast",
                "file": "music/crystal/86.mp3",
                "channel1MusicID": 22016
            },
            {
                "song": "kimonoStudio",
                "file": "music/crystal/87.mp3",
                "channel1MusicID": 22272
            },
            {
                "song": "bugContestintro",
                "file": "music/crystal/88.mp3",
                "channel1MusicID": 22528,
            },
            {
                "song": "bugContest",
                "file": "music/crystal/89.mp3",
                "channel1MusicID": 22784,
            },
            {
                "song": "rocketRadioStrangeSignal",
                "file": "music/crystal/90.mp3",
                "channel1MusicID": 23040
            },
            {
                "song": "theEnding",
                "file": "music/crystal/92.mp3",
                "channel1MusicID": 23552,
            },
            {
                "song": "clair",
                "file": "music/crystal/93 Unknown Song 1.mp3",
                "channel1MusicID": 23808
            },
            {
                "song": "buena",
                "file": "music/crystal/96 Buena's Password Show.mp3",
                "channel1MusicID": 24576,
            },
            {
                "song": "eusine",
                "file": "music/crystal/97 Eusine's Theme.mp3",
                "channel1MusicID": 24832,
            },
            {
                "song": "crystalIntro",
                "file": "music/crystal/98 Pokemon Crystal Opening.mp3",
                "channel1MusicID": 25088
            },
            {
                "song": "battleTower",
                "file": "music/crystal/99 Battle Tower Outside.mp3",
                "channel1MusicID": 25344,
            },
            {
                "song": "legendaryPokemon",
                "file": "music/crystal/100 Battle vs Legendary Pokemon.mp3",
                "channel1MusicID": 25600,
                "battle" : "legendary",
                "stage" : "battle"
            },
            {
                "song": "battleTowerInside",
                "file": "music/crystal/101 Battle Tower Inside.mp3",
                "channel1MusicID": 25856,
            },
        ],
    },
    
    "Pokemon Yellow" : {
        "name" : "Pokemon Yellow",
        "ch1" : "channel1",
        "ch2" : "channel2",
        "bank" : "audioBank",
        "map" : "overworldTrackCurrentMap",
        "overworldMap" : "overworldMap",
        "music" : [
            {
                "song": "silent",
                "file": "music/silent.wav",
                "channel1": 0,
            },
            {
                "song": "Jesse and James Aggro",
                "file": "music/yellow/48 Musashi and Kojiro Theme.mp3",
                "channel1": 156,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "Pallet Town",
                "file": "music/yellow/04 Pallet Town's Theme.mp3",
                "channel1": 186,
                "audioBank" : 2,
                "overworldMap" : ["Pallet Town"],
            },
            {
                "song": "Pokemon Center and Mart",
                "file": "music/yellow/05 Pokemon Center.mp3",
                "channel1": 189,
                "audioBank" : 2,
            },
            {
                "song": "Gym",
                "file": "music/yellow/06 Pokemon Gym.mp3",
                "channel1": 192,
                "audioBank" : 2,
                "overworldMap" : ["Fuchsia City - Gym"],
                "priority" : "high"
            },
            {
                "song": "Viridian City",
                "file": "music/yellow/07 Pewter City\'s Theme.mp3",
                "channel1": 195,
                "audioBank" : 2,
                "overworldMap" : ["Viridian City", "Pewter City","Saffron City"]
            },
            {
                "song": "Title",
                "file": "music/yellow/02 Opening (part 2).mp3",
                "channel1": 195,
                "audioBank" : 31,
            },
            {
                "song": "Cerulean City, Fuchsia City",
                "file": "music/yellow/08 Cerulean City\'s Theme.mp3",
                "channel1": 199,
                "audioBank" : 2,
                "overworldMap" : ["Cerulean City", "Fuchsia City"]
            },
            {
                "song": "Credits",
                "file": "music/yellow/30 Ending.mp3",
                "channel1": 199,
                "audioBank" : 31,
            },
            {
                "song": "Celadon City",
                "file": "music/yellow/09 Celadon City\'s Theme.mp3",
                "channel1": 202,
                "audioBank" : 2,
                "overworldMap" : ["Celadon City"],
            },
            {
                "song": "Hall Of Fame",
                "file": "music/yellow/31 Into the Hall.mp3",
                "channel1": 202,
                "audioBank" : 31,
            },
            {
                "song": "Cinnabar Island",
                "file": "music/yellow/10 Cinnabar Island\'s Theme.mp3",
                "channel1": 205,
                "audioBank" : 2,
                "overworldMap" : ["Cinnabar Island"],
            },
            {
                "song": "Professor Oak's Lab",
                "file": "music/yellow/32 Oak Research Lab.mp3",
                "channel1": 205,
                "audioBank" : 31,
            },
            {
                "song": "Vermilion City",
                "file": "music/yellow/11 Vermilion City\'s Theme.mp3",
                "channel1": 208,
                "audioBank" : 2,
                "overworldMap" : ["Vermilion City"],
            },
            {
                "song": "Jigglypuff's song",
                "file": "music/yellow/33 Jigglypuff\'s Song.mp3",
                "channel1": 208,
                "audioBank" : 31,
                "heal" : "heal"
            },
            {
                "song": "Bicycle",
                "file": "music/yellow/34 Cycling.mp3",
                "channel1": 210,
                "audioBank" : 31,
                "overworldMap" : ["Route 16","Route 17"],
                "priority" : "high",
            },
            {
                "song": "Lavender Town",
                "file": "music/yellow/12 Lavender Town\'s Theme.mp3",
                "channel1": 212,
                "audioBank" : 2,
                "overworldMap" : ["Lavender Town"],
            },
            
            {
                "song": "Surfing",
                "file": "music/yellow/35 Ocean.mp3",
                "channel1": 214,
                "audioBank" : 31,
                "overworldMap" : ["Route 21","Route 20","Route 19"],
                
            },
            {
                "song": "SS Anne",
                "file": "music/yellow/13 St. Anne.mp3",
                "channel1": 216,
                "overworldMap" : ["SS Anne"],
                "priority" : "high",
            },
            {
                "song": "Game Corner",
                "file": "music/yellow/36 Casino.mp3",
                "channel1": 217,
                "audioBank" : 31,
            },
            {
                "song": "Oak Tutorial",
                "file": "music/yellow/14 Professor Oak.mp3",
                "channel1": 219,
            },
            {
                "song": "Pokemon Yellow Intro ",
                "file": "music/yellow/01 Opening (part 1).mp3",
                "channel1": 220,
                "audioBank" : 31,
            },
            {
                "song": "Rival",
                "file": "music/yellow/15 Rival Appears.mp3",
                "channel1": 222,
            },
            {
                "song": "Team Rocket Hideout",
                "file": "music/yellow/37 Team Rocket Hideout.mp3",
                "channel1": 223,
                "audioBank" : 31,
                "overworldMap" : ["Unknown Dungeon","Rocket Hideout 1","Rocket Hideout 2","Rocket Hideout 3","Rocket Hideout 4","Rocket Hideout - Elevator","Power Plant"],
                "priority" : "high",
            },
            
            {
                "song": "Hurry Along",
                "file": "music/yellow/16 Guide.mp3",
                "channel1": 225,
                "audioBank" : 2,
            },
            {
                "song": "Viridian Forest",
                "file": "music/yellow/38 Viridian Forest.mp3",
                "channel1": 227,
                "audioBank" : 31,
                "overworldMap" : ["Viridian Forest","Seafoam Islands"],
                "priority" : "high",
            },
            {
                "song": "Evolution / Safari Zone",
                "file": "music/yellow/17 Evolution.mp3",
                "channel1": 229,
                "audioBank" : 2,
                "overworldMap" : ["Safari Zone (Center)","Safari Zone (East)","Safari Zone (North)","Safari Zone (West)"],
                "priority" : "high",
            },
            {
                "song": "Cave Mt Moon Rock Tunnel",
                "file": "music/yellow/39 Mt. Moon Cave.mp3",
                "channel1": 231,
                "audioBank" : 31,
                "overworldMap" : ["Mt Moon - 1","Mt Moon - 2","Mt Moon - 3","Rock Tunnel - 1","Rock Tunnel", "Victory Road"],
                "priority" : "high",
            },
            {
                "song": "Healed",
                "file": "music/yellow/18 Pokemon Recovery.mp3",
                "channel1": 232,
                "audioBank" : 2,
                "heal" : "heal"

            },
            {
                "song": "Gym Leader Battle",
                "file": "music/yellow/23 Battle (VS Gym Leader).mp3",
                "channel1": 234,
                "audioBank" : 8,
                "battle" : "gymLeader",
                "stage" : "battle"
            },
            {
                "song": "Route 1 or 2",
                "file": "music/yellow/19 The Road to Viridian City ~ from Pallet.mp3",
                "channel1": 235,
                "audioBank" : 2,
                "overworldMap" : ["Route 1","Route 2"]
            },
            {
                "song": "Pokemon Mansion",
                "file": "music/yellow/40 Pokemon Mansion.mp3",
                "channel1": 235,
                "audioBank" : 31,
                "overworldMap" : ["Cinnabar Mansion"],
                "priority" : "high",
            },
            {
                "song": "Trainer Battle",
                "file": "music/yellow/24 Battle (VS Trainer).mp3",
                "channel1": 237,
                "audioBank" : 8,
                "battle" : "trainer",
                "stage" : "battle"
            },
            {
                "song": "Route 24, 25",
                "file": "music/yellow/03 To Bill\'s Origin ~ From Cerulean.mp3",
                "channel1": 239,
                "audioBank" : 2,
                "overworldMap" : ["Route 24", "Route 25", "Pallet Town - Red's House 2F"]
            },
            {
                "song": "Pokemon Tower",
                "file": "music/yellow/41 Pokemon Tower.mp3",
                "channel1": 239,
                "audioBank" : 31,
                "overworldMap" : ["Pokemon Tower - 1F","Pokemon Tower - 2F","Pokemon Tower - 3F","Pokemon Tower - 4F","Pokemon Tower - 5F","Pokemon Tower - 6F","Pokemon Tower - 7F"],
                "priority" : "high",
            },
            {
                "song": "Wild Battle",
                "file": "music/yellow/25 Battle (VS Wild Pokemon).mp3",
                "channel1": 240,
                "audioBank" : 8,
                "battle" : "wild"
            },
            {
                "song": "Silph Co",
                "file": "music/yellow/42 Sylph Company.mp3",
                "channel1": 242,
                "audioBank" : 31,
                "overworldMap" : ["Silph Co - 1F","Silph Co - 2F","Silph Co - 3F","Silph Co - 4F","Silph Co - 5F","Silph Co - 6F","Silph Co - 7F","Silph Co - 8F","Silph Co - 9F","Silph Co - 10F","Silph Co - 11F","Silph Co - Elevator"],
                "priority" : "high"
            },
            {
                "song": "Route 3,4,5,6,7,8,9,10,16,17,18,19,20,21,22",
                "file": "music/yellow/20 The Road to Cerulean ~ from Mt. Moon.mp3",
                "channel1": 243,
                "audioBank" : 2,
                "overworldMap" : ["Route 3", "Route 4", "Route 5", "Route 6", "Route 7", "Route 8", "Route 9", "Route 10", "Route 16", "Route 17", "Route 18", "Route 22"]
            },
            {
                "song": " Champion Battle",
                "file": "music/yellow/26 Last Battle (VS Rival).mp3",
                "channel1": 243,
                "audioBank" : 8,
                "battle" : "champion",
                "stage" : "battle",
                "priority" : "high"
            },
            {
                "song": "Rocket Aggro",
                "file": "music/yellow/43 Trainer Appears (Bad Guy Version).mp3",
                "channel1": 245,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "Trainer Battle Victory",
                "file": "music/yellow/27 Victory (VS Trainer).mp3",
                "channel1": 246,
                "audioBank" : 8,
                "battle" : "trainer",
                "stage" : "victory"
            },
            {
                "song": "Route 11, 12, 13, 14, 15",
                "file": "music/yellow/21 The Road to Lavender Town ~ from Vermilion.mp3",
                "channel1": 247,
                "audioBank" : 2,
                "overworldMap" : ["Route 11","Route 12", "Route 13", "Route 14", "Route 15"],
            },
            {
                "song": "Girl Trainer Aggro",
                "file": "music/yellow/44 Trainer Appears (Girl Version).mp3",
                "channel1": 248,
                "audioBank" : 31,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "wildVictory",
                "file": 'music/yellow/28 Victory (VS Wild Pokemon).mp3',
                "channel1": 249,
                "audioBank" : 8,
                "battle" : "wild",
                "stage" : "victory",
            },
            {
                "song": "Indigo Plateau",
                "file": "music/yellow/22 The Last Road.mp3",
                "channel1": 251,
                "audioBank" : 2,
                "overworldMap" : ["Indigo Plateau","Route 23","Indigo Plateau - Lobby"]
            },
            {
                "song": "Trainer Aggro",
                "file": "music/yellow/45 Trainer Appears (Boy Version).mp3",
                "channel1": 251,
                "audioBank" : 31,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "Gym Leader Victory",
                "file": "music/yellow/29 Victory (VS Gym Leader).mp3",
                "channel1": 252,
                "audioBank" : 8,
                "battle" : "gymLeader",
                "stage" : "victory"
            },

        ] 
    },
    "Pokemon Red and Blue" : {
        "name" : "Pokemon Red and Blue",
        "ch1" : "channel1",
        "ch2" : "channel2",
        "bank" : "audioBank",
        "map" : "overworldTrackCurrentMap",
        "music" : [
            {
                "song": "silent",
                "file": "music/silent.wav",
                "channel1": 0,
            },
            {
                "song": "Pallet Town",
                "file": "music/yellow/04 Pallet Town's Theme.mp3",
                "channel1": 186,
                "audioBank" : 2,
            },
            {
                "song": "Pokemon Center and Mart",
                "file": "music/yellow/05 Pokemon Center.mp3",
                "channel1": 189,
                "audioBank" : 2,
            },
            {
                "song": "Gym",
                "file": "music/yellow/06 Pokemon Gym.mp3",
                "channel1": 192,
                "audioBank" : 2,
            },
            {
                "song": "Viridian City",
                "file": "music/yellow/07 Pewter City\'s Theme.mp3",
                "channel1": 195,
                "audioBank" : 2,
            },
            {
                "song": "Title",
                "file": "music/yellow/02 Opening (part 2).mp3",
                "channel1": 195,
                "audioBank" : 31,
            },
            {
                "song": "Cerulean City, Fuchsia City",
                "file": "music/yellow/08 Cerulean City\'s Theme.mp3",
                "channel1": 199,
                "audioBank" : 2,
            },
            {
                "song": "Credits",
                "file": "music/yellow/30 Ending.mp3",
                "channel1": 199,
                "audioBank" : 31,
            },
            {
                "song": "Celadon City",
                "file": "music/yellow/09 Celadon City\'s Theme.mp3",
                "channel1": 202,
                "audioBank" : 2,
            },
            {
                "song": "Hall Of Fame",
                "file": "music/yellow/31 Into the Hall.mp3",
                "channel1": 202,
                "audioBank" : 31,
            },
            {
                "song": "Cinnabar Island",
                "file": "music/yellow/10 Cinnabar Island\'s Theme.mp3",
                "channel1": 205,
                "audioBank" : 2,
            },
            {
                "song": "Professor Oak's Lab",
                "file": "music/yellow/32 Oak Research Lab.mp3",
                "channel1": 205,
                "audioBank" : 31,
            },
            {
                "song": "Vermilion City",
                "file": "music/yellow/11 Vermilion City\'s Theme.mp3",
                "channel1": 208,
                "audioBank" : 2,
            },
            {
                "song": "Jigglypuff's song",
                "file": "music/yellow/33 Jigglypuff\'s Song.mp3",
                "channel1": 208,
                "audioBank" : 31,
                "heal" : "heal"
            },
            {
                "song": "Bicycle",
                "file": "music/yellow/34 Cycling.mp3",
                "channel1": 210,
                "audioBank" : 31,
            },
            {
                "song": "Lavender Town",
                "file": "music/yellow/12 Lavender Town\'s Theme.mp3",
                "channel1": 212,
                "audioBank" : 2,
            },
            
            {
                "song": "Surfing",
                "file": "music/yellow/35 Ocean.mp3",
                "channel1": 214,
                "audioBank" : 31,
            },
            {
                "song": "SS Anne",
                "file": "music/yellow/13 St. Anne.mp3",
                "channel1": 216,
                "audioBank" : 2,
                

            },
            {
                "song": "Game Corner",
                "file": "music/yellow/36 Casino.mp3",
                "channel1": 217,
                "audioBank" : 31,
            },
            {
                "song": "Oak Tutorial",
                "file": "music/yellow/14 Professor Oak.mp3",
                "channel1": 219,
            },
            {
                "song": "Pokemon Red and Blue Intro ",
                "file": "music/rby/01 Opening Movie (Red, Green & Blue Version).flac",
                "channel1": 220,
                "audioBank" : 31,
            },
            {
                "song": "Rival",
                "file": "music/yellow/15 Rival Appears.mp3",
                "channel1": 222,
                "audioBank" : 2,
            },
            {
                "song": "Team Rocket Hideout",
                "file": "music/yellow/37 Team Rocket Hideout.mp3",
                "channel1": 224,
                "audioBank" : 31,
            },
            {
                "song": "Hurry Along",
                "file": "music/yellow/16 Guide.mp3",
                "channel1": 225,
                "audioBank" : 2,
            },
            {
                "song": "Viridian Forest",
                "file": "music/yellow/38 Viridian Forest.mp3",
                "channel1": 228,
                "audioBank" : 31,
            },
            {
                "song": "Evolution / Safari Zone",
                "file": "music/yellow/17 Evolution.mp3",
                "channel1": 229,
                "audioBank" : 2,
            },
            {
                "song": "Cave Mt Moon Rock Tunnel",
                "file": "music/yellow/39 Mt. Moon Cave.mp3",
                "channel1": 232,
                "audioBank" : 31,
            },
            {
                "song": "Healed",
                "file": "music/yellow/18 Pokemon Recovery.mp3",
                "channel1": 232,
                "audioBank" : 2,
                "heal" : "heal"
            },
            {
                "song": "Gym Leader Battle",
                "file": "music/yellow/23 Battle (VS Gym Leader).mp3",
                "channel1": 234,
                "audioBank" : 8,
                "battle" : "gymLeader",
                "stage" : "battle"
            },
            {
                "song": "Route 1 or 2",
                "file": "music/yellow/19 The Road to Viridian City ~ from Pallet.mp3",
                "channel1": 235,
                "audioBank" : 2,
            },
            {
                "song": "Pokemon Mansion",
                "file": "music/yellow/40 Pokemon Mansion.mp3",
                "channel1": 236,
                "audioBank" : 31,
            },
            {
                "song": "Trainer Battle",
                "file": "music/yellow/24 Battle (VS Trainer).mp3",
                "channel1": 237,
                "audioBank" : 8,
                "battle" : "trainer",
                "stage" : "battle"
            },
            {
                "song": "Route 24, 25",
                "file": "music/yellow/03 To Bill\'s Origin ~ From Cerulean.mp3",
                "channel1": 239,
                "audioBank" : 2,
            },
            {
                "song": "Pokemon Tower",
                "file": "music/yellow/41 Pokemon Tower.mp3",
                "channel1": 240,
                "audioBank" : 31,
            },
            {
                "song": "Wild Battle",
                "file": "music/yellow/25 Battle (VS Wild Pokemon).mp3",
                "channel1": 240,
                "audioBank" : 8,
                "battle" : "wild"
            },
            {
                "song": "Silph Co",
                "file": "music/yellow/42 Sylph Company.mp3",
                "channel1": 243,
                "audioBank" : 31,
            },
            {
                "song": "Route 3,4,5,6,7,8,9,10,16,17,18,19,20,21,22",
                "file": "music/yellow/20 The Road to Cerulean ~ from Mt. Moon.mp3",
                "channel1": 243,
                "audioBank" : 2,
            },
            {
                "song": " Champion Battle",
                "file": "music/yellow/26 Last Battle (VS Rival).mp3",
                "channel1": 243,
                "audioBank" : 8,
                "battle" : "champion",
                "stage" : "battle"
            },
            {
                "song": "Rocket Aggro",
                "file": "music/yellow/43 Trainer Appears (Bad Guy Version).mp3",
                "channel1": 246,
                "audioBank" : 31,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "Trainer Battle Victory",
                "file": "music/yellow/27 Victory (VS Trainer).mp3",
                "channel1": 246,
                "audioBank" : 8,
                "battle" : "trainer",
                "stage" : "victory"
            },
            {
                "song": "Route 11, 12, 13, 14, 15",
                "file": "music/yellow/21 The Road to Lavender Town ~ from Vermilion.mp3",
                "channel1": 247,
                "audioBank" : 2,
            },
            {
                "song": "Girl Trainer Aggro",
                "file": "music/yellow/44 Trainer Appears (Girl Version).mp3",
                "channel1": 249,
                "audioBank" : 31,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "wildVictory",
                "file": 'music/yellow/28 Victory (VS Wild Pokemon).mp3',
                "channel1": 249,
                "audioBank" : 8,
                "battle" : "wild",
                "stage" : "victory",
            },
            {
                "song": "Indigo Plateau",
                "file": "music/yellow/22 The Last Road.mp3",
                "channel1": 251,
                "audioBank" : 2,
            },
            {
                "song": "Trainer Aggro",
                "file": "music/yellow/45 Trainer Appears (Boy Version).mp3",
                "channel1": 252,
                "audioBank" : 31,
                "battle" : "trainer",
                "stage" : "aggro"
            },
            {
                "song": "Gym Leader Victory",
                "file": "music/yellow/29 Victory (VS Gym Leader).mp3",
                "channel1": 252,
                "audioBank" : 8,
                "battle" : "gymLeader",
                "stage" : "victory"
            },

        ] 
    },

    
}