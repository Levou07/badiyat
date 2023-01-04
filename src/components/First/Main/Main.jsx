import React from 'react'
import './Main.scss'

import mainPng from '../../../img/main.png'

function Main() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={mainPng} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">    
                        <h5>Birinchi</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={mainPng} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Ikkinchi</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={mainPng} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Uchinchi</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={mainPng} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>To`rtinchi</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className="inpBg">
            <h2 className='searchH2'>Qidirish</h2>
            <div className="d-flex frm">
                <input type="text" className='form-control' placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/>
                <button className="btn"><i className="bi bi-search"></i>Izlash</button>
            </div>
        </div>
    </div>
  )
}

export default Main