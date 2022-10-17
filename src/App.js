import 'animate.css';
import { useState } from 'react';
import './App.css';

function App() {

  let [num, setNum] = useState(0);
  let [repeat , setRepeat] = useState(false)
  

      const increase = ()=>{
        setNum(num + 1)
        setRepeat(!repeat)
        document.getElementById('step').classList.toggle('animate__bounceIn')
        document.getElementById('step').classList.toggle('animate__faster')
      }
      
      const decrease = ()=>{
        if (num === 0) {
          return
        }
        else{
          setNum(num - 1)
          setRepeat(!repeat)
          document.getElementById('step').classList.toggle('animate__faster')
          document.getElementById('step').classList.toggle('animate__bounceIn')
        }
      }

  return (

    <>

      <div className="wrap">
        <div id='step' className={`stepper  ${(repeat) ? "animate__faster animate__animated animate__bounceIn" : "animate__faster animate__animated animate__bounceIn"}`}>
          <span className="count first active">{num}</span>
          <span className="count second next"></span>
        </div>
        <img src="https://alikinvv.github.io/stepper-iteration/build/img/arrow-top.svg" alt="" className="arrow-top active"  onClick={decrease}/>
        <img src="https://alikinvv.github.io/stepper-iteration/build/img/arrow-bottom.svg" onClick={increase} alt="" className="arrow-bottom" />
      </div>

    </>
  );
}

export default App;
