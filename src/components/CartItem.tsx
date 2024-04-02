import { type CartItemType } from "@/context/CartContext";
import useCart from "@/hooks/useCart";
import BoxIcon from "@/icons/BoxIcon";
import RemoveIcon from "@/icons/RemoveIcon";
import { Button, InputNumber, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
  const { addToCart, removeFromCart, removeAllFromCart } = useCart();

  const handleQuantityChange = (value?: number) => {
    if (!value) return;
    if (value > cartItem.quantity) {
      addToCart(cartItem);
    } else {
      removeFromCart(cartItem.slug);
    }
  };
  return (
    <div className="flex items-center gap-3 py-4 justify-between px-5 border-b border-accent">
      <div className="flex gap-3 items-center">
        <BoxIcon />
        <div className="flex flex-col gap-1">
          <Text className="text-sm text-black">{cartItem.title}</Text>
          <Text className="text-xs text-accent">
            Private Training, {cartItem.amount} DTSU
          </Text>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <InputNumber
          min={1}
          max={10}
          defaultValue={cartItem.quantity}
          onChange={(value) => handleQuantityChange(value as number)}
        />
        <Button
          onClick={() => removeAllFromCart(cartItem.slug)}
          className="border-none"
          icon={<RemoveIcon />}
        />
      </div>
    </div>
  );
};

export default CartItem;
