import { useState } from "react";
import "./styles.css";

export default function App() {


  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  

  // Recursive function to evaluate the expression
  const evaluate = (tokens) => {
    if (tokens.length === 1) {
      return parseFloat(tokens[0]);
    }

    let firstNumber = parseFloat(tokens[0]);
    console.log("first" , firstNumber)
    let operator = tokens[1];
    let nextNumber = parseFloat(tokens[2]);

    let intermediateResult;
    switch (operator) {
      case '+':
        intermediateResult = firstNumber + nextNumber;
        break;
      case '-':
        intermediateResult = firstNumber - nextNumber;
        break;
      case '*':
        intermediateResult = firstNumber * nextNumber;
        break;
      case '/':
        intermediateResult = firstNumber / nextNumber;
        break;
      default:
        return firstNumber;
    }

    // Recursively evaluate the remaining tokens
    return evaluate([intermediateResult.toString(), ...tokens.slice(3)]);
  };

  // Handle number click
  const handleNumberClick = (value) => {
    setInput(input + value.target.value);
  };
  console.log(input)

  // Handle operator click
  const handleOperatorClick = (operator) => {
    if (!input) return; // Don't allow operator click without a number

    // When the operator is clicked, calculate the current result
    let tokens = input.match(/(\d+|\+|\-|\*|\/)/g);
    console.log(tokens) 
    if (tokens) {
      let currentResult = evaluate(tokens); // Evaluate the current input
      setInput(currentResult + operator.target.value); // Update input with the current result followed by the operator
      setResult(currentResult); // Show the intermediate result
    } else {
      setInput(input + operator.target.value); // If no tokens (empty input), just add the operator
    }
  };

  // Clear input and result
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="App">
      <p>{input || "0"}</p>
      <h2>{result}</h2>
       
      <div className="CalcTab">
          <ul>
              <li>  
      <h1>Calculator</h1>
              <div className="numbers">
                <button value={"."} onClick={(e)=>handleNumberClick(e)}>.</button>
                <button value={"0"} onClick={(e)=>handleNumberClick(e)}>0</button>
                <button value={"="} onClick={handleOperatorClick} >=</button>
                <button value={"1"} onClick={(e)=>handleNumberClick(e)}>1</button>
                <button value={"3"} onClick={(e)=>handleNumberClick(e)}>3</button>
                <button value={"4"}onClick={(e)=>handleNumberClick(e)}>4</button>
                <button value={"5"} onClick={(e)=>handleNumberClick(e)}>5</button>
                <button value={"6"} onClick={(e)=>handleNumberClick(e)}>6</button>
                <button value={"2"} onClick={(e)=>handleNumberClick(e)}>2</button>
                <button value={"7"} onClick={(e)=>handleNumberClick(e)}>7</button>
                <button value={"8"} onClick={(e)=>handleNumberClick(e)}>8</button>
                <button value={"9"} onClick={(e)=>handleNumberClick(e)}>9</button>
              </div>
            </li>
            <li>
              <div className="Ac">
                <button onClick={clearInput}>AC</button>
                <button value={"/"} onClick={(e)=>handleOperatorClick(e)}>÷</button>
                <button value={"*"} onClick={(e)=>handleOperatorClick(e)}>×</button>
                <button value={"-"} onClick={(e)=>handleOperatorClick(e)}>-</button>
                <button value={"+"} onClick={(e)=>handleOperatorClick(e)}>+</button>

              </div>
            </li>
          </ul>
      </div>
    </div>
  );
}
