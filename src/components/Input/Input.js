import React from "react";
import PropTypes from "prop-types";
import styles from "../Input/Input.module.scss";

const Input = ({ tag: Tag, name, label, maxLenght }) => (
  <div className={styles.formItem}>
    <Tag
      className={Tag === "textarea" ? styles.textarea : styles.input}
      type="text"
      name={name}
      id={name}
      required
      maxLength={maxLenght}
      placeholder=" "
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.formItemBar} />
  </div>
);

Input.protoTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLenght: PropTypes.string,
};

Input.defaultProps = {
  tag: "input",
  maxLenght: 200,
};

export default Input;
