import React from 'react'
import './Beyazet.css'
import Footerbar from '../../Footerbar'
import res42 from '../../../assets/mantar.jpeg'
import res43 from '../../../assets/mantarlitavuk.jpeg'
import res44 from '../../../assets/bartav.jpeg'
import res45 from '../../../assets/soya.jpeg'
const Beyazet = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Beyaz Et</h1>
    </div>
    <div className='card'>
    <img className='card-image' src={res42} alt=''/>
    <h3 className='card-title'>Köri Soslu Tavuk</h3>
    <p className='card-text'>220 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res43} alt=''/>
    <h3 className='card-title'>Mantarlı Tavuk</h3>
    <p className='card-text'>220 TL</p>
    </div>
    


    <div className='card'>
    <img className='card-image' src={res44} alt=''/>
    <h3 className='card-title'>Barbekü Tavuk</h3>
    <p className='card-text'>220 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res45} alt=''/>
    <h3 className='card-title'>Soya Soslu Tavuk</h3>
    <p className='card-text'>220 TL</p>
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

export default Beyazet