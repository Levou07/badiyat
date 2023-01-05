import React, { useState } from 'react'
import './Header.scss'

import logo from '../../img/logo.svg'
import profile from '../../img/profile.png'

import { Link } from 'react-router-dom'

function Header() {
  const [none, setNone] = useState('none')
  console.log(none);

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
          <div>
            <img src={profile} alt="profile" />
          </div>
          <div className="profile">
            <button className={none == 'block' ? 'none' : 'block'} onClick={()=> setNone('block')}><i className="bi bi-three-dots" onClick={()=> setNone('block')}></i></button>
            <button className={none == 'none' ? 'none' : 'block'} onClick={()=> setNone('none')}><i className="bi bi-x-lg"></i></button>
            <Link to='/profile' className={none === 'none' ? 'none' : 'block'}>Profile</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header