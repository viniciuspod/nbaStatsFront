import React from "react";
import ContainerTeam from "../../components/ContainerTeam";

import { Box, Container, Grid, Switch, Typography, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Teams = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = React.useState(false);
  const [Teams, setTeams] = React.useState([]);
  const [NameTeams, setNameTeams] = React.useState([]);
  const [ValueNameTeam, setValueNameTeam] = React.useState(null);
  const [totalTeams, setTotalTeams] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [error, setError] = React.useState(null);
  const [totalPages, setTotalPages] = React.useState(1);

  const isLoadingRef = React.useRef(false);

  React.useEffect(() => {
    const fetchTeams = async () => {
      try {
        setIsLoading(true);
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
        setError("Ocorreu um erro.");
      } finally {
        isLoadingRef.current = false;        
      }
    };

    if (page <= totalPages && !isLoadingRef.current) {
      fetchTeams();
    }
  }, [page, totalPages]);

  React.useEffect(() => {
    if (Teams.length === totalTeams) {
      const team = Teams.filter((team, index) => {
        return Teams.findIndex((t) => t.full_name === team.full_name) === index;
      }).map((team) => ({
        label: team.full_name,
        id: team.id,
      }));
      setNameTeams(team);

      const teamSelect = Teams.find((team) => team.id === parseInt(id));
      const transformedTeam = teamSelect
        ? { 
          label: teamSelect.full_name,
          id: teamSelect.id, 
        }
        : null;
      setValueNameTeam(transformedTeam);
      setIsLoading(false);
    }
  }, [Teams, totalTeams]);

  const handleAutocompleteChange = (event, value) => {
    setValueNameTeam(value);
  };

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
    <div style={{ backgroundColor: "#1A202C" }}>
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
            <Grid container pt={4} sx={{ display: "flex" }}>
              <Grid item xs={12} sm={6}>
                <Grid container alignItems="center">
                  <Grid item xs={5}>
                    <Box p={3}>
                      <Typography variant="h5" sx={{ color: "#fff" }}>
                        Choose the Team :
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
                      id="tags-filled"
                      options={NameTeams}
                      value={ValueNameTeam}
                      onChange={handleAutocompleteChange}
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
                <ContainerTeam data={ValueNameTeam}/>
              </Grid>
            </Grid>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Teams;
