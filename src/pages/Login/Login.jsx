import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

const data = [
    {
        id: 1,
        username: 'abdulloh',
        password: 111,
    },
    {
        id: 2,
        username: 'al',
        password: 1,
    },
    {
        id: 3,
        username: 'di',
        password: 4,
    },
]

function Login() {
    const navigate = useNavigate()
    const loginHand = (ev)=>{
        ev.preventDefault()
        const Username = ev.target.elements.username.value
        const Password = ev.target.elements.password.value

        for (let i = 0; i < data.length; i++) {
            if(data[i].username == Username && data[i].password == Password){
                window.localStorage.setItem('pass', 'togri')
                window.localStorage.setItem('userName', data[i].username)
                break
            }
            else{
                window.localStorage.setItem('pass', 'err')
            }
        }

        if(window.localStorage.getItem('pass') === 'togri'){
            navigate('/')
        }
        else{
            alert('hato')
        }
    }


  return (
    <div>
        <div className="login">
            <form onSubmit={loginHand} action="#" className="frm form-control">
                <input type="text" className='form-control' name='username'/>
                <input type="text" className='form-control' name='password'/>
                <button type='submit' className="btn btn-primary">Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login