// import classes from "./Cart.module.css";
import Modal from "../UI/Modal"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export default function Cart() {
  const numberOfItems = useSelector((state) => state.cart.totalQuantity)

  return (
    <Modal>
      <h1>Cart ({numberOfItems})</h1>
      CART ITEMS
      <p>Total</p>
      <button>Checkout</button>
      <p>X</p>
    </Modal>
  )
}