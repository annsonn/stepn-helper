import { gemsSocketsParams } from "../constants/calc.constants";

export const getSocketValue = (type, sneaker) => {
  const { sockets, attributes } = sneaker;

  let result = 0;

  if (!sockets || !attributes) {
    return result;
  }

  Object.values(sockets).forEach(({ stat, gemLvl, socketLvl }) => {
    if (stat === type) {
      const gemPoints = gemsSocketsParams.gemPoints[gemLvl],
        gemBaseBoost =
          (gemsSocketsParams.gemBaseBoost[gemLvl] *
            attributes.baseStats[type]) /
          100,
        socketBonus = 1 + gemsSocketsParams.socketBonus[socketLvl] / 100;
      result += Math.floor((gemPoints + gemBaseBoost) * socketBonus * 10) / 10;
    }
  });

  return result;
};
