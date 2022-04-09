import {useEffect, useMemo, useRef, useState} from "react";

function complexCompute(num) {
  console.log('complexCompute')
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored]) // кешируем объект

  const computed = useMemo(() => complexCompute(number), [number]) // закешировали результат выполнения медленной ф-ии

  useEffect(() => {
    console.log('styles changed')
  }, [styles])

  return (
    <>
      <h1 style={styles}>{computed}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>+</button>
      <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>-</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>change</button>
    </>
  );
}

export default App;
