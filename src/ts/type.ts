export interface SortItem {
  name: string;
  sortProperty: SortPropertyEnum;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
}

export type PizzaItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

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

export interface SearchPizzaParams {
  category: string;
  sortBy: string;
  order: string;
  search: string;
  currentPage: string;
}

// Slice State interfaces

export interface PizzaSliceState {
  items: PizzaItem[];
  status: Status;
}

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

// keys

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  TITLE_DESC = "title",
  TITLE_ASC = "-title",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}
