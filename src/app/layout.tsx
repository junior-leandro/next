import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import logoHeader from "../../public/favicon.png"


// Dados do head
export const metadata: Metadata = {
  title: 'NASA API | Next Project',
  description: 'System created consuming the NASA API',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {}
      <body className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat h-screen w-scren">
        <header className="flex justify-center items-center w-full">
          <nav>
            <div className='flex flex-row my-10'>
              <a href='/' className='mr-8'>
                <Image
                  src={logoHeader}
                  width={75}
                  height={75}
                  alt='Logo da Nasa'
                />
              </a>
              <ul className="flex flex-row justify-center items-center text-md  text-gray-100 bg-transparent mt-6">

                <li className="p-3 mx-3.5">
                  <Link href="/pic">Pic of the Day</Link>
                </li>
                <li className="p-3 mx-3.5 cursor-pointer hover:text-gray-400">
                  <Link href="/earth">Earth Today</Link>
                </li>
                <li className="p-3 mx-3.5 cursor-pointer hover:text-gray-400">
                  <Link href="/rover">Pic's of Mars Rover</Link>
                </li>
                <li className="p-3 mx-3.5 cursor-pointer hover:text-gray-400">
                  <Link href="/">Search</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main className='w-full'>
          {children}
        </main>

        <footer className="text-center text-sm fixed inset-x-0 bottom-0 m-2.5">
          <span>
            Developed by <strong className="cursor-pointer">junior.dev.br</strong> | API provided by NASA</span>
        </footer>
      </body>
    </html>
  )
}
