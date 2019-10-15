import React, { useState, useEffect } from "react";

import { Map } from "../Map";
import { Home } from "../Home";
import { Camera } from "../Camera";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import {ENV} from "../../config";

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
  apikey: ENV.HERE_MAP_API_KEY
};

const mapConfig = {
  zoom: 10,
  center: { lat: 52.09755, lng: 23.68775 }
};

export const Main = ({ value }) => {
  const [mapRendered, setMapRendered] = useState(false);
  useEffect(() => {
    if(value === 2) {
      setMapRendered(true);
    }
  }, [value, mapRendered])
  const classes = useStyles();

  return (
    <Container component="main" className={classes.container} maxWidth={false}>
      {value === 0 && <Home />}
      {value === 1 && <Camera />}
      {mapRendered && <Box hidden={value !== 2} style={{ height: "100%" }}>
        <Map mapConfig={mapConfig} platformConfig={platformConfig} />
      </Box>}
    </Container>
  );
};
