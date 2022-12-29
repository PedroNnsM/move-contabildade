import FotoHeader from '../../assets/Imagem-61.jpg'
export function Header(){
  return(
    <div className="mx-4 h-[45.8rem] bg-slate-50 bg-foto-header  bg-contain bg-center bg-no-repeat z-10 relative">
      <h2 className="text-move-blue-900 text-center mt-8">
      Procurando uma contabilidade:</h2>
      <ul className='leading-10 h-[2.5rem] truncate'>
        <li className="text-move-blue-500 text-center  relative left-0 top-0 animate-slide ">
            <span className='relative after:absolute after:w-full after:h-full after:left-0 after:bg-move-gray-100 after:border-l-4 after:border-l-move-blue-900 after:animate-typing'>Inovadora?</span>
        </li>

        <li className="text-move-blue-500 text-center  relative left-0 top-0 animate-slide">
            <span className='relative after:absolute after:w-full after:h-full after:left-0 after:bg-move-gray-100 after:border-l-4 after:border-l-move-blue-900 after:animate-typing'>Sem burocracia?</span>
        </li>

        <li className="text-move-blue-500 text-center  relative left-0 top-0 animate-slide">
            <span className='relative after:absolute after:w-full after:h-full after:left-0 after:bg-move-gray-100 after:border-l-4 after:border-l-move-blue-900 after:animate-typing'>Que fala a sua língua?</span>
        </li>

        <li className="text-move-blue-500 text-center  relative left-0 top-0 animate-slide">
            <span className='relative after:absolute after:w-full after:h-full after:left-0 after:bg-move-gray-100 after:border-l-4 after:border-l-move-blue-900 after:animate-typing'>Impulsiona a sua empresa?</span>
        </li>

        <li className="text-move-blue-500 text-center  relative left-0 top-0 animate-slide">
            <span className='relative after:absolute after:w-full after:h-full after:left-0 after:bg-move-gray-100 after:border-l-4 after:border-l-move-blue-900 after:animate-typing'>Planeja com você?</span>
        </li> 

        </ul>
        <div className='flex justify-center items-center flex-col gap-4 mt-8'>

        <button className="text-move-gray-100 bg-move-blue-900 py-1 px-3 rounded-xl text-center">Abrir minha empresa</button>
        <button className="text-move-blue-500 py-1 px-3 rounded-xl border-move-blue-500 border text-center">Trocar de contabilidade</button>
        </div>
    </div>
  )
}