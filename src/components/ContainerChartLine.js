import React from "react";

import { Sheet } from "@mui/joy";
import ReactApexChart from "react-apexcharts";
import { format } from "date-fns";

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
      gamesDate.push(`game: ` + formattedDate);
    }
  });

  console.log(gamesDate);
  console.log(series);

  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      type: "category",
      categories: gamesDate,
      labels: {
        rotate: -45,
        formatter: function (value) {
          if (value && value.length > 10) {
            return value.substring(0, 11) + "...";
          }
          return value;
        },
      },
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          " - " +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ""
        );
      },
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          chart: {
            height: "auto",
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 600,
        options: {
          chart: {
            height: "auto",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <Sheet
      key="chart-sheet"
      variant="outlined"
      sx={{
        minWidth: "auto",
        minHeight: "auto",
        borderRadius: "sm",
        maxWidth: "100%",
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="line"
      ></ReactApexChart>
    </Sheet>
  );
};

export default ContainerChart;
