export function BotaoAbrirMinhaEmpresa({text,color}) {
  return (
    <button className={`${color} bg-move-blue-900 xl  rounded-xl text-sm text-center lg:text-base group`}>
      <a className='block box-border border-2 border-move-blue-900 rounded-xl py-3 px-6 bg-move-gray-100  text-move-blue-900 translate-y-[-0.2em] ease-in duration-100 group-hover:translate-y-[-0.33em] group-active:translate-y-0' href='https://api.whatsapp.com/send?phone=5547988856568&text=Olá.%20Gostaria%20de%20saber%20mais%20sobre%20abertura%20empresa.' target='_blank'>{text}</a>
    </button>
  )
}