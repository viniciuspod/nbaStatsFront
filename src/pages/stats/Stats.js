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
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";

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
  const [DataType, setDataType] = React.useState("season");
  const [GameType, setGameType] = React.useState("all");
  const [errorData, setErrorData] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [valueNamePlayer, setValueNamePlayer] = React.useState([]);
  const [valuePlayerVal, setValuePlayerVal] = React.useState([]);


    React.useEffect(() => {
      const yearStart = YearStart.split("-")[0];
      const startDate = `01-10-${yearStart}` ;
      const yearFinal = YearFinal.split("-")[0];
      const FinalDate = `01-07-${yearFinal}` ;      
      const IdPlayers = valueNamePlayer.map(player => player.id);
      let postSeason = null;
      if (GameType === "playoffs") {
        postSeason = true;
      } else if (GameType === "regular") {
        postSeason = false;
      }     
      const requestBodyChart = {
        startDate: startDate,
        endDate: FinalDate,  
        postSeason: postSeason,  
        playersIds: IdPlayers,
      };
      console.log(valueNamePlayer);
      const fetchTeams = async () => {
      try {
        const urlTeam = "http://localhost:8080/nbaStatsApi/api/v1/stats/search";
        const response = await fetch(urlTeam, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBodyChart),
        });
        //const data = await response.json();
        //console.log(data);
      } catch (error) {
        console.error(error);
      } finally {      
      }
    }; 

    fetchTeams();
  },[YearFinal,YearStart,DataType,GameType,valueNamePlayer,valuePlayerVal]);

  React.useEffect(() => {
    const fetchStats = () => {
      if (YearFinal < YearStart) {
        setErrorData(true);
        setOpen((previousOpen) => !previousOpen);
      } else {
        setErrorData(false);
        setOpen(false);
      }
    };
    fetchStats();
  }, [YearStart, YearFinal]);

  const handleAddPlayer = () => {
    setCounter(counter + 1);
  };

  const handleDeletePlayer = (index) => {
    setCounter((prevCounter) => prevCounter - 1);
    const deleteValueName = [...valueNamePlayer]; 
    const deleteValueVal = [...valuePlayerVal]; 
    if (index >= 0 && index < deleteValueName.length) {
      deleteValueName.splice(index, 1); 
    }
    if (index >= 0 && index < deleteValueVal.length) {
      deleteValueVal.splice(index, 1); 
    }
    setValueNamePlayer(deleteValueName);
    setValuePlayerVal(deleteValueVal);
  };

  const handleInitialSelectChange = (event,newValue) => {
    setYearStart(newValue);
  };

  const handleFinalSelectChange = (event,newValue) => {
    setYearFinal(newValue);
  };

  const handleClickFinalSelect = (value) => {
    setAnchorEl(value.currentTarget);
  };

  const handleSelectDataTypeChange = (event,newValue) => {
    setDataType(newValue);
  };

  const handleSelectGameTypeChange = (event,newValue) => {
    setGameType(newValue);
  };

  const handleValueChange = (newValue,index) => {
    const updatedValue = [...valueNamePlayer];    
    if (index >= 0 && index < updatedValue.length) {
      updatedValue[index] = newValue; 
    } else {
      updatedValue.push(newValue); 
    }
    console.log(updatedValue);
    setValueNamePlayer(updatedValue); 
  };

  const handleValueValPlayerChange = (newValue,index) => {
    const updatedValue = [...valuePlayerVal]; 
 
    if (index >= 0 && index < updatedValue.length) {
      updatedValue[index] = newValue; 
    } else {
      updatedValue.push(newValue); 
    }
    
    setValuePlayerVal(updatedValue);
  }

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

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
                      <Select defaultValue="season" onChange={handleSelectDataTypeChange}>
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
                          onChange={handleInitialSelectChange}
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
                          onChange={handleFinalSelectChange}
                          onClick={handleClickFinalSelect}
                          style={
                            errorData
                              ? {
                                  border: "1px solid red",
                                  backgroundColor: "#ffcdd2",
                                }
                              : {}
                          }
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
                        <Popper
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          transition
                        >
                          {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                              <Box
                                sx={{
                                  border: 1,
                                  p: 1,
                                  bgcolor: "background.paper",
                                }}
                              >
                                Select a date after the start date.
                              </Box>
                            </Fade>
                          )}
                        </Popper>
                      </Box>
                    </Grid>
                  </Box>
                  <Grid item xs={12} sm={2}>
                    <Box sx={{ p: 1 }}>
                      <Typography sx={{ color: "#fff", textAlign: "left" }}>
                        Game Type
                      </Typography>
                      <Select defaultValue="all" onChange={handleSelectGameTypeChange}>
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
                {[...Array(counter)].map((_, index) => {
                  const currentIndex = index; // Captura o valor atual do index em uma variável local
                 return(                 
                  <ContainerAddPlayer
                    key={index}
                    index={currentIndex}  
                    players={valueNamePlayer}
                    onDelete={value => {
                      handleDeletePlayer(value);
                    }}
                    onValueChange={value => {
                      handleValueChange(value,currentIndex);
                    }} 
                    onValueValPlayerChange={value => handleValueValPlayerChange(value,currentIndex)}
                  />
                )})}
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
