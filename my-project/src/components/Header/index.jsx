import FotoHeader from '../../assets/Imagem-61.jpg'
import { LiHeader } from './ListaHearder'

export function Header(){
  return(
    <div className="mx-4 h-[45.8rem] bg-slate-50 bg-foto-header  bg-contain bg-center bg-no-repeat z-10 relative">
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
      <div className='flex justify-center items-center flex-col gap-4 mt-8'>
        <button className="text-move-gray-100 bg-move-blue-900 py-1 px-3 rounded-xl text-center">
          Abrir minha empresa
        </button>
        <button className="text-move-blue-500 py-1 px-3 rounded-xl border-move-blue-500 border text-center">
          Trocar de contabilidade
        </button>
      </div>
    </div>
  )
}