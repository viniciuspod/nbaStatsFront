import React from "react";
import { Divider, Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const ContainerFooter = () => {
  return (
    <div style={{ backgroundColor: "#1A202C", }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}} >
            <Box
              sx={{
                p: 2,
                maxWidth: "100%",
              }}
            >
              <Typography variant="caption" sx={{ color: "#fff" }}>&copy; 2023 nbaStats. All rights reserved. | Terms of License: <a href="license.html">View License</a></Typography>
            </Box>
          </Grid>          
        </Grid>
      </Container>
    </div>
  );
};

export default ContainerFooter;
