import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Contact, Header, Home, Menu } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/header' element={<Header />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>Page don't exist</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
