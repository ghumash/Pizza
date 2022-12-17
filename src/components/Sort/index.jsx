import React from "react";
import { sortList } from "../../js/const";

export default function Sort({ value, onSelectSort }) {
  const [open, setOpen] = React.useState(false);

  const handleSortItemClick = (obj) => {
    onSelectSort(obj);
    setOpen(false);
  };

  return (
    <div className="sort">
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
}
