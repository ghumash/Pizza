import React from "react";

import styles from "./Search.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Search({ searchValue }) {
  return (
    <div className={styles.root}>
      <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
      <input className={styles.input} type="text" placeholder="Search..." />
      {searchValue && (
        <FontAwesomeIcon className={styles.clearIcon} icon={faXmark} />
      )}
    </div>
  );
}
