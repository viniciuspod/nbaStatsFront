import React from "react";
import ContainerChartLine from "../../components/ContainerChartLine";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const WhiteFormControl = styled(FormControl)({
  "& .MuiInputBase-root": {
    border: '1px solid #ced4da',
  },
  "& .MuiFormLabel-root": {
    color: "white",
  },
  "& .MuiSelect-icon": {
    color: "white", 
  },
});

const Stats = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Container maxWidth="xl" pt={4}>
        <Grid Container pt={4} sx={{ display: "flex" }}>
          <Grid item xs={4} sx={{ width: "11rem" }}>
            <Box sx={{ p: 4 }}>
              <WhiteFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  sx={{color:"#fff"}}
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </WhiteFormControl>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Stats;
