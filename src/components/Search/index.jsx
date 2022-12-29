import React from "react";

import styles from "./Search.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "../../App";

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <FontAwesomeIcon
          className={styles.clearIcon}
          icon={faXmark}
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
}
