import { FooterPage } from "./components/Footer";
import { Header } from "./components/Header";
import {  Navbar } from "./components/Navbar";
import { PriceCards } from "./components/Price";

export default function App() {
  return (
    <div className="text-3xl font-bold bg-move-gray-100 h-screen">
      <Navbar />
      <Header />
      <PriceCards />
      


      <FooterPage />
    </div>
  )
}