import React from "react";

const Avatar = () => {
  return (
    <div className="rounded-full bg-blue-500 h-9 w-9 flex items-center justify-center relative cursor-pointer hover:opacity-70">
      <p className="text-white">JO</p>
      <div className="absolute -top-2 border-2 -right-2 bg-red-500 rounded-full h-5 w-5 flex justify-center items-center text-xs text-white font-bold">
        2
      </div>
    </div>
  );
};

export default Avatar;
