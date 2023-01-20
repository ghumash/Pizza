import React from "react";

import styles from "./Search.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

export default function Search() {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();
  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChangeInput}
      />
      {value && (
        <FontAwesomeIcon
          className={styles.clearIcon}
          icon={faXmark}
          onClick={onClickClear}
        />
      )}
    </div>
  );
}
