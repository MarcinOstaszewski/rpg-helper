import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Dice, NavigationHeader } from './components';
import Field from './pages/Field/Field';

function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path='/dice' element={<Dice />} />
        <Route path='/field' element={<Field />} />
        {/* <Route path='/direction' element={<Direction />} /> */}
      </Routes>
    </div>
  );
}

export default App;
