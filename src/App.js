import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './HOC/footer';
import Header from './HOC/header';
import Start from './pages/start';
import Menu from './pages/menu';
import NotFound from './pages/notFound';
function App() {
  return (
    <div className='App'>
      <Toaster position='bottom-center' reverseOrder={false} />

      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Start />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
