/* eslint-disable no-constant-condition */
import styles from "./Tile.module.scss";
import { ReactComponent as NetflixIcon } from "../../../assets/platforms/netflix.svg";
import { ReactComponent as AmazonPrimeIcon } from "../../../assets/platforms/amazon_prime.svg";
import { ReactComponent as HBOIcon } from "../../../assets/platforms/hbo.svg";

import { Item, PhaseShow } from "../../../data/types";
import { toggleItem } from "../../store/slices/itemsSlice";

import { useDispatch, useSelector } from "react-redux";
import {
  selectItemById,
  selectItems,
} from "../../store/selectors";
import { useEffect } from "react";

export interface TileProps {
  data: Item | PhaseShow;
  isChecked: boolean;
  isOptional: boolean;
  onHover: (title: string | null) => void;
}

export const Tile = (props: TileProps) => {
  const { data, isOptional, onHover } = props;
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const itemState = useSelector(selectItemById)(data.id);

  return (
    <div
      onClick={() => dispatch(toggleItem({ id: data.id }))}
      onMouseEnter={() => onHover(data.background ?? null)}
      className={`${styles.wrapper} ${
        isOptional && styles.isOptional
      }`}
    >
      <div className={styles.thumbnail}>
        <div className={styles.platforms}>
          <NetflixIcon />
          <AmazonPrimeIcon />
          <HBOIcon />
        </div>
        <div className={styles.year}>{data.genre}</div>
        <img src={data.cover} />
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>
          <h3>{data.title}</h3>
          {/* <h4>{subtitle}</h4> */}
        </div>
        <div className={styles.actions}>
          {/* <button className={styles.checkbox}>
            {isChecked ? (
              <FullCheckboxIcon width={20} height={20} />
            ) : (
              <EmptyCheckboxIcon width={20} height={20} />
            )}
          </button> */}
        </div>
      </div>
    </div>
  );
};
