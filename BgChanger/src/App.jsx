import { useState } from 'react';
import './App.css'

function App() {
  const [color, setColor] = useState('black');
  

  return (
    <>
      <div className="h-screen w-full duration-150" style={{backgroundColor: color}}>
        <h1 className='text-4xl text-center p-5 text-orange-50'>Background Color Changer</h1>
        <div className='flex flex-wrap fixed justify-center items-center bottom-12 inset-x-0 px-2'>
          <div className="flex flex-wrap justify-center gap-4 bg-white px-3 py-2 shadow-2xl rounded-2xl">
            <button style={{backgroundColor: 'red'}} className="btn outline-none px-4 py-1 rounded-lg text-white shadow-lg">Red</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
