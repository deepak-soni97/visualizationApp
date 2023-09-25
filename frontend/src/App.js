import { useEffect, useState } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import BubbleChart from './components/BubbleChart';
function App() {
  const [chartData, setChartData] = useState(null)

  useEffect(()=>{
   if(!chartData) fetch("http://localhost:8080/api/data").then((result)=>{
      result.json().then((res)=>{
        setChartData(res.data)
      })
    })
  },[])


 
  return (
    <div className="App"> 
    {chartData ? <div style={{ width: 700 }} >
      <BarChart chartData={chartData} />
      <LineChart chartData={chartData} />
      <PieChart chartData={chartData} />
      <BubbleChart chartData={chartData}/>

    </div> : <h4>Loading...</h4>}
    </div>
  );
}


export default App;
