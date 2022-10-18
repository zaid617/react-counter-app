import 'animate.css';
import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function App() {

  let [num, setNum] = useState(0);
  let [lit, setLit] = useState(true)


  const increase = () => {
    setNum(num + 1)
    document.getElementById('step').classList.add("animate__fadeInDown");
    setTimeout(() => {
      document.getElementById('step').classList.remove("animate__fadeInDown")
    }, 300)
  }

  const decrease = () => {
    if (num === 0) {
      return
    }
    else {
      setNum(num - 1)
      document.getElementById('step').classList.add("animate__fadeInUp");
      setTimeout(() => {
        document.getElementById('step').classList.remove("animate__fadeInUp")
      }, 300)

    }
  }

  const modeHandler = ()=>{
      setLit(!lit)
  }

  return (

    <>

    <div className="body">

    <div className="toggleButton">
    <div className="innerbox">
    <input type="checkbox" className="checkbox" id="checkbox" onClick={modeHandler}/>
      <label for="checkbox" className="label">
      <FontAwesomeIcon icon={faSun} className="fa-moon"/>
      <FontAwesomeIcon icon={faMoon} className="fa-sun" />
        <div className='ball'></div>
      </label>
      </div>
  </div>

    <div className='body'>

     

      <div className="wrap">
        <div id='step' className={`stepper animate__animated`}>
          <span className="count first active">{num}</span>
        </div>
        <img src="https://alikinvv.github.io/stepper-iteration/build/img/arrow-top.svg" alt="" className="arrow-top active" onClick={decrease} />
        <img src="https://alikinvv.github.io/stepper-iteration/build/img/arrow-bottom.svg" onClick={increase} alt="" className="arrow-bottom" />
      </div>

    </div>

    </div>

    </>
  );
}

export default App;
