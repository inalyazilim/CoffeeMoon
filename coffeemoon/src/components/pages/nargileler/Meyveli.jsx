import React from 'react'
import res600 from '../../../assets/nargilee.jpeg'
import Footerbar from '../../Footerbar'
const Meyveli = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Meyveli Nargile</h1>
    </div>

    <div className='card'>
    <img className='card-image' src={res600} alt=''/>
    <h3 className='card-title'>Kavun</h3>
    <p className='card-text'>220 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res600} alt=''/>
    <h3 className='card-title'>Çilek</h3>
    <p className='card-text'>220 TL</p>
    </div>
    
    <div className='card'>
    <img className='card-image' src={res600} alt=''/>
    <h3 className='card-title'>Karpuz</h3>
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

export default Meyveli