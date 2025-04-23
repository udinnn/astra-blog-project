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

      <div className="w-full h-full flex flex-row flex-grow justify-around items-center text-white mx-2 mb-10">
        <div className="flex flex-col justify-center items-center w-full h-min-content">
          {/* Grafik */}
          <div className="flex justify-center items-center my-10 w-full h-64">
            <Line
              data={data}
              options={options}
              className="p-4 border border-black shadow-lg shadow-black w-full h-full"
            />
          </div>

          {/* statistik */}
          <div className="flex flex-row justify-center items-center p-4 mx-2 bg-slate-800 rounded-lg w-auto shadow-lg shadow-black">
            <div className="flex flex-col text-left">
              <p className="text-sm">Total Viewers</p>
              <div className="flex flex-row items-left my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <g id="icomoon-ignore"></g>
              <path
                d="M27.995 1.073c-1.47 0-2.666 1.195-2.666 2.665 0 0.926 0.476 1.742 1.195 2.22l-5.040 13.284c-0.14-0.023-0.28-0.043-0.425-0.043-0.639 0-1.218 0.235-1.677 0.611l-5.043-4.166c0.199-0.373 0.322-0.792 0.322-1.244 0-1.47-1.196-2.666-2.666-2.666s-2.666 1.196-2.666 2.666c0 0.794 0.356 1.501 0.909 1.989l-5.374 9.36c-0.271-0.093-0.556-0.155-0.859-0.155-1.47 0-2.666 1.195-2.666 2.665 0 1.471 1.196 2.667 2.666 2.667s2.665-1.196 2.665-2.667c0-0.784-0.346-1.482-0.887-1.97l5.38-9.37c0.263 0.087 0.539 0.146 0.831 0.146 0.633 0 1.206-0.231 1.664-0.6l5.049 4.17c-0.194 0.37-0.314 0.783-0.314 1.228 0 1.47 1.196 2.666 2.666 2.666s2.666-1.196 2.666-2.666c0-0.946-0.499-1.773-1.243-2.247l5.032-13.263c0.157 0.029 0.317 0.048 0.482 0.048 1.47 0 2.666-1.196 2.666-2.667s-1.196-2.665-2.666-2.665zM4.005 29.861c-0.882 0-1.6-0.718-1.6-1.601 0-0.881 0.718-1.598 1.6-1.598s1.599 0.717 1.599 1.598c0 0.883-0.717 1.601-1.599 1.601zM11.995 16c-0.882 0-1.599-0.717-1.599-1.599s0.717-1.599 1.599-1.599 1.599 0.717 1.599 1.599-0.717 1.599-1.599 1.599zM21.059 23.464c-0.882 0-1.599-0.717-1.599-1.599s0.717-1.599 1.599-1.599 1.599 0.717 1.599 1.599c0 0.882-0.717 1.599-1.599 1.599zM27.995 5.338c-0.882 0-1.599-0.718-1.599-1.6 0-0.881 0.717-1.598 1.599-1.598s1.599 0.717 1.599 1.598c0 0.883-0.717 1.6-1.599 1.6z"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-min-content">
          {/* Grafik */}
          <div className="flex justify-center items-center my-10 w-full h-64">
            <Line
              data={data2}
              options={options2}
              className="p-4 border border-black shadow-lg shadow-black w-full h-full"
            />
          </div>

          {/* statistik */}
          <div className="flex flex-row justify-around items-center p-4 mx-2 bg-slate-800 rounded-lg w-auto shadow-lg shadow-black">
            <div className="flex flex-col text-left">
              <p className="text-sm">Total Readings</p>
              <div className="flex flex-row items-left my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h2 className="text-xl font-semibold mx-2">12,345</h2>
              </div>
              <div className="flex flex-row justify-around items-center">
                <p className="text-sm">Since last week</p>
                <div className="flex flex-row bg-slate-300 w-auto p-1 mx-2">
                  <p className="text-sm text-black">-5%</p>
                  <Image
                    src="/assets/down.png"
                    alt="up"
                    width={15}
                    height={10}
                    className="mx-2"
                  />
                </div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <g id="icomoon-ignore"></g>
              <path
                d="M27.995 1.073c-1.47 0-2.666 1.195-2.666 2.665 0 0.926 0.476 1.742 1.195 2.22l-5.040 13.284c-0.14-0.023-0.28-0.043-0.425-0.043-0.639 0-1.218 0.235-1.677 0.611l-5.043-4.166c0.199-0.373 0.322-0.792 0.322-1.244 0-1.47-1.196-2.666-2.666-2.666s-2.666 1.196-2.666 2.666c0 0.794 0.356 1.501 0.909 1.989l-5.374 9.36c-0.271-0.093-0.556-0.155-0.859-0.155-1.47 0-2.666 1.195-2.666 2.665 0 1.471 1.196 2.667 2.666 2.667s2.665-1.196 2.665-2.667c0-0.784-0.346-1.482-0.887-1.97l5.38-9.37c0.263 0.087 0.539 0.146 0.831 0.146 0.633 0 1.206-0.231 1.664-0.6l5.049 4.17c-0.194 0.37-0.314 0.783-0.314 1.228 0 1.47 1.196 2.666 2.666 2.666s2.666-1.196 2.666-2.666c0-0.946-0.499-1.773-1.243-2.247l5.032-13.263c0.157 0.029 0.317 0.048 0.482 0.048 1.47 0 2.666-1.196 2.666-2.667s-1.196-2.665-2.666-2.665zM4.005 29.861c-0.882 0-1.6-0.718-1.6-1.601 0-0.881 0.718-1.598 1.6-1.598s1.599 0.717 1.599 1.598c0 0.883-0.717 1.601-1.599 1.601zM11.995 16c-0.882 0-1.599-0.717-1.599-1.599s0.717-1.599 1.599-1.599 1.599 0.717 1.599 1.599-0.717 1.599-1.599 1.599zM21.059 23.464c-0.882 0-1.599-0.717-1.599-1.599s0.717-1.599 1.599-1.599 1.599 0.717 1.599 1.599c0 0.882-0.717 1.599-1.599 1.599zM27.995 5.338c-0.882 0-1.599-0.718-1.599-1.6 0-0.881 0.717-1.598 1.599-1.598s1.599 0.717 1.599 1.598c0 0.883-0.717 1.6-1.599 1.6z"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
