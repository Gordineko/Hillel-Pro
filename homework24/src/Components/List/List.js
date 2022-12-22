import React from "react";
import "./List.css";
import Name from "../Name/Name";
import Surname from "../Surname/Surname";
import Email from "../Email/Email";
import Butoon from "../Button/Button";

function List({ persons, onDelete }) {
  return (
    <div className="list">
      {persons.map((item) => (
        <ul className="list_persones" key={item.id}>
          <Butoon person={item} onDelete={onDelete} />
          <Name person={item} />
          <Surname person={item} />
          <Email person={item} />
        </ul>
      ))}
    </div>
  );
}

export default List;
