import styles from "./MarvelView.module.scss";
import { Tile } from "../../components";
import { Phase } from "../../components";

import IronMan from "../../../assets/covers/ironman_1.jpg";
import IronMan2 from "../../../assets/covers/ironman_2.jpg";
import IronMan3 from "../../../assets/covers/ironman_3.jpg";
import Thor from "../../../assets/covers/thor.jpg";
import CaptainAmerica from "../../../assets/covers/captain_america.jpg";
import ThorTheDarkWorld from "../../../assets/covers/thor_the_dark_world.jpg";

export const MarvelView = () => {
  return (
    <div className={styles.wrapper}>
      <Phase
        isDone={true}
        isFirst={true}
        title={
          <>
            Phase <strong>1</strong>
          </>
        }
        optional={[
          {
            thumbnail: ThorTheDarkWorld,
            title: "Thor",
            subtitle: "The Dark World",
            year: 2012,
            isChecked: true,
            isOptional: true,
          },
          {
            thumbnail: Thor,
            title: "Thor",
            subtitle: "",
            year: 2012,
            isChecked: true,
            isOptional: true,
          },
          {
            thumbnail: IronMan2,
            title: "Iron Man 2",
            subtitle: "",
            year: 2012,
            isChecked: true,
            isOptional: true,
          },
        ]}
      >
        <Tile
          thumbnail={IronMan}
          title={"Iron Man"}
          subtitle={""}
          year={2008}
          isChecked={true}
          isOptional={false}
        />
        <Tile
          thumbnail={IronMan2}
          title={"Iron Man 2"}
          subtitle={""}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
        <Tile
          thumbnail={Thor}
          title={"Iron Man 2"}
          subtitle={""}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
        <Tile
          thumbnail={IronMan3}
          title={"Iron Man 2"}
          subtitle={""}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
        <Tile
          thumbnail={IronMan2}
          title={"Iron Man 2"}
          subtitle={""}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
      </Phase>
      <Phase
        isDone={false}
        isFirst={false}
        title={
          <>
            Phase <strong>2</strong>
          </>
        }
        optional={[]}
      >
        <Tile
          thumbnail={IronMan3}
          title={"Iron Man 3"}
          subtitle={""}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
        <Tile
          thumbnail={Thor}
          title={"Thor"}
          subtitle={""}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
        <Tile
          thumbnail={CaptainAmerica}
          title={"Captain America"}
          subtitle={"The First Avenger"}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
      </Phase>
      <Phase
        isDone={false}
        isFirst={false}
        title={
          <>
            Phase <strong>2</strong>
          </>
        }
        optional={[]}
      >
        <Tile
          thumbnail={IronMan3}
          title={"Iron Man 3"}
          subtitle={""}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
        <Tile
          thumbnail={Thor}
          title={"Thor"}
          subtitle={""}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
        <Tile
          thumbnail={CaptainAmerica}
          title={"Captain America"}
          subtitle={"The First Avenger"}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
      </Phase>
      <Phase
        isDone={false}
        isFirst={false}
        title={
          <>
            Phase <strong>2</strong>
          </>
        }
        optional={[]}
      >
        <Tile
          thumbnail={IronMan3}
          title={"Iron Man 3"}
          subtitle={""}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
        <Tile
          thumbnail={Thor}
          title={"Thor"}
          subtitle={""}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
        <Tile
          thumbnail={CaptainAmerica}
          title={"Captain America"}
          subtitle={"The First Avenger"}
          year={2012}
          isChecked={false}
          isOptional={false}
        />
      </Phase>
    </div>
  );
};
