import React from 'react'
import './Citirsepet.css'
import Footerbar from '../../Footerbar'
import res36 from '../../../assets/citirsepet.jpeg'
import res37 from '../../../assets/kitirsepet.jpeg'
const Citirsepet = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Çıtır Sepet</h1>
    </div>


    <div className='card'>
    <img className='card-image' src={res36} alt=''/>
    <h3 className='card-title'>Kıtır Çıtır</h3>
    <p className='card-text'>160 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res37} alt=''/>
    <h3 className='card-title'>Barbekü Sepeti</h3>
    <p className='card-text'>160 TL</p>
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

export default Citirsepet