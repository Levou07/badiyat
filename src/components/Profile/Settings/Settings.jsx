import React, { useContext, useState } from 'react' 
import { Context } from '../../../Context/Context';
import './Settings.scss'

import profile from '../../../img/profile.png'

function Settings() {
  const [mode, setMode] = useState(window.localStorage.getItem('mode'))
  const {setDark} = useContext(Context)

  const [img, setImg] = useState('')

  const handleSub = (e)=>{
    e.preventDefault()
    const ff = e.target.firstName.value
    setImg(`${ff}`)
    window.localStorage.setItem('profileImg', `${ff}`)
    e.target.reset()
  }

  return (
    <div className={mode === true && window.localStorage.getItem('mode') ? 'dark settings' : 'settings'}>
      <div className="settings-info">
        <h3>Settings</h3>
        <div className='settings-info-div'>
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
        <div className="info-img">
            <div className='imgDiv'>
              <img src={window.localStorage.getItem('profileImg')} alt="profile-img" />
              <span></span>
            </div>
            <div>
              <h3>New img For Your Profile</h3>
              <form onSubmit={handleSub} action="#" className="frm">
                <div className="input-group">
                  <div className="form-floating">
                    <input name="firstName" type="text" className="form-control imgUrl" id="floatingInputGroup1" placeholder="Paste Url"/>
                    <label htmlFor="floatingInputGroup1 mb1">Paste Url</label>
                  </div>
                  <button type='submit' className="input-group-text btn btn-success">Set</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Settings