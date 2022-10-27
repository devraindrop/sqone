import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import Header from './Header';
import Footer from './components/footer';
import Content from './Content';
import About from './components/about';
import Notfound from './components/notfound';
import CarDetail from './components/carDetail';
import Addcar from './components/addcar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Content />} /> 
      <Route path="/about-us" element={<About />} />
      <Route path="/cars/:id" element={<CarDetail />} />
      <Route path="/addcar" element={<Addcar />} />
       <Route path="/*" element={<Notfound />} />

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
