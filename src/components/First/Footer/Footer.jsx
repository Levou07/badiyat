import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import jadidAdabiyoti from '../../../Data/Object'
import './Footer.scss'

const category = []

function Footer() {
    const {setBook} = useContext(Context)
    const {setSear} = useContext(Context)

    const [id] = useState(0)
    const [search, setSearch] = useState([])

    const [cate, setCate] = useState(category[0])

    jadidAdabiyoti?.forEach((e,i)=>{
        if(!category.includes(e.type)){
        category.push(e.type)
        }
    })

    const searchItem = (evn)=>{
        const dataArr = []
        jadidAdabiyoti?.map((item)=>{
          if(item.name.toLocaleLowerCase().includes(evn.toLocaleLowerCase())){
            dataArr.push(item)
          }
        })
        setSearch(dataArr);
    }

  return (
    <div>
        <div className="footer">
            <input className='form-control' type="text" onChange={(e)=> searchItem(e.target.value)} placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
            <h2>Asosiy Kategoriyalar</h2>
            <ul className='cate'>
                {
                    category.map((e,i)=>(
                        <li className={cate === e ? 'btnAct' : ''} onClick={()=> setCate(e)} key={i}>{e}</li>
                    ))
                };
            </ul>
            <ul className='footer-list'>
                {   
                    search.length > 0 ? search.map((e,i)=>(
                        <Link key={i} to='/about'>                                
                            <li key={i} id={id} onClick={()=>
                            
                                {
                                    setBook(e);
                                }
                                
                                }>
                                <div className="card" style={{width: 173 + 'px', height: 236 + 'px'}}>
                                    <img src={e.images} className="card-img-top" alt="img" />
                                    <div className="card-body">
                                        <h5 className="card-text">{e.name}</h5>
                                        <p>{e.year}</p>
                                    </div>
                                    <div className="card-foot">
                                        <button className="btn2"><i className="bi bi-journal"></i>34</button>
                                        <button className="btn2"><i className="bi bi-earbuds"></i>13</button>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    ))
                    :
                    jadidAdabiyoti.filter(e=> e.type === cate).map((e,i)=>(
                        <Link key={i} to='/about'>                                
                            <li key={i} id={id} onClick={()=> 
                            
                                {
                                    setBook(e);
                                }
                                
                                }>
                                <div className="card" style={{width: 173 + 'px', height: 236 + 'px'}}>
                                    <img src={e.images} className="card-img-top" alt="img" />
                                    <div className="card-body">
                                        <h5 className="card-text">{e.nameBook}</h5>
                                        <p>{e.year}</p>
                                    </div>
                                    <div className="card-foot">
                                        <button className="btn2"><i className="bi bi-journal"></i>34</button>
                                        <button className="btn2"><i className="bi bi-earbuds"></i>13</button>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    ))
                }
                <Outlet/>
            </ul>
        </div>
    </div>
  )
}

export default Footer