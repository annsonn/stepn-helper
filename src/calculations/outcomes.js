import { gstLimit, repairCostBase } from "../constants/calc.constants";
import { SNEAKER_TYPE } from "../constants/sneaker.constants";
import { getSocketValue } from "./sockets";
import { checkHasBaseStats, pointsAvailable, resetPoints } from "./stats";
import { resolvePath } from "../utils";

export const totalEff = (sneaker = {}) => {
  let e = getSocketValue("efficiency", sneaker),
    s =
      +resolvePath(sneaker, "attributes.baseStats.efficiency", 0) +
      +resolvePath(sneaker, "attributes.addedStats.efficiency", 0) +
      +e;
  return (s = Math.round(10 * s) / 10);
};

export const totalLuck = (sneaker = {}) => {
  let e = getSocketValue("luck", sneaker),
    s =
      +resolvePath(sneaker, "attributes.baseStats.luck", 0) +
      +resolvePath(sneaker, "attributes.addedStats.luck", 0) +
      +e;
  return (s = Math.round(10 * s) / 10);
};
export const totalComf = (sneaker = {}) => {
  let e = getSocketValue("comfort", sneaker),
    s =
      +resolvePath(sneaker, "attributes.baseStats.comfort", 0) +
      +resolvePath(sneaker, "attributes.addedStats.comfort", 0) +
      +e;
  return (s = Math.round(10 * s) / 10);
};

export const totalRes = (sneaker = {}) => {
  let e = getSocketValue("resilience", sneaker),
    s =
      +resolvePath(sneaker, "attributes.baseStats.resilience", 0) +
      +resolvePath(sneaker, "attributes.addedStats.resilience", 0) +
      +e;
  return (s = Math.round(10 * s) / 10);
};

export const getGetLimit = ({ type: { level = 0 } = {} }) => {
  return gstLimit[level];
};

export const gstPerDay = (sneaker) => {
  if (!sneaker.type || !checkHasBaseStats(sneaker)) return 0;
  let e = 0.04 * Object.values(SNEAKER_TYPE).indexOf(sneaker.type.type),
    s = totalEff(sneaker),
    t = (0.885 + e) * Math.pow(s, 0.5),
    o = Math.round(t * sneaker.type.dailyEnergy * 100) / 100;
  return o >= getGetLimit(sneaker) ? getGetLimit(sneaker) : o;
};

export const durability = (sneaker) => {
  let e = totalRes(sneaker),
    s = 20.9 * Math.pow(Math.floor(e), -0.637);
  return e >= 1 ? Math.ceil((s * sneaker.type.dailyEnergy) / 2) : 0;
};

export const repairCost = (sneaker) => {
  const { type: { rarity, level } = {} } = sneaker;
  if (!rarity || level === 0) return 0;
  let e = repairCostBase[rarity][level - 1],
    s = e * durability(sneaker);
  return e ? Math.round(100 * s) / 100 : "unknown";
};

export const totalIncome = (sneaker) => {
  let e = gstPerDay(sneaker) - repairCost(sneaker);
  return e ? Math.round(100 * e) / 100 : 0;
};

export const mboxChance = (sneaker) => {
  if (!sneaker.type || !checkHasBaseStats(sneaker)) return 0;
  let e = Math.pow(totalLuck(sneaker), 0.3) * sneaker.type.dailyEnergy;
  return e;
};

export const preOptimize = (sneaker) => {
  const updatedSneaker = resetPoints(sneaker);

  updatedSneaker.attributes.addedStats.efficiency = pointsAvailable(
    updatedSneaker.type
  );

  return updatedSneaker;
};

export const optimizePoints = (sneaker) => {
  if ("unknown" !== repairCost(sneaker) && checkHasBaseStats(sneaker)) {
    let updatedSneaker = JSON.parse(JSON.stringify(sneaker));
    let previousSneaker;

    let pointsToMove = 1;
    do {
      previousSneaker = JSON.parse(JSON.stringify(updatedSneaker));
      updatedSneaker.attributes.addedStats.resilience =
        updatedSneaker.attributes.addedStats.resilience + 1 * pointsToMove;
      updatedSneaker.attributes.addedStats.efficiency =
        updatedSneaker.attributes.addedStats.efficiency - 1 * pointsToMove;
      pointsToMove++;
    } while (totalIncome(updatedSneaker) >= totalIncome(previousSneaker));

    return previousSneaker;
  }
};
