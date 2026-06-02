import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import BooksChild from './pages/BooksChild/BooksChild';
import BooksAduls from './pages/BooksAdults/BooksAdults';
import BooksInProgress from './pages/BooksInProgress/BooksInProgress';
import About from './pages/About/About';



export default function App() {

  
  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='books-child' element={<BooksChild/>} />
      <Route path='books-adults' element={<BooksAduls/>} />
      <Route path='in-progress' element={<BooksInProgress/>} />
    </Routes>
    </>
  )
}


