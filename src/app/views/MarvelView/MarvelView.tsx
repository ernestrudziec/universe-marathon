import styles from "./MarvelView.module.scss";
import { data } from "../../../data/data";

import { Tile } from "../../components";
import { Phase } from "../../components";
import { Dispatch, SetStateAction } from "react";

interface MarvelViewProps {
  hover: {
    set: Dispatch<SetStateAction<string | null>>;
    current: string | null;
  };
}

export const MarvelView = ({ hover }: MarvelViewProps) => {
  return (
    <div className={styles.wrapper}>
      {data.phases.map((phase) => (
        <Phase
          key={phase.id}
          title={phase.name}
          isFirst={phase.id === 0.5}
          isDone={false}
          optional={[]}
        >
          {phase.items?.map((item) => (
            <Tile
              key={item.id}
              thumbnail={""}
              title={item.title}
              subtitle={""}
              year={2010}
              isChecked={false}
              isOptional={false}
              onHover={hover.set}
            />
          ))}
        </Phase>
      ))}
    </div>
  );
};
