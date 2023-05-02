import { Inter } from 'next/font/google'
import AboutIntro from './components/AboutIntro'
import BlogBlock from './components/BlogBlock'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Newsletter from './components/Newsletter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-6 px-24 w-full m-auto max-w-screen-2xl">
      <NavBar/>
      <AboutIntro/>
      <BlogBlock/>
      <Newsletter/>
      <Footer/>
    </main>
  )
}
