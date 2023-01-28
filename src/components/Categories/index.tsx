import { FC, memo } from "react";
import { categories } from "../../ts/const";
import { ICategoriesProps } from "../../ts/type";

export const Categories: FC<ICategoriesProps> = memo(({ value, onSelectCategory }) => {
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
});
