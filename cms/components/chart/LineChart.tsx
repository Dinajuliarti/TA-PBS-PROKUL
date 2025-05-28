"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function LineChart() {
  const lineChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (lineChartRef.current) {
      const ctx = lineChartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: "Revenue",
                data: [120, 150, 180, 210, 240, 220, 250],
                borderColor: "#d97706",
                backgroundColor: "rgba(217, 119, 6, 0.1)",
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
                beginAtZero: false,
                grid: {
                  display: true,
                  color: "rgba(156, 163, 175, 0.2)",
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
          },
        });
      }
    }

    if (barChartRef.current) {
      const ctx = barChartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: [
              "Roti Manis",
              "Roti Gandum",
              "Roti Gluten",
              "Roti No Gluten",
              "Roti Tawar",
            ],
            datasets: [
              {
                label: "Sales",
                data: [120000, 190000, 80000, 50000, 100000],
                backgroundColor: [
                  "rgba(217, 119, 6, 0.7)",
                  "rgba(16, 185, 129, 0.7)",
                  "rgba(59, 130, 246, 0.7)",
                  "rgba(168, 85, 247, 0.7)",
                  "rgba(239, 68, 68, 0.7)",
                ],
                borderColor: [
                  "rgba(217, 119, 6, 1)",
                  "rgba(16, 185, 129, 1)",
                  "rgba(59, 130, 246, 1)",
                  "rgba(168, 85, 247, 1)",
                  "rgba(239, 68, 68, 1)",
                ],
                borderWidth: 1,
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
                grid: {
                  display: true,
                  color: "rgba(156, 163, 175, 0.2)",
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
          },
        });
      }
    }
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Kenaikan Jumlah Kunjungan</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">
              Yearly
            </button>
          </div>
        </div>
        <canvas ref={lineChartRef} height="250"></canvas>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Produk Disimpan User</h2>
        </div>
        <canvas ref={barChartRef} height="250"></canvas>
      </div>
    </div>
  );
}

export default LineChart;
