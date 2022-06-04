/* eslint-disable no-constant-condition */
import styles from "./Tile.module.scss";
import { ReactComponent as Checkmark } from "../../../assets/icons/checkmark.svg";
import { ReactComponent as Eye } from "../../../assets/icons/eye.svg";
import { ReactComponent as Lock } from "../../../assets/icons/lock.svg";
import { ReactComponent as Skip } from "../../../assets/icons/skip.svg";

import { Item, PhaseShow } from "../../../data/types";
import { toggleItem } from "../../store/slices/itemsSlice";

import { useDispatch, useSelector } from "react-redux";
import { selectItemById } from "../../store/selectors";

import clsx from "clsx";

export interface TileProps {
  data: Item | PhaseShow;
  isChecked: boolean;
  isOptional: boolean;
  onHover: (title: string | null) => void;
}

export const Tile = (props: TileProps) => {
  const { data, isOptional, onHover } = props;
  const dispatch = useDispatch();
  // const items = useSelector(selectItems);
  const item = useSelector(selectItemById)(data.id);

  const state = item.state;
  const isBlocked = false;
  const isWatched = state === "watched" && !isBlocked;
  const isNotWatched =
    state === "not_watched" && !isBlocked;
  const isSkipped = state === "skipped" && !isBlocked;

  // useEffect(() => {
  //   console.log({ item });
  // }, [item]);

  return (
    <div className={styles.outerWrapper}>
      <div
        onClick={() =>
          dispatch(toggleItem({ id: data.id }))
        }
        onMouseEnter={() =>
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
