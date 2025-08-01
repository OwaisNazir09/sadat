import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';

import ScrollToTop from './pages/components/ScrollToTop';
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer';

import Home from './pages/Home'; // Example page
import About from './pages/About'; // Another example

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <Router basename="/">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
