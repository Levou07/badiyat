import React from 'react'
import './Nasr.scss'

import slide from '../../img/slide.png'
import star from '../../img/star.png'
import Users from '../../Data/Users'

const bookName = []

function Nasr() {
    Users?.forEach((e)=> {
        e.bookObj.forEach((d)=>{
            if(!bookName.includes(d.bookName)){
                bookName.push(d.bookName)
            }
        })
    })
    
  return (
    <div className='container'>
        <div className="slider">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators slideBtn">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide} className="d-block w-100" alt='slider'/>
                    </div>
                    <div className="carousel-item">
                        <img src='https://storage.kun.uz/source/6/An6cXGN1ubWQDsAImGW9kBc4P6nGkn2z.jpg' className="d-block w-100" alt='slider'/>
                    </div>
                    <div className="carousel-item">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Alisher_Navoiy_Haykali_-_Adiblar_Xiyoboni.jpg' className="d-block w-100" alt='slider'/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div className="search">
            <h3>Qidirish</h3>
            <div>
                <input type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' className='input'/>
                <button className="btn1"><i className='bi bi-search'></i>Izlash</button>
            </div>
        </div>
        <div className="nasr">
            <div className="cate">
                <ul className="cate-list">
                    <li>Temuriylar</li>
                    <li>Jadid</li>
                    <li>Sovet</li>
                </ul>
            </div>
            <div className="kitoblar">
                <ul className="kitoblar-list">
                    {
                        Users?.map((e,i)=> (
                            <li key={i}>
                                <div className="kitoblar-list-item">
                                    <img className='bookImg' src={e.bookObj.map((e)=> (e.bookImg))} alt="slide" />
                                    {
                                        bookName.forEach((e,i)=> {
                                            <b key={i}>{e}</b>
                                        })
                                    }
                                    <p>
                                        {
                                            e.name
                                        }
                                    </p>
                                    <p><span><img src={star} alt="star" /></span>{e.bookObj.map((e)=> (e.bookRating))}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nasr