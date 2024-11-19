import React from 'react'
import './Corba.css'
import Footerbar from '../../Footerbar'
import res85 from '../../../assets/corba.jpeg'

const Corba = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Çorba</h1>
    </div>

    <div className='card'>
    <img className='card-image' src={res85} alt=''/>
    <h3 className='card-title'>Günün Çorbası</h3>
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

export default Corba