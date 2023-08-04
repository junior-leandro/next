import HomePage from "./home/HomePage";

export default function Home() {
  

  return (
    <HomePage/>
    
  )
}

export async function getStaticProps() {
  const results = await fetch("https://images-api.nasa.gov/search?media_type=image");
  const preview = await results.json();
  const items = await preview.collection.items;

  return {
    propos: { items },


  };

}
