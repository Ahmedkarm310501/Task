import React from "react";
import Stat from "./Stat";
import BoxIcon from "@/icons/BoxIcon";
import { Typography } from "antd";
import BoxDotIcon from "@/icons/BoxDotIcon";
import CloudIcon from "@/icons/CloudIcon";

const { Text } = Typography;

const BoxSection = ({ color }: { color: string }) => {
  return (
    <Stat
      left={
        <div className="flex gap-3 items-center">
          <BoxIcon />
          <div className="flex flex-col gap-1">
            <Text className="text-sm text-black">Knowledge Transfer</Text>
            <Text className="text-xs text-accent">
              Private Training, 12.00 DTSU
            </Text>
          </div>
        </div>
      }
      right={
        <div className="flex gap-3 items-center">
          <BoxDotIcon color={color} />
          <CloudIcon />
        </div>
      }
      withBorder
    />
  );
};

export default BoxSection;
