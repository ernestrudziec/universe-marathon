import { ReactNode } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header";
import styles from "./Layout.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { f_iron_manBackground } from "../../data/assets";

interface LayoutProps {
  children: ReactNode;
  hover: string | null;
}

export const Layout = ({
  children,
  hover,
}: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <AnimatePresence>
          <motion.img
            key={hover}
            src={hover || f_iron_manBackground}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 100 }}
          />
        </AnimatePresence>
      </div>
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
