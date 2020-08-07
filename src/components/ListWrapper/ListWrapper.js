import React from "react";
import ListItem from "./ListItem/ListItem";
import "./ListWrapper.css";
import { twitterAccounts } from "../../data/twitterAccounts";

const ListWrapper = () => (
  <ul className="list-wrapper">
    {twitterAccounts.map((item) => (
      <ListItem
        name={item.name}
        description={item.description}
        link={item.twitterLink}
        image={item.image}
      />
    ))}
  </ul>
);

export default ListWrapper;
