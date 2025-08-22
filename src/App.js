import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import About from './Component/About';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
              <Header />
                  <Routes>
                      <Route path='/' element={<Home />}/>
                      <Route path='/home' element={<Home />}/>
                      <Route path='/.about-section {
  background: #fff;
}

.price-card {
  transition: 0.3s;
}

.price-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-appointment {
  background-color: #00aace;
  color: #fff;
  border-radius: 30px;
  padding: 8px 20px;
  border: none;
}

.btn-appointment:hover {
  background-color: #008aa0;
  color: #fff;
}
' element={<About />}/>
                  </Routes>
              <Footer />
            </BrowserRouter>
    </div>  
  );
}

export default App;
