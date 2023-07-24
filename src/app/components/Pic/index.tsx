
import React, { useState, useEffect } from "react";

export default function PicOfDay(){

    interface ResponseData {
        title: string,
        media_type: string,
        url: string,
        explanation: string
      }
    
      const urlApod = 'https://api.nasa.gov/planetary/apod?api_key=rmqnLe1gDaQduvT4Sw9nIwArY8Ka6ITTsCHNXAwe';
      const [photoData, setPhotoData] = useState<ResponseData[]>([]);
    
      useEffect(() => {
        (async () => {
          const res = await fetch(urlApod);
          const data = await res.json();
          setPhotoData(data);
        })()}, []);
      if (!photoData) return (<div />)

      
    return(
        <div className="flex flex-col justify-center items-center w-2/4 mb-8">
            
        <h3 className="my-7"><i>Pic of The day:</i> <strong>{photoData.title}</strong></h3>

        <div className="flex justify-center items-center mb-4">
          {photoData.media_type === "image" ?
            <img src={photoData.url} alt={photoData.title} className="w-7/12 rounded-lg"/>
            :
            <iframe src={photoData.url} className="h-1/5 rounded-lg"></iframe>}
        </div>
        <span className="text-sm">{photoData.explanation}</span>
              </div>
    )
}