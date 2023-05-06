import * as React from "react";
export const FilterIcon = (props: any) => (
  <svg
    fill="#000000"
    className="w-6 h-6"
    viewBox="0 0 24 24"
    id="filter"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      id="primary"
      d="M5,4V6.64a1,1,0,0,0,.23.64l4.54,5.44a1,1,0,0,1,.23.64V21l4-2V13.36a1,1,0,0,1,.23-.64l4.54-5.44A1,1,0,0,0,19,6.64V4a1,1,0,0,0-1-1H6A1,1,0,0,0,5,4Z"
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
export default FilterIcon;
