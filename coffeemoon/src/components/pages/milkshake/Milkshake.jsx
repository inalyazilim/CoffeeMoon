import React from 'react'
import './Milkshake.css'
import res522 from '../../../assets/muzlumilk.jpeg'
import res523 from '../../../assets/aa.jpeg'
import res524 from '../../../assets/milksakee.jpeg'
import res525 from '../../../assets/ormanmilk.jpeg'
import res527 from '../../../assets/karamell.jpeg'
import Footerbar from '../../Footerbar'
const Milkshake = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Milkshake</h1>
    </div>    
    
    <div className='card'>
    <img className='card-image' src={res522} alt=''/>
    <h3 className='card-title'>Muzlu</h3>
    <p className='card-text'>120 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res523} alt=''/>
    <h3 className='card-title'>Çilekli</h3>
    <p className='card-text'>120 TL</p>
    
    </div>

    <div className='card'>
    <img className='card-image' src={res524} alt=''/>
    <h3 className='card-title'>Çikolatalı</h3>
    <p className='card-text'>120 TL</p>
    
    </div>

    <div className='card'>
    <img className='card-image' src={res525} alt=''/>
    <h3 className='card-title'>Orman Meyveli</h3>
    <p className='card-text'>120 TL</p>
    
    </div>

    <div className='card'>
    <img className='card-image' src={res527} alt=''/>
    <h3 className='card-title'>Caramelli</h3>
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

export default Milkshake