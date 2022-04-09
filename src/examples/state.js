import {useState} from "react";

function computeInitialCounter() {
  console.log('calc...')
  return Math.trunc(Math.random() * 20)
}

function App() {
  // const [counter, setCounter] = useState(0)
  // const [counter, setCounter] = useState(computeInitialCounter()) // !!!!! BAD !!!!!
  const [counter, setCounter] = useState(() => computeInitialCounter()) // !!!!! GOOD !!!!!

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })

  const increment = () => {
    /*
     useState - асинхронный, поэтому
        setCounter(counter + 1)
        setCounter(counter + 1)
     не даст ожидаемого результата.
     Вместо этого используй:
     */
    setCounter(prevCounter => prevCounter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const updateTitle = () => {
    setState(prev => {
      return {...prev, title: 'New title'}
    })
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">+</button>
      <button onClick={decrement} className="btn btn-danger">-</button>
      <button onClick={updateTitle} className="btn btn-default">Change title</button>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
}

export default App;
