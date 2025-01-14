import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Cyrpto Marketplace
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
          <p style={{textAlign:"center"}}>24Hr Change</p>
          <p className="marketCap">Market Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
