import React, {useState} from 'react'
import data from "./animation.json";
import Lottie from 'react-lottie';
import style from './Header.module.css'

function Header() {

  const [state, setState] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className={style.container}>
    <div className={style.left}>
      <p className={style.heading}>
        A <span>Resume</span> that helps shape your future!
      </p>
      <p className={style.heading}>
        Save efforts and <span>Save time</span>
      </p>
    </div>
    <div className={style.right}>
     
      <div>
      {state && <Lottie options={defaultOptions} height={400} width={400}/>}
      </div>
         
    </div>
  </div>
  )
}

export default Header