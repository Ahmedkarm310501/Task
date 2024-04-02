import { CardType } from "@/types/Card";
import { createContext, ReactNode, useState } from "react";

export type CartItemType = CardType & { quantity: number };

type CartContextValue = {
  cart: CartItemType[];
  addToCart: (item: CardType) => void;
  removeFromCart: (slug: string) => void;
  checkOut: () => void;
  kitchenItems: CartItemType[];
  removeAllFromCart: (slug: string) => void;
};

export const CartContext = createContext<CartContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  checkOut: () => {},
  kitchenItems: [],
  removeAllFromCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [kitchenItems, setKitchenItems] = useState<CartItemType[]>([]);

  const addToCart = (item: CardType) => {
    const isItemInCart = cart.some((cartItem) => cartItem.slug === item.slug);
    if (isItemInCart) {
      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem.slug === item.slug
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
      return;
    }
    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (slug: string) => {
    setCart((prev) =>
      prev.reduce((acc, item) => {
        if (item.slug === slug) {
          if (item.quantity > 1) {
            return [...acc, { ...item, quantity: item.quantity - 1 }];
          }
          return acc;
        }
        return [...acc, item];
      }, [] as CartItemType[])
    );
  };

  const removeAllFromCart = (slug: string) => {
    setCart((prev) => prev.filter((item) => item.slug !== slug));
  };

  const checkOut = () => {
    setCart([]);
    setKitchenItems((prev) => [...prev, ...cart]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        checkOut,
        kitchenItems,
        removeAllFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
