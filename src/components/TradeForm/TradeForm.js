import React, { useState } from "react";
import "./index.css";

function TradeForm({ onBuy, onSell }) {
  const [symbol, setSymbol] = useState("");
  const [amount, setAmount] = useState("");
  const [buyMessage, setBuyMessage] = useState("");
  const [sellMessage, setSellMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount > 0) {
      if (e.target.name === "buy") {
        onBuy(symbol, parseInt(amount));
        setBuyMessage("Stock is successfully bought");
        setTimeout(() => {
          setBuyMessage("");
        }, 3000);
      } else if (e.target.name === "sell") {
        onSell(symbol, parseInt(amount));
        setSellMessage("Stock sold Successfully");
        setTimeout(() => {
          setSellMessage("");
        }, 3000);
      }
      setSymbol("");
      setAmount("");
    }
  };

  return (
    <div className="tradeForm">
      <form className="form-container">
        <h3 className="stock">Buy Stocks</h3>
        <label className="label">
          Stock Symbol:
          <br />
          <input
            type="text"
            value={symbol}
            className="input"
            placeholder="Enter Symbol Amount"
            onChange={(e) => setSymbol(e.target.value)}
          />
        </label>
        <label className="label">
          Amount:
          <br />
          <input
            type="number"
            value={amount}
            className="input"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <p className="message">{buyMessage}</p>
        <button name="buy" onClick={handleSubmit} className="submit-btn">
          Buy
        </button>
      </form>
      <h2 className="trade-heading">
        T<br />r<br />
        a<br />
        d<br />e<br />
        <br /> S<br />
        t<br />
        o<br />
        c<br />
        k<br />s
      </h2>
      <h2 className="trade-heading-small">Trade Stocks</h2>
      <form className="form-container">
        <h3 className="stock-sell">Sell Stocks</h3>
        <label className="label">
          Stock Symbol:
          <br />
          <input
            type="text"
            value={symbol}
            className="input"
            placeholder="Enter Company Symbol"
            onChange={(e) => setSymbol(e.target.value)}
          />
        </label>
        <label className="label">
          Amount:
          <br />
          <input
            type="number"
            value={amount}
            className="input"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <p className="message">{sellMessage}</p>
        <button name="sell" onClick={handleSubmit} className="submit-sell-btn">
          Sell
        </button>
      </form>
    </div>
  );
}

export default TradeForm;
