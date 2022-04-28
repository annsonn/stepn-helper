import "./App.css";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db";
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import { useState } from "react";
import { NEW_SNEAKER } from "./constants/sneaker.constants";
import { NavBar } from "./components/navbar";
import { ShoeType } from "./components/shoe-type";
import { ShoeSockets } from './components/shoe-sockets';
import { ShoeAttributes } from "./components/shoe-attributes";

export const getSelectedSneaker = (list = []) =>
  list.filter((shoe) => shoe.selected)[0];

export const App = () => {
  const sneakers = useLiveQuery(() => db?.sneakers.toArray(), []);
  const [sneaker, setSneaker] = useState(getSelectedSneaker(sneakers));

  const deleteAll = async () => {
    await db.delete();
    console.log("Database successfully deleted");
  }

  const handleSelectSneaker = ({target: { value: shoe } = {}}) => {
    console.log('selected shoe', shoe);
    if (shoe) {
      setSneaker(shoe);
    } else {
      setSneaker({...NEW_SNEAKER});
    }
  };

  const renderSneakerItems = () =>
    sneakers &&
    sneakers.map((sneaker) => (
      <MenuItem
        value={sneaker}
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
              value={sneaker}
              label="Select Sneaker"
              onChange={handleSelectSneaker}
            >
              {renderSneakerItems()}
              <MenuItem value={0}>Add New Sneaker+</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} p={2}>
            <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <ShoeType sneaker={sneaker}></ShoeType>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <ShoeSockets sneaker={sneaker}></ShoeSockets>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <ShoeAttributes sneaker={sneaker}></ShoeAttributes>
                </Paper>
              </Grid>
          </Grid>
          <Button color="error" onClick={deleteAll}>Delete All</Button>
      </Container>
    </div>
  );
};

export default App;