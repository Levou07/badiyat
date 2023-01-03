import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import First from './pages/First/First';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
      </div>
      <div className="hr">
        
      </div>
      <Routes>
        <Route path='/' element={<First/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
