import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import { faker } from "@faker-js/faker";
import { CartState } from "../context/CartContext";
import { useDarkMode } from "../context/DarkModeProvider";

export default function Shop() {
  const { cart } = CartState();
  const productArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [products] = useState(productArray);

  //   console.log(productArray);

  // const [cart, setCart] = useState([]);
  // console.log("Cart:", cart);
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : "Light"}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1100px px-5 dark:bg-gray-800 dark:text-white">
        {products.map((product) => (
          <SingleProduct
            product={product}
            // cart={cart}
            // setCart={setCart}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
