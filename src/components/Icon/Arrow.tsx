import React from "react";

const Arrow = ({ size = 24 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g id='Arrows'>
        <path
          id='Vector'
          d='M2.5 13.4817L2.57428 11.2089L18.1163 10.7141L11.9885 4.66569L13.6761 3L22.5 11.7097L13.0878 21L11.5057 19.4384L18.042 12.9868L2.5 13.4817Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};

export default Arrow;
