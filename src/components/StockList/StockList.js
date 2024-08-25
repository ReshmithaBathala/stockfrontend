import React from "react";
import "./index.css";

function StockList({ stocks }) {
  return (
    <div className="stockList">
      <h2 className="stock-head">Available Stocks</h2>
      <ul className="stock-ul-container">
        {stocks.map((stock) => (
          <li key={stock.symbol} className="stock-li-item">
            {stock.name} ({stock.symbol}): ${stock.price} <br />
            <br /> Quantity: {stock.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockList;
