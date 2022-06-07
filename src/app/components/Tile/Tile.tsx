/* eslint-disable no-constant-condition */
import styles from "./Tile.module.scss";
import { ReactComponent as Checkmark } from "../../../assets/icons/checkmark.svg";
import { ReactComponent as Eye } from "../../../assets/icons/eye.svg";
import { ReactComponent as Lock } from "../../../assets/icons/lock.svg";
import { ReactComponent as Skip } from "../../../assets/icons/skip.svg";

import { Item, PhaseShow } from "../../../data/types";
import { toggleItem } from "../../store/slices/itemsSlice";

import { useDispatch, useSelector } from "react-redux";
import { selectItemById, selectItems, selectSettings } from "../../store/selectors";

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
  const { data, isOptional, onHover, phaseShows, phaseItems, isPhaseLocked } = props;

  useEffect(() => {
    if (data.id === "f-doctor_strange_in_the_multiverse_of_madness") console.log({ data });
  }, [data]);

  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const item = useSelector(selectItemById)(data.id);

  const scopeItems = phaseItems || phaseShows;

  const { level } = useSelector(selectSettings);

  const state = item.state;

  const getAreRequiredWatched = () => {
    const itemsWatched = items;
    const unlocksWith = data?.unlocksWith;

    if (!unlocksWith || unlocksWith === null) return true;

    const unlocksWithLevel = unlocksWith[level];

    if (unlocksWithLevel === null) return true;

    const areRequiredItemsWatched = () => {
      if (unlocksWithLevel?.items) {
        const requiredItemIds = unlocksWithLevel.items;

        const foundItems = requiredItemIds.filter((itemRequiredId) => {
          return itemsWatched.findIndex((watchedItem) => watchedItem.id === itemRequiredId) > -1;
        });

        // console.log({ foundItems, requiredItemIds });
        return foundItems.length === requiredItemIds.length;
      } else {
        return false;
      }
    };

    // const areRequiredGroupWatched = () => {
    //   if (unlocksWithLevel?.groups) {
    //     const requiredGroupIds = unlocksWithLevel.groups;

    //     const foundGroups = requiredGroupIds.filter((groupRequiredId) => {
    //       return itemsWatched.findIndex((watchedItem) => watchedItem.id === groupRequiredId) > -1;
    //     });

    //     return foundGroups.length === requiredGroupIds.length;
    //   } else {
    //     return true;
    //   }
    // };

    return areRequiredItemsWatched();
  };

  const areRequiredItemsWatched = getAreRequiredWatched();

  const getIsBlocked = () => {
    if (state === "watched" || state === "skipped") return false;

    if (!areRequiredItemsWatched) return true;
    if (isPhaseLocked) return true;
    if (!scopeItems) return true;

    const currentItemIndex = scopeItems.findIndex(({ id }) => id === item.id);

    if (currentItemIndex === 0) return false;

    const previousItem = items.find(({ id }) => id === scopeItems[currentItemIndex - 1]?.id);

    if (!previousItem) return true;

    return false;
  };

  const getIsNotInteractive = () => {
    if (getIsBlocked()) return true;

    if (!scopeItems) return true;

    const currentItemIndex = scopeItems.findIndex(({ id }) => id === item?.id);

    if (currentItemIndex === scopeItems.length - 1) return false;

    const nextItem = items.find(({ id }) => id === scopeItems[currentItemIndex + 1].id);

    if (!nextItem) return false;

    return true;
  };

  const isBlocked = getIsBlocked();

  const isWatched = state === "watched" && !isBlocked;
  const isNotWatched = state === "not_watched" && !isBlocked;
  const isSkipped = state === "skipped" && !isBlocked;

  const isNotInteractive = getIsNotInteractive() && !isSkipped;

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
              state: isSkipped && getIsNotInteractive() ? "not_interactive_skipped" : "",
            })
          )
        }
        onMouseEnter={() => !isNotInteractive && onHover(data.background ?? null)}
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
          {data?.notice && <div className={styles.notice}>{data?.notice}</div>}
          <div className={styles.platforms}>
            {isWatched && (
              <div className={styles.watched}>
                <div className={styles.state}>Watched</div>
                <span className={styles.icon}>
                  <Checkmark width={"16px"} height={"16px"} />
                </span>
              </div>
            )}
            {isNotWatched && (
              <div className={styles.notWatched}>
                <div className={styles.state}>Not watched</div>
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
          <h4>{data.release}</h4>
          <h3>{data.title}</h3>
        </div>
        <div className={styles.actions}></div>
      </div>
    </div>
  );
};
