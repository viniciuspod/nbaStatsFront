import React from "react";

import { Box, Container, Grid, Switch, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Teams = () => {
  const allTeams= [
    {
      label: "Lakers"
    },
    {
      label: "Celtics"
    },
    {
      label: "Spurs"
    },
    {
      label: "Golden State"
    },
  ];

  return (
    <div style={{ backgroundColor: "#1A202C" }}>
      <Container maxWidth="xl">
        <Grid container pt={4} sx={{ display: "flex" }}>
          <Grid item xs={12} sm={6}>
            <Grid container alignItems="center">
              <Grid item xs={5}>
                <Box p={3}>
                  <Typography variant="h5" sx={{ color: "#fff" }}>
                    Choose the Team :{" "}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={7}>
                <Autocomplete
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "15px",
                    "&:hover": {
                      boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.5)",
                    },
                  }}
                  multiple
                  id="tags-filled"
                  options={allTeams}
                  freeSolo
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="filled"
                      label="Teams"
                      placeholder="Teams"
                    />
                  )}
                />
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

export default Teams;
