import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SNEAKER_RARITY, SNEAKER_TYPE } from "../constants/sneaker.constants";

export const ShoeType = ({ sneaker = {}, onSave }) => {
  const { type: sneakerType = { rarity: 'common', type: 'walker'} } = sneaker;

  const renderRarityOptions = () =>
    Object.values(SNEAKER_RARITY).map((rarity) => (
      <MenuItem value={rarity.label}>{rarity.label.toString().toUpperCase()}</MenuItem>
    ));

  const onRarityChange = ({ target: { value } }) => {
    const newSneaker = { ...sneaker };
    newSneaker.type.rarity = value;
    onSave(newSneaker);
  };

  const renderTypeOptions = () =>
    Object.values(SNEAKER_TYPE).map((type) => (
      <MenuItem value={type}>{type.toString().toUpperCase()}</MenuItem>
    ));

  const onTypeChange = ({ target: { value } }) => {
    const newSneaker = { ...sneaker };
    newSneaker.type.type = value;
    onSave(newSneaker);
  };

  const onLevelChange = ({ target: { value } }) => {
    const newSneaker = { ...sneaker };
    newSneaker.type.level = value;
    onSave(newSneaker);
  };

  const onEnergyChange = ({ target: { value } }) => {
    const newSneaker = { ...sneaker };
    newSneaker.type.dailyEnergy = value;
    onSave(newSneaker);
  };

  return (
    sneakerType && (
      <Container>
        <FormControl fullWidth margin='normal'>
          <InputLabel id="rarity">Rarity</InputLabel>
          <Select
            value={sneakerType.rarity}
            label="Rarity"
            onChange={onRarityChange}
          >
            {renderRarityOptions()}
          </Select>
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <InputLabel id="type">Type</InputLabel>
          <Select value={sneakerType.type} label="Type" onChange={onTypeChange}>
            {renderTypeOptions()}
          </Select>
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <TextField
            label="Level"
            type="number"
            variant="outlined"
            value={sneakerType.level}
            onChange={onLevelChange}
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <TextField
            label="Daily Energy"
            type="number"
            variant="outlined"
            value={sneakerType.dailyEnergy}        
            onChange={onEnergyChange}               
          />
        </FormControl>
      </Container>
    )
  );
};
