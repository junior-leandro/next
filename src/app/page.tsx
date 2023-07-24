'use client'

import Navbar from "./components/Navbar"
import PicOfDay from "./components/Pic"
import Home from "./pages/home"


export default function HomePage() {

  
  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat">

      <header className="flex justify-center items-center">
        <Navbar />
      </header>
      <main className="flex flex-col justify-center gap-5 items-center w-full">
        <PicOfDay />
      </main>
      <footer className="text-center text-sm inset-x-0 bottom-0 m-2.5">
        <span>
          Developed by <strong className="cursor-pointer">junior.dev.br</strong> | API provided by NASA</span>
      </footer>
    </div>
  )
}
