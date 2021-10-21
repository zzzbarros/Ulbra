import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Routes from './components/Routes';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
