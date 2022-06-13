export type ConfigLevelItem = {
  title: string;
  status: "required" | "excluded" | "optional";
  caption: string | null;
};

export interface LevelConfig {
  ultimateFan: Array<ConfigLevelItem>;
  casual: Array<ConfigLevelItem>;
  speedrun: Array<ConfigLevelItem>;
}

export const settingsConfig: LevelConfig = {
  ultimateFan: [
    {
      title: "Main MCU Canon Films",
      status: "required",
      caption: null,
    },
    {
      title: "All MCU Canon Shows",
      status: "required",
      caption: null,
    },
    {
      title: "All MCU Canon Oneshots and Microshows",
      status: "required",
      caption: null,
    },
    {
      title: "Netflix Originals Marvel Shows",
      status: "required",
      caption: "(available on Disney+ as of now)",
    },
    {
      title: "Disney+ MCU Canon Shows",
      status: "required",
      caption: null,
    },
    {
      title: "Out-of-MCU Spider-Men Universe in both film and animated versions",
      status: "required",
      caption:
        "(important for MCU Canon - including Spider-Men prior to MCU, Venom films and Morbius)",
    },
    {
      title: "X-Men Universe",
      status: "required",
      caption: "(including Deadpool films [1, 2])",
    },
    {
      title: "Fantastic 4 films",
      status: "required",
      caption: null,
    },
  ],
  casual: [
    {
      title: "Main MCU Canon Films",
      status: "required",
      caption: null,
    },
    {
      title: "All MCU Canon Shows",
      status: "optional",
      caption: "(listed as optional)",
    },
    {
      title: "All MCU Canon Oneshots and Microshows",
      status: "optional",
      caption: "(listed as optional)",
    },
    {
      title: "Netflix Originals Marvel Shows",
      status: "optional",
      caption: "(listed as optional)",
    },
    {
      title: "Disney+ MCU Canon Shows",
      status: "required",
      caption: null,
    },
    {
      title: "Out-of-MCU Spider-Men Universe in both film and animated versions",
      status: "optional",
      caption:
        "(listed as optional but strongly recommended, Venom and Morbius listed as optional)",
    },
    {
      title: "X-Men Universe",
      status: "optional",
      caption: "(listed as optional, Deadpool 1 & 2 films listed as recommended)",
    },
    {
      title: "Fantastic 4 films",
      status: "optional",
      caption: "(listed as optional)",
    },
  ],
  speedrun: [
    {
      title: "Main MCU Canon Films",
      status: "required",
      caption: null,
    },
    {
      title: "All MCU Canon Shows",
      status: "excluded",
      caption: null,
    },
    {
      title: "All MCU Canon Oneshots and Microshows",
      status: "excluded",
      caption: null,
    },
    {
      title: "Netflix Originals Marvel Shows",
      status: "excluded",
      caption: "(available on Disney+ as of now)",
    },
    {
      title: "Disney+ MCU Canon Shows",
      status: "optional",
      caption: "(listed as optional)",
    },
    {
      title: "Out-of-MCU Spider-Men Universe in both film and animated versions",
      status: "optional",
      caption: "(listed as optional but strongly recommended)",
    },
    {
      title: "X-Men Universe",
      status: "optional",
      caption: "(only Deadpool 1 & 2 films listed, set as optional)",
    },
    {
      title: "Fantastic 4 films",
      status: "excluded",
      caption: null,
    },
  ],
};
