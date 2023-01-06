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
              <img src={window.localStorage.getItem('profileImg') ? window.localStorage.getItem('profileImg') : 'data:image/png;base64,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'} alt="profile-img" />
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