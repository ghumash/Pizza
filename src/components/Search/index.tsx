import { FC, useState, useRef, useCallback, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";

import styles from "./Search.module.scss";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search: FC = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
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
};

export default Search;
