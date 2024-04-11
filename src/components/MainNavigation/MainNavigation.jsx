import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../UI/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

export default function MainNavigation() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleCartClick = () => {
    dispatch(uiActions.toggle());
  }

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
