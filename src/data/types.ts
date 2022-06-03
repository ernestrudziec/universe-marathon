export type Genre =
  | "mcuFilm"
  | "nonMcuFilm"
  | "nonMcuStronglyRecommendedFilm"
  | "nonMcuRecommendedFilm"
  | "oneshot"
  | "mcuCanonShow"
  | "netflixShow"
  | "disneyPlusShow"
  | "amazonPrimeShow";

export type ItemId = string;
type ItemIds = Array<ItemId> | null;

export type GroupId = string;
export type GroupIds = Array<GroupId> | null;

export interface Collection {
  items: ItemIds;
  groups: GroupIds;
}

export interface Superset {
  superfan: Collection | null;
  casual: Collection | null;
  speedrun: Collection | null;
}

export type Tiers = 1 | 2 | 3 | 4 | 5;

export interface Item {
  title: string;
  genre: Genre;
  id: ItemId; //ids start with "f" - for films, "s" - for shows, "o" - for oneshots and webisodes
  release: string; //release date (U.S.)
  unlocksWith?: Superset;
  stronglyRecommendedBefore?: Superset;
  mightWatchBefore?: Superset;
  cover?: string;
  background?: string;
}

export type Items = Array<Item> | null;

export interface PhaseShow {
  title: string;
  genre: Genre;
  id: string;
  release: string; //release date (U.S.)
  tier: Tiers;
  unlocksWith?: Superset;
  cover?: string;
  background?: string;
}

export type PhaseShows = Array<PhaseShow> | null;

export interface Phase {
  name: string;
  id: number;
  isMid: boolean;
  unlocksWith: Superset | null;
  items: Items;
  phaseShows: PhaseShows;
  development?: Items;
  phaseShowsDevelopment?: PhaseShows;
}

export interface Group {
  name: string;
  id: GroupId;
  watchBefore: string | null;
  watchAfter: string | null;
  items: Items;
  development?: Items;
}

export type Phases = Array<Phase>;
export type Groups = Array<Group>;

export interface Data {
  phases: Phases;
  groups: Groups;
}
