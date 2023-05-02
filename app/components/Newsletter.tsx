import SingleDivider from "./SingleDivider"

export default function Newsletter() {
  return (
    <div className="blogList">
      <SingleDivider/>
      <h2>Newsletter</h2>
      <p>I bring a passion for creating user-friendly experiences and a drive  design trends and technologies to deliver top-notch designs that meet needs and exceed their expectations
</p>
      <form>
        <input type="text" name="newsletter" placeholder="Insira o seu email"/>
        <button>Cadastrar</button>
      </form>  
    </div>
  )
}
