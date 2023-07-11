import React from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box, Grid } from "@mui/material";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const ContainerAddPlayer = ({ index, onDelete, onValueChange,onValueValPlayerChange }) => {

  const [isLoading, setIsLoading] = React.useState(false);
  const [NamePlayers, setNamePlayers] = React.useState([]);

  React.useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setIsLoading(true);
        const urlTeam = `http://localhost:8080/nbaStatsApi/api/v1/players/getAllPlayers`;
        const response = await fetch(urlTeam, {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
        const player = data.playerNames.filter((player, index) => {
          return data.playerNames.findIndex((t) => t.fullName === player.fullName) === index;
        }).map((player) => ({
          label: player.fullName,
          id: player.id,
          playerId: player.playerId,
        }));
        setNamePlayers(player);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);      
      }
    };

      fetchPlayers();
  }, []);

    const handleDelete = () => {
        onDelete(index);
      };

    const handleAutocompleteChange = (event, value) => {
      onValueChange(value);
    };

    const handleSelectPickChange = (event, newValue) => {
      onValueValPlayerChange(newValue);
    };

  return (
    <Grid container p={2}>
      <Grid item xs={7} sm={3}>
        <Box sx={{ p: 1 }}>
          <Autocomplete
            sx={{
              height: "3rem",
              backgroundColor: "#fff",
              borderRadius: "15px",
              "&:hover": {
                boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.5)",
              },
            }}
            id="tags-filled"
            options={NamePlayers}
            onChange={handleAutocompleteChange}
            freeSolo
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Player"
                placeholder="Player"
              />
            )}
          />
        </Box>
      </Grid>
      <Grid item xs={5} sm={2}>
        <Box sx={{ p: 1 , display:"flex"}}>
          <Select
            defaultValue="pts"
            onChange={handleSelectPickChange}
            sx={{
              height: "3rem",
              backgroundColor: "#fff",
              borderRadius: "15px",
              "&:hover": {
                boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <Option value="pts">pts</Option>
            <Option value="fgm">fgm</Option>
            <Option value="fga">fga</Option>
            <Option value="fg3m">fg3m</Option>
            <Option value="fg3a">fg3a</Option>
            <Option value="ftm">ftm</Option>
            <Option value="fta">fta</Option>
            <Option value="oreb">oreb</Option>
            <Option value="dreb">dreb</Option>
            <Option value="reb">reb</Option>
            <Option value="ast">ast</Option>
            <Option value="stl">stl</Option>
            <Option value="blk">blk</Option>
            <Option value="turnover">turnover</Option>
            <Option value="pf">pf</Option>
            <Option value="fgpct">fg_pct</Option>
            <Option value="fg3pct">fg3_pct</Option>
            <Option value="ftpct">ft_pct</Option>
            <Option value="min">min</Option>
          </Select>
          <IconButton onClick={handleDelete} aria-label="delete" sx={{color:"#ef5350"}}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContainerAddPlayer;
