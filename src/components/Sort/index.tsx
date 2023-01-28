import { useState, useRef, useEffect, FC, memo } from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../../redux/filter/slice";

import { sortList } from "../../ts/const";
import { SortItem, SortProps } from "../../ts/type";

export const Sort: FC<SortProps> = memo(({ value }) => {
  const [open, setOpen] = useState(false);
  const dispactch = useDispatch();
  const sortRef = useRef<HTMLDivElement>(null);

  const handleSortItemClick = (obj: SortItem) => {
    dispactch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const path = e.composedPath();
      if (!path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Sort by</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      <div className="sort__popup">
        {open && (
          <ul>
            {sortList.map((obj) => {
              return (
                <li
                  key={obj.name}
                  className={
                    value.sortProperty === obj.sortProperty ? "active" : null
                  }
                  onClick={() => handleSortItemClick(obj)}
                >
                  {obj.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
});
