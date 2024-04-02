import PresentIcon from "@/icons/PresentIcon";
import { Typography } from "antd";
import React from "react";
const { Text } = Typography;

const PresentSection = () => {
  return (
    <div className="bg-[#FCF9E1] flex gap-2 px-10 p-4 items-start rounded-3xl">
      <Text className="text-sm">
        Your have made a great chooseLet&apos;s Run and be ready for a surprise
      </Text>
      <PresentIcon />
    </div>
  );
};

export default PresentSection;
