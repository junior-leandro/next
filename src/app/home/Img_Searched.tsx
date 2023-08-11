import Image from 'next/image';
import React from 'react';

export default function Img_Searched({ photo }:any) {

    return (
        <>
                <div>
                    <div className="Imagecontainer">
                        <>
                        <Image width={960} priority height={540} src={photo} alt="pic" />
                        </>

                    </div>
                    <div className="Imagecontainer">
                        <a className="homeButton">
                            <button className="button">Go home</button>
                        </a>
                    </div>
                </div>
        </>
    );

};
export async function getStaticProps({ params }:any) {
    const nasa_id = params.id;
    const results = await fetch(`https://images-api.nasa.gov/asset/${nasa_id}`);
    const previews = await results.json();
    const photo = await previews.collection.items[0].href;
    return {
        props: { photo },
    };
}

export async function getStaticPaths() {
    const results = await fetch(
        "https://images-api.nasa.gov/search?media_type=image"
    );
    const previews = await results.json();
    const items = await previews.collection.items;

    return {
        paths:
            items?.map((nasa:any) => ({
                params: {
                    id: nasa.data[0].nasa_id,
                },
            })) || [],
        fallback: true,
    };
}


