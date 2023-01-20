import './App.css';
import NavbarComponent from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Recipes } from './components/Recipes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <NavbarComponent/>
        </header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/recipes' element={<Recipes/>}/>
        </Routes>
        </BrowserRouter>
        </div>
  );
}

export default App;
