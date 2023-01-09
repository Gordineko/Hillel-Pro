import React from "react";
import "./Button.css";
function Butoon({ person, onDelete }) {
  return (
    <button onClick={() => onDelete(person.id)} className="del">
      X
    </button>
  );
}

export default Butoon;
