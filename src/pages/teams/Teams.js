import React from "react";

import { Box, Container, Grid, Switch, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Teams = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = React.useState(false);
  const [Teams, setTeams] = React.useState([]);
  const [NameTeams, setNameTeams] = React.useState([]);
  const [totalTeams, setTotalTeams] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [error, setError] = React.useState(null);
  const [totalPages, setTotalPages] = React.useState(1);

  const isLoadingRef = React.useRef(false);
  
  const fetchTeams = async () => {
    try {
      isLoadingRef.current = true;
      const urlTeam = `http://localhost:8080/nbaStatsApi/api/v1/teams/search?page=${page}`;
      const response = await fetch(urlTeam, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setTeams((prevTeams) => [...prevTeams, ...data.data]);
      setTotalPages(data.meta.total_pages);
      setTotalTeams(data.meta.total_count);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
      setError("Ocorreu um erro ao buscar os logotipos das equipes.");
    } finally {
      isLoadingRef.current = false;
    }
  };

  React.useEffect(() => {
    if (page <= totalPages && !isLoadingRef.current) {
      fetchTeams();
    } 
  }, [ page, totalPages]);

  React.useEffect(() => {
    if (Teams.length === totalTeams) {
      const team = Teams.filter((team, index) => {
        return Teams.findIndex((t) => t.full_name === team.full_name) === index;
      }).map((team) => ({
        label: team.full_name,
      }));
      setNameTeams(team);
    }
  }, [Teams, totalTeams]);

  if (error) {
    return <Typography>{error}</Typography>;
  }

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
                  options={NameTeams}
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
