/* eslint-disable no-constant-condition */
import styles from "./Tile.module.scss";
import { ReactComponent as Checkmark } from "../../../assets/icons/checkmark.svg";
import { ReactComponent as Eye } from "../../../assets/icons/eye.svg";
import { ReactComponent as Lock } from "../../../assets/icons/lock.svg";
import { ReactComponent as Skip } from "../../../assets/icons/skip.svg";

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
  const item = useSelector(selectItemById)(data.id);

  const state = item.state;
  const isBlocked = false;
  const isWatched = state === "watched";
  const isNotWatched = state === "not_watched";
  const isSkipped = state === "skipped";

  // useEffect(() => {
  //   console.log({ item });
  // }, [item]);

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
          {isWatched && (
            <div className={styles.watched}>
              <div className={styles.state}>Watched</div>
              <span className={styles.icon}>
                <Checkmark />
              </span>
            </div>
          )}
          {isNotWatched && (
            <div className={styles.notWatched}>
              <div className={styles.state}>
                Not watched
              </div>
              <span className={styles.icon}>
                <Eye />
              </span>
            </div>
          )}
          {isSkipped && (
            <div className={styles.skipped}>
              <div className={styles.state}>Skipped</div>
              <span className={styles.icon}>
                <Skip />
              </span>
            </div>
          )}
          {isBlocked && (
            <div className={styles.blocked}>
              <div className={styles.state}>Blocked</div>
              <span className={styles.icon}>
                <Lock />
              </span>
            </div>
          )}
        </div>
        <div className={styles.year}>{data.genre}</div>
        <img src={data.cover} />
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>
          <h4>2008 - Film</h4>
          <h3>{data.title}</h3>
        </div>
        <div className={styles.actions}></div>
      </div>
    </div>
  );
};
