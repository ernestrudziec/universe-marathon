import styles from "./Logo.module.scss";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

interface LogoProps {
  size: "sm" | "md" | "lg";
}

export const Logo = ({ size = "md" }: LogoProps) => {
  return (
    <div className={styles.logo}>
      <LogoIcon width="200" height={{ sm: "50", md: "80", lg: "70" }[size]} />
    </div>
  );
};
