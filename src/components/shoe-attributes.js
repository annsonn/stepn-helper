import { Grid, TextField } from "@mui/material";
import { totalComf, totalEff, totalLuck, totalRes } from "../calculations/outcomes";
import { getSocketValue } from "../calculations/sockets";
import {
  calcBaseAttributePlaceholder,
  pointsAvailable,
} from "../calculations/stats";

export const ShoeAttributes = ({ sneaker = {}, onSave }) => {
  const { attributes: { baseStats = {} } = {}, type: sneakerType = {} } =
    sneaker;

  const points = pointsAvailable(sneakerType);
  const baseAttributePlaceholder = calcBaseAttributePlaceholder(sneakerType);

  const updateBaseStats = (attribute, value) => {
    const newSneaker = { ...sneaker };
    newSneaker.attributes.baseStats[attribute] = value;
    onSave(newSneaker);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        Attributes
      </Grid>
      <Grid item xs={2}>
        Base
      </Grid>
      <Grid item xs={2}>
        Gems
      </Grid>
      <Grid item xs={2}>
        Total
      </Grid>
      <Grid item xs={6}>
        Efficiency
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={baseStats.efficiency}
          placeholder={baseAttributePlaceholder}
          onChange={({ target: { value } }) =>
            updateBaseStats("efficiency", value)
          }
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={getSocketValue('efficiency', sneaker)}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={totalEff(sneaker)}
        />
      </Grid>
      <Grid item xs={6}>
        Luck
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={baseStats.luck }
          placeholder={baseAttributePlaceholder}
          onChange={({ target: { value } }) => updateBaseStats("luck", value)}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={getSocketValue('luck', sneaker)}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={totalLuck(sneaker)}
        />
      </Grid>
      <Grid item xs={6}>
        Comfort
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={baseStats.comfort}
          placeholder={baseAttributePlaceholder}
          onChange={({ target: { value } }) =>
            updateBaseStats("comfort", value)
          }
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={getSocketValue('comfort', sneaker)}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={totalComf(sneaker)}
        />
      </Grid>
      <Grid item xs={6}>
        Resilience
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={baseStats.resilience}
          placeholder={baseAttributePlaceholder}
          onChange={({ target: { value } }) =>
            updateBaseStats("resilience", value)
          }
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={getSocketValue('resilience', sneaker)}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={totalRes(sneaker)}
        />
      </Grid>
      <Grid item xs={6}>
        Points: {points}
      </Grid>
    </Grid>
  );
};
