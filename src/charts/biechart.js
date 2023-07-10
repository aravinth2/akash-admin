import React from 'react';
import {Chart as ChartJS,ArcElement,Legend,Tooltip} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement,Legend,Tooltip)

export const data = {
     labels:['Basic Tees','Custom Short Pants','Super Hoodies'],
    datasets:[
        {
        position: 'right',
        label:'colors',
        data:[14,31,55],
        backgroundColor:[
            'rgb(238, 132, 132)',
            'rgb(246, 220, 125)',
            'rgb(152, 216, 158)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    },
  ],
};

function Biechart() {
  return (
    <div style={{height:'180px',width:'100%',display:'flex',flexDirection:'column',marginLeft:'150px'}}>
        < Pie data={data} />
    </div>
  );
}

export default Biechart;