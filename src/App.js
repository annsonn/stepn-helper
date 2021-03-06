import "./App.css";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";
import { NEW_SNEAKER } from "./constants/sneaker.constants";
import { NavBar } from "./components/navbar";
import { ShoeType } from "./components/shoe-type";
import { ShoeSockets } from "./components/shoe-sockets";
import { ShoeAttributes } from "./components/shoe-attributes";
import { Outcome } from "./components/outcome";

export const getSelectedSneaker = (list = []) =>
  list.filter((shoe) => shoe.selected)[0];

export const App = () => {
  const sneakers = useLiveQuery(() => db?.sneakers.toArray(), []);
  const [selectedSneakerId, setSelectedSneakerId] = useState();
  const [sneaker, setSneaker] = useState();

  useEffect(() => {
    const selectedSneaker = getSelectedSneaker(sneakers);
    if (!sneaker && selectedSneaker) {
      setSneaker(selectedSneaker);
      setSelectedSneakerId(selectedSneaker.id);
    }
  }, [sneakers, sneaker, selectedSneakerId]);

  const deleteAll = async () => {
    await db.delete();
    console.log("Database successfully deleted");
  };

  const handleSelectSneaker = async ({ target: { value: sneakerId } = {} }) => {
    let selectedShoe;
    if (sneakerId) {
      selectedShoe = sneakers.filter((sneaker) => sneaker.id === sneakerId)[0];
    } else {
      selectedShoe = JSON.parse(JSON.stringify(NEW_SNEAKER));
      await saveSneaker(selectedShoe);
    }
    setSneaker(selectedShoe);
  };

  const addSneaker = async (sneaker) => {
    const savedSneakerId = await db.sneakers.add({
      ...sneaker,
    });
    setSneaker({ ...sneaker, id: savedSneakerId });
  };

  const editSneaker = async (newSneaker) => {
    await db.sneakers.update(sneaker, { ...sneaker, ...newSneaker });
  };

  const saveSneaker = async (sneaker) => {
    if (sneaker.id) {
      editSneaker(sneaker);
    } else {
      addSneaker(sneaker);
    }
  };

  const renderSneakerItems = () =>
    sneakers &&
    sneakers.map((sneaker) => (
      <MenuItem
        value={sneaker.id}
      >{`${sneaker.type.rarity}-${sneaker.type.type}-${sneaker.type.level}`}</MenuItem>
    ));

  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sneaker</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedSneakerId ?? " "}
            label="Select Sneaker"
            onChange={handleSelectSneaker}
          >
            {renderSneakerItems()}
            <MenuItem value={""}>Add New Sneaker+</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3} p={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ShoeType sneaker={sneaker} onSave={saveSneaker}></ShoeType>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ShoeSockets sneaker={sneaker} onSave={saveSneaker}></ShoeSockets>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ShoeAttributes
                sneaker={sneaker}
                onSave={saveSneaker}
              ></ShoeAttributes>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Outcome sneaker={sneaker} onSave={saveSneaker}></Outcome>
            </Paper>
          </Grid>
        </Grid>
        <Button color="error" onClick={deleteAll}>
          Delete All
        </Button>
      </Container>
    </div>
  );
};

export default App;
