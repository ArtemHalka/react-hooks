import React, {useEffect, useState} from 'react';

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

export default ItemsList;
