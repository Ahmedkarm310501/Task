import React, { useState } from "react";
import { Avatar, Button, Drawer, Typography } from "antd";
import KitchenIcon from "@/icons/KitchenIcon";
import CartIcon from "@/icons/Cart";
import CartDrawer from "./CartDrawer";
import KitchenDrawer from "./KitchenDrawer";
import useCart from "@/hooks/useCart";

const { Paragraph, Text } = Typography;

const WelcomeSection = () => (
  <div className="flex flex-col gap-1">
    <Text className="text-primaryDark text-base md:text-xl lg:text-2xl">
      Welcome to My Company!
    </Text>
    <Paragraph className="text-[#637182] text-xs md:text-sm lg:text-base">
      You have started your 30 day trial
    </Paragraph>
  </div>
);

const ImagePlaceHolder = () => (
  <div className="bg-[#e6e6e6] text-sm text-accent flex justify-center items-center p-2">
    +3
  </div>
);

const ImagesSection = () => (
  <div className="lg:flex gap-4 items-center hidden ">
    {/* images */}
    <div>
      <Avatar.Group>
        <Avatar src="./avatars/1.png" size="large" />
        <Avatar src="./avatars/2.png" size="large" />
        <Avatar src="./avatars/3.png" size="large" />
        <Avatar src="./avatars/4.png" size="large" />
        <Avatar
          icon={<ImagePlaceHolder />}
          size="large"
          className="bg-[#e6e6e6]"
        />
      </Avatar.Group>
    </div>
    {/* description */}
    <div className="flex flex-col gap-1">
      <Text className="text-accent text-2xl">
        Our architects are here to help
      </Text>
      <Paragraph className="text-primary">Book a free session </Paragraph>
    </div>
  </div>
);

const Value = ({ value }: { value: number }) => (
  <div className="absolute text-xs -top-2 border-[2px] border-solid border-[#F8F8F8] -left-2 bg-[#FFD900] size-6 rounded-full flex justify-center items-center">
    {value}
  </div>
);

const Actions = () => {
  const [openCart, setCartOpen] = useState(false);
  const [openKitchen, setKitchenOpen] = useState(false);
  const { cartItemsCount, kitchenItemsCount } = useCart();

  const showCartDrawer = () => {
    setCartOpen(true);
  };

  const onCartClose = () => {
    setCartOpen(false);
  };

  const showKitchenDrawer = () => {
    setKitchenOpen(true);
  };

  const onKitchenClose = () => {
    setKitchenOpen(false);
  };

  return (
    <div className="flex gap-4">
      <div className="relative">
        <Button
          type="default"
          className="bg-[#E1ECF9] border-none"
          shape="circle"
          size="large"
          onClick={showCartDrawer}
          icon={<CartIcon />}
        />
        <Value value={cartItemsCount} />
      </div>
      <CartDrawer open={openCart} onClose={onCartClose} />
      <div className="relative">
        <Button
          type="default"
          className="bg-[#E1ECF9] border-none"
          shape="circle"
          size="large"
          onClick={showKitchenDrawer}
          icon={<KitchenIcon />}
        />
        <Value value={kitchenItemsCount} />
      </div>
      <KitchenDrawer open={openKitchen} onClose={onKitchenClose} />
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="min-h-[90px] gap-4 flex-wrap flex justify-between items-center py-4 px-16 bg-[#F8F8F8]">
      {/* Welcome section */}
      <WelcomeSection />
      {/* images section */}
      <ImagesSection />
      {/* actions section */}
      <Actions />
    </nav>
  );
};

export default NavBar;
