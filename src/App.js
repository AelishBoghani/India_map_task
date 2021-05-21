import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import AddLabel from "./AddLabel";
import "./App.css";

const INDIA_JSON = require("./india.topo.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937],
};

const DEFAULT_COLOR = "#EEE";

const geographyStyle = {
  default: {
    fill: "#EEE",
    outline: "none",
  },
  hover: {
    fill: "red",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    fill: "red",
    outline: "none",
  },
  
};

function App() {
  const [tooltipContent, setTooltipContent] = useState("");
 
 
  const onMouseEnter = (geo) => {
    return () => {
      setTooltipContent(`${geo.properties.name}`);
      
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
   
    
  };

  return (
    <div className="full-width-height container">
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={600}
        height={220}
        data-tip=""
      >
        <Geographies geography={INDIA_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <AddLabel />
    </div>
  );
}

export default App;
