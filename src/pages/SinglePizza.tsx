import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SinglePizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: "string";
    title: "string";
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://637f4b1e2f8f56e28e86f2b5.mockapi.io/pizzas/" + id
        );
        setPizza(data);
      } catch (error) {
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  return (
    <div className="container">
      <div className="pizza-block">
        <img src={pizza.imageUrl} alt="" className="pizza-block__image" />
        <h2 className="pizza-block__title">{pizza.title}</h2>
        <h4 className="pizza-block__price">{pizza.price} $</h4>
      </div>
    </div>
  );
};
export default SinglePizza;
