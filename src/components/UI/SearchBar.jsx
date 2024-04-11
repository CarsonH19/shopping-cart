import { useState } from "react";
import useHttp from "../../hooks/useHttp";
import classes from "./SearchBar.module.css";

const requestConfig = {};

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data: loadedItems } = useHttp(
      `https://fakestoreapi.com/products?search=${searchQuery}`,
      requestConfig,
      []
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={classes.search}
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
    </form>
  );
}
