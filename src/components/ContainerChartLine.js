import React from "react";
import { Sheet } from "@mui/joy";
import ReactApexChart from "react-apexcharts";
import { width } from "@mui/system";

const ContainerChart = () => {
  const series = [
    {
      name: "Lebron",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: "Kobe",
      data: [5, 20, 23, 41, 19, 52, 69, 71, 158],
    },
  ];

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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
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
      variant="outlined"
      sx={{
        minWidth: "auto",
        minHeight: "auto",
        borderRadius: "sm",
        maxWidth: '100%'
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="line"
      />
    </Sheet>
  );
};

export default ContainerChart;
