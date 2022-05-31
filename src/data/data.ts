import { Data } from "./types";

export const data: Data = {
  phases: [
    {
      name: "Before MCU",
      id: 0.5,
      isMid: true,
      unlocksWith: null,
      items: null,
      phaseShows: null,
    },
    {
      name: "Phase 1",
      id: 1,
      isMid: false,
      unlocksWith: null,
      items: [
        {
          title: "Iron Man",
          genre: "mcuFilm",
          id: "f-iron_man",
        },
        {
          title: "The Incredible Hulk",
          genre: "mcuFilm",
          id: "f-the_incredible_hulk",
        },
        {
          title: "Iron Man 2",
          genre: "mcuFilm",
          id: "f-iron_man_2",
        },
        {
          title: "Thor",
          genre: "mcuFilm",
          id: "f-thor",
        },
        {
          title: "Captain America: The First Avenger",
          genre: "mcuFilm",
          id: "f-captain_america_the_first_avenger",
        },
        {
          title: "The Consultant",
          genre: "oneshot",
          id: "o-the_consultant",
        },
        {
          title:
            "A Funny Thing Happened on the Way to Thor's Hammer",
          genre: "oneshot",
          id: "o-a_funny_thing_happened_on_the_way_to_thors_hammer",
        },
        {
          title: "Marvel's The Avengers",
          genre: "mcuFilm",
          id: "f-marvels_the_avengers",
        },
      ],
      phaseShows: null,
    },
    {
      name: "Interphase",
      id: 1.5,
      isMid: true,
      items: [
        {
          title: "Item 47",
          genre: "oneshot",
          id: "o-item_47",
        },
      ],
      phaseShows: null,
      unlocksWith: {
        superfan: {
          items: ["f-marvels_the_avengers"],
          groups: null,
        },
        casual: {
          items: ["f-marvels_the_avengers"],
          groups: null,
        },
        speedrun: null,
      },
    },
    {
      name: "Phase 2",
      id: 2,
      isMid: false,
      items: [
        {
          title: "Iron Man 3",
          genre: "mcuFilm",
          id: "f-iron_man_3",
        },
        {
          title: "Agent Carter",
          genre: "oneshot",
          id: "o-agent_carter",
        },
        {
          title: "Thor: The Dark World",
          genre: "mcuFilm",
          id: "f-thor_the_dark_world",
        },
        {
          title: "All Hail the King",
          genre: "oneshot",
          id: "o-all_hail_the_king",
        },
        {
          title: "Captain America: The Winter Soldier",
          genre: "mcuFilm",
          id: "f-captain_america_the_winter_soldier",
        },
        {
          title: "Guardians of the Galaxy",
          genre: "mcuFilm",
          id: "f-guardians_of_the_galaxy",
        },
        {
          title: "Avengers: Age of Ultron",
          genre: "mcuFilm",
          id: "f-avengers_age_of_ultron",
        },
        {
          title:
            "WHIH Newsfront with Christine Everhart (episodes 1-5)",
          genre: "oneshot",
          id: "o-whih_1",
        },
        {
          title: "Ant-Man",
          genre: "mcuFilm",
          id: "f-ant_man_1",
        },
      ],
      phaseShows: [
        {
          title: "Agents of S.H.I.E.L.D. S1",
          genre: "mcuCanonShow",
          id: "s-agents_of_shield:s1",
          tier: 1,
        },
        {
          title: "Agents of S.H.I.E.L.D. S2",
          genre: "mcuCanonShow",
          id: "s-agents_of_shield:s2",
          tier: 1,
        },
        {
          title: "Agent Carter S1",
          genre: "mcuCanonShow",
          id: "s-agent_carter:s1",
          tier: 1,
        },
      ],
      unlocksWith: {
        superfan: {
          items: ["o-item_47"],
          groups: null,
        },
        casual: {
          items: ["f-marvels_the_avengers"],
          groups: null,
        },
        speedrun: null,
      },
    },
    {
      name: "Interphase",
      id: 2.5,
      isMid: true,
      items: [
        {
          title:
            "WHIH Newsfront with Christine Everhart (episodes 6-10)",
          genre: "oneshot",
          id: "o-whih_2",
        },
      ],
      phaseShows: [
        {
          title: "Agents of S.H.I.E.L.D. S3",
          genre: "mcuCanonShow",
          id: "s-agents_of_shield:s3",
          tier: 1,
        },
        {
          title: "Agent Carter S2",
          genre: "mcuCanonShow",
          id: "s-agent_carter:s2",
          tier: 1,
        },
      ],
      unlocksWith: {
        superfan: {
          items: ["f-ant_man_1"],
          groups: null,
        },
        casual: {
          items: ["f-ant_man_1"],
          groups: null,
        },
        speedrun: null,
      },
    },
    {
      name: "Phase 3",
      id: 3,
      isMid: false,
      items: [
        {
          title: "Captain America: Civil War",
          genre: "mcuFilm",
          id: "f-captain_america_civil_war",
        },
        {
          title: "Team Thor",
          genre: "oneshot",
          id: "o-team_thor_1",
        },
        {
          title: "Doctor Strange",
          genre: "mcuFilm",
          id: "f-doctor_strange",
        },
        {
          title: "Team Thor: Part 2",
          genre: "oneshot",
          id: "o-team_thor_2",
        },
        {
          title: "Agents of S.H.I.E.L.D. Slingshot",
          genre: "oneshot",
          id: "o-agents_of_shield_slingshot",
        },
        {
          title: "Guardians of the Galaxy Vol. 2",
          genre: "mcuFilm",
          id: "f-guardians_of_the_galaxy_2",
        },
        {
          title: "Spider-Man: Homecoming",
          genre: "mcuFilm",
          id: "f-spider_man_homecoming",
        },
        {
          title: "Thor: Ragnarok",
          genre: "mcuFilm",
          id: "f-thor_ragnarok",
        },
        {
          title: "Black Panther",
          genre: "mcuFilm",
          id: "f-black_panther",
        },
        {
          title: "Team Darryl",
          genre: "oneshot",
          id: "o-team_darryl",
        },
        {
          title: "Avengers: Infinity War",
          genre: "mcuFilm",
          id: "f-avengers_infinity_war",
        },
        {
          title: "Ant-Man and the Wasp",
          genre: "mcuFilm",
          id: "f-ant_man_2",
        },
        {
          title: "Captain Marvel",
          genre: "mcuFilm",
          id: "f-captain_marvel",
        },
        {
          title: "Avengers: Endgame",
          genre: "mcuFilm",
          id: "f-avengers_endgame",
        },
        {
          title: "Spider-Man: Far From Home",
          genre: "mcuFilm",
          id: "f-spider_man_far_from_home",
        },
      ],
      phaseShows: [
        {
          title: "Agents of S.H.I.E.L.D. S4",
          genre: "mcuCanonShow",
          tier: 1,
          id: "s-agents_of_shield:s4",
        },
        {
          title: "Helstrom",
          genre: "mcuCanonShow",
          tier: 2,
          id: "s-helstrom",
        },
        {
          title: "Inhumans",
          genre: "mcuCanonShow",
          tier: 3,
          id: "s-inhumans",
        },
        {
          title: "Agents of S.H.I.E.L.D. S5",
          genre: "mcuCanonShow",
          tier: 1,
          id: "s-agents_of_shield:s5",
        },
        {
          title: "Runaways S1",
          genre: "mcuCanonShow",
          tier: 4,
          id: "s-runaways:s1",
        },
        {
          title: "Agents of S.H.I.E.L.D. S6",
          genre: "mcuCanonShow",
          tier: 1,
          id: "s-agents_of_shield:s6",
        },
        {
          title: "Cloak & Dagger S1",
          genre: "mcuCanonShow",
          tier: 5,
          id: "s-cloak_and_dagger:s1",
        },
        {
          title: "Runaways S2",
          genre: "mcuCanonShow",
          tier: 4,
          id: "s-runaways:s2",
        },
        {
          title: "Cloak & Dagger S2",
          genre: "mcuCanonShow",
          tier: 5,
          id: "s-cloak_and_dagger:s2",
        },
        {
          title: "Runaways S3",
          genre: "mcuCanonShow",
          tier: 4,
          id: "s-runaways:s3",
        },
      ],
      unlocksWith: {
        superfan: {
          items: ["s-agent_carter:s2", "o-whih_2"],
          groups: null,
        },
        casual: {
          items: ["f-ant_man_1"],
          groups: null,
        },
        speedrun: null,
      },
    },
    {
      name: "Interphase",
      id: 3.5,
      isMid: true,
      items: null,
      phaseShows: [
        {
          title: "Agents of S.H.I.E.L.D. S7",
          genre: "mcuCanonShow",
          tier: 1,
          id: "s-agents_of_shield:s7",
        },
      ],
      unlocksWith: {
        superfan: {
          items: [
            "f-spider_man_far_from_home",
            "s-runaways:s3",
          ],
          groups: null,
        },
        casual: {
          items: ["f-spider_man_far_from_home"],
          groups: null,
        },
        speedrun: null,
      },
    },
    {
      name: "Phase 4",
      id: 4,
      isMid: false,
      items: [
        {
          title: "Black Widow",
          genre: "mcuFilm",
          id: "f-black_widow",
        },
        {
          title:
            "Shang-Chi and the Legend of the Ten Rings",
          genre: "mcuFilm",
          id: "f-shang_chi_1",
        },
        {
          title: "Eternals",
          genre: "mcuFilm",
          id: "f-eternals",
        },
        {
          title: "Spider-Man: No Way Home",
          genre: "mcuFilm",
          id: "f-spider_man_no_way_home",
          unlocksWith: {
            superfan: {
              items: [
                "s-jessica_jones:s3",
                "s-what_if:s1",
                "f-spider_man_into_the_spiderverse",
                "f-venom_2",
              ],
              groups: null,
            },
            casual: {
              items: ["s-what_if:s1"],
              groups: null,
            },
            speedrun: null,
          },
          stronglyRecommendedBefore: {
            superfan: null,
            casual: {
              items: null,
              groups: [
                "Sam Raimi Spider-Man Trilogy",
                "Marc Webb's Spider-Man",
              ],
            },
            speedrun: {
              items: null,
              groups: [
                "Sam Raimi Spider-Man Trilogy",
                "Marc Webb's Spider-Man",
              ],
            },
          },
          mightWatchBefore: {
            superfan: null,
            casual: {
              items: null,
              groups: [
                "netflixOriginals",
                "animated_spiderverse_1",
                "sony_extened_universe_1",
              ],
            },
            speedrun: null,
          },
        },
        {
          title:
            "Doctor Strange in the Multiverse of Madness",
          genre: "mcuFilm",
          id: "f-doctor_strange_in_the_multiverse_of_madness",
          unlocksWith: {
            superfan: {
              items: [
                "f-the_new_mutants",
                "f-fantastic_four_3",
              ],
              groups: null,
            },
            casual: null,
            speedrun: null,
          },
          mightWatchBefore: {
            superfan: null,
            casual: {
              items: null,
              groups: ["x_men_1", "fantastic_4"],
            },
            speedrun: null,
          },
        },
      ],
      development: [
        {
          title: "Thor: Love and Thunder",
          genre: "mcuFilm",
          id: "f-thor_love_and_thunder",
        },
        {
          title: "Black Panther: Wakanda Forever",
          genre: "mcuFilm",
          id: "f-black_panther_wakanda_forever",
        },
        {
          title: "Ant-Man and the Wasp: Quantumania",
          genre: "mcuFilm",
          id: "f-ant_man_3",
        },
        {
          title: "Guardians of the Galaxy Vol. 3",
          genre: "mcuFilm",
          id: "f-guardians_of_the_galaxy_3",
        },
        {
          title: "The Marvels",
          genre: "mcuFilm",
          id: "f-the_marvels",
        },
        {
          title: "Fantastic Four",
          genre: "mcuFilm",
          id: "f-fantastic_four_mcu",
        },
        {
          title: "Blade",
          genre: "mcuFilm",
          id: "f-blade",
        },
        {
          title: "Untitled Deadpool film",
          genre: "mcuFilm",
          id: "f-deadpool_3",
        },
        {
          title: "Untitled Captain America sequel",
          genre: "mcuFilm",
          id: "f-dev_captain_america_sequel",
        },
        {
          title:
            "Untitled Shang-Chi and the Legend of the Ten Rings sequel",
          genre: "mcuFilm",
          id: "f-dev_shang_chi_sequel",
        },
        {
          title: "Untitled mutant-centered film",
          genre: "mcuFilm",
          id: "f-dev_mutant_centered_film",
        },
      ],
      phaseShows: [
        {
          title: "WandaVision",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-wandavision",
        },
        {
          title: "The Falcon and the Winter Soldier",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-the_falcon_and_the_winter_soldier",
        },
        {
          title: "Loki",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-loki",
        },
        {
          title: "What If...?",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-what_if:s1",
        },

        {
          title: "Hawkeye",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-hawkeye",
          unlocksWith: {
            superfan: {
              items: [
                "f-spider_man_no_way_home",
                "f-black_widow",
              ],
              groups: null,
            },
            casual: {
              items: [
                "f-spider_man_no_way_home",
                "f-black_widow",
              ],
              groups: null,
            },
            speedrun: null,
          },
        },
        {
          title: "Moon Knight",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-moon_knight",
        },
      ],
      phaseShowsDevelopment: [
        {
          title: "Ms. Marvel",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-ms_marvel",
        },
        {
          title: "She-Hulk: Attorney at Law",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-she_hulk",
        },
        {
          title: "Untitled Halloween special",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s_dev_halloween_special",
        },
        {
          title:
            "The Guardians of the Galaxy Holiday Special",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-dev_guardians_special",
        },
        {
          title: "Secret Invasion",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-secret-invasion",
        },
        {
          title: "Ironheart",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-ironheart",
        },
        {
          title: "Armor Wars",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-armor_wars",
        },
        {
          title: "Untitled Wakanda series",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-dev_wakanda",
        },
        {
          title: "Loki S2",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-loki:s2",
        },
        {
          title: "Echo",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-echo",
        },
        {
          title: "Agatha: House of Harkness",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-agatha_house_of_harkness",
        },
        {
          title: "Spider-Man: Freshman Year",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-spider_man_freshman_year",
        },
        {
          title: "Marvel Zombies",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-marvel_zombies",
        },
        {
          title: "Untitled Destin Daniel Cretton series",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-dev_destin_daniel_cretton",
        },
        {
          title: "Untitled Daredevil series",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-dev_daredevil_mcu",
        },
        {
          title: "Untitled Nova series",
          tier: 1,
          genre: "disneyPlusShow",
          id: "s-dev_nova",
        },
      ],
      unlocksWith: {
        superfan: {
          items: ["s-agents_of_shield:s7"],
          groups: null,
        },
        casual: {
          items: ["f-spider_man_far_from_home"],
          groups: null,
        },
        speedrun: null,
      },
    },
  ],
  groups: [
    {
      name: "Netflix Originals",
      id: "netflix_originals",
      watchBefore: "f-spider_man_no_way_home",
      watchAfter: null,
      items: [
        {
          title: "Daredevil S1",
          genre: "netflixShow",
          id: "s-daredevil:s1",
        },
        {
          title: "Jessica Jones S1",
          genre: "netflixShow",
          id: "s-jessica_jones:s1",
        },
        {
          title: "Daredevil S2",
          genre: "netflixShow",
          id: "s-daredevil:s2",
        },
        {
          title: "Luke Cage S1",
          genre: "netflixShow",
          id: "s-luke_cage:s1",
        },
        {
          title: "Iron Fist S1",
          genre: "netflixShow",
          id: "s-iron_fist:s1",
        },
        {
          title: "The Defenders",
          genre: "netflixShow",
          id: "s-the_defenders",
        },
        {
          title: "The Punisher S1",
          genre: "netflixShow",
          id: "s-the_punisher:s1",
        },
        {
          title: "Jessica Jones S2",
          genre: "netflixShow",
          id: "s-jessica_jones:s2",
        },
        {
          title: "Luke Cage S2",
          genre: "netflixShow",
          id: "s-luke_cage:s2",
        },
        {
          title: "Iron Fist S2",
          genre: "netflixShow",
          id: "s-iron_fist:s2",
        },
        {
          title: "Daredevil S3",
          genre: "netflixShow",
          id: "s-daredevil:s3",
        },
        {
          title: "The Punisher S2",
          genre: "netflixShow",
          id: "s-the_punisher:s2",
        },
        {
          title: "Jessica Jones S3",
          genre: "netflixShow",
          id: "s-jessica_jones:s3",
        },
      ],
    },
    {
      name: "Sam Raimi Spider-Man Trilogy",
      id: "sam_raimi_spider-man_trilogy",
      watchBefore: "f-the_amazing_spider_man",
      watchAfter: null,
      items: [
        {
          title: "Spider-Man",
          genre: "nonMcuStronglyRecommendedFilm",
          id: "f-spider_man_1",
        },
        {
          title: "Spider-Man 2",
          genre: "nonMcuStronglyRecommendedFilm",
          id: "f-spider_man_2",
        },
        {
          title: "Spider-Man 3",
          genre: "nonMcuStronglyRecommendedFilm",
          id: "f-spider_man_3",
        },
      ],
    },
    {
      name: "Marc Webb's Spider-Man",
      id: "marc_webbs_spider_man",
      watchBefore: "f-spider_man_no_way_home",
      watchAfter: null,
      items: [
        {
          title: "The Amazing Spider-Man",
          genre: "nonMcuStronglyRecommendedFilm",
          id: "f-the_amazing_spider_man",
        },
        {
          title: "The Amazing Spider-Man 2",
          genre: "nonMcuStronglyRecommendedFilm",
          id: "f-the_amazing_spider_man_2",
        },
      ],
    },
    {
      name: "Sony Extended Universe",
      id: "sony_extened_universe_1",
      watchBefore: "f-spider_man_no_way_home",
      watchAfter: null,
      items: [
        {
          title: "Venom",
          genre: "nonMcuFilm",
          id: "f-venom_1",
        },
        {
          title: "Venom 2",
          genre: "nonMcuFilm",
          id: "f-venom_2",
        },
      ],
    },
    {
      name: "Animated Spider-Verse",
      id: "animated_spiderverse_1",
      watchBefore: "f-spider_man_no_way_home",
      watchAfter: null,
      items: [
        {
          title: "Spider-Man: Into the Spider-Verse",
          genre: "nonMcuFilm",
          id: "f-spider_man_into_the_spiderverse",
        },
      ],
    },
    {
      name: "X-Men",
      id: "x_men_1",
      watchBefore:
        "f-doctor_strange_in_the_multiverse_of_madness",
      watchAfter: null,
      items: [
        {
          title: "X-Men",
          genre: "nonMcuFilm",
          id: "f-xmen_1",
        },
        {
          title: "X2",
          genre: "nonMcuFilm",
          id: "f-xmen_2",
        },
        {
          title: "X-Men: The Last Stand",
          genre: "nonMcuFilm",
          id: "f-xmen_the_last_stand",
        },
        {
          title: "X-Men Origins: Wolverine",
          genre: "nonMcuFilm",
          id: "f-xmen_origins_wolverine",
        },
        {
          title: "X-Men: First Class",
          genre: "nonMcuFilm",
          id: "f-xmen_first_class",
        },
        {
          title: "The Wolverine",
          genre: "nonMcuFilm",
          id: "f-f-xmen_the_wolverine",
        },
        {
          title: "X-Men: Days of Future Past",
          genre: "nonMcuFilm",
          id: "f-xmen_days_of_future_past",
        },
        {
          title: "X-Deadpool",
          genre: "nonMcuRecommendedFilm",
          id: "f-deadpool_1",
        },
        {
          title: "X-Men: Apocalypse",
          genre: "nonMcuFilm",
          id: "f-xmen_apocalypse",
        },
        {
          title: "Logan",
          genre: "nonMcuFilm",
          id: "f-xmen_logan",
        },
        {
          title: "Deadpool 2",
          genre: "nonMcuRecommendedFilm",
          id: "f-deadpool_2",
        },
        {
          title: "The New Mutants",
          genre: "nonMcuFilm",
          id: "f-the_new_mutants",
        },
      ],
    },
    {
      name: "Fantastic 4",
      id: "fantastic_4",
      watchBefore:
        "f-doctor_strange_in_the_multiverse_of_madness",
      watchAfter: null,
      items: [
        {
          title: "Fantastic Four",
          genre: "nonMcuFilm",
          id: "f-fantastic_four_1",
        },
        {
          title:
            "Fantastic Four: Rise of the Silver Surfer",
          genre: "nonMcuFilm",
          id: "f-fantastic_four_2",
        },
        {
          title: "Fantastic Four",
          genre: "nonMcuFilm",
          id: "f-fantastic_four_3",
        },
      ],
    },
    {
      name: "Sony Extended Universe",
      id: "sony_extened_universe_2",
      watchBefore: null,
      watchAfter: "f-spider_man_no_way_home",
      items: [
        {
          title: "Morbius",
          genre: "nonMcuFilm",
          id: "f-morbius",
        },
      ],
      development: [
        {
          title: "Kraven the Hunter",
          genre: "nonMcuFilm",
          id: "F-devKTH",
        },
        {
          title: "Madame Web",
          genre: "nonMcuFilm",
          id: "F-devMW",
        },
        {
          title: "El Muerto",
          genre: "nonMcuFilm",
          id: "F-devEM",
        },
        {
          title: "Nightwatch",
          genre: "nonMcuFilm",
          id: "F-devNW",
        },
        {
          title: "Sinister Six",
          genre: "nonMcuFilm",
          id: "F-devSS",
        },
        {
          title: "Jackpot",
          genre: "nonMcuFilm",
          id: "F-devJP",
        },
        {
          title: "Untitled Roberto Orci project",
          genre: "nonMcuFilm",
          id: "F-devUROP",
        },
        {
          title: "Untitled Olivia Wilde project",
          genre: "nonMcuFilm",
          id: "F-devUOWP",
        },
      ],
    },
    {
      name: "Animated Spider-Verse",
      id: "animated_spiderverse_2",
      watchBefore: null,
      watchAfter: null,
      items: null,
      development: [
        {
          title: "Spider-Man: Across the Spider-Verse",
          genre: "nonMcuFilm",
          id: "f-spider_man_across_the_spiderverse",
        },
        {
          title: "Spider-Man: Beyond the Spider-Verse",
          genre: "nonMcuFilm",
          id: "f-spider_man_beyond_the_spiderverse",
        },
        {
          title: "Silk",
          genre: "amazonPrimeShow",
          id: "s-silk",
        },
      ],
    },
  ],
};

console.log(data);
