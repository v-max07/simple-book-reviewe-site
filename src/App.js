import { Route, Routes } from 'react-router-dom';
import './App.css';
import ABOUT from './Components/ABOUT/ABOUT';
import BLOGS from './Components/BLOGS/BLOGS';
import DASHBOARD from './Components/DASHBOARD/DASHBOARD';
import HOME from './Components/HOME/HOME';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import REVIEWS from './Components/REVIEWS/REVIEWS';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<HOME />} />
        <Route path='/reviews' element={<REVIEWS />} />
        <Route path='/dashboard' element={<DASHBOARD />} />
        <Route path='/blogs' element={<BLOGS />} />
        <Route path='/about' element={<ABOUT />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    
    </>
  );
}

export default App;
