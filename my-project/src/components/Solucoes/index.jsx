export function PriceCards({
  servico,
  preco,
  periodo,
  passo1,
  passo2,
  passo3,
  textBtn,
}) {
  return (
    <div className="flex flex-col w-full max-w-md p-8 space-y-8 text-center bg-move-white border-2 border-move-blue-900 rounded-3xl lg:mx-4 shadow-2xl shadow-move-blue-900 ">
      <div className="flex-shrink-0">
        <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
          {servico}
        </h2>
      </div>

      <ul className="flex-1 space-y-4">
        <li className="text-gray-500 text-sm">{passo1}</li>
        <li className="text-gray-500 text-sm">{passo2}</li>
        <li className="text-gray-500 text-sm">{passo3}</li>
      </ul>
      <div className="flex-shrink-0">
        <span className="pt-2 text-4xl font-bold uppercase text-gray-100">
          {preco}
        </span>
        <span className=" text-gray-400">{periodo}</span>
      </div>
      <button className="text-move-gray-100 bg-move-blue-900 xl  rounded-xl text-sm text-center lg:text-base group">
        <a
          className="block box-border border-2 border-move-blue-900 rounded-xl py-3 px-6 bg-move-blue-500  text-move-gray-100 translate-y-[-0.2em] ease-in duration-100 group-hover:translate-y-[-0.33em] group-active:translate-y-0"
          href="https://api.whatsapp.com/send?phone=5547988856568&text=Ol%C3%A1,%20quero%20conhecer%20mais%20os%20servi%C3%A7os%20da%20Move!"
          target="_blank"
        >
          {textBtn}
        </a>
      </button>
    </div>
  );
}
