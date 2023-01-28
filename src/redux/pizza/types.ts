export interface PizzaItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
}

export interface PizzaSliceState {
    items: PizzaItem[];
    status: Status;
  }

  export interface SearchPizzaParams {
    category: string;
    sortBy: string;
    order: string;
    search: string;
    currentPage: string;
  }

  export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
  }
  
  