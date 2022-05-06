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
  const { type: sneakerType = { rarity: "common", type: "walker" } } = sneaker;

  const renderRarityOptions = () =>
    Object.values(SNEAKER_RARITY).map((rarity, key) => (
      <MenuItem key={key} value={rarity.label}>
        {rarity.label.toString().toUpperCase()}
      </MenuItem>
    ));

  const renderTypeOptions = () =>
    Object.values(SNEAKER_TYPE).map((type, key) => (
      <MenuItem key={key} value={type}>{type.toString().toUpperCase()}</MenuItem>
    ));

  const updateSneakerType = (key, value) => {
    const newSneaker = { ...sneaker };
    newSneaker.type[key] = value;
    onSave(newSneaker);
  };

  return (
    sneakerType && (
      <Container>
        <FormControl fullWidth margin="normal">
          <InputLabel id="rarity">Rarity</InputLabel>
          <Select
            value={sneakerType.rarity}
            label="Rarity"
            onChange={({ target: { value } }) =>
              updateSneakerType("rarity", value)
            }
          >
            {renderRarityOptions()}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="type">Type</InputLabel>
          <Select
            value={sneakerType.type}
            label="Type"
            onChange={({ target: { value } }) =>
              updateSneakerType("type", value)
            }
          >
            {renderTypeOptions()}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Level"
            type="number"
            variant="outlined"
            value={sneakerType.level}
            onChange={({ target: { value } }) =>
              updateSneakerType("level", value)
            }
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Daily Energy"
            type="number"
            variant="outlined"
            value={sneakerType.dailyEnergy}
            onChange={({ target: { value } }) =>
              updateSneakerType("dailyEnergy", value)
            }
          />
        </FormControl>
      </Container>
    )
  );
};
