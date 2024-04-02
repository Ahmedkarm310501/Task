import React from "react";
import { Button, Typography } from "antd";
import NavBar from "@/components/NavBar";
import DiamondIcon from "@/icons/DiamondIcon";
import MenuIcon from "@/icons/MenuIcon";
import ItemCard from "@/components/Card";
import { items } from "@/data/items";
import GearIcon from "@/icons/GearIcon";

const MainBg = () => (
  <div className="fixed min-h-screen w-full z-[-50]">
    <div className="relative flex h-screen w-full overflow-hidden">
      <div className="h-screen w-full bg-gradient-to-t from-[#97E0F3] to-[#FFFFFF]"></div>
      <div className="absolute h-[200vh] -right-[60%] -top-[20%] rotate-[36deg] bg-gradient-to-t w-full from-[#00244D] to-[#1769C6]"></div>
    </div>
  </div>
);

const TopSection = () => (
  <div className="flex justify-between items-center">
    {/* support message */}
    <div className="flex gap-1 items-center">
      <h1 className="text-primary text-[28px]">Get Support</h1>
      <DiamondIcon />
    </div>
    {/* menu button  */}
    <Button
      type="default"
      className="bg-[#2f5782] border-none"
      shape="circle"
      size="large"
      icon={<MenuIcon />}
    />
  </div>
);

const Home = () => (
  <div className="relative">
    <MainBg />
    <NavBar />
    {/* Main section */}
    <main className="flex flex-col gap-6 main-padding my-12 ">
      {/* top section */}
      <TopSection />
      {/* Cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {items.map((card) => (
          <ItemCard key={card.slug} {...card} />
        ))}
      </div>
      <div className="flex justify-end gap-6">
        <div className="flex gap-2 items-center">
          <GearIcon color="#7AD676" />
          <Typography.Text className="text-white text-sm">
            Remaining DTSUs: 200
          </Typography.Text>
        </div>
        <div className="flex gap-2 items-center">
          <GearIcon color="#D84242" />
          <Typography.Text className="text-white text-sm">
            Remaining DTSUs: 200
          </Typography.Text>
        </div>
      </div>
    </main>
  </div>
);

export default Home;
