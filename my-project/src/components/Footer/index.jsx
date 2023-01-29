import footerImageLogo from '../../../public/MOVE-LOGO-BrancoSVG.svg';
import { WhatsappLogo, LinkedinLogo, InstagramLogo } from "phosphor-react"
export function FooterPage() {
  return (

    <footer className="text-move-gray-100 bg-move-blue-500 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img className='w-[8rem]' src={footerImageLogo} />
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> 2022 Move Contabilidade —
          <a href="https://www.linkedin.com/in/pedro-nunes-m/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Pedro.dev</a>
        </p>

        <ul className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
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
      </div>
    </footer>
  );
}