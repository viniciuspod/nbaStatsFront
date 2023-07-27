import React from "react";

import { Sheet } from "@mui/joy";
import ReactApexChart from "react-apexcharts";
import { format } from "date-fns";
import { height } from "@mui/system";

const ContainerChart = (props) => {
  const series = [];
  const playerIds = [];
  const gamesDate = [];

  props.data.forEach((item) => {
    const formattedDate = format(new Date(item.game.date), "dd/MM/yyyy");
    const dateIndex = gamesDate.indexOf(formattedDate);
    const playerId = item.player.id;
    const playerIndex = playerIds.indexOf(playerId);

    if (playerIndex === -1) {
      // Player not found, add a new series entry
      playerIds.push(playerId);
      series.push({
        name: item.player.last_name,
        data: [item.pts],
      });
    } else {
      // Player found, add the points to existing series
      series[playerIndex].data.push(item.pts);
    }
    if (dateIndex === -1) {
      // Player not found, add a new series entry
      gamesDate.push(formattedDate);
    }
  });
  console.log(gamesDate);
  console.log(series);

  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      tickAmount: 15, 
      categories: gamesDate,
      labels: {
        rotate: -360, 
        style: {
          fontSize: "12px", 
        },
        offsetX: 20, 
      },
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
