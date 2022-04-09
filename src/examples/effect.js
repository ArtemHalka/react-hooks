import {useEffect, useState} from "react";

function App() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  const mouseMoveHandler = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    })
  }

  // Вызывается при каждом рендере компонента
  useEffect(() => {
    console.log('render')
  })

  // Вызывается при изменении состояния type
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  // Вызывается один раз после "монтирования" компонента
  useEffect(() => {
    console.log('ComponentDidMount')
    window.addEventListener('mousemove', mouseMoveHandler)

    // Вызовется тогда, когда компонент будет удаляться
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div>
      <h1>Resource: {type}</h1>
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
