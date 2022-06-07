import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>
          Ernest Rudziec & Pawel Pisulski
          <br />
          Bingeverse | 2022
        </span>
      </div>
    </footer>
  );
};
