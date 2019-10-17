import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ReactMapGL, { FullscreenControl, GeolocateControl } from "react-map-gl";

const useStyles = makeStyles(theme => ({
  full: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  map: {
    height: "100%",
    width: "100%"
  },
  fab: {
    margin: theme.spacing(1),
    zIndex: 1
  },
  panel: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    left: 0
  }
}));

const initViewport = {
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 8,
  mapboxApiAccessToken:
    "pk.eyJ1Ijoia255IiwiYSI6ImNqeHNydGNxOTBoZTIzZHFveHdiZTYwMGsifQ.ZqTDe62TXB1V2xkugfhCjQ"
};

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: 10
};

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: "10px"
};

export const Map = () => {
  const [viewport, setViewport] = useState(initViewport);
  const classes = useStyles();

  const onViewportChange = viewport => {
    const { width, height, ...etc } = viewport;
    setViewport(etc);
  };

  return (
    <div className={classes.full}>
      <ReactMapGL
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        {...viewport}
        onViewportChange={onViewportChange}
        onLoad={kek => console.log(kek)}
      >
        <div style={geolocateStyle}>
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </div>

        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
      </ReactMapGL>
    </div>
  );
};
