import React from "react";

import { Sheet } from "@mui/joy";
import ReactApexChart from "react-apexcharts";
import { format } from "date-fns";
import { useTheme, useMediaQuery } from "@mui/material";

const ContainerChart = (props) => {
  const series = [];
  const playerIds = [];
  const gamesDate = [];

  props.data.forEach((item) => {
    const formattedDate = format(new Date(item.game.date), "dd/MM/yyyy");
    const dateIndex = gamesDate.indexOf(formattedDate);
    const playerId = item.player.id;
    const playerIndex = playerIds.indexOf(playerId);
    const playerVal = props.playerVal[playerIndex]; // Assuming props.playerVal is an array of strings

    const val = item[playerVal];

    if (playerIndex === -1) {
      // Player not found, add a new series entry
      const valInicial = item[props.playerVal[playerIds.length]]
      playerIds.push(playerId);
      series.push({
        name: item.player.last_name,
        data: [valInicial],
      });
    } else {
      // Player found, add the points to existing series
      series[playerIndex].data.push(val);
    }
    if (dateIndex === -1) {
      // Player not found, add a new series entry
      gamesDate.push(formattedDate);
    }
  });

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const tickAmountTotal = gamesDate.length * 0.15;
  const maxTickAmount = 15;
  const finalTickAmountTotal = Math.min(tickAmountTotal, maxTickAmount);

  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      tickAmount: finalTickAmountTotal, 
      categories: gamesDate.length > 0 ? gamesDate : [],
      labels: {
        rotate: isSmScreen ? -45 : -360, 
        style: {
          fontSize: "12px", 
        },
        offsetX: 20, 
      },
    },
    stroke: {
      width: 2, // Espessura das linhas
    },
  };

  return (
    <Sheet
      key="chart-sheet"
      variant="outlined"
      sx={{ 
        borderRadius: "sm",
        height:"100%"
      }}
    >
      <ReactApexChart
        options={options}
        height={"100%"}
        series={series}
      ></ReactApexChart>
    </Sheet>
  );
};

export default ContainerChart;
