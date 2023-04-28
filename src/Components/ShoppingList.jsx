import { getShoppingList } from "../requests";
import { useEffect } from "react";

const ShoppingList = ({ shoppingList, setShoppingList }) => {
  useEffect(() => {
    getShoppingList().then((result) => {
      setShoppingList(result.data.result);
    });
  }, [setShoppingList]);

  console.log("list:", shoppingList);

  return (
    <section>
      <h1>Shopping List:</h1>
      <ul className="shopping-list">
        {shoppingList.map((item) => {
          return (
            <li>
              {item.ingredient}
              {"  -  "}
              {item.measure}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ShoppingList;
