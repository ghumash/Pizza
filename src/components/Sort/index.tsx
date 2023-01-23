import { useState, useRef, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sortList } from "../../ts/const";
import { selectSort, setSort } from "../../redux/slices/filterSlice";
import { SortItem } from "../../ts/type";

const Sort: FC = () => {
  const [open, setOpen] = useState(false);

  const dispactch = useDispatch();
  const sort = useSelector(selectSort);
  const sortRef = useRef<HTMLDivElement>(null);

  const handleSortItemClick = (obj: SortItem) => {
    dispactch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target.offsetParent !== sortRef.current) {
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
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      <div className="sort__popup">
        {open && (
          <ul>
            {sortList.map((obj) => {
              return (
                <li
                  key={obj.name}
                  className={
                    sort.sortProperty === obj.sortProperty ? "active" : null
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
};
export default Sort;
