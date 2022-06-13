import { Logo } from "../../../Logo";
import styles from "./Header.module.scss";
import { ReactComponent as SettingsIcon } from "../../../../assets/icons/settings.svg";
import { useEffect, useState } from "react";
import { Modal } from "../../../components/Modal";
import { Box, Tabs, Tab, styled } from "@mui/material";
import { settingsConfig } from "../../../components/Settings";
import clsx from "clsx";
import { ReactComponent as RecommendedIcon } from "../../../../assets/icons/triangle-exclamation-solid.svg";
import { ReactComponent as ExcludedIcon } from "../../../../assets/icons/ban-solid.svg";
import { ReactComponent as Checkmark } from "../../../../assets/icons/checkmark.svg";
import Button, { ButtonProps } from "@mui/material/Button";
import { useDispatch } from "react-redux";
// import { selectSettings } from "../../../store/selectors";
import { Level, toggleLevel } from "../../../store/slices/settingsSlice";

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: "black",
  fontFamily: "Montserrat",
  letterSpacing: "3px",
  fontSize: "1.2rem",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "grey",
  },
}));

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "red",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(20),
    fontFamily: "Montserrat",
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export const Header = () => {
  const [isSettingsModalOpened, setIsSettingsModalOpened] = useState(false);
  const [value, setValue] = useState(0);
  // const { level: currentLevel } = useSelector(selectSettings);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsSettingsModalOpened(true);
  };

  const closeModal = () => {
    setIsSettingsModalOpened(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    let newLevel: Level = "superfan";

    switch (value) {
      case 2:
        newLevel = "superfan";
        break;
      case 0:
        newLevel = "casual";
        break;
      case 1:
        newLevel = "speedrun";
        break;
    }

    dispatch(toggleLevel({ level: newLevel }));

    console.log({ newLevel, value });
  };

  useEffect(() => {
    const isFirstVisit = window.localStorage.getItem("isFirstVisit");

    if (!isFirstVisit) {
      window.localStorage.setItem("isFirstVisit", "true");
      setIsSettingsModalOpened(true);
    }
  }, []);

  const getLevel = () => {
    switch (value) {
      case 0:
        return "ultimateFan";
      case 1:
        return "casual";
      case 2:
        return "speedrun";
      default:
        return "ultimateFan";
    }
  };

  const level = getLevel();

  return (
    <>
      <Modal
        isOpen={isSettingsModalOpened}
        closeModal={closeModal}
        title={
          <>
            <SettingsIcon /> <span>Settings</span>
          </>
        }
      >
        <>
          <h3>Pick what level of experience you want.</h3>

          <h4>This can be changed later after clicking settings button.</h4>
          <div className={styles.levelTable}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 2, borderColor: "#353535" }}>
                <StyledTabs value={value} onChange={handleChange}>
                  <StyledTab label="The Ultimate Fan" />
                  <StyledTab label="Casual" />
                  <StyledTab label="Speedrun" />
                </StyledTabs>
              </Box>
              <div className={styles.tilesWrapper}>
                {settingsConfig[level].map((tile) => (
                  <div
                    className={clsx(styles.tile, {
                      [styles.isOptional]: tile.status === "optional",
                      [styles.isRequired]: tile.status === "required",
                      [styles.isExcluded]: tile.status === "excluded",
                    })}
                    key={tile.caption + tile.title + tile.status}
                  >
                    <div className={styles.icon}>
                      {tile.status === "optional" && (
                        <RecommendedIcon className={styles.recommendedIcon} />
                      )}
                      {tile.status === "excluded" && (
                        <ExcludedIcon className={styles.excludedIcon} />
                      )}
                      {tile.status === "required" && (
                        <Checkmark width={"16px"} height={"16px"} className={styles.requiredIcon} />
                      )}
                    </div>
                    <span>{tile.title}</span>
                    <div>{tile.caption}</div>
                  </div>
                ))}
              </div>
            </Box>
          </div>
          <h3>Reset all your data.</h3>
          <h4>It cannot be restored later!</h4>
          <ColorButton
            variant="contained"
            onClick={() => {
              localStorage.clear();
              window.localStorage.setItem("isFirstVisit", "true");
              window.location.reload();
            }}
          >
            Reset
          </ColorButton>
        </>
      </Modal>
      <header className={styles.header}>
        <div className={styles.content}>
          <Logo size="sm" />
          <button className={styles.settings} onClick={openModal}>
            <span>Settings</span>
            <SettingsIcon />
          </button>
        </div>
      </header>
    </>
  );
};
