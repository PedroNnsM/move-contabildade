import { About } from "./components/About";
import { Atuacao } from "./components/Atuacao";
import { FooterPage } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { PriceCards } from "./components/Solucoes";

export default function App() {
  return (
    <div className="text-3xl font-bold bg-move-gray-100 h-screen">
      <Navbar />
      <Header />
      {/* <section className="flex max-w-6xl mx-auto gap-2 ">
        <Atuacao textAtuacao="Marketing digital" />
        <Atuacao textAtuacao="Educação" />
        <Atuacao textAtuacao="Droppshping" />
        <Atuacao textAtuacao="Negócios digitais" />
        <Atuacao textAtuacao="Negócios digitais" />
      </section> */}
      <About />
      <div
        id="solucoes"
        className="
          bg-white 
          flex
          xl:items-center 
          xl:justify-between 
          xl:max-w-6xl 
          xl:mx-auto
          max-w-full
          gap-1
          "
      >
        <div className="container px-6 py-8 mx-auto">
          <div
            className="
          flex
          xl:items-center 
          xl:justify-between 
          xl:max-w-6xl 
          xl:mx-auto
          max-w-full
          "
          >
            <h4 className="mt-2 text-3xl font-semibold text-move-blue-900 capitalize lg:text-4xl mb ">
              Soluções
            </h4>
          </div>
          <div
            className="
          mt-12
          flex 
          flex-col 
          items-center 
          justify-center  
          lg:-mx-4 
          lg:flex-row 
          lg:items-stretch 
          lg:space-y-0 
          xl:items-center 
          xl:justify-between 
          xl:max-w-6xl 
          xl:mx-auto
          max-w-full"
          >
            <PriceCards
              servico="Abertura de Empresa"
              periodo=""
              passo1='1 - Entendendo o que você precisa:
              Desde o início "pegamos na sua mão" e identificamos o tipo certo de empresa para você,
              orientamos sobre os impostos, planejamos qual a melhor forma de ter economia, e
              explicamos como funciona a contabilidade completa para seu modelo de negócio'
              passo2="2 - Abertura da empresa:
              Na Move, o processo de abertura é 100% online, você não precisará se preocupar em perder
              tempo com filas, deslocamentos e burocracia. Envie os documentos necessários
              e deixa que o resto a Move resolve"
              passo3="3 - Contabilidade Completa
              Cuidamos de toda a parte fiscal, folha de pagamento, demonstrações contábeis, e você ainda
              conta com um contador exclusivo que também irá te ajudar com a gestão
              financeira."
              textBtn="Abertura de empresa"
            />
            <PriceCards
              servico="Troca de Contabilidade"
              periodo=""
              passo1="1 - Um especialista entrará em contato
              Um Mover entrará em contato para explicar como funciona a mudança, entender como
              podemos te ajudar e direcionar a melhor solução para a sua empresa"
              passo2="2 - A troca é por nossa conta
              Não se preocupe com a documentação ou como fazer a troca, essa parte a gente assume!
              Entraremos em contato com a contabilidade atual para solicitar a mudança e faremos
              todo o acompanhamento de transferência."
              passo3="3 - Tudo pronto!
              Agora tudo pronto para apertamos o cinto e decolarmos! Após a transferência finalizada,
              vamos marcar nossa primeira reunião de onboarding. Nesse momento mapeamos as dores
              da empresa, fazemos um diagnóstico contábil e tributário e traçamos um plano de ação juntos!"
              textBtn="Troca de Contabilidade"
            />
          </div>
        </div>
      </div>

      <FooterPage />
    </div>
  );
}
