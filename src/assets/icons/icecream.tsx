import * as React from "react";
const CoffeeIcon = (props: any) => (
  <svg
    fill="#000000"
    className="w-4 h-4 mx-1"
    viewBox="0 0 24 24"
    id="coffee"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      id="secondary"
      d="M15,4V6M11,4V6M7,4V6"
      style={{
        fill: "none",
        stroke: "rgb(44, 169, 188)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <path
      id="primary"
      d="M16,15V11a1,1,0,0,0-1-1H7a1,1,0,0,0-1,1v4a5,5,0,0,0,5,5h0A5,5,0,0,0,16,15Zm2-3H16v3a5.47,5.47,0,0,1-.1,1H18a2,2,0,0,0,0-4ZM3,20H21"
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default CoffeeIcon;
