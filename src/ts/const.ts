import { SortItem, SortPropertyEnum } from "./type";

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
  { name: "Popularity(DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "Popularity(ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "Price(DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "Price(ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "Alphabet(DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "Alphabet(ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
];

export const defaultSortType = {
  name: "Popularity(DESC)",
  sortProperty: SortPropertyEnum.RATING_DESC,
};
