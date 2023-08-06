import React, { useState } from "react";

export default function ImagePreview({ nasaPicture, title, description }: any) {


  const [show, setShow] = useState(false);
  return (
    <>
      <div className="rounded-lg flex flex-col justify-center items-center bg-gradient-to-t from-black/[0.5] to-trasparent">
        <div className="w-96 h-96">
          <img src={nasaPicture}
            className="h-96 w-96 object-cover rounded-lg"
            onClick={() => setShow(true)} />
        </div>
        <span className="text-lg font-semibold text-gray-200">{title}</span>
      </div>

      <div className="hidden">
        <div className=" flex flex-col gap-5 justify-center items-center">
          <img src={nasaPicture} className="w-full" />
          <h1 className="">{title}</h1>
        </div>
      </div>
    </>
  );
}
