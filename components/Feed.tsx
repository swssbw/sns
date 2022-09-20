import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const Feed = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="p-5 pb-0 text-xl font-bold">Home</div>
      <ArrowPathIcon
        className="h-8 w-8 cursor-pointer mr-5 mt-5 text-blue-500 
        transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
      />
    </div>
  );
};

export default Feed;
