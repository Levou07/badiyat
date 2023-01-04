import React from 'react'
import './Profile.scss'

import myAcc from '../../img/myAcc.png'
import two from '../../img/two.png'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className='container'>
        <div className="profile">
            <div className="profile-top">
                <Link to='/profile'>
                    <div className="myAccount">
                        <img src={myAcc} alt="AccountImg" />
                        <h2>My Account</h2>
                    </div>
                </Link>
                <Link to='/settings'>
                    <div className="second">
                        <img src={two} alt="Settings" />
                        <h2>Settings</h2>
                    </div>
                </Link>
            </div>
            <div className="profile-bottom">
                <h3>Change or Recover Your Password</h3>
                <div className="email">
                    <b>Email</b>
                    <input type="text" placeholder='admin@mail.ru'/>
                    <p>Please Enter Your First Email</p>
                </div>
                <div className="password">
                    <b>Current Password</b>
                    <input type="text" placeholder='***'/>
                    <p>Please Enter your Password</p>
                </div>
                <div className="newPassword">
                    <div>
                        <b>New Password</b>
                        <input type="text" placeholder='***'/>
                        <p>Enter your New Password</p>
                    </div>
                    <div>
                        <b>Confirm Password</b>
                        <input type="text" placeholder='***'/>
                        <p>Confirm your New Password</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile