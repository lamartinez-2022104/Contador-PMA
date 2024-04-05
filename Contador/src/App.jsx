import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function sumar(){
    if(count < 200){
      setCount(count+1)
    }

  }

  function restar() {
    setCount(count - 1)
  }
  function masOcho() {
    if (count + 8 <200) {
      setCount(count +8)
    } else {
      if(count + 8 >200){
        setCount(200)
      }
      
    }
    
  }
  function menosOcho() {
    setCount(count - 8)
  }

  return (
    <>
      <div>
        <a href="https://www.bing.com/ck/a?!&&p=edc7bfaf377238c1JmltdHM9MTcxMjI3NTIwMCZpZ3VpZD0wZTI0ZjgxNi0zYzYxLTY2OGUtMTdiYi1lYzRlM2QxMDY3ZTYmaW5zaWQ9NTcyOQ&ptn=3&ver=2&hsh=3&fclid=0e24f816-3c61-668e-17bb-ec4e3d1067e6&u=a1L2ltYWdlcy9zZWFyY2g_cT1lc2N1ZG8lMjBkZWwlMjBiYXJjYSZGT1JNPUlRRlJCQSZpZD0xMkIxMTdENEUyRTEzNzk5QjdGNTQzRjcwNEVBQzIwNjYyQkJENUE4&ntb=1" target="_blank">
          <img src="https://www.bing.com/ck/a?!&&p=edc7bfaf377238c1JmltdHM9MTcxMjI3NTIwMCZpZ3VpZD0wZTI0ZjgxNi0zYzYxLTY2OGUtMTdiYi1lYzRlM2QxMDY3ZTYmaW5zaWQ9NTcyOQ&ptn=3&ver=2&hsh=3&fclid=0e24f816-3c61-668e-17bb-ec4e3d1067e6&u=a1L2ltYWdlcy9zZWFyY2g_cT1lc2N1ZG8lMjBkZWwlMjBiYXJjYSZGT1JNPUlRRlJCQSZpZD0xMkIxMTdENEUyRTEzNzk5QjdGNTQzRjcwNEVBQzIwNjYyQkJENUE4&ntb=1" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>oda</h1>
      <div className="card">
        <button className='agregar' onClick={sumar}>
          Aumentar
        </button>
        <button className='agregar' onClick={masOcho}>+8</button>
        <h3>
          count is {count}
        </h3>
        <button className='restar' onClick={restar}> restar</button>
        <button className='restar' onClick={menosOcho}>-8</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
