import Main from "./Main";
import Alert from "./alert/Alert";
import {AlertProvider} from "./alert/AlertContext";

function App() {

  return (
    <AlertProvider value={alert}>
      <div className={'container'}>
        <Alert/>
        <Main/>
      </div>
    </AlertProvider>
  );
}

export default App;
