import React from "react";
import SVGImage from "./SVGImage";

import {
  Box,
  Container,
  Grid,
  Switch,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Sheet } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";

const ContainerTeam = (props) => {
  const [logoTeam, setLogoTeam] = React.useState([]);
  const [dataTeam, setDataTeam] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const isLoadingRef = React.useRef(false);

  React.useEffect(() => {
    const fetchTeams = async () => {
      try {
        const url =
          props.data && props.data.id
            ? `http://localhost:8080/nbaStatsApi/api/v1/teams/search/logo/${props.data.id}`
            : null;
        setIsLoading(true);
        isLoadingRef.current = true;
        if (url) {
          const response = await fetch(url, { method: "GET" });
          const data = await response.json();
          setDataTeam(props.data);
          setLogoTeam(data);
          console.log(data);
        }
      } catch (error) {
        console.error(error);
        setError("Ocorreu um erro ao buscar os logotipos das equipes.");
      } finally {
        setIsLoading(false);
        isLoadingRef.current = false;
      }
    };
    if (!isLoadingRef.current) {
      fetchTeams();
    }
  }, [props]);

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
    <Container maxWidth="x1">
      <Grid container pt={4} sx={{ display: "flex" }}>
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Sheet
              variant="outlined"
              sx={{
                display: "flex",
                gap: 2,
                p: 2,
                borderRadius: "sm",
                backgroundColor: "#1A202C",
              }}
            >
              <Grid container p={2} rowSpacing={5}>
                <Grid item xs={12} sm={3}>
                  <AspectRatio
                    sx={{
                      borderRadius: "sm",
                      minWidth: 75,
                    }}
                  >
                    <SVGImage svgString={logoTeam.imageSvg} />
                  </AspectRatio>
                </Grid>                
                <Grid item xs={12} sm={3}>
                  <Sheet
                    variant="outlined"
                    sx={{
                      gap: 2,
                      p: 2,
                      ml: 2,
                      mr: 2,
                      borderRadius: "sm",
                      backgroundColor: "#1A202C",
                    }}
                  >
                    <Sheet
                      variant="outlined"
                      sx={{
                        gap: 2,
                        p: 2,
                        ml: 2,
                        mr: 2,
                        borderRadius: "sm",
                        backgroundColor: "#1A202C",
                      }}
                    >
                      <Typography
                        fontSize={{ xs: "md", sm: "lg" }}
                        fontWeight="lg"
                        sx={{ color: "#fff", textAlign: "center" }}
                      >
                        Name
                      </Typography>
                    </Sheet>
                    <Typography
                      fontSize={{ xs: "md", sm: "lg" }}
                      fontWeight="lg"
                      sx={{ color: "#fff", textAlign: "center", p: 2 }}
                    >
                      {dataTeam.label}
                    </Typography>
                  </Sheet>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Sheet
                    variant="outlined"
                    sx={{
                      gap: 2,
                      p: 2,
                      ml: 2,
                      mr: 2,
                      borderRadius: "sm",
                      backgroundColor: "#1A202C",
                    }}
                  >
                    <Sheet
                      variant="outlined"
                      sx={{
                        gap: 2,
                        p: 2,
                        ml: 2,
                        mr: 2,
                        borderRadius: "sm",
                        backgroundColor: "#1A202C",
                      }}
                    >
                      <Typography
                        fontSize={{ xs: "md", sm: "lg" }}
                        fontWeight="lg"
                        sx={{ color: "#fff", textAlign: "center" }}
                      >
                        abbreviation
                      </Typography>
                    </Sheet>
                    <Typography
                      fontSize={{ xs: "md", sm: "lg" }}
                      fontWeight="lg"
                      sx={{ color: "#fff", textAlign: "center", p: 2 }}
                    >
                      {dataTeam.abbreviation}
                    </Typography>
                  </Sheet>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Sheet
                    variant="outlined"
                    sx={{
                      gap: 2,
                      p: 2,
                      ml: 2,
                      mr: 2,
                      borderRadius: "sm",
                      backgroundColor: "#1A202C",
                    }}
                  >
                    <Sheet
                      variant="outlined"
                      sx={{
                        gap: 2,
                        p: 2,
                        ml: 2,
                        mr: 2,
                        borderRadius: "sm",
                        backgroundColor: "#1A202C",
                      }}
                    >
                      <Typography
                        fontSize={{ xs: "md", sm: "lg" }}
                        fontWeight="lg"
                        sx={{ color: "#fff", textAlign: "center" }}
                      >
                        City
                      </Typography>
                    </Sheet>
                    <Typography
                      fontSize={{ xs: "md", sm: "lg" }}
                      fontWeight="lg"
                      sx={{ color: "#fff", textAlign: "center", p: 2 }}
                    >
                      {dataTeam.city}
                    </Typography>
                  </Sheet>
                </Grid>
                <Grid item xs={12} sm={3}></Grid>
                <Grid item xs={12} sm={3}>
                  <Sheet
                    variant="outlined"
                    sx={{
                      gap: 2,
                      p: 2,
                      ml: 2,
                      mr: 2,
                      borderRadius: "sm",
                      backgroundColor: "#1A202C",
                    }}
                  >
                    <Sheet
                      variant="outlined"
                      sx={{
                        gap: 2,
                        p: 2,
                        ml: 2,
                        mr: 2,
                        borderRadius: "sm",
                        backgroundColor: "#1A202C",
                      }}
                    >
                      <Typography
                        fontSize={{ xs: "md", sm: "lg" }}
                        fontWeight="lg"
                        sx={{ color: "#fff", textAlign: "center" }}
                      >
                        Conference
                      </Typography>
                    </Sheet>

                    <Typography
                      fontSize={{ xs: "md", sm: "lg" }}
                      fontWeight="lg"
                      sx={{ color: "#fff", textAlign: "center", p: 2 }}
                    >
                      {dataTeam.conference}
                    </Typography>
                  </Sheet>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Sheet
                    variant="outlined"
                    sx={{
                      gap: 2,
                      p: 2,
                      ml: 2,
                      mr: 2,
                      borderRadius: "sm",
                      backgroundColor: "#1A202C",
                    }}
                  >
                    <Sheet
                      variant="outlined"
                      sx={{
                        gap: 2,
                        p: 2,
                        ml: 2,
                        mr: 2,
                        borderRadius: "sm",
                        backgroundColor: "#1A202C",
                      }}
                    >
                      <Typography
                        fontSize={{ xs: "md", sm: "lg" }}
                        fontWeight="lg"
                        sx={{ color: "#fff", textAlign: "center" }}
                      >
                        Division
                      </Typography>
                    </Sheet>

                    <Typography
                      fontSize={{ xs: "md", sm: "lg" }}
                      fontWeight="lg"
                      sx={{ color: "#fff", textAlign: "center", p: 2 }}
                    >
                      {dataTeam.division}
                    </Typography>
                  </Sheet>
                </Grid>
              </Grid>
            </Sheet>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContainerTeam;
