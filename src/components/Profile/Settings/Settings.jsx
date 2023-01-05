import React, { useContext, useState } from 'react' 
import { Context } from '../../../Context/Context';
import './Settings.scss'

function Settings() {
  const [mode, setMode] = useState(window.localStorage.getItem('mode'))
  const {setDark} = useContext(Context)

  console.log(mode);

  return (
    <div className={mode === true && window.localStorage.getItem('mode') ? 'dark settings' : 'settings'}>
        <div className="settings-info">
          <h3>Settings</h3>
          <div>
            <b>Name <span className='span'>{window.localStorage.getItem('userName')}</span> </b>
            <input type="text" placeholder='Name' className='input'/>
            <p>Please Enter Your new Name</p>

            <b>Theme</b>
            <label htmlFor="lbl" className='lbl'>
              <span className={mode === true || window.localStorage.getItem('mode' != false) ? 'right' : 'left'}></span>
              <input type="checkbox" id='lbl' className='lblInp' onClick={()=>{
                setMode(!mode)
                setDark(!mode)
                window.localStorage.setItem('mode', !mode)
              }}/>
            </label>
          </div>
        </div>
    </div>
  )
}

export default Settings
