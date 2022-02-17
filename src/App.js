import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageArt from './components/PageArt/PageArt';
import HomePage from './containers/HomePage/HomePage';
import LearningCentrePage from './containers/LearningCentrePage/LearningCentrePage';
import HelpPage from './containers/HelpPage/HelpPage';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/learning-centre' element={<LearningCentrePage />} />
          <Route path='/help' element={<HelpPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <PageArt />
    </div>
  );
}

export default App;
