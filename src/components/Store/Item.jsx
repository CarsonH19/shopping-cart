// import classes from "./Item.module.css";

import { json } from 'react-router-dom';

export default function Item({ item }) {
  console.log(item);

  return (
    <section>
       <div>
        <img src={item.image} alt={item.title} />
        <div>
          <h1>{item.title}</h1>
          <p>{item.price}</p>
          <input type="number" name="quantity" id="quantity" />
          <button>Add to Cart</button>
        </div>
       </div>
       <hr />
       <div>
        <h2>Description</h2>
        <p>{item.description}</p>
       </div>
    </section>
  )
}

