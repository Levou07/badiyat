import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Profile.scss'

import myAcc from '../../img/myAcc.png'
import two from '../../img/two.png'

function Profile() {
    const [black, setBlack] = useState('black')
    const [black2, setBlack2] = useState('black')

  return (
    <div className='container'>
        <div className="profile">
            <div className="profile-top">
                <Link to='/profile/menu' onClick={()=> {
                    setBlack('white')
                    setBlack2('black')
                }}>
                    <div className={black === 'black' ? 'myAccount white' : 'myAccount'}>
                        <img src={myAcc} alt="AccountImg" />
                        <h2>My Account</h2>
                    </div>
                </Link>
                <Link to='/profile/settings' onClick={()=> {
                    setBlack2('white')
                    setBlack('black')
                }}>
                    <div className={black2 === 'black' ? 'second white' : 'second'}>
                        <img src={two} alt="Settings" />
                        <h2>Settings</h2>
                    </div>
                </Link>
            </div>
        </div>

        <Outlet/>
    </div>
  )
}

export default Profile