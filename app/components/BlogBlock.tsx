import Link from "next/link"
import BlogList from "./BlogList"
import SingleDivider from "./SingleDivider"

export default function BlogBlock() {
  return (
    <div className="blogList">
      <SingleDivider/>
      <h2>Blog</h2>
      <p>I bring a passion for creating user-friendly experiences and a drive  design trends and technologies to deliver top-notch designs that meet needs and exceed their expectations
</p>
      <BlogList/>
      <Link href="#">Ler mais</Link>
    </div>
  )
}
