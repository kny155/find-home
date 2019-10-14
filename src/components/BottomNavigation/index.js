import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import Hidden from "@material-ui/core/Hidden";

import config from "../../config";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
});

const links = config.MAIN_LINKS.map(({ label, icon }, i) => (
  <BottomNavigationAction label={label} icon={<Icon>{icon}</Icon>} key={i} />
));

export const SimpleBottomNavigation = ({ value, setValue }) => {
  const classes = useStyles();

  return (
    <Hidden smUp>
      <BottomNavigation
        value={value}
        onChange={(e, value) => {
          setValue(value);
        }}
        showLabels
        className={classes.root}
      >
        {links}
      </BottomNavigation>
    </Hidden>
  );
};
