import 'animate.css';
import { useState } from 'react';
import './App.css';

function App() {

  let [num, setNum] = useState(0);
  

      const increase = ()=>{
        setNum(num + 1)
        document.getElementById('step').classList.add("animate__fadeInDown");
        setTimeout(()=>{
          document.getElementById('step').classList.remove("animate__fadeInDown")
        },300)
      }
      
      const decrease = ()=>{
        if (num === 0) {
          return
        }
        else{
          setNum(num - 1)
          document.getElementById('step').classList.add("animate__fadeInUp");
        setTimeout(()=>{
          document.getElementById('step').classList.remove("animate__fadeInUp")
        },300)
          
        }
      }

  return (

    <div className='body'>

      <div className="wrap">
        <div id='step' className={`stepper animate__animated`}>
          <span className="count first active">{num}</span>
        </div>
        <img src="https://alikinvv.github.io/stepper-iteration/build/img/arrow-top.svg" alt="" className="arrow-top active"  onClick={decrease}/>
        <img src="https://alikinvv.github.io/stepper-iteration/build/img/arrow-bottom.svg" onClick={increase} alt="" className="arrow-bottom" />
      </div>

    </div>
  );
}

export default App;
