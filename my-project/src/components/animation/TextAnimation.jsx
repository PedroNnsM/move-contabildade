import { useEffect, useState} from 'react'
{/* <LiHeader text='Sem burocracia?' />
          <LiHeader text='Que fala a sua língua?' />
          <LiHeader text='Inovadora?' />
          <LiHeader text='Impulsiona a sua empresa?' />
          <LiHeader text='Planeja com você?' /> */}
export default function TextAnimation(){
  const queFalaASuaLiguaArray = "Que fala a sua língua?".split("");
  // const reactArray = "Inovadora?".split("");
  // const reactArray = "React".split("");
  // const reactArray = "React".split("");
  // const reactArray = "React".split("");

  return (
    <div className=" inline-block ">
      {queFalaASuaLiguaArray.map((item, index) => (
        <span key={index} className={`animate-fadeIn inline-block delay-${index}`} >{item}</span>
      ))}
    </div>
  );
}