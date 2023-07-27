import React from "react";
import ContainerChartLine from "../../components/ContainerChartLine";
import BasicCard from "../../components/BasicCard";
import ContainerTable from "../../components/ContainerTable";

import { Box, Divider, Grid, CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { Sheet } from "@mui/joy";

const useStyles = makeStyles((theme) => ({
  scrollbar: {
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "6px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#1A202C",
      borderRadius: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#888",
      borderRadius: "8px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#555",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(true);
  const [games, setGamesCard] = React.useState([]);
  const [statsChart1, setStatsChart1] = React.useState([]);
  const [error, setError] = React.useState(null);

  const urlCard = "http://localhost:8080/nbaStatsApi/api/v1/games/search";
  const urlChart = "http://localhost:8080/nbaStatsApi/api/v1/stats/search";
  const startDate = "2023-06-01";
  const endDate = "2023-06-12";
  const requestBodyCard = {
    startDate: startDate,
    endDate: endDate,
  };
  const seasons = [2022];
  const playersIds = [246, 79];
  const requestBodyChart = {
    startDate: startDate,
    endDate: endDate,
    playersIds: playersIds,
    seasons: seasons,
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const responseCard = await fetch(urlCard, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBodyCard),
        });
        const dataCard = await responseCard.json();
        setGamesCard(dataCard.data);

        const responseChart1 = await fetch(urlChart, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBodyChart),
        });
        const dataChart1 = await responseChart1.json();
        setStatsChart1(dataChart1.data);
      } catch (error) {
        console.error(error);
        setError("Ocorreu um erro.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "#fff",
            p: 1,
            fontSize: "1.2rem",
            fontWeight: 600,
          }}
        >
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <div>
      <Container maxWidth="xl">
        <div>
          {isLoading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={400}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box
              className={classes.scrollbar}
              pt={4}
              sx={{
                maxHeight: 400,
                overflow: "auto",
                display: "flex",
              }}
            >
              {games.map((game) => (
                <Box
                  key={game.id}
                  sx={{
                    p: 2,
                  }}
                >
                  <BasicCard data={game} />
                </Box>
              ))}
            </Box>
          )}
        </div>
        <div>
          {isLoading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={400}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={2} pt={2}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    p: 2,
                  }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      backgroundColor: "#1A202C",
                      p: 2,
                      borderRadius: "sm",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        p: 1,
                        fontSize: "1.2rem",
                        fontWeight: 600,
                      }}
                    >
                      Chart of points between Butler and jokic in nba finals
                    </Typography>
                    {statsChart1 ? (
                      <Box sx={{ height: "25rem" }}>
                        <ContainerChartLine data={statsChart1} />
                      </Box>
                    ) : (
                      <Typography>No data available</Typography>
                    )}
                  </Sheet>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    p: 2,
                    maxWidth: "100%",
                  }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      backgroundColor: "#1A202C",
                      p: 2,
                      borderRadius: "sm",
                      maxWidth: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        p: 1,
                        fontSize: "1.2rem",
                        fontWeight: 600,
                      }}
                    >
                      Chart of denver games
                    </Typography>
                    {statsChart1 ? (
                      <Box sx={{ height: "25rem" }}>
                        <ContainerChartLine data={statsChart1} />
                      </Box>
                    ) : (
                      <Typography>No data available</Typography>
                    )}
                  </Sheet>
                </Box>
              </Grid>
            </Grid>
          )}
        </div>
        <Divider sx={{ backgroundColor: "#fff", mt: 2 }} />
        <Grid container spacing={1} pt={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                p: 2,
                maxWidth: "100%",
                overflow: "auto",
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  backgroundColor: "#1A202C",
                  p: 2,
                  borderRadius: "sm",
                  maxWidth: "100%",
                }}
              >
                <ContainerTable />
              </Sheet>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
