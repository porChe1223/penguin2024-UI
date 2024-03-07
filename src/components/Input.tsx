import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import clsx from "clsx";
export const Input = ({
   className,
   ...props
   }: { label: string } & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.container}>
      <label>{props.label}</label>
      <input className={clsx(styles.input, className)} {...props} />
    </div>
  );
};

