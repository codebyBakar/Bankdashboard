import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const SmoothLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(0, 0, 255, 0.2)");
      gradient.addColorStop(1, "rgba(0, 0, 255, 0)");
      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Monthly Growth",
        data: [200, 400, 350, 800, 300, 600, 650],
        fill: true,
        borderColor: "blue",
        tension: 0.4, // smooth line
        borderWidth: 2,
        pointRadius: 0, // hide points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
       
        borderRadius: "16px",
        
      }}
    >
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default SmoothLineChart;
