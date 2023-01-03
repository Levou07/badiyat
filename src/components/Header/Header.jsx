import React from 'react'
import './Header.scss'

import logo from '../../img/logo.svg'
import profile from '../../img/profile.png'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="wrapper-center">
          <Link to='/'>
            Bosh sahifa
          </Link>
          <Link to='/nasr'>
            Nasr
          </Link>
          <Link to='/nazm'>
            Nazm
          </Link>
          <Link to='/maqolalar'>
            Maqolalar
          </Link>
          <Link to='/forum'>
            Forum
          </Link>
        </div>
        <div className="wrapper-right">
          <img src={profile} alt="profile" />
          <select name="" id="">
            <option value="img"></option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Header