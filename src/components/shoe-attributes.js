import { Grid, TextField } from "@mui/material";
import { calcBaseAttributePlaceholder, pointsAvailable } from "../constants/calc.constants";

export const ShoeAttributes = ({ sneaker = {}, onSave }) => {
  const { attributes = {}, type: sneakerType = {} } = sneaker;

  const points = pointsAvailable(sneakerType);
  const baseAttributePlaceholder = calcBaseAttributePlaceholder(sneakerType)

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
      <Grid item xs={3}>
        Base
      </Grid>
      <Grid item xs={3}>
        Total
      </Grid>
      <Grid item xs={6}>
        Efficiency
      </Grid>
      <Grid item xs={3}>
        <TextField
          value={attributes.efficiency}
          placeholder={baseAttributePlaceholder}
          variant="standard"
          onChange={({ target: { value } }) =>
            updateBaseStats("efficiency", value)
          }
        />
      </Grid>
      <Grid item xs={3}>
        Total
      </Grid>
      <Grid item xs={6}>
        Luck
      </Grid>
      <Grid item xs={3}>
        <TextField
          value={attributes.luck}
          placeholder={baseAttributePlaceholder}
          variant="standard"
          onChange={({ target: { value } }) => updateBaseStats("luck", value)}
        />
      </Grid>
      <Grid item xs={3}>
        Total
      </Grid>
      <Grid item xs={6}>
        Comfort
      </Grid>
      <Grid item xs={3}>
        <TextField
          value={attributes.comfort}
          placeholder={baseAttributePlaceholder}
          variant="standard"
          onChange={({ target: { value } }) => updateBaseStats("comfort", value)}
        />
      </Grid>
      <Grid item xs={3}>
        Total
      </Grid>
      <Grid item xs={6}>
        Resilience
      </Grid>
      <Grid item xs={3}>
        <TextField
          value={attributes.resilience}
          placeholder={baseAttributePlaceholder}
          variant="standard"
          onChange={({ target: { value } }) =>
            updateBaseStats("resilience", value)
          }
        />
      </Grid>
      <Grid item xs={3}>
        Total
      </Grid>
      <Grid item xs={6}>
        Points: {points}
      </Grid>
    </Grid>
  );
};
