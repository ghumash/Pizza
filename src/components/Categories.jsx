import { categories } from "../js/const";
import React from "react";

export default function Categories({ value, onSelectCategory }) {
  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => {
          return (
            <li
              key={category}
              className={value === i ? "active" : null}
              onClick={() => onSelectCategory(i)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
