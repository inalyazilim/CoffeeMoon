import React from 'react'
import './Frappe.css'
import res529 from '../../../assets/frappee.jpeg'
import res530 from '../../../assets/cfrappe.jpeg'
import res531 from '../../../assets/caramelf.jpeg'
import res532 from '../../../assets/cileklif.jpeg'
import res533 from '../../../assets/oreo.jpeg'
import res534 from '../../../assets/brownif.jpeg'
import res535 from '../../../assets/karamels.jpeg'
import Footerbar from '../../Footerbar'
const Frappe = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Frappe</h1>
    </div>
    
    <div className='card'>
    <img className='card-image' src={res529} alt=''/>
    <h3 className='card-title'>Klasik</h3>
    <p className='card-text'>120 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res530} alt=''/>
    <h3 className='card-title'>Çikolatalı</h3>
    <p className='card-text'>120 TL</p>
    
    </div>

    <div className='card'>
    <img className='card-image' src={res531} alt=''/>
    <h3 className='card-title'>Caramel</h3>
    <p className='card-text'>120 TL</p>
    
    </div>

    <div className='card'>
    <img className='card-image' src={res532} alt=''/>
    <h3 className='card-title'>Çilek</h3>
    <p className='card-text'>120 TL</p>
    
    </div>

    <div className='card'>
    <img className='card-image' src={res533} alt=''/>
    <h3 className='card-title'>Oreolu</h3>
    <p className='card-text'>120 TL</p>
    
    </div>
    <div className='card'>
    <img className='card-image' src={res534} alt=''/>
    <h3 className='card-title'>Browni</h3>
    <p className='card-text'>120 TL</p>
    
    </div>

    <div className='card'>
    <img className='card-image' src={res535} alt=''/>
    <h3 className='card-title'>Special</h3>
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

export default Frappe