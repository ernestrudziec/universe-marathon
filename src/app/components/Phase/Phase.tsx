/* eslint-disable no-constant-condition */
import styles from "./Phase.module.scss";

import { ReactElement, ReactNode, useEffect } from "react";
import { Tile } from "../Tile";
import { PhaseShows, Superset } from "../../../data/types";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../../data/data";
import {
  selectItems,
  selectItemById,
} from "../../store/selectors";

export interface PhaseProps {
  children(
    isPhaseLocked: boolean
  ): JSX.Element[] | undefined;
  title: JSX.Element | string;
  isFirst: boolean;
  isDone: boolean;
  optional: PhaseShows;
  onHover: (title: string | null) => void;
  unlocksWith: Superset | null;
}

export const Phase = (props: PhaseProps) => {
  const {
    children,
    title,
    isFirst,
    isDone,
    optional,
    onHover,
    unlocksWith,
  } = props;

  const level = "superfan";

  const itemsWatched = useSelector(selectItems);

  const getIsPhaseLocked = () => {
    if (unlocksWith === null) return false;

    const unlocksWithLevel = unlocksWith[level];

    const areRequiredItemsWatched = () => {
      if (unlocksWithLevel?.items) {
        const requiredItemIds = unlocksWithLevel.items;

        const foundItems = requiredItemIds.filter(
          (itemRequiredId) => {
            return (
              itemsWatched.findIndex(
                (watchedItem) =>
                  watchedItem.id === itemRequiredId
              ) > -1
            );
          }
        );

        console.log({ foundItems, requiredItemIds });
        return foundItems.length !== requiredItemIds.length;
      } else {
        return true;
      }
    };

    const areRequiredGroupWatched = () => {
      if (unlocksWithLevel?.groups) {
        const requiredGroupIds = unlocksWithLevel.groups;

        const foundGroups = requiredGroupIds.filter(
          (groupRequiredId) => {
            return (
              itemsWatched.findIndex(
                (watchedItem) =>
                  watchedItem.id === groupRequiredId
              ) > -1
            );
          }
        );

        return (
          foundGroups.length === requiredGroupIds.length
        );
      } else {
        return true;
      }
    };

    return areRequiredItemsWatched();
  };

  const isPhaseLocked = getIsPhaseLocked();

  useEffect(() => {
    console.log({
      phase: title,
      unlocksWith,
      itemsWatched,
      isPhaseLocked,
    });
  }, [unlocksWith]);

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
        <div className={styles.canonical}>
          {children && children(isPhaseLocked)}
        </div>
        {optional && optional.length > 0 && (
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
                {optional.map((item) => (
                  <Tile
                    key={item.id}
                    data={item}
                    isChecked={false}
                    isOptional={true}
                    onHover={onHover}
                    isPhaseLocked={isPhaseLocked}
                    phaseShows={optional}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
