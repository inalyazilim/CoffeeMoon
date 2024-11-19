import React from 'react'
import './Tatli.css'
import Footerbar from '../../Footerbar'
import res90 from '../../../assets/im.jpeg'
import res91 from '../../../assets/doble.jpeg'
import res92 from '../../../assets/dondurmaw.jpeg'
import res93 from '../../../assets/cup.jpeg'
import res94 from '../../../assets/cup.jpeg'
import res95 from '../../../assets/meyve.jpeg'
const Tatli = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Tatlılar</h1>
    </div>


    <div className='card'>
    <img className='card-image' src={res90} alt=''/>
    <h3 className='card-title'>Klasik Waffle</h3>
    <p className='card-text'>160 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res91} alt=''/>
    <h3 className='card-title'>Double Waffle</h3>
    <p className='card-text'>200 TL</p>
    </div>
    


    <div className='card'>
    <img className='card-image' src={res92} alt=''/>
    <h3 className='card-title'>Dondurmalı Waffle</h3>
    <p className='card-text'>200 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res93} alt=''/>
    <h3 className='card-title'>Cup Dondurma</h3>
    <p className='card-text'>...</p>
    
    </div>
    
    
    <div className='card'>
    <img className='card-image' src={res94} alt=''/>
    <h3 className='card-title'>Top Dondurma</h3>
    <p className='card-text'>...</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res95} alt=''/>
    <h3 className='card-title'>Meyve Tabağı</h3>
    <p className='card-text'>180 TL</p>
    
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

export default Tatli