import { SNEAKER_RARITY } from "./sneaker.constants";

export const repairCostBase = {
  common: [
    0.31, 0.32, 0.33, 0.35, 0.36, 0.37, 0.38, 0.4, 0.41, 0.42, 0.44, 0.46, 0.48,
    0.5, 0.52, 0.54, 0.56, 0.58, 0.6, 0.62, 0.64, 0.67, 0.7, 0.72, 0.75, 0.78,
    0.81, 0.83, 0.87, 0.9,
  ],
  uncommon: [
    0.41, 0.43, 0.45, 0.46, 0.48, 0.5, 0.51, 0.53, 0.55, 0.57, 0.6, 0.62, 0.64,
    0.66, 0.69, 0.71, 0.74, 0.77, 0.8, 0.83, 0.86, 0.89, 0.92, 0.95, 1, 1.03,
    1.06, 1.11, 1.14, 1.18,
  ],
  rare: [
    0.51, 0.54, 0.57, 0.59, 0.61, 0.63, 0.65, 0.67, 0.69, 0.72, 0.75, 0.78,
    0.81, 0.84, 0.87, 0.9, 0.94, 0.97, 1, 1.04, 1.08, 1.12, 1.16, 1.2, 1.25,
    1.3, 1.34, 1.39,
  ],
  epic: [],
  legendary: [],
};

export const gstLimit = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130,
  140, 150, 160, 170, 180, 195, 210, 225, 240, 255, 270, 285, 300,
];

export const gemsSocketsParams = {
  gemPoints: [0, 2, 8, 20, 50],
  gemBaseBoost: [0, 5, 70, 220, 600],
  socketBonus: [0, 0, 10, 20, 30, 50],
};

export const pointsAvailable = ({level = 0, rarity = ''}) =>{ 
  return level && rarity && SNEAKER_RARITY[rarity].levelup && SNEAKER_RARITY[rarity].levelup * level

}