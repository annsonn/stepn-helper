import { gstLimit, repairCostBase } from "../constants/calc.constants";
import { SNEAKER_TYPE } from "../constants/sneaker.constants";
import { getSocketValue } from "./sockets";
import { checkHasBaseStats, pointsAvailable, resetPoints } from "./stats";

export const totalEff = (sneaker = {}) => {
  let e = getSocketValue("efficiency", sneaker),
    s =
      +sneaker.attributes.baseStats.efficiency +
      +sneaker.attributes.addedStats.efficiency +
      +e;
  return (s = Math.round(10 * s) / 10);
};

export const totalLuck = (sneaker = {}) => {
  let e = getSocketValue("luck", sneaker),
    s =
      +sneaker.attributes.baseStats.luck +
      +sneaker.attributes.addedStats.luck +
      +e;
  return (s = Math.round(10 * s) / 10);
};
export const totalComf = (sneaker = {}) => {
  let e = getSocketValue("comfort", sneaker),
    s =
      +sneaker.attributes.baseStats.comfort +
      +sneaker.attributes.addedStats.comfort +
      +e;
  return (s = Math.round(10 * s) / 10);
};

export const totalRes = (sneaker = {}) => {
  let e = getSocketValue("resilience", sneaker),
    s =
      +sneaker.attributes.baseStats.resilience +
      +sneaker.attributes.addedStats.resilience +
      +e;
  return (s = Math.round(10 * s) / 10);
};

export const getGetLimit = ({type: {level = 0} = {}}) => {
    return gstLimit[level];
}

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
  console.log('repairCost', rarity, level)
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

export const optimizePoints = (sneaker) => {
  if ("unknown" !== repairCost(sneaker) && checkHasBaseStats(sneaker)) {
    const updatedSneaker = resetPoints(sneaker);
    updatedSneaker.attributes.addedStats.efficiency = pointsAvailable(
      updatedSneaker.type
    );

    // let e = {
    //   fullEff: 0,
    //   repairCost: 0,
    //   pointsRes: 0,
    // };
    // e.fullEff = totalIncome(updatedSneaker);
    // e.repairCost = repairCost(updatedSneaker);

    // while (
    //   repairCost(updatedSneaker) === e.repairCost &&
    //   updatedSneaker.attributes.addedPoints.efficiency >= 0
    // ) {
    //   updatedSneaker.attributes.addedPoints.resilience++;
    //   updatedSneaker.attributes.addedPoints.efficiency--;
    // }
    return updatedSneaker;
  }
};
