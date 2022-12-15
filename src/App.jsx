import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import PizzaBlockSkeleton from "./components/PizzaBlock/PizzaBlockSkeleton";
import pizzas from "./assets/pizzas.json";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {pizzas.map((obj, i) => {
              return <PizzaBlockSkeleton key={obj.id} {...obj} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
