import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ThirdChart = (props) => {
    const state={
        datasets:[
            { 
                borderWidth: 1,
                data:[props.number,70],
                backgroundColor: [
                    'white',
                    '#0396A6',
                  ],
                  borderColor: [
                    'white',
                    '#0396A6'
                  ],
            },
        ]}
    return ( <Doughnut data={state}/> );
}
 
export default ThirdChart;