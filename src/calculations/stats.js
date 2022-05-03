import {
  DEFAULT_ADDED_STATS,
  SNEAKER_RARITY,
} from "../constants/sneaker.constants";

export const resetPoints = (sneaker) => ({
  ...sneaker,
  attributes: {
    baseStats: sneaker.attributes.baseStats,
    addedStats: { ...DEFAULT_ADDED_STATS },
  },
});

export const pointsAvailable = ({ level = 0, rarity = "" }, pointUsed) => {
  return (
    level && rarity && SNEAKER_RARITY[rarity].levelup * level - (pointUsed || 0)
  );
};

export const calcBaseAttributePlaceholder = ({ rarity = "" }) => {
  return (
    rarity &&
    `${SNEAKER_RARITY[rarity].minAttribute}-${SNEAKER_RARITY[rarity].maxAttribute}`
  );
};

export const checkHasBaseStats = ({ attributes: { baseStats = {} } = {} }) => {
  return Object.values(baseStats).filter((stat) => !stat).length === 0;
};
