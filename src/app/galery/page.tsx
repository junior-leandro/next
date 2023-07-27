'use client'

import ImagePreview from "../../components/ImagePreview"
import Image from "next/image";
import { useState } from "react";


export default function Galery ({items}) {

    const [search, setSearch] = useState("");
    const [photos, setPhotos] = useState(items); 
    return (
        <div>
            <h1> Nasa Galery</h1>
            
            {photos && photos.map((preview) => (
                <ImagePreview
                    key={preview.data[0].nasa_id}
                    thumbnailUrl={preview.links[0].href}
                    nasaId={preview.data[0].nasa_id}/>
            ))}

        </div>
    )
}


export async function getStaticProps() {
    const results = await fetch(
      "https://images-api.nasa.gov/search?media_type=image"
    );
    const previews = await results.json();
    const items = await previews.collection.items;
    return {
      props: { items },
    }; }