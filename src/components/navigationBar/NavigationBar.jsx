import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import "./navigationBar.styles.scss";

function NavigationBar() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="store logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavigationBar;
