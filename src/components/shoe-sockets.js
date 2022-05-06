import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { STATS } from "../constants/sneaker.constants";
import { resolvePath } from "../utils";

export const Socket = ({ index, socket = {}, onChange, disabled }) => {
  const handleSave = (stat, value) => {
    const updatedSocket = { ...socket };
    updatedSocket[stat] = value;
    onChange(index, updatedSocket);
  };

  return (
    <Grid container spacing={2} mb={2}>
      <Grid item>Socket #{index}</Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel id="stat-select">Stat</InputLabel>
          <Select
            labelId="stat-select"
            value={socket.stat ?? " "}
            label="Stat"
            onChange={({ target: { value } = {} }) => handleSave("stat", value)}
          >
            {Object.values(STATS).map((stat) => (
              <MenuItem key={`stat-${stat}`} value={stat}>
                {stat}
              </MenuItem>
            ))}
            <MenuItem></MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl fullWidth>
          <InputLabel id="gem-lvl-select">Gem Level</InputLabel>
          <Select
            labelId="gem-lvl-select"
            value={socket.gemLvl ?? " "}
            label="Gem Level"
            onChange={({ target: { value } = {} }) =>
              handleSave("gemLvl", value)
            }
            disabled={disabled}
          >
            {[0, 1, 2, 3].map((gemLvl) => (
              <MenuItem key={`gem-level-${gemLvl}`} value={gemLvl}>
                {gemLvl}
              </MenuItem>
            ))}
            <MenuItem></MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl fullWidth>
          <InputLabel id="socket-lvl-select">Socket Level</InputLabel>
          <Select
            labelId="socket-lvl-select"
            value={socket.socketLvl  ?? " "}
            label="Socket level"
            onChange={({ target: { value } = {} }) =>
              handleSave("socketLvl", value)
            }
            disabled={disabled}
          >
            {[0, 1, 2, 3].map((socketLvl) => (
              <MenuItem key={`socket-level-${socketLvl}`} value={socketLvl}>
                {socketLvl}
              </MenuItem>
            ))}
            <MenuItem></MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export const ShoeSockets = ({ sneaker = {}, onSave }) => {
  const { sockets: sneakerSockets = {} } = sneaker;

  const [socketsUnlocked, setSocketsUnlocked] = useState(0);

  const saveSocket = (index, socket) => {
    const updatedSneaker = JSON.parse(JSON.stringify(sneaker));
    updatedSneaker.sockets[`socket${index}`] = socket;
    onSave(updatedSneaker);
  };

  useEffect(() => {
    setSocketsUnlocked(Math.trunc(resolvePath(sneaker, 'type.level', 0)/5));
  }, [sneaker, setSocketsUnlocked])

  return (
    <>
      <Socket
        socket={sneakerSockets.socket1}
        index={1}
        onChange={saveSocket}
        disabled={socketsUnlocked < 1}
      ></Socket>
      <Socket
        socket={sneakerSockets.socket2}
        index={2}
        onChange={saveSocket}
        disabled={socketsUnlocked < 2}
      ></Socket>
      <Socket
        socket={sneakerSockets.socket3}
        index={3}
        onChange={saveSocket}
        disabled={socketsUnlocked < 3}
      ></Socket>
      <Socket
        socket={sneakerSockets.socket4}
        index={4}
        onChange={saveSocket}
        disabled={socketsUnlocked < 4}
      ></Socket>
    </>
  );
};
