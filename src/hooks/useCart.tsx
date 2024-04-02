import { CartContext } from "@/context/CartContext";
import React, { useContext } from "react";

const useCart = () => {
  const ctx = useContext(CartContext);
  const cartItemsCount = ctx.cart.reduce((acc, item) => acc + item.quantity, 0);
  const kitchenItemsCount = ctx.kitchenItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const total = ctx.cart.reduce(
    (acc, item) => acc + item.quantity * item.amount,
    0
  );
  return { ...ctx, cartItemsCount, kitchenItemsCount, total };
};

export default useCart;
