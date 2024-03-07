import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
 export const Button = 
    (
      {className,...props}: 
      ButtonHTMLAttributes<HTMLButtonElement>
    ) => {
 return (
    <button 
       className={clsx(styles.button, className)} {...props}>
       {props.children}
    </button>
  );
};
