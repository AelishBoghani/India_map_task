import React, { useState } from "react";
import DraggableCard from "./DraggableCard";
import "./App.css";

function AddLabel() {
  const [addtext, setAddText] = useState("");
  const [labelname, setLabelname] = useState([]);
  const handleClick = () => {
    setLabelname([...labelname, addtext]);
    setAddText("");
  };

  console.log(labelname);
  return (
    <div>
      <div className="Add_label">
        <h2>Add label</h2>
        <input
          type="text"
          placeholder="Add Label"
          name="label1"
          value={addtext}
          onChange={(e) => setAddText(e.target.value)}
        />

        <br />
        <button onClick={handleClick}>Add Label</button>
        <br />

        <div className="drag">
          {labelname.map((data) => (
            <DraggableCard text={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddLabel;
