import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import './About.scss'

import vector from '../../img/vector.png'
import star from '../../img/star.png'
import jadidAdabiyoti from '../../Data/Object'

const category = []
const ids = []

function About() {
    const {book} = useContext(Context)
    console.log(book.id);

    jadidAdabiyoti?.forEach((e,i)=>{
        if(!category.includes(e)){
            category.push(e.books)
        }
    })
    jadidAdabiyoti?.forEach((e,i)=>{
        if(!ids.includes(e.id)){
            ids.push(e.id)
        }
    })

    // ids.map((e)=> book.id === e ? setCate(e) : console.log('err'))
    // console.log(cate);

  return (

    <div>
        {
            
            book.id === '1' || '2' || '3' ? jadidAdabiyoti.filter((e)=> e.id === book.id).map((e,i)=> (
                <div className="about" key={i}>
                    <div className='about-left'>
                        <img src={e.images} alt="hoshim" className='left-img'/>
                        <div className='div'>
                            <div>
                                <p>Tavallud sanasi</p>
                                <h5>{e.year}</h5>
                                <p>Toshkent, Uzbekistan</p>
                            </div>
                            <b>-</b>
                            <div>
                                <p>Tavallud sanasi</p>
                                <h5>{e.year}</h5>
                                <p>Toshkent, Uzbekistan</p>
                            </div>
                        </div>
                    </div>
                    <div className='about-right'>
                        <h2>{e.name}</h2>
                        <p className='desc'>{e.desc}</p>
                        <h5 className='spanH5'><span><img src={vector} alt="vector" /></span>Ijodi</h5>
                        <div className="bookNames">
                            {
                                e.books.map((e,i)=> (
                                    <p key={i}>{e.bookName} ,</p>
                                ))
                            }
                        </div>
                        <h5 className='h5'>Asarlari</h5>
                        <ul className='about-right-list'>
                            <li className='imgList'>
                                {
                                    e.books.map((e,i)=> (
                                        <div key={i} className="imgList-item">
                                            <img src={e.imgs} alt="img" />
                                            <h5>{e.bookName}</h5>
                                            <p><span><img src={star} alt="" /></span>{e.comments}</p>
                                        </div>
                                    ))
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            ))
            :
            console.log('err')
        }
    </div>
  )
}

export default About