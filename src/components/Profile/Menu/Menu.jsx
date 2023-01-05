import React, { useContext } from 'react'
import { Context } from '../../../Context/Context'
import './Menu.scss'

function Menu() {
    const {dark} = useContext(Context)

  return (
    <div>
        <div className={dark === true ? 'dark menu' : 'menu'}>
            <div className="menu-bottom">
                <h3 className={dark === true ? 'dark' : ''}>Change or Recover Your Password</h3>
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

export default Menu