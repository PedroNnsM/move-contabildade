import { useState } from "react"
import { FiMenu } from "react-icons/fi"



export function Navbar(){
  const [open, setOpen] = useState(false)
  return(
    <header className="border-b border-gray-300 py-2  ">
    {/* Inserir a imagem da Logomarca */}
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full relative">

        <img className="w-16 h-16 rounded-full shadow-2xl " src="http://github.com/pedronnsm.png" />
        <FiMenu className="lg:hidden block h-8 w-8 cursor-pointer" onClick={() => setOpen(!open)} />

        <nav className={
          `${open ? "block" : "hidden"
          }  w-full lg:flex lg:items-center lg:w-auto`}
        >

          {/* Montando a lista de itens para nevegacao da Lp */}
          <ul className="text-base text-gray-600 lg:flex lg:justify-between ">
            <li className="lg:px-5  block lg:py-2 font-semibold hover:text-blue-500 text-center  text-blue-700 text-2xl py-5 "><a href="#">Home</a></li>
            <li className="lg:px-5  block lg:py-2 font-semibold hover:text-blue-500 text-center  text-blue-700 text-2xl py-5  "><a href="#">sobre move</a></li>
            <li className="lg:px-5  block lg:py-2 font-semibold hover:text-blue-500 text-center  text-blue-700 text-2xl py-5  "><a href="#">Servicos</a></li>
            <li className="lg:px-5  block lg:py-2 font-semibold hover:text-blue-500 text-center  text-blue-700 text-2xl py-5  "><a href="#">planos </a></li>
            <li className="lg:px-5  block lg:py-2 font-semibold hover:text-blue-500 text-center  text-blue-700 text-2xl py-5  "><a href="#">contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}