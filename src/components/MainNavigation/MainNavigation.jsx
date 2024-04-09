import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../UI/SearchBar";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1>Store Name</h1>
      <SearchBar />
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
          <li>CART ICON</li>
        </ul>
      </nav>
    </header>
  );
}
