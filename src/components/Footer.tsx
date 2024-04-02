import { Typography } from "antd";
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed w-full bottom-0 bg-[#F8F8F8] mt-4 flex justify-center items-center">
      <Typography.Text className="text-white py-6">
        <span className="text-black">Got questions? </span>
        <span className="text-accent">Take a look at our </span>
        <span className="text-primary">FAQs</span>
        <span className="text-accent">, talk to us on Twitter</span>
        <span className="text-primary"> @company</span>
        <span className="text-accent">or send an email to</span>
        <span className="text-primary"> team@company.com</span>
      </Typography.Text>
    </footer>
  );
};

export default Footer;
