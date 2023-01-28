import { SortPropertyEnum } from "../redux/filter/types";
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
  { name: "Popularity(DESC)", sortProperty: SortPropertyEnum.RATING_DESC },
  { name: "Popularity(ASC)", sortProperty: SortPropertyEnum.RATING_ASC },
  { name: "Price(DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "Price(ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "Alphabet(DESC)", sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: "Alphabet(ASC)", sortProperty: SortPropertyEnum.TITLE_ASC },
];

export const defaultSortType = {
  name: "Popularity(DESC)",
  sortProperty: SortPropertyEnum.RATING_DESC,
};
