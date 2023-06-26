import React from "react";
import ContainerChartLine from "../../components/ContainerChartLine";
import BasicCard from "../../components/BasicCard";
import ContainerTable from "../../components/ContainerTable";

import { Box, Divider, Grid } from "@mui/material";
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
  const [games, setGames] = React.useState([]);

  const url = "http://localhost:8080/nbaStatsApi/api/v1/games/search";
  const startDate = "2023-06-01";
  const endDate = "2023-06-12";
  const requestBody = {
    startDate: startDate,
    endDate: endDate,
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
        const data = await response.json();
        console.log(data.data);
        setGames(data.data); // Atualiza o estado com os dados obtidos da API
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <Container maxWidth="xl">
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
        <Grid container spacing={2} pt={2}>
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
                <ContainerChartLine />
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
                <ContainerChartLine />
              </Sheet>
            </Box>
          </Grid>
        </Grid>
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
