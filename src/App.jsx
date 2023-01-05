import './App.scss';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import First from './pages/First/First';
import About from './components/About/About';
import Profile from './pages/Profile/Profile';
import Settings from './components/Profile/Settings/Settings';
import Menu from './components/Profile/Menu/Menu';
import Nasr from './components/Nasr/Nasr';
import Login from './pages/Login/Login';
import { useEffect } from 'react';

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
    if(window.localStorage.getItem('pass') !== 'togri'){
      navigate('/login')
    }
  },[location.pathname])

  return (
    <div className="App">
      <div className={window.localStorage.getItem('pass') == 'togri' ? 'container' : 'conNone'}>
        <Header/>
      </div>
      <div className={window.localStorage.getItem('pass') == 'togri' ? 'hr' : 'conNone'}>
        
      </div>
      <Routes>
        <Route path='/' element={<First/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/nasr' element={<Nasr/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} >
          <Route path='/profile/menu' element={<Menu/>}/>
          <Route path='/profile/settings' element={<Settings/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
