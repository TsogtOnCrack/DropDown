import './App.css';
import { Dropdown } from './components/dropdown';
import { useState } from 'react';
import { Color } from './components/color';

const List = [
  "blue",
  "orange",
  "green",
  "red",
  "purple",
  "white",
  "black",
  "gray"
]

const innitial = "none"

function App() {

  const [c, setC] = useState(innitial)
  const handleClick = color => {
    setC(color);
  };

  return (

    <div className="w-screen h-screen bg-slate-600 flex flex-col items-center">

      <div className='flex flex-row h-[24px] rounded-b-[30px] overflow-clip'>
        <div className='w-[100px] h-[100%] bg-red-50'></div>
        <div className='w-[100px] h-[100%] bg-red-100'></div>
        <div className='w-[100px] h-[100%] bg-red-200'></div>
        <div className='w-[100px] h-[100%] bg-red-300'></div>
        <div className='w-[100px] h-[100%] bg-red-400'></div>
        <div className='w-[100px] h-[100%] bg-red-500'></div>
        <div className='w-[100px] h-[100%] bg-red-600'></div>
        <div className='w-[100px] h-[100%] bg-red-700'></div>
        <div className='w-[100px] h-[100%] bg-red-800'></div>

      </div>

      <h1 className='text-white my-14 text-[36px] font-serif'>Welcome to Tsogt's drop down</h1>

      <div className='flex flex-row'>

        <Dropdown handleClick={handleClick} dropDownList={List} innitial={innitial} />
        <div className='w-24'></div>
        <Color color={c} />

      </div>


    </div>
  );
}

export default App;
