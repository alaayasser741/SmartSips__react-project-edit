import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const SecondChart = () => {
    const state={
    labels:['Very Satisfied', 'Satisfied', 'Poor','Very Poor'],
    datasets:[
        {   label: 'satisfaction of people %',
            borderWidth: 1,
            data:[30,40,20,10],
            backgroundColor: [
                '#0396A6',
                '#0B69BB',
                '#4B77B8',
                '#7DA9AF',
              ],
              borderColor: [
                '#0396A6',
                '#0B69BB',
                '#4B77B8',
                '#7DA9AF',
              ],
              hoverOffset: 4,

        },
    ]}
    const options={
        plugins:{
            legend:{
                display:true,
                position:"right",
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding:40,
                },
            },
            datalabels: {
                color:'white',
                formatter:(value)=>{
                    return value +'%';
                }
              },

        }
    }

    return ( <Pie type="bar" data={state} options={options} plugins={[ChartDataLabels]}/>);
}
 
export default SecondChart;