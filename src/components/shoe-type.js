import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { SNEAKER_RARITY, SNEAKER_TYPE } from "../constants/sneaker.constants";

export const ShoeType = ({ sneaker = {}, onSave }) => {
  const { type: sneakerType = {} } = sneaker;

  const renderRarityOptions = () =>
    Object.values(SNEAKER_RARITY).map((rarity) => (
      <MenuItem value={rarity}>{rarity.toString().toUpperCase()}</MenuItem>
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

  return sneakerType  && (
    <Container>
      <FormControl fullWidth>
        <InputLabel id="rarity">Rarity</InputLabel>
        <Select
          value={sneakerType.rarity}
          label="Rarity"
          onChange={onRarityChange}
        >
          {renderRarityOptions()}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="type">Type</InputLabel>
        <Select
          value={sneakerType.type}
          label="Type"
          onChange={onTypeChange}
        >
          {renderTypeOptions()}
        </Select>
      </FormControl>
      
    </Container>
  );
};
