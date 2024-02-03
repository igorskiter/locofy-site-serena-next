import React from "react";

import styles from './input.module.css';

const input = ({
  name,
  id, 
  placeholder,
  type,
  required = false
}) => {
  return (
    <input
      className={styles.input}
      name={name}
      id={id}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
};

export default input;
