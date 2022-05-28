/* eslint-disable no-constant-condition */
import styles from "./Phase.module.scss";

import { ReactNode } from "react";

export interface PhaseProps {
  children: ReactNode;
}

export const Phase = (props: PhaseProps) => {
  const { children } = props;

  return <div className={styles.wrapper}>{children}</div>;
};
