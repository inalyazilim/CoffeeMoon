import React from 'react'
import './Salata.css'
import Footerbar from '../../Footerbar'
import res49 from '../../../assets/akdeniz.jpeg'
import res50 from '../../../assets/sezar.jpeg'
import res51 from '../../../assets/ton.jpeg'
const Salata = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Salata</h1>
    </div>


    <div className='card'>
    <img className='card-image' src={res49} alt=''/>
    <h3 className='card-title'>Akdeniz Salata</h3>
    <p className='card-text'>150 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res50} alt=''/>
    <h3 className='card-title'>Sezar Salata</h3>
    <p className='card-text'>170 TL</p>
    </div>
    


    <div className='card'>
    <img className='card-image' src={res51} alt=''/>
    <h3 className='card-title'>Ton Balıklı Salata</h3>
    <p className='card-text'>170 TL</p>
    
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

export default Salata