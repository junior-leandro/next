
export default function Home(){

    return (
        <div className={`
        flex flex-col justify-center gap-5 items-center w-full
      `}>
          <div className="flex flex-col justify-center gap-7 items-center">
            <h1 className="text-5xl mt-20">
              Hello, Earthlings!
            </h1>
            <span className="mb-6 text-zinc-500 font-semibold">
            You can search for pictures of our planet, other planets and galaxies!
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
