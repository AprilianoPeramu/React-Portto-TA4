import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Blog from './pages/Blog'
import Footer from './pages/Footer';




const App = ()=> {
  

  return (
    <div className='app'>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/Skills' element={<Skills />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
