import { useState } from 'react'
import './style.css';

const Logo = () => {
  const [red, setRed] = useState(0)

  return (
    // <div className='container'>
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="500"
    //     height="500"
    //     viewBox='0 0 100 100'
    //     className='border'
    //   >
    //     <circle className='circle1' r="45" cx="50" cy="50"/>
    //     <circle className='circle2' r="45" cx="50" cy="50"/>
    //     <path d="M 3.6 50 L 15 50" fill='none' stroke='green' stroke-width="3"/>
    //   </svg>
    //   <input type="range" min="162" max="290" onChange={(e) => setRed(prev => prev = e.target.value)}/>
    // </div>
    <></>
  )
};

export default Logo;
