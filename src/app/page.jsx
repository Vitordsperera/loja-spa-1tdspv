import Link from "next/link";
import Image from "next/Image"
export default function Home(){
  return(
    <>
      <h1>HOME</h1>

      <div>
        <ul>
          <Link href="/produtos/tenis">TÊNIS</Link><br/>
          <Link href="/produtos/camisetas">CAMISETAS</Link><br/>
          <Link href="/produtos/calcas">CALÇAS</Link> 
        </ul>

        <figure>
          <Image src="/supermarket.jpg" alt="Prateleira" width={320} height="{320}"/>
        </figure>
      
      </div>
    </>
    )
}
