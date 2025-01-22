import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../Context/CoinContext";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the largest cryptoCurrency marketplace. Sign up to explore
          more abot cryptos
        </p>

        <form action="">
          <input type="text" placeholder="Search crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24Hr Change</p>
          <p className="marketCap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => {
          return (
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
