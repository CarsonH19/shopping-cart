import Copyright from "./Copyright";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={classes.container}>
        <div className={classes.column}>
          <h4>Company</h4>
          <a href="#">Business</a>
          <a href="#">Partnership</a>
          <a href="#">Network</a>
        </div>
        <div className={classes.column}>
          <h4>Company</h4>
          <a href="#">Blogs</a>
          <a href="#">Channels</a>
          <a href="#">Sponsors</a>
        </div>
        <div className={classes.column}>
          <h4>Company</h4>
          <a href="#">Contact Me</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </footer>
      <Copyright />
    </>
  );
}
