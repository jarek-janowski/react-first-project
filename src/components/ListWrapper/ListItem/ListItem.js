import React from "react";
import "./ListItem.css";
import danAbramovImage from "../../../assets/images/danabramov.jpg";

const ListItem = () => (
  <li className="list-item__wrapper">
    <img className="list-item__image" src={danAbramovImage} alt="Dan Abramov" />
    <div>
      <h2 className="list-item__name">Dan Abramov</h2>
      <p className="list-item__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
        blandit odio. In tempus ullamcorper leo, vitae hendrerit mauris cursus
        id. Nulla sapien dolor, commodo ornare commodo non, facilisis porttitor
        nibh.
      </p>
      <a className="list-item__link" href="https://twitter.com/dan_abramov">
        visit twitter page
      </a>
    </div>
  </li>
);

export default ListItem;
