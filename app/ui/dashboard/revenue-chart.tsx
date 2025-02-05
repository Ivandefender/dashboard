// "use client";
// import React, { useState } from "react";
import { lusitana } from "@/app/ui/fonts";
// import { Revenue } from "@/app/lib/definitions";
import { generateYAxis } from "@/app/lib/utils";
import { CalendarIcon } from "@heroicons/react/24/outline";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  PointElement,
  Tooltip,
  Legend,
  ArcElement, // Для кругової діаграми
} from "chart.js";
// import { Bar, Line, Pie } from "react-chartjs-2";
import { fetchRevenue } from "@/app/lib/data";

ChartJS.register(BarElement, LineElement, CategoryScale, PointElement, LinearScale, ArcElement, Title, Tooltip, Legend);
export default async function RevenueChart() {

  const revenue = await fetchRevenue()
  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);
  // const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  // console.log(yAxisLabels);

  // const chartData = {
  //   labels: revenue.map((month) => month.month),
  //   datasets: [
  //     {
  //       // axis: "y",
  //       label: "",
  //       data: revenue.map((month) => (chartHeight / topLabel) * month.revenue),
  //       backgroundColor: "rgba(75, 192, 192, 0.4)",
  //       borderColor: "rgba(75, 192, 192, 1)",
  //       borderWidth: 1,

  //       //   options: {
  //       //     scales: {
  //       //         y: {
  //       //             ticks: {
  //       //                 callback: function({100}, index, ticks) {
  //       //                     return '$' + 100;
  //       //                 }
  //       //             }
  //       //         }
  //       //     }
  //       // }
  //     },
  //   ],
  // };

  // const pieChartData = {
  //   labels: revenue.map((month) => month.month),
  //   datasets: [
  //     {
  //       data: revenue.map((month) => (chartHeight / topLabel) * month.revenue),
  //       backgroundColor: [
  //         "rgba(75, 192, 192, 0.4)",
  //         "rgba(255, 99, 132, 0.4)",
  //         "rgba(54, 162, 235, 0.4)",
  //         "rgba(255, 159, 64, 0.4)",
  //         "rgba(153, 102, 255, 0.4)",
  //         "rgba(255, 159, 64, 0.4)",
  //       ],
  //       borderColor: [
  //         "rgba(75, 192, 192, 1)",
  //         "rgba(255, 99, 132, 1)",
  //         "rgba(54, 162, 235, 1)",
  //         "rgba(255, 159, 64, 1)",
  //         "rgba(153, 102, 255, 1)",
  //         "rgba(255, 159, 64, 1)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  if (!revenue || !revenue.length) {
    return <p className="mt-4 text-gray-400">No data available</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Recent revenue</h2>
      <div className="rounded-xl bg-gray-50 p-4">
        {/* <div className="mb-4 flex space-x-2">
          <button
            onClick={() => setChartType("bar")}
            className={`px-4 py-2 rounded-md ${chartType === "bar" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Bar
          </button>
          <button
            onClick={() => setChartType("line")}
            className={`px-4 py-2 rounded-md ${chartType === "line" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Line
          </button>
          <button
            onClick={() => setChartType("pie")}
            className={`px-4 py-2 rounded-md ${chartType === "pie" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Pie
          </button>
        </div>

        {chartType === "bar" ? (
          <Bar
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            data={chartData}
          />
        ) : chartType === "line" ? (
          <Line
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            data={chartData}
          />
        ) : (
          <Pie
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            data={pieChartData}
          />
        )} */}

        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">{month.month}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
