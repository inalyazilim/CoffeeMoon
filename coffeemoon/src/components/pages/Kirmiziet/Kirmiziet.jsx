import React from 'react'
import './Kirmiziet.css'
import Footerbar from '../../Footerbar'
import res46 from '../../../assets/izgara.jpeg'
import res47 from '../../../assets/fiftek.jpeg'
import res48 from '../../../assets/danabonfile.jpeg'
const Kirmiziet = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Kırmızı Et</h1>
    </div>

    <div className='card'>
    <img className='card-image' src={res46} alt=''/>
    <h3 className='card-title'>Izgara Köfte</h3>
    <p className='card-text'>260 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res47} alt=''/>
    <h3 className='card-title'>Pirzola Biftek</h3>
    <p className='card-text'>500 TL</p>
    </div>
    


    <div className='card'>
    <img className='card-image' src={res48} alt=''/>
    <h3 className='card-title'>Dana Bonfile</h3>
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

export default Kirmiziet