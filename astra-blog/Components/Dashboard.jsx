import Image from "next/image";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Total Viewers",
        data: [1200, 1900, 3000, 5000, 2000, 3000, 4000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
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
        text: "Weekly Total Viewers",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000,
        },
      },
    },
  };

  const data2 = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Total Reading",
        data: [120, 200, 400, 490, 150, 210, 370],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weekly Total Reading",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-4xl">DASHBOARD</h1>
      </div>

      <div className="flex flex-row justify-around items-center my-10 text-white">
        <div className="flex flex-row justify-around items-center p-4 mx-2 bg-slate-800 rounded-lg w-auto shadow-lg shadow-black">
          <div className="flex flex-col text-left">
            <p className="text-sm">Total Viewers</p>
            <div className="flex flex-row items-left my-2">
              <Image
                src="/assets/view.png"
                alt="view"
                width={30}
                height={20}
                className="filter invert"
              />
              <h2 className="text-xl font-semibold mx-2">12,345</h2>
            </div>
            <div className="flex flex-row justify-around items-center">
              <p className="text-sm">Since last week</p>
              <div className="flex flex-row bg-slate-300 w-auto p-1 mx-2">
                <p className="text-sm text-black">+5%</p>
                <Image
                  src="/assets/up.png"
                  alt="up"
                  width={15}
                  height={10}
                  className="mx-2"
                />
              </div>
            </div>
          </div>
          <Image
            src="/assets/graph.png"
            alt="statistics"
            width={30}
            height={30}
            className="filter invert mx-2"
          />
        </div>

        <div className="flex flex-row justify-around items-center p-4 mx-2 bg-slate-800 rounded-lg w-auto shadow-lg shadow-black">
          <div className="flex flex-col text-left">
            <p className="text-sm">Total Reading</p>
            <div className="flex flex-row items-left my-2">
              <Image
                src="/assets/view.png"
                alt="view"
                width={30}
                height={20}
                className="filter invert"
              />
              <h2 className="text-xl font-semibold mx-2">12,345</h2>
            </div>
            <div className="flex flex-row justify-around items-center">
              <p className="text-sm">Since last week</p>
              <div className="flex flex-row bg-slate-300 w-auto p-1 mx-2">
                <p className="text-sm text-black">-5%</p>
                <Image
                  src="/assets/down.png"
                  alt="down"
                  width={15}
                  height={10}
                  className="mx-2"
                />
              </div>
            </div>
          </div>
          <Image
            src="/assets/graph.png"
            alt="statistics"
            width={30}
            height={30}
            className="filter invert mx-2"
          />
        </div>
      </div>

      {/* Tambahkan margin antara parent */}
      <div className="flex justify-center items-center my-10 w-auto h-64">
        <Line data={data} options={options} className="p-2 border border-black shadow-lg shadow-black" />
      </div>

      <div className="flex justify-center items-center my-10 w-auto h-64">
        <Line data={data2} options={options2} className="p-2 border border-black shadow-lg shadow-black"/>
      </div>
    </div>
  );
};

export default Dashboard;