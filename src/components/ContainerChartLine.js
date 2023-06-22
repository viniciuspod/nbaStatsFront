import React from "react";
import { Sheet } from "@mui/joy";
import ReactApexChart from 'react-apexcharts';

const ContainerChart = () => {

  const series = [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}]

const options = {
    options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show:true
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      }
}

  return (
    <Sheet  
    variant="outlined"
    sx={{  
        minWidth: '40rem',
        minHeight: '25rem',
        borderRadius: "sm",
      }}>
        <ReactApexChart options={options} series={series} type="line" height={'100%'}  width={'100%'}/>
    </Sheet>
    
  )
};

export default ContainerChart;
