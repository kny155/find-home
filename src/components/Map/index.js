import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  map: {
    height: "100%",
    width: "100%"
  }
}));

const initMap = (elRef, mapConfig, platformConfig) => {
  const H = window.H;
  const platform = new H.service.Platform(platformConfig);

  const maptypes = platform.createDefaultLayers({});

  const map = new H.Map(elRef.current, maptypes.vector.normal.map, mapConfig);
  const provider = map.getBaseLayer().getProvider();

  new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

  // set the style on the existing layer
  const style = new H.map.Style(
    "dark.yaml",
    "https://js.api.here.com/v3/3.1/styles/omv/"
  );

  provider.setStyle(style);

  window.addEventListener("resize", () => {
    map.getViewPort().resize();
  });

  return {
    map,
    provider,
    H
  };
};

const watchGeo = f => {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(position => {
      const coord = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      f(coord);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
    return null;
  }
};

export const Map = ({ mapConfig, platformConfig }) => {
  const mapEl = useRef(null);
  const [map, setMap] = useState(null);
  const [provider, setProvider] = useState(null);
  const [H, setH] = useState(null);

  useEffect(() => {
    if (!map) {
      const { map, provider, H } = initMap(mapEl, mapConfig, platformConfig);
      setMap(map);
      setProvider(provider);
      setH(H);
    }

    if (H) {
      watchGeo((() => {
        let parisMarker = null;
        return geo => {
          if(parisMarker) {
            map.removeObject(parisMarker);
          }
          parisMarker = new H.map.Marker(geo);
          map.addObject(parisMarker);
          console.log(geo);
        };
      })());
    }
  }, [mapConfig, platformConfig, map, H, provider]);

  const classes = useStyles();

  return <div className={classes.map} ref={mapEl} />;
};
