import FotoHeader from '../../assets/Imagem-61-removebg-preview.png'
import FotoHeaderDesktop from '../../assets/Imagem-60-removebg-preview.png'
import { LiHeader } from './ListaHearder'
import TextAnimation from '../animation/TextAnimation'
import { BotaoTrocarDeContabilidade } from '../Buttons/ButaoTrocarDeContabilidade'
import { BotaoAbrirMinhaEmpresa } from '../Buttons/BotaoAbrirMinhaEmpresa'

export function Header() {
  return (
    <section id='inicio' className='lg:flex lg:w-full lg:h-[600px] flex  justify-between xl:max-w-6xl xl:mx-auto max-w-full'>
      <div className="mx-4  bg-slate-50 z-10 relative flex flex-col items-center gap-6 mt-8 ">
        <h2 className="text-move-blue-900 text-center mt-8">
          Procurando uma contabilidade:
        </h2>
        <div className='leading-10 h-[2.5rem]  relative '>
          <TextAnimation />

        </div>
        <div className='max-w-[350px]'>
          <p className='font-normal text-center text-base'>
            Aqui na move você encontra soluções que irão auxiliar a alavancar seu
            negócio!
          </p>
        </div>
        <div className='flex justify-center items-center flex-col gap-4 mt-8 lg:flex-row '>
          <BotaoAbrirMinhaEmpresa color="text-move-gray-100" text="Abrir minha empresa" />
          <BotaoTrocarDeContabilidade />

        </div>
      </div>
      <div className="flex items-center justify-center  bg-gradient-to-t from-move-blue-500 to-move-gray-100 z-0 lg:bg-none  lg:justify-start lg:items-end">
        <img src={FotoHeader} alt="" className='lg:hidden' />
        <img src={FotoHeaderDesktop} alt="" className=' hidden  lg:block ' />
      </div>
    </section>
  )
}