import { categories } from "../js/const";
import React from "react";

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => {
          return (
            <li
              key={category}
              className={activeIndex === i ? "active" : null}
              onClick={() => setActiveIndex(i)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
