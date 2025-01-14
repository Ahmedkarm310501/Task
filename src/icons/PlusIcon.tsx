import React from "react";

const PlusIcon = () => {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.5V22.5"
        stroke="white"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <path
        d="M22 12.5H2"
        stroke="white"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </svg>
  );
};

export default PlusIcon;
