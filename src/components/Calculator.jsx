import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');

  // Handle click events on calculator buttons
  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };

  // Clear the calculator screen
  const clearScreen = () => {
    setResult('');
  };

  // Handle input change to ensure only numbers and valid expressions are accepted
  const handleChange = (e) => {
    const value = e.target.value;
    // Check if the input is a number or a valid expression (like '1+2')
    if (/^\d*\.?\d*$/.test(value)) {
      setResult(value);
    }
  };

  // Perform calculation and update the result
  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className='bg-slate-800 text-white w-screen h-screen flex justify-center items-center'>
      <div className="main w-64 h-auto bg-slate-900 rounded-xl shadow-xl border-4 border-slate-100">
        <div className="screen">
          <input
            type="text"
            value={result}
            onChange={handleChange}
            className='text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1 pt-10 text-2xl rounded-lg bg-gray-400 outline-none text-right'
            placeholder='0'
          />
        </div>

        <div className="brand bg-slate-200 bg-opacity-90 my-2">
          <h1 className='text-slate-900 text-xs text-center font-bold'>Preetal's Calculator</h1>
        </div>

        <div className="keyboard">
          <div className="flex justify-between m-2">
            <input type="button" onClick={clearScreen} value="C" className='bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="<" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="%" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="/" className='bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
          </div>
          <div className="flex justify-between m-2">
            <input type="button" onClick={clickHandle} value="7" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="8" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="9" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="*" className='bg-green-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
          </div>
          <div className="flex justify-between m-2">
            <input type="button" onClick={clickHandle} value="4" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="5" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="6" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="-" className='bg-indigo-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
          </div>
          <div className="flex justify-between m-2">
            <input type="button" onClick={clickHandle} value="1" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="2" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="3" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="+" className='bg-purple-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
          </div>
          <div className="flex justify-between m-2">
            <input type="button" onClick={clickHandle} value="0" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="00" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={clickHandle} value="." className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
            <input type="button" onClick={calculate} value="=" className='bg-orange-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
