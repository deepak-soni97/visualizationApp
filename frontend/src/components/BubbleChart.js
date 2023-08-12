import React, { useEffect, useState } from "react";
import{Bar} from 'react-chartjs-2';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement , LineElement, Title, Tooltip, ArcElement, Legend} from 'chart.js' 


ChartJs.register =( CategoryScale, LinearScale, PointElement , LineElement, Title, Tooltip, ArcElement, Legend)
const options = {
    plugins:{
        legend: {
            position: 'top'
        },
        title:{
            display: true,
            text: 'Intensity'
        },
    },
    responsive: true,
    interaction: {
        // mode: 'index' as const,
        intersect: false,
      },
        scales: {
             x:{ 
                stacked: true,
            },
             y:{
                stacked: true,
                // beginAtZero: true
                }
        
    }
}

function BubbleChart({chartData}) {
    const [countryData, setCountryData] = useState(null)
    const getLabels = ()=> {   
             return chartData?.map(item=> item.topic)
        }

const getData = (key)=> {   
             return chartData.map(item=>{
                return item[key]
             })
        }

    useEffect(()=>{
        if(chartData){
            setCountryData({
                labels: [...new Set(getLabels().filter((value)=> value))],
                datasets: [
                   
                  {
                    label: 'end_year',
                    data: getData('end_year'),
                    backgroundColor: 'rgb(53, 162, 235)',
                    stack: 'Stack 0',
                        // borderColor: [
                        // 'rgba(0,0,0,1)'],
                        // borderWidth: 1 
                  },
                   {
                    label: 'Intensity',
                    data: getData('intensity'),
                    backgroundColor: 'rgb(255, 99, 132)',
                    stack: 'Stack 0',
                        // borderColor: 'rgb(75, 192, 192)',
                        // borderWidth: 1
                  }
                  
                ]
            })
        }
    },[chartData])

    
    return(
         <div>
            {
            countryData && <Bar options={options} data={countryData} />
            }
        </div>)
}

export default BubbleChart