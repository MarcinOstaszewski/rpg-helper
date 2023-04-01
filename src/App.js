import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Dice, NavigationHeader } from './components';
import Field from './pages/Field/Field';
import FrostgraveWarband from './pages/FrostgraveWarband/FrostgraveWarband';

function App() {
  const pageRoot = '/rpg-helper/'
  return (
    <div className="App">
      <NavigationHeader pageRoot={pageRoot} />
      <Routes>
        <Route path={`${pageRoot}dice`} element={<Dice />} />
        <Route path={`${pageRoot}field`} element={<Field />} />
        <Route path={`${pageRoot}frostgrave`} element={<FrostgraveWarband />} />
        {/* <Route path='/direction' element={<Direction />} /> */}
      </Routes>
    </div>
  );
}

export default App;
