import React from "react";

import { Box, Container, Grid, Switch, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Players = () => {
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

  return (
    <div style={{ backgroundColor: "#1A202C" }}>
      <Container maxWidth="xl">
        <Grid container pt={4} sx={{ display: "flex" }}>
          <Grid item xs={12} sm={6}>
            <Grid container alignItems="center">
              <Grid item xs={5}>
                <Box p={3}>
                  <Typography variant="h5" sx={{ color: "#fff" }}>
                    Choose the Player :{" "}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={7} sm={6}> 
                <Box>
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
                    //value={ValueNameTeam}
                    //onChange={handleAutocompleteChange}
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
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormGroup row>
              <FormControlLabel
                value="chart"
                control={
                  <Switch
                    sx={{
                      backgroundColor: "#313c52",
                      borderRadius: "15px",
                      "&:hover": {
                        boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.5)",
                      },
                    }}
                  />
                }
                label="Chart"
                sx={{ color: "#fff", p: 2 }}
              />
              <FormControlLabel
                value="table"
                control={
                  <Switch
                    sx={{
                      backgroundColor: "#313c52",
                      borderRadius: "15px",
                      "&:hover": {
                        boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.5)",
                      },
                    }}
                  />
                }
                label="Table"
                sx={{ color: "#fff", p: 2 }}
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Players;
