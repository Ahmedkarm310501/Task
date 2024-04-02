import InfoIcon from "@/icons/InfoIcon";
import { Typography } from "antd";
import React from "react";

const { Text } = Typography;

const InfoSection = () => {
  return (
    <div className="bg-[#ECF6FE] flex gap-2 p-4 items-start rounded-3xl">
      <InfoIcon />
      <Text className="text-sm">
        Some requests can take a week or moreto be delivered and may be subject
        to{" "}
        <span className="#0097C2">dependency resolutions related to your</span>
      </Text>
    </div>
  );
};

export default InfoSection;
