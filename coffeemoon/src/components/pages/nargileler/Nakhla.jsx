import React from 'react'
import res604 from '../../../assets/nk.jpeg'
import Footerbar from '../../Footerbar'
const Nakhla = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Nakhla</h1>
    </div>

    <div className='card'>
    <img className='card-image' src={res604} alt=''/>
    <h3 className='card-title'>Şeftali</h3>
    <p className='card-text'>300 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res604} alt=''/>
    <h3 className='card-title'>Cappucino</h3>
    <p className='card-text'>300 TL</p>
    
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

export default Nakhla