import * as React from "react";
import Image1Denver from "../img/Denver-Nuggets-Logo_adobe_express.svg";

import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { Sheet } from "@mui/joy";
import ClearIcon from "@mui/icons-material/Clear";

export default function BasicCard(props) {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            display: "flex",
            gap: 2,
            p: 2,
            minWidth: 300,
            borderRadius: "sm",
          }}
        >
          <Box
            sx={{
              flexBasis: "200px",
              textAlign: "center",
            }}
          >
            <AspectRatio
              sx={{
                borderRadius: "sm",
                overflow: "auto",
              }}
            >
              <img src={Image1Denver} />
            </AspectRatio>
            <Divider />
            <Typography fontSize="lg" fontWeight="lg">
              Denver Nuggets
            </Typography>
          </Box>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ClearIcon
              fontSize="large"
              sx={{
                marginTop: ".7rem",
              }}
            ></ClearIcon>
          </div>
          <Box
            sx={{
              flexBasis: "200px",
              textAlign: "center",
            }}
          >
            <AspectRatio
              sx={{
                borderRadius: "sm",
                overflow: "auto",
              }}
            >
              <img src={Image1Denver} />
            </AspectRatio>
            <Divider />
            <Typography fontSize="lg" fontWeight="lg">
              Denver Nuggets
            </Typography>
          </Box>
        </Sheet>
      </Box>
    </Card>
  );
}
