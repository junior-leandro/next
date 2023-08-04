'use client'

import { useState } from "react";
import ImagePreview from "./ImagePreview";

export default function HomePage({ items }) {

    const [search, setSearch] = useState("");
    const [photos, setPhotos] = useState(items);

    return (
        <div className={`
        flex flex-col justify-center gap-5 items-center w-full
      `}>
            <div className="flex flex-col justify-center gap-7 items-center w-1/2">
                <h1 className="text-5xl mt-20">
                    Hello, Earthlings!
                </h1>
                <span className="mb-6 text-zinc-500 font-semibold">
                    You can search for pictures of our planet, other planets and galaxies!
                </span>
                <div className="flex flex-row w-full justify-center items-center">
                    <input type="search" name="Search" id="" placeholder="Search for an image"
                        className="rounded-xl h-12 w-4/5 text-zinc-900 p-5" />
                    <button className="w-1/5 bg-gray-900 rounded-xl h-12 cursor-pointer"
                        onClick={
                            async () => {
                                const results = await fetch(
                                    `https://images-api.nasa.gov/search?media_type=image&q=${search}`
                                );
                                const previews = await results.json();
                                setPhotos(await previews.collection.items);
                            }}
                    >
                        Search
                    </button>
                </div>
                <div>
                    <div>
                        {photos &&
                            photos.map((preview) => (
                                <ImagePreview
                                    key={preview.data[0].title}
                                    nasaPicture={preview.links[0].href}
                                    title={preview.data[0].title}
                                    description={preview.data[0].description}
                                />
                            ))
                        }
                    </div>
                </div>


            </div>
        </div>

    )
}