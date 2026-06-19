import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

const MonthlyBarChart = () => {
  const labels = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];
  const dataValues = [8000, 10000, 9000, 7000, 12500, 9500];

  // Highlight the "Dec" bar (index 4)
  const activeIndex = 4;

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: labels.map((_, i) =>
          i === activeIndex ? "#16dbcc" : "rgba(0,0,0,0.05)"
        ),
        borderRadius: 12,
        borderSkipped: false,
        barThickness: 32,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#718EBF", font: { size: 12 } },
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
       
       
        
        position: "relative",
      }}
    >
      {/* Value above active bar */}
      <div
        style={{
          position: "absolute",
          top: "25px",
          left: "calc(50% + 35px)",
          transform: "translateX(-50%)",
          fontWeight: "600",
          color: " #232323",
          fontSize: "14px",
        }}
      >
        ${dataValues[activeIndex].toLocaleString()}
      </div>

      <Bar data={data} options={options} />
    </div>
  );
};

export default MonthlyBarChart;
