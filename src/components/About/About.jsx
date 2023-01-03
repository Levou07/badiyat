import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import './About.scss'

import vector from '../../img/vector.png'
import star from '../../img/star.png'
import hoshim from '../../img/hoshim.png'
import jadidAdabiyoti from '../../Data/Object'

const category = []

function About() {
    const {book} = useContext(Context)
    console.log(book);

    jadidAdabiyoti?.forEach((e,i)=>{
        if(!category.includes(e)){
            category.push(e.books)
        }
    })

  return (

    <div>
        {
            category.map((e,i)=> (
                <div className="about" key={i}>
                    <div className='about-left'>
                        <img src={hoshim} alt="hoshim" className='left-img'/>
                        <div className='div'>
                            <div>
                                <p>Tavallud sanasi</p>
                                <h5>5-Avg 1941</h5>
                                <p>Toshkent, Uzbekistan</p>
                            </div>
                            <b>-</b>
                            <div>
                                <p>Tavallud sanasi</p>
                                <h5>24-MAY 2013</h5>
                                <p>Toshkent, Uzbekistan</p>
                            </div>
                        </div>
                    </div>
                    <div className='about-right'>
                        <h2>O`tkir Hoshimov</h2>
                        <p>Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.</p>
                        <h5 className='spanH5'><span><img src={vector} alt="vector" /></span>Ijodi</h5>
                        <p className='p'>Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.</p>
                        <h5 className='h5'>Asarlari</h5>
                        <ul className='about-right-list'>
                            <li>
                                <img src="https://i.imgur.com/HbyVBkw.png" alt="img" />
                                <h5>Dunyoning ishlari</h5>
                                <p><span><img src={star} alt="star" /></span>4.1 • 3400 ta fikrlar</p>
                            </li>
                        </ul>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default About