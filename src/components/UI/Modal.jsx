import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from './Modal.module.css';
 
export default function Modal({ children }) {
 const dialog = useRef();
 
 useEffect(() => {
  const modal = dialog.current;

  if (open) {
    modal.showModal();
  }

  return () => modal.close();
}, [open]);
 
 return createPortal(
   <dialog ref={dialog} className={classes.dialog}>{children}</dialog>,
   document.getElementById("modal")
 );
}
