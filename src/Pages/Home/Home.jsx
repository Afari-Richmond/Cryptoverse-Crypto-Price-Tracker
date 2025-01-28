import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../Context/CoinContext";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === '') {
      setDisplayCoin(allCoin);
    }
  };
  // Handle the search feature and filter data based on input
  const searchHandler = async (e) => {
    // Prevent the form from refreshing the page
    e.preventDefault();
    // Filter the data based on the input and store the the result in coins variable
    const coins = await allCoin.filter((coin) => {
      return coin.name.toLowerCase().includes(input.toLowerCase());
    });
    // Set the displayCoin state to the filtered data
    setDisplayCoin(coins);
  };

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

        <form action="" onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            value={input}
            type="text"
            placeholder="Search crypto..."
            required
          />
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
            <>
              <div className="table-layout" key={index}>
                <p>{item.market_cap_rank}</p>

                <div>
                  <img src={item.image} alt="" />
                  <p>{item.name + " - " + item.symbol}</p>
                </div>

                <p>
                  {currency.symbol} {item.current_price.toLocaleString()}
                </p>
                <p
                  className={
                    item.market_cap_change_percentage_24h > 0
                      ? "positive"
                      : "negative"
                  }
                >
                  {Math.floor(item.market_cap_change_percentage_24h * 100) /
                    100}
                </p>
                <p className="marketCap">
                  {currency.symbol} {item.market_cap.toLocaleString()}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
