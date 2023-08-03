import Home from "./home/page";

export default function HomePage() {
  
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState(items);

  return (
    <Home/>
    
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
