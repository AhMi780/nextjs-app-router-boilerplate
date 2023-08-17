import React from "react";

const Loading = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center h-full w-full ${className}`}
    >
      <div className=" border-t-[5px] !border-t-slate-300 border-white border-solid border-[5px]  rounded-full w-[50px] h-[50px] mb-4 animate-spin"></div>
    </div>
  );
};

export default Loading;
