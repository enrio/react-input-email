import { useState } from 'react';
import { InputEmailMulti } from './components/input-email';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>aaaaa</p>
      <InputEmailMulti />
    </div>
  );
}

export default App;
