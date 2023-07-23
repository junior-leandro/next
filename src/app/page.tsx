
export default function HomePage() {
  return (
    <div className={`
    flex flex-col justify-center gap-5 items-center h-screen w-screen bg-[url('/bg.jpg')]
    bg-no-repeat 
    `}>
      <div className="flex flex-col justify-center gap-5 items-center">
        
        <h1 className="text-5xl font-light">
          Hello, earhlings!
        </h1>
        <span className="mb-10">
          Here you can find photos of our planet, the other planets and galaxies too!
        </span>

        <div className="flex flex-row w-full justify-center items-center">
          <input type="search" name="Search" id="" placeholder=" Search for an image" className={`
     rounded-xl h-9 w-4/5
     `} />
          <button className="w-1/5 bg-gray-900 rounded-xl h-10">
            Search
          </button>
        </div>
      </div>

    </div>
  )
}
