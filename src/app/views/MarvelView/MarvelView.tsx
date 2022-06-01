import styles from "./MarvelView.module.scss";
import { data } from "../../../data/data";

import { Tile } from "../../components";
import { Phase } from "../../components";
import { Dispatch, SetStateAction } from "react";
import type { Phase as PhaseType } from "../../../data/types";

interface MarvelViewProps {
  hover: {
    set: Dispatch<SetStateAction<string | null>>;
    current: string | null;
  };
}

const shouldRenderPhase = (phase: PhaseType) => {
  return phase.items === null && phase.phaseShows === null
    ? false
    : true;
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
            >
              {phase.items?.map((item) => (
                <Tile
                  key={item.id}
                  data={item}
                  isChecked={false}
                  isOptional={false}
                  onHover={hover.set}
                />
              ))}
            </Phase>
          )
      )}
    </div>
  );
};
