import styles from "./MarvelView.module.scss";
import { data } from "../../../data/data";

import { Tile } from "../../components";
import { Phase } from "../../components";
import { Dispatch, SetStateAction } from "react";
import type { Phase as PhaseType } from "../../../data/types";
import { InnerPhase } from "../../components/InnerPhase";

interface MarvelViewProps {
  hover: {
    set: Dispatch<SetStateAction<string | null>>;
    current: string | null;
  };
}

const shouldRenderPhase = (phase: PhaseType) => {
  return phase.items === null && phase.phaseShows === null ? false : true;
};

export const MarvelView = ({ hover }: MarvelViewProps) => {
  return (
    <div className={styles.wrapper}>
      {data.phases.map(
        (phase) =>
          shouldRenderPhase(phase) && (
            <Phase
              key={phase.id}
              title={phase.name}
              isFirst={phase.id === 1}
              isDone={false}
              optional={phase.phaseShows}
              onHover={hover.set}
              unlocksWith={phase.unlocksWith}
              areCanonicalItems={phase.items !== null}
            >
              {(isPhaseLocked: boolean | undefined) =>
                phase.items?.map((item) => {
                  if (item.mightWatchBefore || item.stronglyRecommendedBefore || item.unlocksWith) {
                    return (
                      <InnerPhase
                        key={item.id}
                        groups={data.groups}
                        item={item}
                        phaseItems={phase.items}
                        onHover={hover.set}
                        isPhaseLocked={isPhaseLocked}
                      />
                    );
                  } else {
                    return (
                      <Tile
                        key={item.id}
                        data={item}
                        isChecked={false}
                        isOptional={false}
                        onHover={hover.set}
                        phaseItems={phase.items}
                        isPhaseLocked={isPhaseLocked}
                      />
                    );
                  }
                })
              }
            </Phase>
          )
      )}
    </div>
  );
};
