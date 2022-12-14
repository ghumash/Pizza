import { categories } from "../js/const";
import React from "react";

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleCategoryClick = (i) => {
    setActiveIndex(i);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => {
          return (
            <li
              key={i}
              className={activeIndex === i ? "active" : ""}
              onClick={() => {
                handleCategoryClick(i);
              }}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
