import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import './index.css';
import ClockContainer from './components/ClockContainer';
import AnotherPage from './components/AnotherPage';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to='/'>Clock</NavLink>
              </li>
              <li>
                <NavLink to='/another'>Another Page</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<ClockContainer />} />
            <Route path='/another' element={<AnotherPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;