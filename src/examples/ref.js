import {useEffect, useRef, useState} from "react";

// let renderCount = 1 // **

function App() {
  // const [renderCount, setRenderCount] = useState(1) // *
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1) // состояния, определенные через useRef, сохраняются между рендерами компонента
  const inputRef = useRef(null) // получаем ссылку на DOM element
  const prevValue = useRef('') // получаем значение предыдущего state

  useEffect(() => {
    // setRenderCount(prev => prev + 1) // * <- войдем в бесконечный рендер
    // renderCount++ // **
    renderCount.current++ // когда мы меняем саму референцию, мы не вызываем рендер компонента
    console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Render count: {renderCount.current}</h1>
      <h2>Previous state: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
      <button className="btn btn-success" onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
