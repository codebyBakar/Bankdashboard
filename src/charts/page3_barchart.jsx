import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Page3barchart = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Debit",
        data: [60, 45, 40, 70, 55, 50, 60],
        backgroundColor: "#1A45E8", // Blue
        borderRadius: 10,
        barThickness: 25,
      },
      {
        label: "Credit",
        data: [85, 70, 55, 50, 80, 40, 85],
        backgroundColor: "#FFA800", // Yellow/Orange
        borderRadius: 10,
        barThickness: 25,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
         align: "end",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
        },
      },
      title: {
        display: true,
        text: "$7,560 Debited & $5,420 Credited in this Week",
        align: "start",
        color: "#374151",
        font: {
          size: 14,
          weight: "500",
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#5A6A85",
          font: { size: 13 },
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div
      style={{
        height:"100%",
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: " 60px 10px 0px 10px",
        
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default Page3barchart;
