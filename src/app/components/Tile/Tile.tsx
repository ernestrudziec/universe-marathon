/* eslint-disable no-constant-condition */
import styles from "./Tile.module.scss";
import { ReactComponent as NetflixIcon } from "../../../assets/platforms/netflix.svg";
import { ReactComponent as AmazonPrimeIcon } from "../../../assets/platforms/amazon_prime.svg";
import { ReactComponent as HBOIcon } from "../../../assets/platforms/hbo.svg";

import { ReactComponent as EmptyCheckboxIcon } from "../../../assets/icons/empty_checkbox.svg";
import { ReactComponent as FullCheckboxIcon } from "../../../assets/icons/full_checkbox.svg";

import { ReactComponent as TrailerIcon } from "../../../assets/icons/trailer.svg";

export interface TileProps {
  thumbnail: string;
  title: string;
  subtitle: string;
  year: number;
  isChecked: boolean;
}

export const Tile = (props: TileProps) => {
  const { thumbnail, title, subtitle, year, isChecked } =
    props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.thumbnail}>
        <div className={styles.platforms}>
          <NetflixIcon />
          <AmazonPrimeIcon />
          <HBOIcon />
        </div>
        <div className={styles.year}>{year}</div>
        <img src={thumbnail} />
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
        <div className={styles.actions}>
          <button className={styles.trailer}>
            <TrailerIcon />
          </button>
          <button className={styles.checkbox}>
            {isChecked ? (
              <FullCheckboxIcon width={30} height={30} />
            ) : (
              <EmptyCheckboxIcon width={30} height={30} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
