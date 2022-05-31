import { ReactNode } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header";
import styles from "./Layout.module.scss";

// import Background from "../../items/assets/phases/1/f-iron_man_2/background.jpg";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        {/* <img src={Background} /> */}
      </div>
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
