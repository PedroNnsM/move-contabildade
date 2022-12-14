import FotoHeader from '../../assets/Imagem-61-removebg-preview.png'
import FotoHeaderDesktop from '../../assets/Imagem-60-removebg-preview.png'
import { LiHeader } from './ListaHearder'

export function Header(){
  return(
    <div id='inicio' className='lg:flex lg:w-full lg:h-[80vh]'>
      <div className="mx-4  bg-slate-50 z-10 relative flex flex-col items-center lg:w-[60%] lg:gap-14">
        <h2 className="text-move-blue-900 text-center mt-8">
          Procurando uma contabilidade:
        </h2>
        <ul className='leading-10 h-[2.5rem] truncate'>
          <LiHeader text='Sem burocracia?' />
          <LiHeader text='Que fala a sua língua?' />
          <LiHeader text='inovadora?' />
          <LiHeader text='Impulsiona a sua empresa?' />
          <LiHeader text='Planeja com você?' />

        </ul>
        <div className='max-w-[350px]'>
          <p className='font-normal text-center text-base'>
          Aqui na move você encontra soluções que irão auxiliar a alavancar seu
    negócio!
          </p>
        </div>
        <div className='flex justify-center items-center flex-col gap-4 mt-8 lg:flex-row '>
          <button className="text-move-gray-100 bg-move-blue-900 xl  rounded-xl text-sm text-center lg:text-base group">
            <span className='block box-border border-2 border-move-blue-900 rounded-xl py-3 px-6 bg-move-gray-100  text-move-blue-900 translate-y-[-0.2em] ease-in duration-100 group-hover:translate-y-[-0.33em] group-active:translate-y-0'>Abrir minha empresa</span> 
          </button>
          <button className="text-move-gray-100 bg-move-blue-900 xl  rounded-xl text-sm text-center lg:text-base group">
            <span className='block box-border border-2 border-move-blue-900 rounded-xl py-3 px-6 bg-move-blue-500  text-move-gray-100 translate-y-[-0.2em] ease-in duration-100 group-hover:translate-y-[-0.33em] group-active:translate-y-0'>Trocar de contabilidade</span> 
          </button>
         
        </div>
      </div>
      <div className="flex items-center justify-center  bg-gradient-to-t from-move-blue-500 to-move-gray-100 z-0 lg:bg-none lg:w-[40%] lg:justify-start lg:items-">
        <img src={FotoHeader} alt="" className='lg:hidden' />
        <img src={FotoHeaderDesktop} alt="" className=' hidden    lg:block ' />
      </div>
    </div>
  )
}