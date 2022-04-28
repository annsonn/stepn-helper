export const SNEAKER_RARITY = {
  common: { label: "common", levelup: 4, minAttribute: 1, maxAttribute: 10 },
  uncommon: { label: "uncommon", levelup: 6, minAttribute: 8, maxAttribute: 15 },
  rare: { label: "rare", levelup: 8, minAttribute: 15, maxAttribute: 35 },
  epic: { label: "epic", levelup: 10, minAttribute: 28, maxAttribute: 63 },
  legendary: { label: "legendary", levelup: 12, minAttribute: 50, maxAttribute: 112 },
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
    addedStats: {
      efficiency: 0,
      luck: 0,
      comfort: 0,
      resilience: 0,
    }
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
