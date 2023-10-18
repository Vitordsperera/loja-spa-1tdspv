





export default function Cabecalho(){
  return(
    <html lang="pt-br">
      <body className={inter.className}>
      <ul>
          <li><Link href="/produtos/tenis">TÊNIS</Link><br/></li>
          <li><Link href="/produtos/camisetas">CAMISETAS</Link><br/></li>
          <li><Link href="/produtos/calcas">CALÇAS</Link></li> 
        </ul>
      </body>
    </html>
  )
}