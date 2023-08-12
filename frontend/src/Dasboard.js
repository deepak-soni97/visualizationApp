import React from 'react';
import { Bar } from 'react-chartjs-2';

const chartData = {
  labels: ['USA', 'Canada', 'UK', 'Australia', 'India'],
  datasets: [
    {
      label: 'Intensity',
      data: [4, 7, 5, 9, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

function Dashboard() {
  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default Dashboard;
