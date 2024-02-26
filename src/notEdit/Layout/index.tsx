import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./index.module.css";
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={styles["children-container"]}>{children}</main>
      <Footer />
    </>
  );
};
