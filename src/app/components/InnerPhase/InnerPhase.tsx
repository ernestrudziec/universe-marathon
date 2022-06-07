/* eslint-disable no-constant-condition */
import styles from "./InnerPhase.module.scss";

import { Tile } from "../Tile";
import { Groups, Item, Items } from "../../../data/types";
import { useSelector } from "react-redux";
import { selectSettings } from "../../store/selectors";
import { ReactComponent as WarningIcon } from "../../../assets/icons/circle-exclamation-solid.svg";
import { ReactComponent as RecommendedIcon } from "../../../assets/icons/triangle-exclamation-solid.svg";
import { ReactComponent as RequiredIcon } from "../../../assets/icons/hand-solid.svg";

export interface InnerPhaseProps {
  item: Item;
  onHover: (title: string | null) => void;
  isPhaseLocked?: boolean;
  phaseItems: Items;
  groups: Groups;
}

export const InnerPhase = (props: InnerPhaseProps) => {
  const { item, isPhaseLocked, onHover, groups, phaseItems } = props;

  const { level } = useSelector(selectSettings);

  const getMustWatchBefore = () => {
    if (!item) return [];

    if (!item?.mustWatchBefore?.[level]) return [];

    const mustWatchBefore = item.mustWatchBefore[level];

    if (mustWatchBefore === null) return [];

    const filteredGroups = groups.filter((group) => mustWatchBefore.groups?.includes(group.id));

    return filteredGroups;
  };

  const getStronglyRecommendedBefore = () => {
    if (!item) return [];

    if (!item?.stronglyRecommendedBefore?.[level]) return [];

    const stronglyRecommendedBefore = item.stronglyRecommendedBefore[level];

    if (stronglyRecommendedBefore === null) return [];

    const filteredGroups = groups.filter((group) =>
      stronglyRecommendedBefore.groups?.includes(group.id)
    );

    return filteredGroups;
  };

  const getMightWatchBefore = () => {
    if (!item) return [];

    if (!item?.mightWatchBefore?.[level]) return [];

    const mightWatchBefore = item.mightWatchBefore[level];

    if (mightWatchBefore === null) return [];

    const filteredGroups = groups.filter((group) => mightWatchBefore.groups?.includes(group.id));

    return filteredGroups;
  };

  const mustWatchBefore = getMustWatchBefore();
  const stronglyRecommendedBefore = getStronglyRecommendedBefore();
  const mightWatchBefore = getMightWatchBefore();

  // const aggregatedItems = mustWatchBefore.flatMap((item) => item.items) as unknown as Item[];

  return (
    <div className={styles.wrapper}>
      {mightWatchBefore.length > 0 && (
        <div className={styles.required}>
          <div className={styles.header}>
            <WarningIcon className={styles.warningIcon} />
            <div className={styles.subtitle}>
              MIGHT WATCH BEFORE <br /> <b>{item.title}</b>
            </div>
            <div className={styles.dot}></div>
            <div className={styles.top}></div>
          </div>
          <div className={styles.groups}>
            {mightWatchBefore.map((group) => {
              return (
                <div key={group.id} className={styles.group}>
                  <div className={styles.groupTitle}>{group.name}</div>
                  <div className={styles.items}>
                    {group?.items?.map((item) => (
                      <Tile
                        key={item.id}
                        data={item}
                        isChecked={false}
                        isOptional={false}
                        onHover={onHover}
                        phaseItems={group.items}
                        isPhaseLocked={false}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {stronglyRecommendedBefore.length > 0 && (
        <div className={styles.required}>
          <div className={styles.header}>
            <RecommendedIcon className={styles.recommendedIcon} />

            <div className={styles.subtitle}>
              STRONGLY RECOMMENDED BEFORE <br /> <b>{item.title}</b>
            </div>
            <div className={styles.dot}></div>
            <div className={styles.top}></div>
          </div>
          <div className={styles.groups}>
            {stronglyRecommendedBefore.map((group) => {
              return (
                <div key={group.id} className={styles.group}>
                  <div className={styles.groupTitle}>{group.name}</div>
                  <div className={styles.items}>
                    {group?.items?.map((item) => (
                      <Tile
                        key={item.id}
                        data={item}
                        isChecked={false}
                        isOptional={false}
                        onHover={onHover}
                        phaseItems={group.items}
                        isPhaseLocked={false}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {mustWatchBefore.length > 0 && (
        <div className={styles.required}>
          <div className={styles.header}>
            <RequiredIcon className={styles.requiredIcon} />
            <div className={styles.subtitle}>
              MUST WATCH BEFORE <br /> <b>{item.title}</b>
            </div>
            <div className={styles.dot}></div>
            <div className={styles.top}></div>
          </div>
          <div className={styles.groups}>
            {mustWatchBefore.map((group) => {
              return (
                <div key={group.id} className={styles.group}>
                  <div className={styles.groupTitle}>{group.name}</div>
                  <div className={styles.items}>
                    {group?.items?.map((item) => (
                      <Tile
                        key={item.id}
                        data={item}
                        isChecked={false}
                        isOptional={false}
                        onHover={onHover}
                        phaseItems={group.items}
                        isPhaseLocked={false}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.main}>
          <Tile
            key={item.id}
            data={item}
            isChecked={false}
            isOptional={false}
            phaseItems={phaseItems}
            onHover={onHover}
            isPhaseLocked={isPhaseLocked}
          />
        </div>
      </div>
    </div>
  );
};
