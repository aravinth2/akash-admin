import React from 'react';
import{Line} from 'react-chartjs-2';
import {
    Chart as chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

chartjs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)




function Linechart() {

  const data ={
    labels: ["Week 1","Week 2", "Week 3", "Week 4" ],
    datasets:[{
        data: [100,400,130,450,180],
        backgroundColor:'transparent',
        borderColor: 'rgb(238, 132, 132)' ,
        pontBorderColor : 'transparent',
        pointBorderWidth : 2,
        tension: 0.4,
        width:100,
        borderColor:'rgb(152, 216, 158)'
  },{
    data: [200,480,180,300,100],
    backgroundColor:'transparent',
    borderColor: 'rgb(246, 220, 125)' ,
    pontBorderColor : 'transparent',
    pointBorderWidth : 2,
    tension: 0.4,
    width:100,
    borderColor:'rgb(238, 132, 132)'
},
],
};

  const options = {
       plugins: {
        legend:false
       },
       scales:{
        x:{
            grid:{
                display:false
            }
        },
        y:{
            min: 100,
    max: 500,
    stepSize: 200,
    suggestedMin: 100,
    suggestedMax: 500,
    callback: function(label, index, labels) {
        switch (label) {
            case 0:
                return 'ZERO';
            case 1:
                return 'ONE';
            case 2:
                return 'TWO';
            case 3:
                return 'THREE';
            case 4:
                return 'FOUR';
            case 5:
                return 'FIVE';
        }
    }
        }
       }
  };
  return (
    <div style={{height:'220px', width:'100%',marginLeft:'8%',marginTop:'20px'}}>
        <Line data={data} options={options}></Line>
    </div>
  )
}

export default Linechart;