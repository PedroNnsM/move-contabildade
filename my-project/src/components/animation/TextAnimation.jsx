import './style.css'

import { useEffect, useState} from 'react'
{/* <LiHeader text='Sem burocracia?' />
          <LiHeader text='Que fala a sua língua?' />
          <LiHeader text='Inovadora?' />
          <LiHeader text='Impulsiona a sua empresa?' />
          <LiHeader text='Planeja com você?' /> */}
export default function TextAnimation(){
  const queFalaASuaLiguaArray = "Planeja com você?".split("");
  return (
    <div className=" flex gap-1  ">
      {queFalaASuaLiguaArray.map((item, index) => (
        <span key={index} className={`animate-fadeIn opacity-0 `} >{item}</span>
      ))}
    </div>
  );
}