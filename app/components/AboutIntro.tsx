"use client"

import Image from "next/image"
import Link from "next/link"
import aboutIntroPicture from "../../public/assets/about-intro-picture.png"
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "./AboutIntro.module.css"

export default function AboutIntro() {
  return (
    <div className="flex pt-32">
      <div className="aboutIntro w-2/3">
        <p className="aboutIntro_firstLine text-2xl pb-4">Olá, <span>menu nome é</span></p>
        <p className="aboutIntro_name text-5xl pb-4">Marcelo Cortez</p>
        <p className="aboutIntro_profession text-3xl pb-4">Desenvolvedor</p>
        <p className="aboutIntro_intro text-2xl pb-4">
          I am committed to finding innovative solutions and continuously experimenting to help my clients achieve their goals.
        </p>
        <div className="aboutIntro_social flex text-2xl mb-8">
          <p>Pode ver mais nas minhas redes:</p>
          <div className="pl-4">
            <Link href="https://www.youtube.com/@marcelocortezdev/about" target="_blank">
              <YouTubeIcon className="text-4xl"/>
            </Link>
            <Link href="https://www.linkedin.com/in/marcelohcortez/" target="_blank" className="pl-3">
              <LinkedInIcon className="text-4xl"/>
            </Link>
            <Link href="https://github.com/marcelohcortez" target="_blank" className="pl-3">
              <GitHubIcon className="text-4xl"/>
            </Link>
          </div>
        </div>
        <Link href="/sobre">Saiba mais</Link>
      </div>
      <Image src={aboutIntroPicture} alt="About Intro Picture" className="w-1/3"/>
    </div>
  )
}
