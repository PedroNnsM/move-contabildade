import FotoAbout from '../../assets/Imagem-14.jpg'

export function About() {
    return (

      <section id='sobre' className=" bg-move-blue-900">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <p className="text-xl font-medium text-move-blue-500 ">Sobre a Move</p>
          <h1 className="mt-2 text-3xl font-semibold  capitalize lg:text-4xl text-move-white">
            Quem somos ?
          </h1>
          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-move-blue-500 -z-10 md:h-96 rounded-2xl" />
            <div className="w-full p-6 bg-move-blue-500 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={FotoAbout} alt="client photo" />
              <div className='mt-4'>
                  <p className="text-xl font-medium tracking-tight text-move-white">Andreza Melo</p>
                  <p className="text-blue-200 ">Founder e CEO </p>
              <div className="mt-2 md:mx-6">
              
                </div>
                <p className="mt-4 text-lg leading-relaxed text-move-white md:text-base"> 
                  A Move é uma empresa contábil feita de empreendedores para empreendedores!<br/><br/>
                  Criada na pandemia, surgiu com o objetivo de simplificar a rotina contábil e
                  mostrar como
                  a contabilidade pode ser uma parceira no crescimento da sua empresa. Aqui na
                  Move a "parte chata" fica com a gente, dessa forma você tem mais tempo para
                  focar no seu
                  negócio.<br/><br/>
                  Nossos serviços são prestados 100% online, reduzindo desta forma a burocracia
                  e aumentando assim a agilidade nos processos. Cuidamos de toda a parte fiscal,
                  folha de
                  pagamento, demonstrações contábeis, e você ainda conta com um contador
                  exclusivo que também irá te ajudar com a gestão financeira.<br/>
                  Aqui na Move você é nosso parceiro! Se a sua empresa cresce, nós crescemos
                  também!<br/><br/>
                  O que acha de ter um contador que caminha lado a lado com você, que cuida da
                  abertura da sua empresa, contabilidade, e ainda te apoia na gestão financeira?
                  Foque no seu negócio e tenha mais economia e tempo com a Move.
                </p>
                <div className="flex items-center justify-between mt-6 md:justify-start">
                  {/* <button title="left arrow" className="p-2 text-move-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button title="right arrow" className="p-2 text-move-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    );
  }