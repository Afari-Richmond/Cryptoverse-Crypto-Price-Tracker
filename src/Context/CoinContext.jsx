import { createContext, useState } from "react";

// Create the context
export const CoinContext = createContext();

// Create the provider component
const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const getAllCoins = async () => {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-4ZnTYGS32m9XDh8o1RQrudkA'}
      };
      
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
        .then(res => res.json())
        .then(res => setAllCoin(res))
        .catch(err => console.error(err));

  
      
  };
 

  const contextValue = {
    // Add values or functions you want to provide to the context
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
