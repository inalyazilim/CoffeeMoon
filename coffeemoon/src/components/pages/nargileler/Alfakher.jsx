import React from 'react'
import res603 from '../../../assets/uzum.jpeg'
import Footerbar from '../../Footerbar'
const Alfakher = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Al-Fakher</h1>
    </div>

    <div className='card'>
    <img className='card-image' src={res603} alt=''/>
    <h3 className='card-title'>Üzüm</h3>
    <p className='card-text'>280 TL</p>
    
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

export default Alfakher