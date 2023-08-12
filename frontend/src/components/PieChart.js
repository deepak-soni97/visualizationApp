import React, { useEffect, useState } from "react";
import{Pie} from 'react-chartjs-2';

function PieChart({chartData}) {
    const [countryData, setCountryData] = useState(null)
    const getLabels = ()=> {   
             return chartData?.map(item=> item.sector)
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
                datasets: [{
                    label: 'start_year',
                    data: getData('start_year'),
                  }
                ]
            })
        }
    },[chartData])

console.log(countryData);
    
    return(
         <div>
            {
            countryData && <Pie data={countryData} />
            }
        </div>)
}

export default PieChart