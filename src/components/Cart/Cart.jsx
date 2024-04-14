import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import CartItem from "./CartItem";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const numberOfItems = useSelector((state) => state.cart.totalQuantity);

  const totalPrice = cartItems.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, 0);

  const handleCloseModal = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Modal className={classes.cart}>
      <p className={classes.close} onClick={handleCloseModal}>
        X
      </p>

      <div>
        <h1>Cart ({numberOfItems})</h1>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className={classes.checkout}>
        <button className={classes.button}>Checkout</button>
        <p className={classes.total}>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </Modal>
  );
}
