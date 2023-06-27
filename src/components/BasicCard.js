import * as React from "react";
import SVGImage from "./SVGImage";

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
  const formattedDate = format(new Date(props.data.date), "dd/MM/yyyy");

  const urlHome = `http://localhost:8080/nbaStatsApi/api/v1/teams/search/logo/${props.data.home_team.id}`;
  const urlVisitor = `http://localhost:8080/nbaStatsApi/api/v1/teams/search/logo/${props.data.visitor_team.id}`;

  React.useEffect(() => {
    const fetchLogos = async () => {
      try {
  
        const homeResponse = await fetch(urlHome, { method: "GET" });
        const homeData = await homeResponse.json();
        setLogoTeamHome(homeData);
  
        const visitorResponse = await fetch(urlVisitor, { method: "GET" });
        const visitorData = await visitorResponse.json();
        setLogoTeamVisitor(visitorData);
      } catch (error) {
        console.error(error);
        setError("Ocorreu um erro ao buscar os logotipos das equipes.");
      } 
    };
  
    fetchLogos();
  }, []); 

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <Card variant="outlined" sx={{ minWidth: 320 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}
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
          <Box sx={{ display: "flex", alignItems: "center"}}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <AspectRatio
                sx={{
                  borderRadius: "sm",
                  minWidth: 75
                }}
              >
                <SVGImage svgString={logoTeamHome.imageSvg}/>
              </AspectRatio>

              <Typography fontSize="lg" fontWeight="lg">
                {props.data.home_team.full_name}
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography fontSize="large" fontWeight="lg" sx={{p:2}}>
                {props.data.home_team_score}
              </Typography>
            </Box>
          </Box>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ClearIcon
              fontSize="large"
              sx={{
                marginTop: ".7rem",
              }}
            ></ClearIcon>
          </div>
          <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography fontSize="large" fontWeight="lg" sx={{p:2}}>
                {props.data.visitor_team_score}
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <AspectRatio
                sx={{
                  borderRadius: "sm",
                  minWidth: 75
                }}
              >
                <SVGImage svgString={logoTeamVisitor.imageSvg}/>
              </AspectRatio>

              <Typography fontSize="lg" fontWeight="lg">
                {props.data.visitor_team.full_name}
              </Typography>
            </Box>
          </Box>
        </Sheet>
        <Typography variant="caption" sx={{ marginLeft: "auto" }}>
          {formattedDate}
        </Typography>
      </Box>
    </Card>
  );
}
