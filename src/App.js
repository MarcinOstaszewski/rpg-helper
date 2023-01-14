import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Dice, NavigationHeader } from './components';

function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path='/dice' element={<Dice />} />
      </Routes>
    </div>
  );
}

export default App;
