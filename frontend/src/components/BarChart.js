import React,{useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'


function BarChart({chartData}) {


  const [countryData, setCountryData] = useState(null)
  const getLabels = ()=> {   
           return chartData?.map(item=> item.region )
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
                  label: 'Likelihood',
                  data: getData('likelihood'),
                }
              ]
          })
      }
  },[chartData])

  return (
    <div>
        { countryData && <Bar data={countryData} />}
        </div>
  )
}

export default BarChart 