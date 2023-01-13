import { FooterPage } from "./components/Footer";
import { Header } from "./components/Header";
import {  Navbar } from "./components/Navbar";
import { PriceCards } from "./components/Price";

export default function App() {
  return (
    <div className="text-3xl font-bold bg-move-gray-100 h-screen">
      <Navbar />
      <Header />
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
            <PriceCards />
            <PriceCards />
          </div>
        </div>
      </div>


      <FooterPage />
    </div>
  )
}