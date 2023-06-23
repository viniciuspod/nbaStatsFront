import { Box, Divider, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import BasicCard from "./BasicCard";
import { makeStyles } from "@mui/styles";
import ContainerChartLine from "./ContainerChartLine";
import { Typography } from "@mui/material";
import { Sheet } from "@mui/joy";
import ContainerTable from "./ContainerTable";

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

const ContainerMain = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#1A202C" }}>
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
          <Box
            sx={{
              p: 2,
            }}
          >
            <BasicCard />
          </Box>
          <Box
            sx={{
              p: 2,
            }}
          >
            <BasicCard />
          </Box>
          <Box
            sx={{
              p: 2,
            }}
          >
            <BasicCard />
          </Box>
          <Box
            sx={{
              p: 2,
            }}
          >
            <BasicCard />
          </Box>
          <Box
            sx={{
              p: 2,
            }}
          >
            <BasicCard />
          </Box>
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
        <Divider sx={{backgroundColor: "#fff", mt: 2}} />
        <Grid container spacing={1} pt={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                p: 2,
                maxWidth: "100%",
                overflow: "auto"
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
                <ContainerTable/>
              </Sheet>              
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContainerMain;
