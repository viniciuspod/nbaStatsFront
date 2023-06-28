import * as React from "react";
import SVGImage from "./SVGImage";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { format } from "date-fns";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/system";
import { Sheet } from "@mui/joy";
import ClearIcon from "@mui/icons-material/Clear";

export default function BasicCard(props) {
  const [logoTeamHome, setLogoTeamHome] = React.useState([]);
  const [logoTeamVisitor, setLogoTeamVisitor] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoadingHome, setIsLoadingHome] = React.useState(true);
  const [isLoadingVisitor, setIsLoadingVisitor] = React.useState(true);
  const formattedDate = format(new Date(props.data.date), "dd/MM/yyyy");

  const urlHome = `http://localhost:8080/nbaStatsApi/api/v1/teams/search/logo/${props.data.home_team.id}`;
  const urlVisitor = `http://localhost:8080/nbaStatsApi/api/v1/teams/search/logo/${props.data.visitor_team.id}`;

  React.useEffect(() => {
    const fetchLogos = async () => {
      try {
        setIsLoadingHome(true);
        setIsLoadingVisitor(true);

        const homeResponse = await fetch(urlHome, { method: "GET" });
        const homeData = await homeResponse.json();
        setLogoTeamHome(homeData);

        const visitorResponse = await fetch(urlVisitor, { method: "GET" });
        const visitorData = await visitorResponse.json();
        setLogoTeamVisitor(visitorData);
      } catch (error) {
        console.error(error);
        setError("Ocorreu um erro ao buscar os logotipos das equipes.");
      } finally {
        setIsLoadingHome(false);
        setIsLoadingVisitor(false);
      }
    };

    fetchLogos();
  }, []);

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <Link to={"/games"} style={{ textDecoration: "none", color: "#000000" }}>
      <Card
        variant="outlined"
        sx={{
          minWidth: 320,
          "&:hover": {
            boxShadow: "10px 10px 15px #607d8b",
            borderRadius: "15px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              display: "flex",
              gap: 2,
              p: 2,
              borderRadius: "sm",
            }}
          >
            <div>
              {isLoadingHome ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height={400}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Link
                    to={`/teams/${props.data.home_team.id}`}
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        "&:hover": {
                          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                          borderRadius: "15px",
                        },
                      }}
                    >
                      <AspectRatio
                        sx={{
                          borderRadius: "sm",
                          minWidth: 75,
                        }}
                      >
                        <SVGImage svgString={logoTeamHome.imageSvg} />
                      </AspectRatio>

                      <Typography fontSize="lg" fontWeight="lg">
                        {props.data.home_team.full_name}
                      </Typography>
                    </Box>
                  </Link>
                  <Box
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Typography fontSize="large" fontWeight="lg" sx={{ p: 2 }}>
                      {props.data.home_team_score}
                    </Typography>
                  </Box>
                </Box>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ClearIcon
                fontSize="large"
                sx={{
                  marginTop: ".7rem",
                }}
              ></ClearIcon>
            </div>
            <div>
              {isLoadingVisitor ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height={400}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Typography fontSize="large" fontWeight="lg" sx={{ p: 2 }}>
                      {props.data.visitor_team_score}
                    </Typography>
                  </Box>
                  <Link
                    to={`/teams/${props.data.visitor_team.id}`}
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        "&:hover": {
                          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                          borderRadius: "15px",
                        },
                      }}
                    >
                      <AspectRatio
                        sx={{
                          borderRadius: "sm",
                          minWidth: 75,
                        }}
                      >
                        <SVGImage svgString={logoTeamVisitor.imageSvg} />
                      </AspectRatio>

                      <Typography fontSize="lg" fontWeight="lg">
                        {props.data.visitor_team.full_name}
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              )}
            </div>
          </Sheet>
          <Typography variant="caption" sx={{ marginLeft: "auto" }}>
            {formattedDate}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}
