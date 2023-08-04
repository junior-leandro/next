import React, { useState } from "react";

export default function ImagePreview({ nasaPicture, title, description }) {


  const [show, setShow] = useState(false);
  return (
    <main className="grid">
      <div className="responsive" >
        <div className="gallery">
          <img src={nasaPicture} className="Img_Grid" onClick={() => setShow(true)} />
          <div className="desc">{title}</div>
        </div>
      </div>

      <div>
        <img src={nasaPicture} />
        <div className="container-Modal">
          <h1 className="Title_Modal">{title}</h1>
          <p className="description_Modal">{description}</p>
        </div>
      </div>
    </main>
  );
}
