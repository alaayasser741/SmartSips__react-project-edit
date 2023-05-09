import React from "react";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
  } from 'chart.js';
import { Chart } from 'react-chartjs-2';
ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );
const FristChart = () => {
    const state={
    labels:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets:[
        {
            type:'line',
            label:'Average',
            borderColor:'#0B69BB',
            borderWidth: 2,
            fill: false,
            data:[50,70,90,50,60,70,20]
        },
        {
            type:'bar',
            label:'Total Sales',
            backgroundColor:'#0396A6',
            borderWidth: 2,
            fill: false,
            data:[50,70,90,50,60,70,20]
        },
    ]}
    const options={
        plugins:{
            legend:{
                display:true,
                position:"bottom",
                labels: {
                    usePointStyle: true,
                  },
            }
        }
    }

    return ( <Chart type="bar" data={state} options={options} />);
}
 
export default FristChart;