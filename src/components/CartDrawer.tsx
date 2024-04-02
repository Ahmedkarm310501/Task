import CloseIcon from "@/icons/CloseIcon";
import { Button, Drawer, InputNumber, Typography } from "antd";
import React, { useState } from "react";
import Stat from "./Stat";
import BoxSection from "./BoxSection";
import InfoSection from "./InfoSection";
import PresentSection from "./PresentSection";
import BoxIcon from "@/icons/BoxIcon";
import RemoveIcon from "@/icons/RemoveIcon";
import useCart from "@/hooks/useCart";
import CartItemType from "./CartItem";
import CartItem from "./CartItem";
import CartEmptyIcon from "@/icons/CartEmptyIcon";

const { Title, Text } = Typography;

const CartDrawerBody = () => {
  const { cartItemsCount, cart, total, checkOut } = useCart();
  return (
    <>
      <Stat
        left="Product"
        right={
          <div className="flex items-center gap-8">
            <Text className="text-accent text-sm">Qty.</Text>
            <Text className="text-accent text-sm">Remove</Text>
          </div>
        }
        withBorder
      />
      {cart.map((cartItem) => (
        <CartItem key={cartItem.slug} cartItem={cartItem} />
      ))}

      <Stat
        left="Subtotal"
        right={`${total.toFixed(2)} DTSUs`}
        classNames={{
          right: "text-primary",
        }}
      />
      <Stat
        left="New Payment"
        right="No, Inclusive in your package"
        classNames={{
          right: "text-primary",
        }}
        withBorder
      />
      <Stat
        left="Total Units Consumed"
        right={`${total.toFixed(2)} DTSUs`}
        classNames={{
          right: "text-primary",
        }}
      />
      <div className="flex flex-col gap-4 px-5">
        <Button type="primary" className="h-12 rounded-3xl" onClick={checkOut}>
          Checkout
        </Button>
        <Button className="h-12 rounded-3xl border-[2] border-primary">
          Back to Run Information{" "}
        </Button>
      </div>
      <div className="px-5 mt-5 space-y-4">
        <PresentSection />
        <InfoSection />
      </div>
    </>
  );
};

const CartEmpty = () => (
  <div className="h-full w-full flex justify-center items-center">
    <div className="flex items-center flex-col gap-3">
      <CartEmptyIcon />
      <Text className="text-black">Your run cart is empty!</Text>
      <Text className="text-accent">start add your requests here</Text>
    </div>
  </div>
);

const CartDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { cartItemsCount } = useCart();
  return (
    <Drawer
      width={500}
      closeIcon={<CloseIcon className="shrink-0" />}
      title={
        <div className="flex justify-between items-center px-3 w-full">
          <Title level={4} className="grow whitespace-nowrap">
            Your Run Cart
          </Title>
          <Text className="text-accent max-w-[120px]">
            Requests in run Cart{" "}
            <span className="bg-[#FFD900] inline-flex size-8 justify-center items-center rounded-full">
              {cartItemsCount}
            </span>
          </Text>
        </div>
      }
      onClose={onClose}
      open={open}
      classNames={{
        body: "!px-0",
      }}
    >
      {cartItemsCount === 0 ? <CartEmpty /> : <CartDrawerBody />}
    </Drawer>
  );
};

export default CartDrawer;
