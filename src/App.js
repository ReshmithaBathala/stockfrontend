import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import TradeForm from "./components/TradeForm/TradeForm";
import StockList from "./components/StockList/StockList";
import "./App.css";

function App() {
  const [stocks, setStocks] = useState([]);
  const apiurl = process.env.API_URL;

  useEffect(() => {
    fetch("https://stockbackend-0bjb.onrender.com/")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, [apiurl]);

  const handleBuy = (symbol, amount) => {
    fetch("https://stockbackend-0bjb.onrender.com/buy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symbol, amount }),
    })
      .then((response) => response.json())
      .then((updatedStock) => {
        setStocks(
          stocks.map((stock) =>
            stock.symbol === updatedStock.symbol ? updatedStock : stock
          )
        );
      });
  };

  const handleSell = (symbol, amount) => {
    fetch("https://stockbackend-0bjb.onrender.com/sell", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symbol, amount }),
    })
      .then((response) => response.json())
      .then((updatedStock) => {
        setStocks(
          stocks.map((stock) =>
            stock.symbol === updatedStock.symbol ? updatedStock : stock
          )
        );
      });
  };

  return (
    <div className="app">
      <h1 className="stock-heading">Stock Market Application</h1>
      <Dashboard stocks={stocks} />
      <StockList stocks={stocks} />
      <TradeForm onBuy={handleBuy} onSell={handleSell} />
    </div>
  );
}

export default App;
