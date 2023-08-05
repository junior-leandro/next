import React, { useState } from "react";

export default function ImagePreview({ nasaPicture, title, description }:any) {


  const [show, setShow] = useState(false);
  return (
    <div className="w-screen h-full grid grid-cols-4">
      <div className="w-screen flex bg-orange-500 p-5">
        <div className="bg-red-600 rounded-lg p-3 flex flex-col justify-center items-center">
          <div className="w-96 h-96">
            <img src={nasaPicture} 
            className="h-96 w-96 object-cover rounded-lg" 
            onClick={() => setShow(true)}/>
          </div>
          <span className="text-lg font-semibold text-gray-200">{title}</span>
        </div>
      </div>

      <div className="hidden">
        <div className=" flex flex-col gap-5 justify-center items-center">
          <img src={nasaPicture} className="w-full"/>
          <h1 className="">{title}</h1>
        </div>
      </div>
    </div>
  );
}
