"use client";
import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title
);

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy previous instance to avoid duplicates
    }

    const ctx = chartRef.current.getContext("2d");

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(21, 99, 223,0.2)");
    gradient.addColorStop(1, "rgba(21, 99, 223,0)");

    // Chart data
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [
              42, 45, 70, 65, 140, 130, 145, 145, 160, 135, 140, 130, 135, 140,
              250,
            ],
            backgroundColor: gradient,
            borderColor: "#f1913d",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartInstance.current.destroy(); // Cleanup on unmount
    };
  }, []);

  return <canvas ref={chartRef} id="lineChart"></canvas>;
};

export default LineChart;
