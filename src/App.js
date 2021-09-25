import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';

function App() {
  useEffect(() => {
    fetch('./members.json')
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
