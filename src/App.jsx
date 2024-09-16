
import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newletter from './components/Newletter'
import Products from './components/Products'
import Services from './components/Services'
import MyFooter from './components/MyFooter'
import { FaAnglesUp } from 'react-icons/fa6'
import { useState, useEffect } from 'react'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <Navbar />
      <Home />
      <Services/>
      <About/>
      <Products/>
      <Blog/>
      <Newletter/>
      <MyFooter/>
      {showScrollTop && (
          <div 
            onClick={scrollToTop} 
            className="fixed bottom-4 right-4 p-3 bg-brandPrimary hover:bg-neutralGrey text-xl z-50 text-white rounded-full cursor-pointer"
          >
            <FaAnglesUp size={24} />
          </div>
        )}
    </>
  )
}  

export default App
