export interface Board {
  name: string;
  lands: Land[];
}

export interface Land {
  id: number;
  adjacentLands: number[];
  terrain: Terrain;
  isCoastal: boolean;
  coordinates: LandCoordinates;
  initialContents: LandContents;
}

interface LandContents {
  spirits: SpiritPresence;
  dahan: DahanPresence;
  invaders: InvaderPresence;
  isBlighted: boolean;
}

type SpiritPresence = {
  [key in SpiritName]?: number;
};

type DahanPresence = {
  damagedHuts?: number;
  intactHuts?: number;
};

type InvaderPresence = {
  explorers?: number;
  towns?: number;
  cities?: number;
};

type SpiritName = "River Surges in Sunlight" | "Vital Strength of Earth";

// Rectangle for now
export interface LandCoordinates {
  xStart: number;
  yStart: number;
  xEnd: number;
  yEnd: number;
}

export type Terrain = "MOUNTAIN" | "WETLAND" | "JUNGLE" | "SANDS";

const baseInitialContents: LandContents = {
  spirits: {},
  dahan: {},
  invaders: {},
  isBlighted: false,
};

const BoardA: Board = {
  name: "A",
  lands: [
    {
      id: 1,
      terrain: "MOUNTAIN",
      adjacentLands: [2, 4, 5, 6],
      isCoastal: true,
      coordinates: {
        xStart: 30,
        xEnd: 50,
        yStart: 10,
        yEnd: 55,
      },
      initialContents: { ...baseInitialContents },
    },
    {
      id: 2,
      terrain: "WETLAND",
      adjacentLands: [1, 3, 4],
      isCoastal: true,
      coordinates: {
        xStart: 10,
        xEnd: 30,
        yStart: 30,
        yEnd: 70,
      },
      initialContents: {
        ...baseInitialContents,
        dahan: { intactHuts: 1 },
        invaders: { cities: 1 },
      },
    },
    {
      id: 3,
      terrain: "JUNGLE",
      adjacentLands: [2, 4],
      isCoastal: true,
      coordinates: {
        xStart: 5,
        xEnd: 30,
        yStart: 70,
        yEnd: 90,
      },
      initialContents: {
        ...baseInitialContents,
        dahan: { intactHuts: 2 },
      },
    },
    {
      id: 4,
      terrain: "SANDS",
      adjacentLands: [1, 2, 3, 5],
      isCoastal: false,
      coordinates: {
        xStart: 30,
        xEnd: 50,
        yStart: 55,
        yEnd: 85,
      },
      initialContents: {
        ...baseInitialContents,
        isBlighted: true,
      },
    },
    {
      id: 5,
      terrain: "WETLAND",
      adjacentLands: [1, 4, 6, 7, 8],
      isCoastal: false,
      coordinates: {
        xStart: 50,
        xEnd: 70,
        yStart: 45,
        yEnd: 85,
      },
      initialContents: { ...baseInitialContents },
    },
    {
      id: 6,
      terrain: "MOUNTAIN",
      adjacentLands: [1, 5, 8],
      isCoastal: false,
      coordinates: {
        xStart: 50,
        xEnd: 70,
        yStart: 20,
        yEnd: 45,
      },
      initialContents: {
        ...baseInitialContents,
        dahan: { intactHuts: 1 },
      },
    },
    {
      id: 7,
      terrain: "SANDS",
      adjacentLands: [5, 8],
      isCoastal: false,
      coordinates: {
        xStart: 70,
        xEnd: 85,
        yStart: 40,
        yEnd: 90,
      },
      initialContents: {
        ...baseInitialContents,
        dahan: { intactHuts: 2 },
      },
    },
    {
      id: 8,
      terrain: "JUNGLE",
      adjacentLands: [5, 6, 7],
      isCoastal: false,
      coordinates: {
        xStart: 70,
        xEnd: 92,
        yStart: 15,
        yEnd: 40,
      },
      initialContents: {
        ...baseInitialContents,
        invaders: {
          towns: 1,
        },
      },
    },
  ],
};

export const AVAILABLE_BOARDS: Board[] = [BoardA];
