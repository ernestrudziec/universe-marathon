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

import clsx from "clsx";
import { useEffect } from "react";

export interface TileProps {
  data: Item | PhaseShow;
  isChecked: boolean;
  isOptional: boolean;
  onHover: (title: string | null) => void;
  phaseItems?: Array<Item> | null;
  phaseShows?: Array<PhaseShow> | null;
  isPhaseLocked?: boolean;
}

export const Tile = (props: TileProps) => {
  const {
    data,
    isOptional,
    onHover,
    phaseShows,
    phaseItems,
    isPhaseLocked,
  } = props;

  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const item = useSelector(selectItemById)(data.id);

  const getIsBlocked = () => {
    console.log({ isPhaseLocked });
    if (isPhaseLocked) return true;
    if (!phaseItems) return true;

    const currentItemIndex = phaseItems.findIndex(
      ({ id }) => id === item.id
    );

    if (currentItemIndex === 0) return false;

    const previousItem = items.find(
      ({ id }) => id === phaseItems[currentItemIndex - 1].id
    );

    if (!previousItem) return true;

    return false;
  };

  const getIsNotInteractive = () => {
    if (getIsBlocked()) return true;

    if (!phaseItems) return true;

    const currentItemIndex = phaseItems.findIndex(
      ({ id }) => id === item.id
    );

    if (currentItemIndex === phaseItems.length - 1)
      return false;

    const nextItem = items.find(
      ({ id }) => id === phaseItems[currentItemIndex + 1].id
    );

    if (!nextItem) return false;

    return true;
  };

  const state = item.state;
  const isBlocked = getIsBlocked();

  const isWatched = state === "watched" && !isBlocked;
  const isNotWatched =
    state === "not_watched" && !isBlocked;
  const isSkipped = state === "skipped" && !isBlocked;

  const isNotInteractive =
    getIsNotInteractive() && !isSkipped;

  return (
    <div
      className={clsx(styles.outerWrapper, {
        [styles.isNotInteractive]: isNotInteractive,
      })}
    >
      <div
        onClick={() =>
          (!getIsNotInteractive() || isSkipped) &&
          dispatch(
            toggleItem({
              id: data.id,
              state:
                isSkipped && getIsNotInteractive()
                  ? "not_interactive_skipped"
                  : "",
            })
          )
        }
        onMouseEnter={() =>
          !isNotInteractive &&
          onHover(data.background ?? null)
        }
        className={clsx(styles.wrapper, {
          [styles.isOptional]: isOptional,
          [styles.isBlocked]: isBlocked,
          [styles.isNotWatched]: isNotWatched,
          [styles.isWatched]: isWatched,
          [styles.isSkipped]: isSkipped,
          [styles.isOptional]: isOptional,
        })}
      >
        <div className={styles.thumbnail}>
          <div className={styles.platforms}>
            {isWatched && (
              <div className={styles.watched}>
                <div className={styles.state}>Watched</div>
                <span className={styles.icon}>
                  <Checkmark
                    width={"16px"}
                    height={"16px"}
                  />
                </span>
              </div>
            )}
            {isNotWatched && (
              <div className={styles.notWatched}>
                <div className={styles.state}>
                  Not watched
                </div>
                <span className={styles.icon}>
                  <Eye width={"16px"} height={"16px"} />
                </span>
              </div>
            )}
            {isSkipped && (
              <div className={styles.skipped}>
                <div className={styles.state}>Skipped</div>
                <span className={styles.icon}>
                  <Skip width={"16px"} height={"16px"} />
                </span>
              </div>
            )}
            {isBlocked && (
              <div className={styles.blocked}>
                <div className={styles.state}>Blocked</div>
                <span className={styles.icon}>
                  <Lock width={"16px"} height={"16px"} />
                </span>
              </div>
            )}
          </div>
          {/* <div className={styles.year}>{data.genre}</div> */}
          <img src={data.cover} />
        </div>
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
