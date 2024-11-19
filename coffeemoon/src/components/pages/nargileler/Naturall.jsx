import React from 'react'
import res606 from '../../../assets/ananas.jpeg'
import Footerbar from '../../Footerbar'
const Naturall = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Natural</h1>
    </div>


    <div className='card'>
    <img className='card-image' src={res606} alt=''/>
    <h3 className='card-title'>Ananas</h3>
    <p className='card-text'>600 TL</p>
    
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

export default Naturall