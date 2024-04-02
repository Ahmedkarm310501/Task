import { cn } from "@/utils/cn";
import { Typography } from "antd";
import React, { ReactNode } from "react";
const { Text } = Typography;

type StatProps = {
  left: ReactNode;
  right: ReactNode;
  classNames?: {
    left?: string;
    right?: string;
  };
  withBorder?: boolean;
};

const Stat = ({
  left: title,
  right: value,
  classNames,
  withBorder,
}: StatProps) => {
  return (
    <div
      className={cn("flex justify-between py-4 items-center", {
        "border-b border-accent": withBorder,
      })}
    >
      <Text className={cn("text-accent text-sm px-5", classNames?.left)}>
        {title}
      </Text>
      <Text className={cn("text-accent text-sm px-5", classNames?.right)}>
        {value}
      </Text>
    </div>
  );
};

export default Stat;
