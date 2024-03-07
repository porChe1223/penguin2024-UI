import { Input } from "./Input";
import { Button } from "./Button";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  return (
    <form className={styles.container}>
      <Input label="ユーザー名" />
      <Input label="パスワード" type="password" className={styles["password-input"]}/>
      <Button type="submit" className={styles["login-button"]}>
        ログイン
      </Button>
    </form>
  );
};
