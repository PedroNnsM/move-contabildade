import { useEffect, useState } from 'react'
import { useInterval } from 'react-use';

import './style.css'

const phrases = [
  { text: "Que fala a sua língua?", array: "Que fala a sua língua?".split("") },
  { text: "Inovadora?", array: "Inovadora?".split("") },
  { text: "Impulsiona a sua empresa?", array: "Impulsiona a sua empresa?".split("") },
  { text: "Planeja com você?", array: "Planeja com você?".split("") }
]

export default function TextAnimation() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[3]);
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(true)

  useInterval(
    () => {
      setCurrentPhrase(phrases[count]);
      setCount((count + 1) % phrases.length);
    },
    play ? 6000 : null
  )

  useEffect(() => {
    console.log('A frase atual foi alterada para: ', currentPhrase.text)
  }, [currentPhrase])

  return (
    <div className=" flex gap-1  ">
      {currentPhrase.array.map((item, index) => (
        <span key={index} className={`animate-fadeIn whitespace-nowrap text-move-blue-500 opacity-0  `} >{item}</span>
      ))}
    </div>
  );
}