import React from "react";

import { Map } from "../Map";
import { Help } from "../Help";
import { Camera } from "../Camera";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import config from "../../config";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(8, 0, 0),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(7, 0)
    },
    position: "fixed",
    height: "100%",
    width: "100%"
  },
  full: {
    height: "100%",
    width: "100%"
  }
}));

const platformConfig = {
  apikey: config.HERE_MAP_API_KEY
};

const mapConfig = {
  zoom: 10,
  center: { lat: 52.09755, lng: 23.68775 }
};

export const Main = ({ value }) => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.container} maxWidth={false}>
      <Box hidden={value !== 0} style={{ height: "100%" }}>
        <Map mapConfig={mapConfig} platformConfig={platformConfig} />
      </Box>
      {value === 1 && <Camera />}
      {value === 2 && <Help />}
    </Container>
  );
};
