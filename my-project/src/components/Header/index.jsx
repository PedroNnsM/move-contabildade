import FotoHeader from '../../assets/Imagem-61.jpg'
export function Header(){
  return(
    <div className="mx-4 h-[45.8rem] bg-slate-50 bg-foto-header  bg-contain bg-center bg-no-repeat z-10 relative">
      <h2 className="text-move-blue-900 text-center">
      Procurando uma contabilidade:</h2>
      <ul>
          <li className="text-move-blue-500 text-center">Inovadora?</li>
          <li className="text-move-blue-500 text-center">Sem burocracia?</li>
         <li className="text-move-blue-500 text-center">Que fala a sua língua?</li>
          {/* <li className="text-move-blue-500 text-center">Impulsiona a sua empresa?</li>
          <li className="text-move-blue-500 text-center">Planeja com você?</li> */}
        </ul>
        <div className='flex justify-center items-center flex-col gap-4 mt-1'>

        <button className="text-move-gray-100 bg-move-blue-900 py-1 px-3 rounded-xl text-center">Abrir minha empresa</button>
        <button className="text-move-blue-500 py-1 px-3 rounded-xl border-move-blue-500 border text-center">Trocar de contabilidade</button>
        </div>
    </div>
  )
}