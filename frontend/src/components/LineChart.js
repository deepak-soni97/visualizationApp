import React, { useEffect, useState } from "react";
import{Line} from 'react-chartjs-2';

function LineChart({chartData}) {
    const [countryData, setCountryData] = useState(null)
    const getLabels = ()=> {   
             return chartData?.map(item=> item.country )
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
                    label: 'Intensity',
                    data: getData('intensity'),
                  }
                ]
            })
        }
    },[chartData])

console.log(countryData);
    
    return(
         <div>
            {
            countryData && <Line  data={countryData} />
            }
        </div>)
}

export default LineChart