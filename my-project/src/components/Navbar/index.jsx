import { WhatsappLogo, LinkedinLogo, InstagramLogo } from "phosphor-react"
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { RiCloseFill} from "react-icons/ri"
import Logo from "../../../public/MOVE-LOGO-DIREITA-SVG (1) 1.svg"
import { LiComponent} from './LiCompontents'


export function Navbar(){
  const [open, setOpen] = useState(false)
  return(
    <header className="border-b border-gray-300 py-2  ">
  
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full relative transition ease-in-out delay-150">

        <img className="w-30 h-10  " src={Logo} />
        { open ? <RiCloseFill className="lg:hidden block h-8 w-8 text-move-blue-500 cursor-pointer" onClick={() => setOpen(!open)} /> :<FiMenu className="lg:hidden block h-8 w-8 text-move-blue-500 cursor-pointer" onClick={() => setOpen(!open)} />   } 
        

        <nav className={
          `${open ? "block" : "hidden"
          }  w-full lg:flex lg:items-center lg:w-auto lg:relative `}
        >

          {/* Montando a lista de itens para nevegacao da Lp */}
          <ul className="text-base text-gray-600 lg:flex lg:justify-between ">
            <LiComponent tag='inicio' text='Início' />
            <LiComponent tag='sobre' text='Sobre a MOVE' />
            <LiComponent tag='solucoes' text='Soluções' />
            {/* <LiComponent tag='planos' text='planos' /> */}
            
          </ul>
          <ul className="flex items-center justify-center gap-3">
            <li>
              <button className=" "> 
                  <a href="https://www.instagram.com/movecontdigital/" target='_blank'>
                  <InstagramLogo size={32} />
                  </a>
              </button>
            </li>
            <li>
              <button className=" "> 
                  <a href="https://www.linkedin.com/company/move-assessoria-e-contabilidade-digital/" target='_blank'>
                  <LinkedinLogo size={32} />
                  </a>
              </button>
            </li>
            <li>
              <button className=" "> 
                  <a href="https://api.whatsapp.com/send?phone=5547988856568&text=Ol%C3%A1,%20quero%20conhecer%20mais%20os%20servi%C3%A7os%20da%20Move!" target='_blank'>
                    <WhatsappLogo size={32} />
                  </a>
              </button>
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
  )
}