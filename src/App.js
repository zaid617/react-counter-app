import 'animate.css';
import { useState } from 'react';
import './App.css';

function App() {

  let [num, setNum] = useState(0);
  let [class, setClass] useState ("")

      const increase = ()=>{
        setNum(num + 1)
      }

      const decrease = ()=>{
        if (num === 0) {
          return
        }
        else{
          setNum(num - 1)
        }
      }

  return (

    <>

      <div className="wrap">
        <div className={`stepper ${{}}`}>
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
