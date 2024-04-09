import classes from "./Greeting.module.css";

export default function Greeting() {
  return (
    <section className={classes.greeting}>
      <h1>Your one-stop destination for all your shopping needs</h1>
      <p>Discover an unparalleled shopping experience with our extensive selection of products, unbeatable prices, and exceptional customer service. Shop now and transform your shopping journey with us.</p>
      <button>Shop now</button>
    </section>
  );
}
