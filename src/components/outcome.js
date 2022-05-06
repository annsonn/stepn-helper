import { Button, Container } from "@mui/material";
import {
  optimizePoints,
  totalIncome,
  gstPerDay,
  repairCost,
  mboxChance,
  getGetLimit,
  preOptimize,
} from "../calculations/outcomes";

export const Outcome = ({ sneaker = {}, onSave }) => {
  const optimize = () => {
    const updatedSneaker = preOptimize(sneaker);
    onSave(optimizePoints(updatedSneaker));
  };

  return (
    <Container>
      <div>DAILY INCOME {sneaker && totalIncome(sneaker)} GST</div>
      <div>
        GST PER DAY {sneaker && gstPerDay(sneaker)} /{" "}
        {sneaker && getGetLimit(sneaker)}
      </div>
      <div>REPAIR COST {sneaker && repairCost(sneaker)}</div>
      <div>MYSTERY BOX CHANCE {sneaker && mboxChance(sneaker)}</div>
      <Button onClick={optimize}>Optimize</Button>
    </Container>
  );
};
