import React from "react";

const CloseIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 39.5C30.7696 39.5 39.5 30.7696 39.5 20C39.5 9.23045 30.7696 0.5 20 0.5C9.23045 0.5 0.5 9.23045 0.5 20C0.5 30.7696 9.23045 39.5 20 39.5Z"
        stroke="#4A6585"
        stroke-opacity="0.19"
      />
      <path
        d="M15.3079 15.0001L25.3582 25.0499"
        stroke="#4A6585"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M15.308 25.05L25.358 15"
        stroke="#4A6585"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CloseIcon;
