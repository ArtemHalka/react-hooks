import React from 'react';
import {useAlert} from "./alert/AlertContext";

const Main = () => {
  const {show} = useAlert()
  return (
    <>
      <h1>Hello with Context</h1>
      <button onClick={() => show('Text from Main.js')} className="btn btn-success">Show alert</button>
    </>
  );
};

export default Main;
