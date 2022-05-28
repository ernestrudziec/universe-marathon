import { ReactNode } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};