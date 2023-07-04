import React from "react";
import ContainerChartLine from "../../components/ContainerChartLine";

import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Sheet } from "@mui/joy";
import { Box, Container, Grid, Typography } from "@mui/material";

const Stats = () => {
  return (
    <div>
      <Container maxWidth="xl" pt={4}>
        <Grid Container pt={4}>
          <Grid item xs={12}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  gap: 2,
                  p: 2,
                  borderRadius: "sm",
                  backgroundColor: "#1A202C",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "#fff", textAlign: "left" }}
                >
                  Define Parameters
                </Typography>
                <Grid
                  Container
                  p={2}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box sx={{ p: 1 }}>
                      <Typography sx={{ color: "#fff", textAlign: "left" }}>
                        Data Type
                      </Typography>
                      <Select defaultValue="season">
                        <Option value="season">Season</Option>
                        <Option value="custom">Custom</Option>
                      </Select>
                    </Box>
                  </Grid>
                  <Box sx={{ display: "flex", marginTop: "auto" }}>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box sx={{ p: 1 }}>
                        <Select defaultValue="2022-23">
                          {Array.from({ length: 76 }, (_, index) => {
                            const startYear = 2022 - index;
                            const endYear = startYear + 1;
                            const optionValue = `${startYear}-${endYear}`;
                            return (
                              <Option key={optionValue} value={optionValue}>
                                {optionValue}
                              </Option>
                            );
                          })}
                        </Select>
                      </Box>
                    </Grid>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ color: "#fff" }}>To</Typography>
                    </div>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box sx={{ p: 1 }}>
                        <Select defaultValue="dog">
                          <Option value="dog"></Option>
                          <Option value="cat"></Option>
                        </Select>
                      </Box>
                    </Grid>
                  </Box>
                </Grid>
              </Sheet>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Stats;
