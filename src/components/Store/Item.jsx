import classes from "./Item.module.css";

export default function Item({ item }) {
  console.log(item);

  return (
    <section className={classes["item-container"]}>
      <div className={classes.item}>
        <img src={item.image} alt={item.title} />
        <div className={classes["item-info"]}>
          <h1>{item.title}</h1>
          <p className={classes.price}>${item.price.toFixed(2)}</p>
          <div className={classes.quantity}>
            <label htmlFor="number">Quantity:</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="1"
            />
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
      <hr />
      <div className={classes["item-details"]}>
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </section>
  );
}
