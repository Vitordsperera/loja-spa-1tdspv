import Link from "next/link";
import Image from "next/Image";
export default function Home(){
  return(
    <>
      <h1>HOME</h1>

      <div>
        <ul>
          <li><Link href="/produtos/tenis">TÊNIS</Link><br/></li>
          <li><Link href="/produtos/camisetas">CAMISETAS</Link><br/></li>
          <li><Link href="/produtos/calcas">CALÇAS</Link></li> 
        </ul>

        <figure>
          <Image src="/supermarket.jpg" alt="Prateleira" width={320} height="{320}"/>
        </figure>
      
      </div>
    </>
    )
}
