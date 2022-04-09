import {useCallback, useEffect, useMemo, useRef, useState} from "react";

function App() {
  const [count, setCount] = useState(1)
  const [colored, setColored] = useState(false)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i)=>`Element ${i + 1}`)
  }, [count]) // Кешируем ф-ию

  return (
    <>
      <h1 style={styles}>{count}</h1>
      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>+</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>change</button>
      <ItemsList getItems={generateItemsFromAPI}/>
    </>
  );
}

export default App;

const ItemsList = ({getItems}) => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const newItems = getItems()
    setItems(newItems)
    console.log('getItems useEff')
  }, [getItems])

  return (
    <ul>
      {items.map(i => <li key={i}>{i}</li>)}
    </ul>
  );
};

