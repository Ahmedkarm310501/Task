import CloseIcon from "@/icons/CloseIcon";
import { Button, Drawer, Typography } from "antd";
import React from "react";
import Stat from "./Stat";
import BoxSection from "./BoxSection";
import InfoSection from "./InfoSection";
import useCart from "@/hooks/useCart";

const { Title, Text } = Typography;
const KitchenDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { kitchenItemsCount } = useCart();

  return (
    <Drawer
      width={500}
      closeIcon={<CloseIcon className="shrink-0" />}
      title={
        <div className="flex justify-between items-center px-3 w-full">
          <Title level={4} className="grow whitespace-nowrap">
            Your Run Kitchen
          </Title>
          <Text className="text-accent max-w-[120px]">
            Requests in run kitchen{" "}
            <span className="bg-[#FFD900] inline-flex size-8 justify-center items-center rounded-full">
              {kitchenItemsCount}
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
      <Stat left="Request" right="Status  O/P Link" withBorder />
      <BoxSection color="#EF5261" />
      <BoxSection color="#EFCC1B" />
      <BoxSection color="#2CBFAE" />
      <Stat
        left="Units Under Processing"
        right="12.00 DTSUs"
        classNames={{
          right: "text-primary",
        }}
      />
      <Stat
        left="Units Completed"
        right="12.00 DTSUs"
        classNames={{
          right: "text-primary",
        }}
        withBorder
      />
      <Stat
        left="Total Units Consumed"
        right="12.00 DTSUs"
        classNames={{
          right: "text-primary",
        }}
      />
      <div className="flex flex-col gap-4 px-5">
        <Button type="primary" className="h-12 rounded-3xl">
          Refresh Status
        </Button>
        <Button className="h-12 rounded-3xl border-[2] border-primary">
          Back to Your Dashboard
        </Button>
      </div>
      <div className="px-5 mt-5">
        <InfoSection />
      </div>
    </Drawer>
  );
};

export default KitchenDrawer;
