export type SortItem = {
  name: string;
  sortProperty: string;
};

export type ICategoriesProps = {
  value: number;
  onSelectCategory: any;
};

export type IErrorPageProps = {
  title: string;
  text: string;
  img: string;
  button: { link: string; text: string };
};

export type ICartItemProps = {
  id: string;
  price: number;
  size: number;
  type: string;
  count: number;
  imageUrl: string;
  title: string;
};

export type IPaginationProps = {
  onChangePage: any;
};

export type IPizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};
