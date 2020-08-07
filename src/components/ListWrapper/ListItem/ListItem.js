import React from "react";
import "./ListItem.css";

const ListItem = (props) => (
  <li className="list-item__wrapper">
    <img className="list-item__image" src={props.image} alt={props.name} />
    <div>
      <h2 className="list-item__name">{props.name}</h2>
      <p className="list-item__description">{props.description}</p>
      <a className="list-item__link" href={props.link}>
        visit twitter page
      </a>
    </div>
  </li>
);

export default ListItem;
