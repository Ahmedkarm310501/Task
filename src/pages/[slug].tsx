import NavBar from "@/components/NavBar";
import { items } from "@/data/items";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const { query } = useRouter();
  const item = items.filter((item) => item.slug === query.slug)[0];
  return (
    <main className="h-screen flex flex-col  bg-gradient-to-t from-[#97E0F3] to-[#FFFFFF]">
      <NavBar />
      <div className="grow h-full w-full flex justify-center items-center">
        <h1 className="text-primaryDark text-6xl">Welcome to {item?.title}</h1>
      </div>
    </main>
  );
};

export default Index;
