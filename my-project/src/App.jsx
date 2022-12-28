import { Header } from "./components/Header";
import {  Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="text-3xl font-bold bg-move-gray-100 h-screen">
      <Navbar />
      <Header />
      <div className="bg-gradient-to-t from-move-blue-500 to-move-gray-100 h-screen mt-[-16rem] z-0">

      </div>
    </div>
  )
}