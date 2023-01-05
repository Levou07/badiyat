import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import First from './pages/First/First';
import About from './components/About/About';
import Profile from './pages/Profile/Profile';
import Settings from './components/Profile/Settings/Settings';
import Menu from './components/Profile/Menu/Menu';
import Nasr from './components/Nasr/Nasr';

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
        <Route path='/nasr' element={<Nasr/>} />
        <Route path='/profile' element={<Profile/>} >
          <Route path='/profile/menu' element={<Menu/>}/>
          <Route path='/profile/settings' element={<Settings/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
