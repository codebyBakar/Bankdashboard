import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register chart components
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Title);

const PolarChart = () => {
  const data = {
    labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
    datasets: [
      {
        label: "Deposits",
        data: [30, 15, 35, 20],
        backgroundColor: ["#343c6a", "#fc7900", "#1814f3", "#fa00ff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Deposits Breakdown",
      },
    },
  };

  return (
    <div style={{ width: "100%",height:'100%' }}>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarChart;

