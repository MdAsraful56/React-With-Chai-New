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
            <button onClick={()=> setColor('red')} style={{backgroundColor: 'red'}} className="btn outline-none px-4 py-1 rounded-lg text-black shadow-lg">Red</button>
            <button onClick={()=> setColor('green')} style={{backgroundColor: 'green'}} className="btn outline-none px-4 py-1 rounded-lg text-black shadow-lg">Green</button>
            <button onClick={()=> setColor('blue')} style={{backgroundColor: 'blue'}} className="btn outline-none px-4 py-1 rounded-lg text-black shadow-lg">Blue</button>
            <button onClick={()=> setColor('gray')} style={{backgroundColor: 'gray'}} className="btn outline-none px-4 py-1 rounded-lg text-black shadow-lg">Gray</button>
            <button onClick={()=> setColor('yellow')} style={{backgroundColor: 'yellow'}} className="btn outline-none px-4 py-1 rounded-lg text-black shadow-lg">Yellow</button>
            <button onClick={()=> setColor('pink')} style={{backgroundColor: 'pink'}} className="btn outline-none px-4 py-1 rounded-lg text-black shadow-lg">Pink</button>
            <button onClick={()=> setColor('white')} style={{backgroundColor: 'white'}} className="btn outline-none px-4 py-1 rounded-lg text-black shadow-lg">White</button>
            <button onClick={()=> setColor('lavender')} style={{backgroundColor: 'lavender'}} className="btn outline-none px-4 py-1 rounded-lg text-black shadow-lg">lavender</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
