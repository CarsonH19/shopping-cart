import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function CartItems({ item }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    const id = item.id;
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes["cart-item"]}>
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <div className={classes["cart-item-details"]}>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price.toFixed(2)} / Item </p>
        </div>
      </div>
      <p className={classes.close} onClick={handleRemoveItem}>
        X
      </p>
    </li>
  );
}
