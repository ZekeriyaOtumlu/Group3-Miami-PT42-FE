import './App.css';
import NavbarComponent from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Recipes } from './components/Recipes';
import { Footer } from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';



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
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
        </div>
  );
}

export default App;
