import React from 'react'
import './Geleneksel.css'
import res137 from '../../../assets/d.jpeg'
import res138 from '../../../assets/doubleturk.jpeg'
import res139 from '../../../assets/sutluturk.jpeg'
import res140 from '../../../assets/damlasakiz.jpeg'
import res141 from '../../../assets/cik.jpeg'
import res142 from '../../../assets/dibek.jpeg'
import res143 from '../../../assets/menengic.jpeg'
import res144 from '../../../assets/suvari.jpeg'
import Footerbar from '../../Footerbar'
const Geleneksel = () => {
  return (
    <div>
    
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Geleneksel Kahveler</h1>
    </div>

    <div className='card'>
    <img className='card-image' src={res137} alt=''/>
    <h3 className='card-title'>Klasik Türk Kahvesi</h3>
    <p className='card-text'>60 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res138} alt=''/>
    <h3 className='card-title'>Double Türk Kahvesi</h3>
    <p className='card-text'>70 TL</p>
    </div>
    
    <div className='card'>
    <img className='card-image' src={res139} alt=''/>
    <h3 className='card-title'>Sütlü Türk Kahvesi</h3>
    <p className='card-text'>70 TL</p>
    </div>
    
    <div className='card'>
    <img className='card-image' src={res140} alt=''/>
    <h3 className='card-title'>Damla Sakızlı</h3>
    <p className='card-text'>70 TL</p>
    </div>
    
    <div className='card'>
    <img className='card-image' src={res141} alt=''/>
    <h3 className='card-title'>Çikolatalı</h3>
    <p className='card-text'>70 TL</p>
    </div>
    
   
    <div className='card'>
    <img className='card-image' src={res142} alt=''/>
    <h3 className='card-title'>Dibek Kahvesi</h3>
    <p className='card-text'>70 TL</p>
    </div>
    
    <div className='card'>
    <img className='card-image' src={res143} alt=''/>
    <h3 className='card-title'>Menengiç Kahvesi</h3>
    <p className='card-text'>70 TL</p>
    </div>
    
    <div className='card'>
    <img className='card-image' src={res144} alt=''/>
    <h3 className='card-title'>Süvari Türk Kahvesi</h3>
    <p className='card-text'>70 TL</p>
    </div>
    
 


    </div>
    </div>
    </div>
    </div>
    <div className='footerbar'>
      <Footerbar/>
    </div>
    </div>
  )
}

export default Geleneksel