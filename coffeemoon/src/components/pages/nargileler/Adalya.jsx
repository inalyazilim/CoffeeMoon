import React from 'react'
import res601 from '../../../assets/adalya.jpeg'
import Footerbar from '../../Footerbar'
const Adalya = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Adalya</h1>
    </div>

    <div className='card'>
    <img className='card-image' src={res601} alt=''/>
    <h3 className='card-title'>Love66</h3>
    <p className='card-text'>250 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res601} alt=''/>
    <h3 className='card-title'>Lady Killer</h3>
    <p className='card-text'>250 TL</p>
    </div>
    
    <div className='card'>
    <img className='card-image' src={res601} alt=''/>
    <h3 className='card-title'>İzmir Romantik</h3>
    <p className='card-text'>250 TL</p>
    </div>
    
    <div className='card'>
    <img className='card-image' src={res601} alt=''/>
    <h3 className='card-title'>Moscow</h3>
    <p className='card-text'>250 TL</p>
    </div>
    
    <div className='card'>
    <img className='card-image' src={res601} alt=''/>
    <h3 className='card-title'>Swiss Bonbon</h3>
    <p className='card-text'>250 TL</p>
    </div>
    
    <div className='card'>
    <img className='card-image' src={res601} alt=''/>
    <h3 className='card-title'>Bakü Night</h3>
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

export default Adalya