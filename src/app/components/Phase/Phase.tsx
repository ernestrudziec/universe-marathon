/* eslint-disable no-constant-condition */
import styles from "./Phase.module.scss";

import { ReactNode } from "react";
import { Tile, TileProps } from "../Tile";

export interface PhaseProps {
  children: ReactNode;
  title: JSX.Element;
  isFirst: boolean;
  isDone: boolean;
  optional: Array<TileProps>;
}

export const Phase = (props: PhaseProps) => {
  const { children, title, isFirst, isDone, optional } =
    props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.separator}>
        {!isFirst && <div className={styles.line} />}
        <div
          className={`${styles.dot} ${
            isDone && styles.isDone
          }`}
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <div className={styles.canonical}>{children}</div>
        {optional.length > 0 && (
          <div className={styles.optional}>
            <div className={styles.optionalWrapper}>
              <div className={styles.sideSeparator}>
                <div className={styles.sideLine} />
                <div
                  className={`${styles.sideDot} ${
                    isDone && styles.isDone
                  }`}
                />
                <h2 className={styles.title}>Optional</h2>
              </div>
              <div className={styles.optionalTilesWrapper}>
                {optional.map((tile) => (
                  <Tile key={tile.title} {...tile} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
