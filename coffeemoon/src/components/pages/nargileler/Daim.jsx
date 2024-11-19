import React from 'react'
import res605 from '../../../assets/dm.jpeg'
import Footerbar from '../../Footerbar'
const Daim = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Daim</h1>
    </div>


    <div className='card'>
    <img className='card-image' src={res605} alt=''/>
    <h3 className='card-title'>Tatlı Cadı</h3>
    <p className='card-text'>250 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res605} alt=''/>
    <h3 className='card-title'>İnfinity</h3>
    <p className='card-text'>250 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res605} alt=''/>
    <h3 className='card-title'>Egzotica</h3>
    <p className='card-text'>250 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res605} alt=''/>
    <h3 className='card-title'>Zuzu</h3>
    <p className='card-text'>250 TL</p>
    
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

export default Daim