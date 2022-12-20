


export function Header(){
  return(
    <nav className="flex justify-center items-center  ">
      <img src="http://github.com/pedronnsm.png" />
      {/* Montando a lista de itens para nevegacao da Lp */}
      <ul className="flex flex-col text-center gap-4 md:flex-row my-4 ">
        <li className="border hover:opacity-60"><a href="#">Home</a></li>
        <li className="border hover:opacity-60"><a href="#">sobre move</a></li>
        <li className="border hover:opacity-60 hover:text-green-700"><a href="#">Servicos</a></li>
        <li className="border hover:opacity-60"><a href="#">planos </a></li>
        <li className="border hover:opacity-60"><a href="#">contato</a></li>
      </ul>
    </nav>
  )
}