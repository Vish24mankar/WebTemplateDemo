import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
              <Header />
                  <Routes>
                      <Route path='/' element={<Home />}/>
                      <Route path='/home' element={<Home />}/>
                  </Routes>
              <Footer />
            </BrowserRouter>
    </div>  
  );
}

export default App;
