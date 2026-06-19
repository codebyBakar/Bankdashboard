import { Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Barchart = ()=>{
const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposit',
        data: [500, 350, 320, 500, 150,400,400],
        backgroundColor: '#1814f3',
        barThickness: 20,
        borderRadius: 10,
      },
      {
        label: 'Withdraw',
        data: [220, 130, 280, 380, 250, 250, 340],
        backgroundColor: '#16dbcc', 
        barThickness: 20,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        
        labels: {
          boxWidth: 10,
          boxHeight: 10,
           borderRadius: 50,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Weekly Activity',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 500,
        title: {
          display: false,
        },
        ticks: {
          stepSize: 100,
        },
      },
    },
   
  };

  return(<>
  <div style={{ width: '100%', height: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  </>)

}

export default Barchart