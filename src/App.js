import { useState } from "react";
import "./styles.css";

export default function App() {
  const [currNum , setCurrNum] = useState()
  const GetNumber =(num)=>{

    setCurrNum([...currNum , num.target.value])
  }  

  const SolutionHandler =()=>{

    console.log(currNum)

  
  }
  return (
    <div className="App">
      <h1>Calculator</h1>
<h2>{currNum}</h2>
      <div className="CalcTab">
          <ul>
            <li>
              <div className="numbers">
                <button value={"."} onClick={(e)=>GetNumber(e)}>.</button>
                <button value={0} onClick={(e)=>GetNumber(e)}>0</button>
                <button value={"="} onClick={SolutionHandler}>=</button>
                <button value={1} onClick={(e)=>GetNumber(e)}>1</button>
                <button value={2} onClick={(e)=>GetNumber(e)}>2</button>
                <button value={3} onClick={(e)=>GetNumber(e)}>3</button>
                <button value={4}onClick={(e)=>GetNumber(e)}>4</button>
                <button value={5} onClick={(e)=>GetNumber(e)}>5</button>
                <button value={6} onClick={(e)=>GetNumber(e)}>6</button>
                <button value={7} onClick={(e)=>GetNumber(e)}>7</button>
                <button value={8} onClick={(e)=>GetNumber(e)}>8</button>
                <button value={9} onClick={(e)=>GetNumber(e)}>9</button>
              </div>
            </li>
            <li>
              <div className="Ac">
                <button>AC</button>
                <button value={"÷"} onClick={(e)=>GetNumber(e)}>÷</button>
                <button value={"×"} onClick={(e)=>GetNumber(e)}>×</button>
                <button value={"-"} onClick={(e)=>GetNumber(e)}>-</button>
                <button value={"+"} onClick={(e)=>GetNumber(e)}>+</button>

              </div>
            </li>
          </ul>
      </div>
    </div>
  );
}
