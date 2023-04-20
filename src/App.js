import { useState } from 'react';
import './App.css';
import { Dice, NavigationHeader } from './components';
import Field from './pages/Field/Field';
import FrostgraveWarband from './pages/FrostgraveWarband/FrostgraveWarband';

function App() {
  const pages = ['Warband', 'Position', 'Dice'];
  const [currentPage, setCurrentPage] = useState(pages[0]);

  const handleNavbarClick = e => {
    setCurrentPage(e.target.innerText);
  }

  const visiblePage = {
    [pages[0]]: <FrostgraveWarband />,
    [pages[1]]: <Field />,
    [pages[2]]: <Dice />
  }

  return (
    <div className="App">
      <NavigationHeader pages={pages} currentPage={currentPage} handleNavbarClick={handleNavbarClick}/>
      {visiblePage[currentPage]}
    </div>
  );
}

export default App;
