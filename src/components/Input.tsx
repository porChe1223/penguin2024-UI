import { ChangeEvent } from "react";
import styles from "./Input.module.css";
export const Input = (props: {
  value?: string;
  label?: string;
  type?: "text" | "password";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles.container}>
      <label>{props.label}</label>
      <input
        type={props.type || "text"}
        value={props.value}
        onChange={props.onChange}
        className={styles.input}
      />
    </div>
  );
};
