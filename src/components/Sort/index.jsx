import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortList } from "../../js/const";
import { setSort } from "../../redux/slices/filterSlice";

export default function Sort() {
  const [open, setOpen] = React.useState(false);

  const dispactch = useDispatch();
  const sort = useSelector((state) => state.filterReducer.sort);
  const sortRef = React.useRef();

  const handleSortItemClick = (obj) => {
    dispactch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.path.includes(sortRef.current)) {
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
}
