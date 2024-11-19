import React from 'react'
import './Frozen.css'
import res509 from '../../../assets/kavunu.jpeg'
import res510 from '../../../assets/cilek.jpeg'
import res511 from '../../../assets/indir.jpeg'
import res512 from '../../../assets/muzluu.jpeg'
import res513 from '../../../assets/taze.jpeg'
import res514 from '../../../assets/carkifelek.jpeg'
import Footerbar from '../../Footerbar'
const Frozen = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Frozen</h1>
    </div>

    <div className='card'>
    <img className='card-image' src={res509} alt=''/>
    <h3 className='card-title'>Kavunlu</h3>
    <p className='card-text'>120 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res510} alt=''/>
    <h3 className='card-title'>Çilekli</h3>
    <p className='card-text'>120 TL</p>
    </div>
    


    <div className='card'>
    <img className='card-image' src={res511} alt=''/>
    <h3 className='card-title'>Orman Meyveli</h3>
    <p className='card-text'>120 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res512} alt=''/>
    <h3 className='card-title'>Muzlu</h3>
    <p className='card-text'>120 TL</p>
    
    </div>
    
    
    <div className='card'>
    <img className='card-image' src={res513} alt=''/>
    <h3 className='card-title'>Taze Limonlu</h3>
    <p className='card-text'>120 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res514} alt=''/>
    <h3 className='card-title'>Çarkıfelek</h3>
    <p className='card-text'>120 TL</p>
    
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

export default Frozen