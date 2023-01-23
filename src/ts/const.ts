import { SortItem } from "./type";

export const categories = [
  "All",
  "Meaty",
  "Vegetarian",
  "Grill",
  "Acute",
  "Closed",
];

export const typeNames = ["Thin", "Traditional"];

export const sortList: SortItem[] = [
  { name: "Popularity(DESC)", sortProperty: "rating" },
  { name: "Popularity(ASC)", sortProperty: "-rating" },
  { name: "Price(DESC)", sortProperty: "price" },
  { name: "Price(ASC)", sortProperty: "-price" },
  { name: "Alphabet(DESC)", sortProperty: "title" },
  { name: "Alphabet(ASC)", sortProperty: "-title" },
];

export const defaultSortType = {
  name: "Popularity(DESC)",
  sortProperty: "rating",
};
