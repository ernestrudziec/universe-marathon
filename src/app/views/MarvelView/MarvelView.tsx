import styles from "./MarvelView.module.scss";
import { Tile } from "../../components/Tile";
import IronMan from "../../../assets/covers/ironman_1.jpg";
import IronMan2 from "../../../assets/covers/ironman_2.jpg";
import IronMan3 from "../../../assets/covers/ironman_3.jpg";
import Thor from "../../../assets/covers/thor.jpg";

export const MarvelView = () => {
  return (
    <div className={styles.wrapper}>
      <Tile
        thumbnail={IronMan}
        title={"Iron Man"}
        year={2008}
        isChecked={true}
      />
      <Tile
        thumbnail={IronMan2}
        title={"Iron Man 2"}
        year={2011}
        isChecked={false}
      />
      <Tile
        thumbnail={IronMan3}
        title={"Iron Man 3"}
        year={2014}
        isChecked={false}
      />
      <Tile
        thumbnail={Thor}
        title={"Thor"}
        year={2008}
        isChecked={false}
      />
    </div>
  );
};
