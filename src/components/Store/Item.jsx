// import classes from "./Item.module.css";

export default function Item({ item }) {
  return (
    <section>
       <div>
        <img src="" alt="" />
        <div>
          <h1>Item Name</h1>
          <p>Price</p>
          <input type="number" name="quantity" id="quantity" />
          <button>Add to Cart</button>
        </div>
       </div>
       <hr />
       <div>
        <h2>Description</h2>
        <p>Text</p>
       </div>
    </section>
  )
}