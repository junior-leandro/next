
export default function HomePage() {
  
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
            <div className="flex flex-row w-full justify-center items-center w-11/12">
              <input type="search" name="Search" id="" placeholder="Search for an image" 
              className="rounded-xl h-12 w-4/5 text-zinc-900 p-5"/>
              <button className="w-1/5 bg-gray-900 rounded-xl h-12">
                Search
              </button>
            </div>
           
          </div>
        </div>
  );
}

export async function getStaticProps() {
  const results = await fetch("https://images-api.nasa.gov/search?media_type=image");
  const preview = await results.json();
  const items = await preview.collection.items;

  return {
    propos: { items },


  };
  
}
