import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

const ListItem = ({ name, description, image, twitterLink }) => (
  <li className="list-item__wrapper">
    <img className="list-item__image" src={image} alt={name} />
    <div>
      <h2 className="list-item__name">{name}</h2>
      <p className="list-item__description">{description}</p>
      <a className="list-item__link" href={twitterLink}>
        visit twitter page
      </a>
    </div>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  description: "One of the React creators",
};

export default ListItem;
