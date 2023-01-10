import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import Logo from "../../assets/logoBlack.png"
import { LiComponent} from './LiCompontents'


export function Navbar(){
  const [open, setOpen] = useState(false)
  return(
    <header className="border-b border-gray-300 py-2  ">
    {/* Inserir a imagem da Logomarca */}
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full relative">

        <img className="w-16 h-16 rounded-full shadow-2xl " src={Logo} />
        <FiMenu className="lg:hidden block h-8 w-8 text-move-blue-500 cursor-pointer" onClick={() => setOpen(!open)} />

        <nav className={
          `${open ? "block" : "hidden"
          }  w-full lg:flex lg:items-center lg:w-auto`}
        >

          {/* Montando a lista de itens para nevegacao da Lp */}
          <ul className="text-base text-gray-600 lg:flex lg:justify-between ">
            <LiComponent tag='inicio' text='início' />
            <LiComponent tag='sobre' text='sobre move' />
            <LiComponent tag='servicos' text='Servicos' />
            <LiComponent tag='planos' text='planos' />
          </ul>
        </nav>
      </div>
    </header>
  )
}