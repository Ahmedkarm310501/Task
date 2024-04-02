import React from "react";
import { CardType } from "@/types/Card";
import Image from "next/image";
import { Button, Typography } from "antd";
import MenuIcon from "@/icons/MenuIcon";
import PlusIcon from "@/icons/PlusIcon";
import NewTabIcon from "@/icons/NewTabIcon";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/router";

const ItemCard = (cardItem: CardType) => {
  const { title, subTitle, imageUrl, amount, color, slug } = cardItem;
  const { addToCart } = useCart();
  const { push } = useRouter();
  return (
    <div className="relative flex items-center flex-col gap-4 max-w-[400px] border rounded-lg border-solid border-[#E7E7E7] min-h-[150px] bg-white p-1">
      <Image
        src={imageUrl}
        fill
        alt={title}
        className="object-contain p-6  z-50 h-[150px] max-w-[250px] !relative"
      />
      <div
        className={`flex flex-col gap-3 rounded-lg p-4 self-stretch`}
        style={{ backgroundColor: color }}
      >
        <Typography.Text className="text-white text-xl">
          {title}
        </Typography.Text>
        <Typography.Text className="text-white text-lg">
          {subTitle}
        </Typography.Text>
        <div className="flex mt-8 justify-between">
          <Typography.Text className="text-white text-xl">
            {amount} DTSU*
          </Typography.Text>
          <div className="flex gap-3">
            <Button
              type="default"
              className="bg-black/15 border-none"
              shape="circle"
              size="large"
              icon={<NewTabIcon />}
              onClick={() => push(`/${slug}`)}
            />
            <Button
              type="default"
              className="bg-black/15 border-none"
              shape="circle"
              size="large"
              icon={<PlusIcon />}
              onClick={() => addToCart(cardItem)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
