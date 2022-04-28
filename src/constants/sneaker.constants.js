export const SNEAKER_RARITY = {
  common: { label: "common", levelup: 4 },
  uncommon: { label: "uncommon", levelup: 6 },
  rare: { label: "rare", levelup: 8 },
  epic: { label: "epic", levelup: 10 },
  legendary: { label: "legendary", levelup: 12 },
};

export const SNEAKER_TYPE = {
  walker: "walker",
  jogger: "jogger",
  runner: "runner",
  trainer: "trainer",
};

export const STATS = {
  efficiency: "efficiency",
  luck: "luck",
  comfort: "comfort",
  resilience: "resilience",
};

export const NEW_SNEAKER = {
  selected: true,
  type: {
    rarity: SNEAKER_RARITY.common.label,
    type: SNEAKER_TYPE.walker,
    level: 0,
    dailyEnergy: 2,
  },

  attributes: {
    baseStats: {
      efficiency: null,
      luck: null,
      comfort: null,
      resilience: null,
    },
  },
  sockets: {
    socket1: {
      stat: 0,
      gemLvl: 0,
      socketLvl: 0,
    },
    socket2: {
      stat: 0,
      gemLvl: 0,
      socketLvl: 0,
    },
    socket3: {
      stat: 0,
      gemLvl: 0,
      socketLvl: 0,
    },
    socket4: {
      stat: 0,
      gemLvl: 0,
      socketLvl: 0,
    },
  },
};
