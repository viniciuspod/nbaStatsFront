import React from "react";
import ContainerChartLine from "../../components/ContainerChartLine";
import ContainerAddPlayer from "../../components/ContainerAddPlayer";

import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Sheet } from "@mui/joy";
import { Box, Container, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  const [counter, setCounter] = React.useState(1);
  const [YearStart, setYearStart] = React.useState("2022-2023");
  const [YearFinal, setYearFinal] = React.useState("2022-2023");
  const [errorData, setErrorData] = React.useState(false);

  React.useEffect(() => {
    const fetchStats = async () => {
      try {
        //const urlTeam = `http://localhost:8080/nbaStatsApi/api/v1/teams/search?page=`;
        //const response = await fetch(urlTeam, {
        //  method: "GET",
        //});
        //const data = await response.json();
        //console.log(data);
        if (YearFinal < YearStart) {
          console.log("erro");
          setErrorData(true);
        }
        console.log(YearStart);
        console.log(YearFinal);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };
    fetchStats();
  }, [YearStart, YearFinal]);

  const handleAddPlayer = () => {
    setCounter(counter + 1);
  };

  const handleDeletePlayer = (index) => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const handleInitialSelectChange = (value) => {
    setYearStart(value.target.outerText);
  };

  const handleFinalSelectChange = (value) => {
    setYearFinal(value.target.outerText);
  };

  return (
    <div>
      <Container maxWidth="xl" pt={4}>
        <Grid container>
          <Grid item xs={12} pt={4}></Grid>
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
                        <Select
                          defaultValue="2022-2023"
                          onChange={(value) => handleInitialSelectChange(value)}
                        >
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
                        <Select
                          defaultValue="2022-2023"
                          onChange={(value) => handleFinalSelectChange(value)}
                          style={errorData ? { border: "1px solid red", backgroundColor: "#ffcdd2" } : {}}
                        >
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
                {[...Array(counter)].map((_, index) => (
                  <ContainerAddPlayer
                    key={index}
                    index={index}
                    onDelete={handleDeletePlayer}
                  />
                ))}
                <Box p={1} sx={{ textAlign: "left" }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      disabled={false}
                      variant="outlined"
                      color="secondary"
                      startIcon={<AddCircleIcon />}
                      onClick={handleAddPlayer}
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
