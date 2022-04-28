import { Grid, TextField } from "@mui/material";

export const ShoeAttributes = ({ sneaker = {}, onSave }) => {
  const { attributes = {} } = sneaker;

  const handleChange = (attribute, value) => {
    const newSneaker = { ...sneaker };
    newSneaker.attributes[attribute] = value;
    onSave(newSneaker);
  }

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
      <TextField value={attributes.efficiency} variant="standard" onChange={({target: {value}}) => handleChange('efficiency', value)}/>
      </Grid>
      <Grid item xs={3}>
        Total
      </Grid>
      <Grid item xs={6}>
        Luck
      </Grid>
      <Grid item xs={3}>
      <TextField value={attributes.luck} variant="standard" onChange={({target: {value}}) => handleChange('luck', value)}/>
      </Grid>
      <Grid item xs={3}>
        Total
      </Grid>
      <Grid item xs={6}>
        Comfort
      </Grid>
      <Grid item xs={3}>
      <TextField value={attributes.comfort} variant="standard" onChange={({target: {value}}) => handleChange('comfort', value)}/>
      </Grid>
      <Grid item xs={3}>
        Total
      </Grid>
      <Grid item xs={6}>
        Resilience
      </Grid>
      <Grid item xs={3}>
      <TextField value={attributes.resilience} variant="standard" onChange={({target: {value}}) => handleChange('resilience', value)}/>
      </Grid>
      <Grid item xs={3}>
        Total
      </Grid>
    </Grid>
  );
};
