import * as React from "react";
import Image1Denver from "../img/Denver-Nuggets-Logo_adobe_express.svg";
import Image1Miami from "../img/Miami-Heat-logo_adobe_express.svg";

import { format } from "date-fns";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/system";
import { Sheet } from "@mui/joy";
import ClearIcon from "@mui/icons-material/Clear";

export default function BasicCard(props) {
  console.log(props);

  const formattedDate = format(new Date(props.data.date), "dd/MM/yyyy");

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
                <img src={Image1Denver} />
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
                <img src={Image1Miami} />
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
