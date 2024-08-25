import React from "react";
import StockChart from "../Dashboard/StockChart/StockChart";
import "./index.css";

function Dashboard({ stocks }) {
  const totalValue = stocks.reduce(
    (acc, stock) => acc + stock.price * stock.quantity,
    0
  );

  return (
    <div className="dashboard">
      <h2 className="dashboard-heading">Dashboard</h2>
      <p className="portfolio-value">
        Total Portfolio Value: ${totalValue.toFixed(2)}
      </p>
      <StockChart stocks={stocks} />
    </div>
  );
}

export default Dashboard;
