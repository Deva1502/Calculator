import React from 'react';
import './App.css'; 

const Calculator = ({
  calculation,
  setCalculation,
  handleToggleHistory,
  addToHistory,
  showHistory,
}) => {
    const handleButtonClick = (value) => {
        switch (value) {
          case '=':
            try {
              const result = eval(calculation);
              addToHistory(`${calculation} = ${result}`);
              setCalculation(result.toString());
            } catch (error) {
              setCalculation('Error');
            }
            break;
          case 'C':
            setCalculation('0');
            break;
          case 'CE':
            setCalculation(calculation.slice(0, -1));//remove last digit
            break;
          default:
            setCalculation(calculation === '0' ? value : calculation + value);
            break;
        }
      };
      

  return (
    <div className="calculator-container">
      <div className="calculator-display">
        <div className="calculator-header">
          <button onClick={handleToggleHistory}>☰</button>
          <span>DEV CALCULATOR</span>
        </div>
        <div className='calculation-text-body'>
        <div className="calculation-text">{calculation}</div>

        </div>
        
      </div>
      <div className="calculator-buttons">
        <div className="calc-row">
          <button onClick={() => handleButtonClick('CE')}>CE</button>
          <button onClick={() => handleButtonClick('C')}>C</button>
          <button onClick={() => handleButtonClick('<-')}>⌫</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="calc-row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="calc-row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="calc-row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="calc-row">
          <button></button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

//ANOTHER METHOD USING MAP...

// import React from 'react';
// import './App.css';

// const Calculator = ({
//   calculation,
//   setCalculation,
//   handleToggleHistory,
//   addToHistory,
//   showHistory,
// }) => {
//   const buttonValues = [
//     ['CE', 'C', '⌫', '/'],
//     ['7', '8', '9', '*'],
//     ['4', '5', '6', '-'],
//     ['1', '2', '3', '+'],
//     ['', '0', '.', '='],
//   ];

//   const handleButtonClick = (value) => {
//     switch (value) {
//       case '=':
//         try {
//           const result = eval(calculation);
//           addToHistory(`${calculation} = ${result}`);
//           setCalculation(result.toString());
//         } catch (error) {
//           setCalculation('Error');
//         }
//         break;
//       case 'C':
//         setCalculation('0');
//         break;
//       case 'CE':
//         setCalculation(calculation.slice(0, -1)); // remove last digit
//         break;
//       case '⌫':
//         setCalculation(calculation.length > 1 ? calculation.slice(0, -1) : '0'); // remove last character or set to 0
//         break;
//       default:
//         setCalculation(calculation === '0' ? value : calculation + value);
//         break;
//     }
//   };

//   return (
//     <div className="calculator-container">
//       <div className="calculator-display">
//         <div className="calculator-header">
//           <button onClick={handleToggleHistory}>☰</button>
//           <span>DEV CALCULATOR</span>
//         </div>
//         <div className="calculation-text-body">
//           <div className="calculation-text">{calculation}</div>
//         </div>
//       </div>
//       <div className="calculator-buttons">
//         {buttonValues.map((row, rowIndex) => (
//           <div className="calc-row" key={rowIndex}>
//             {row.map((value, buttonIndex) => (
//               <button
//                 key={buttonIndex}
//                 onClick={() => handleButtonClick(value)}
//                 disabled={!value}
//               >
//                 {value}
//               </button>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calculator;
