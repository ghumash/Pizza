import { Sort, SortPropertyEnum } from "../redux/filter/types";

export interface SortItem {
  name: string;
  sortProperty: SortPropertyEnum;
}

// Props interfaces

export interface ICategoriesProps {
  value: number;
  onSelectCategory: (i: number) => void;
}

export interface IErrorPageProps {
  title: string;
  text: string;
  img?: string;
  button?: { link: string; text: string };
}

export interface ICartItemProps {
  id: string;
  price: number;
  size: number;
  type: string;
  count: number;
  imageUrl: string;
  title: string;
}

export interface IPaginationProps {
  onChangePage: (page: number) => void;
}

export interface IPizzaBlockProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
}

export interface SortProps {
  value: Sort;
}
