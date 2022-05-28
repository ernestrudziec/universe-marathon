import styles from "./MarvelView.module.scss";
import { Tile } from "../../components";
import { Phase } from "../../components";

import IronMan from "../../../assets/covers/ironman_1.jpg";
import IronMan2 from "../../../assets/covers/ironman_2.jpg";
import IronMan3 from "../../../assets/covers/ironman_3.jpg";
import Thor from "../../../assets/covers/thor.jpg";
import CaptainAmerica from "../../../assets/covers/captain_america.jpg";

export const MarvelView = () => {
  return (
    <div className={styles.wrapper}>
      <Phase>
        <Tile
          thumbnail={IronMan}
          title={"Iron Man"}
          subtitle={""}
          year={2008}
          isChecked={true}
        />
        <Tile
          thumbnail={IronMan2}
          title={"Iron Man 2"}
          subtitle={""}
          year={2012}
          isChecked={false}
        />
      </Phase>
      <Phase>
        <Tile
          thumbnail={IronMan3}
          title={"Iron Man 3"}
          subtitle={""}
          year={2012}
          isChecked={false}
        />
        <Tile
          thumbnail={Thor}
          title={"Thor"}
          subtitle={""}
          year={2012}
          isChecked={false}
        />
        <Tile
          thumbnail={CaptainAmerica}
          title={"Captain America"}
          subtitle={"The First Avenger"}
          year={2012}
          isChecked={false}
        />
      </Phase>
    </div>
  );
};
