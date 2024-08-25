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
  Filler,
} from "chart.js";
import "./index.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function StockChart({ stocks }) {
  const labels = stocks.map((stock) => stock.symbol);
  const prices = stocks.map((stock) => stock.price);
  const quantities = stocks.map((stock) => stock.quantity);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Price",
        data: prices,
        borderColor: "#ffffff",
        backgroundColor: "#A27DCB",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "Quantity",
        data: quantities,
        borderColor: "#ffffff",
        backgroundColor: "#709E56",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div
      style={{
        backgroundColor: "#E6EEE1",
        padding: "20px",
        borderRadius: "10px",
      }}
      className="chart-container"
    >
      <h2 style={{ color: "black" }}>Stock Prices and Quantities</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default StockChart;
