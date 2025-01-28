import "./NavBar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { useContext } from "react";
import { CoinContext } from "../../Context/CoinContext";

const NavBar = () => {
  const { setCurrency } = useContext(CoinContext);

  const changeCurrencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }

      case "eur": {
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      }
      case "inr": {
        setCurrency({
          name: "inr",
          symbol: "₹",
        });
        break;
      }

      default:
        setCurrency({
          name: "usd",
          symbol: "$",
        });
    }
  };

  return (
    <div className="navBar">
      <img src={logo} alt="" className="navImg" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select name="" id="" onChange={changeCurrencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EURO</option>
          <option value="inr">INR</option>
        </select>

        <button>
          Sign Up <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
