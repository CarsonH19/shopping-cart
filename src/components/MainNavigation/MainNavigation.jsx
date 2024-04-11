import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../UI/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1>Store Name</h1>
      <SearchBar />
      <div className={classes['nav-links']}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/store"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Store
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes['cart-box']}>
          <FontAwesomeIcon icon={faCartShopping} fontSize="26px" cursor="pointer" />
          <span className={classes['cart-quantity']}>0</span>
        </div>
      </div>
    </header>
  );
}
