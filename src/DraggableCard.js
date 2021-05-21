import React from "react";
import Draggable from "react-draggable";


const DraggableCard = ({text}) => {
  // console.log(text);
  return (
    <Draggable>
     <h6>{text}</h6>
    </Draggable>
  );
};

export default DraggableCard
