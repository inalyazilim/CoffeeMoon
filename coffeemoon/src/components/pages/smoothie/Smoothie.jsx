import React from 'react'
import './Smoothie.css'
import res523 from '../../../assets/cilekkk.jpeg'
import res524 from '../../../assets/muzlus.jpeg'
import res525 from '../../../assets/kivilis.jpeg'
import res526 from '../../../assets/biskuvi.jpeg'
import res527 from '../../../assets/mangolu.jpeg'
import res528 from '../../../assets/karamelll.jpeg'
import Footerbar from '../../Footerbar'
const Smoothie = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Smoothie</h1>
    </div>

    
    
    <div className='card'>
    <img className='card-image' src={res523} alt=''/>
    <h3 className='card-title'>Çilekli</h3>
    <p className='card-text'>120 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res524} alt=''/>
    <h3 className='card-title'>Muzlu</h3>
    <p className='card-text'>120 TL</p>
    
    </div>

    <div className='card'>
    <img className='card-image' src={res525} alt=''/>
    <h3 className='card-title'>Kivili</h3>
    <p className='card-text'>120 TL</p>
    
    </div>

    <div className='card'>
    <img className='card-image' src={res526} alt=''/>
    <h3 className='card-title'>Bisküvili</h3>
    <p className='card-text'>120 TL</p>
    
    </div>

    <div className='card'>
    <img className='card-image' src={res527} alt=''/>
    <h3 className='card-title'>Mangolu</h3>
    <p className='card-text'>120 TL</p>
    
    </div>
    <div className='card'>
    <img className='card-image' src={res528} alt=''/>
    <h3 className='card-title'>Protein Patlaması</h3>
    <p className='card-text'>180 TL</p>
    
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

export default Smoothie