'use client'

import React, { useState, useEffect } from "react";

export default function PicOfDay() {

interface ResponseData {
    title: string,
    media_type: string,
    url: string,
    explanation: string,
  }

  const urlApod = 'https://api.nasa.gov/planetary/apod?api_key=rmqnLe1gDaQduvT4Sw9nIwArY8Ka6ITTsCHNXAwe';
  const [photoData, setPhotoData] = useState<ResponseData>();

  useEffect(() => {
    (async () => {
      const res = await fetch(urlApod);
      const data = await res.json();
      setPhotoData(data);
    })()
  }, []);
  if (!photoData) return (<div />)


  return (
    <div className="flex justify-center items-center mt-10">

      <div className="flex justify-center items-center max-h-screen">
        <div className="flex justify-center items-center w-1/2 h-full">
          {photoData.media_type === "image" ?
              <img src={photoData.url} alt={photoData.title} className="w-7/12 max-h-full rounded-3xl shadow-2xl"/>
              :
              <iframe src={photoData.url} className="h-7/12 rounded-3xl shadow-2xl"> </iframe>
            }
        </div>

        <div className=" flex flex-col items-start w-1/2 px-4">
          <h3 className="my-7 px-4">Pic of The day: <br/><strong>{photoData.title}</strong></h3>
          <span className="text-sm text-justify text-zinc-400 p-4 bg-gradient-to-tr from-black to-45% rounded-3xl ">{photoData.explanation}</span>
        </div>
      </div>
    </div>
  )
}