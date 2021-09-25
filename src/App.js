import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('./members.json')
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])
  return (
    <div>

    </div>
  );
}

export default App;
