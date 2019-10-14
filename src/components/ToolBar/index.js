import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";

import config from "../../config";

const useStyles = makeStyles(theme => ({
  appBar: {
    flexGrow: 1
  },
  title: {
    marginRight: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(0, 1)
  }
}));

export const ToolBar = ({ setValue }) => {
  const classes = useStyles();

  const links = config.MAIN_LINKS.map(({ label }, i) => (
    <Button
      className={classes.button}
      onClick={() => setValue(i)}
      color="inherit"
      size="small"
      key={i}
    >
      {label}
    </Button>
  ));

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.title}>
          Find Home
        </Typography>
        <Hidden xsDown>{links}</Hidden>
      </Toolbar>
    </AppBar>
  );
};
