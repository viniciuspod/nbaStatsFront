import React from "react";
import ContainerChartLine from "../../components/ContainerChartLine";

import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Sheet } from "@mui/joy";
import { Box, Container, Grid, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { createTheme,ThemeProvider  } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    secondary: {
      main: "#68D391",
      contrastText: "#fff",
    },
  },
});

const Stats = () => {
  return (
    <div>
      <Container maxWidth="xl" pt={4}>
        <Grid container>
          <Grid item xs={12} pt={4}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  gap: 2,
                  p: 2,
                  borderRadius: "sm",
                  backgroundColor: "#1A202C",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "#fff", textAlign: "left" }}
                >
                  Define Parameters
                </Typography>
                <Grid container p={2} spacing={2}>
                  <Grid item xs={12} sm={2}>
                    <Box sx={{ p: 1 }}>
                      <Typography sx={{ color: "#fff", textAlign: "left" }}>
                        Data Type
                      </Typography>
                      <Select defaultValue="season">
                        <Option value="season">Season</Option>
                        <Option value="custom">Custom</Option>
                      </Select>
                    </Box>
                  </Grid>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: "auto",
                      justifyContent: "center",
                      width: { xs: "100%", sm: "auto" },
                      pl: { xs: 2, sm: 0 },
                      pt: { xs: 2, sm: 0 },
                      pr: { xs: 0, sm: 0 },
                      pb: { xs: 0, sm: 0 },
                    }}
                  >
                    <Grid item xs={6} sm={6}>
                      <Box sx={{ p: 1 }}>
                        <Select defaultValue="2022-2023">
                          {Array.from({ length: 76 }, (_, index) => {
                            const startYear = 2022 - index;
                            const endYear = startYear + 1;
                            const optionValue = `${startYear}-${endYear}`;
                            return (
                              <Option key={optionValue} value={optionValue}>
                                {optionValue}
                              </Option>
                            );
                          })}
                        </Select>
                      </Box>
                    </Grid>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ color: "#fff" }}>To</Typography>
                    </div>
                    <Grid item xs={6} sm={6}>
                      <Box sx={{ p: 1 }}>
                        <Select defaultValue="2022-2023">
                          {Array.from({ length: 76 }, (_, index) => {
                            const startYear = 2022 - index;
                            const endYear = startYear + 1;
                            const optionValue = `${startYear}-${endYear}`;
                            return (
                              <Option key={optionValue} value={optionValue}>
                                {optionValue}
                              </Option>
                            );
                          })}
                        </Select>
                      </Box>
                    </Grid>
                  </Box>
                  <Grid item xs={12} sm={2}>
                    <Box sx={{ p: 1 }}>
                      <Typography sx={{ color: "#fff", textAlign: "left" }}>
                        Game Type
                      </Typography>
                      <Select defaultValue="all">
                        <Option value="all">All</Option>
                        <Option value="regular">Regular Season</Option>
                        <Option value="playoffs">Playoffs</Option>
                      </Select>
                    </Box>
                  </Grid>
                </Grid>
              </Sheet>
            </Box>
          </Grid>

          <Grid item xs={12} pt={4}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  gap: 2,
                  p: 2,
                  borderRadius: "sm",
                  backgroundColor: "#1A202C",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "#fff", textAlign: "left" }}
                >
                  Pick Players
                </Typography>
                <Grid container p={2}>
                  <Grid item xs={8} sm={3}>
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
                        //options={NameTeams}
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
                  <Grid item xs={4} sm={2}>
                    <Box sx={{ p: 1 }}>
                      <Select
                        defaultValue="season"
                        sx={{
                          height: "3rem",
                          backgroundColor: "#fff",
                          borderRadius: "15px",
                          "&:hover": {
                            boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.5)",
                          },
                        }}
                      >
                        <Option value="season">Season</Option>
                        <Option value="custom">Custom</Option>
                      </Select>
                    </Box>
                  </Grid>
                </Grid>
                <Box p={1} sx={{ textAlign: "left" }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      disabled={false}
                      variant="outlined"
                      color="secondary"
                      startIcon={<AddCircleIcon />}
                    >
                      Add Player
                    </Button>
                  </ThemeProvider>
                </Box>
              </Sheet>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Stats;
