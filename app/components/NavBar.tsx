import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";

const oswald = Oswald({ subsets: ['latin'] })

export default function NavBar() {
  return (
    <header className="flex items-center w-full justify-between">
      <Image src={logo} alt="Marcelo Cortez Dev logo" className="w-2/12 h-auto"/>
      <div className={`menu flex w-10/12 justify-end text-3xl uppercase ${oswald.className}`}>
        <Link href="/" className="pr-5">Home</Link>
        <Link href="/sobre" className="pr-5">Sobre</Link>
        <Link href="/blog" className="pr-5">Blog</Link>
        <Link href="/contato">Contato</Link>
      </div>
    </header>
  )
}
