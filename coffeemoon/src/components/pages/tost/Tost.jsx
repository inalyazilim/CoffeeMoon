import React from 'react'
import './Tost.css'
import Footerbar from '../../Footerbar'
import res60 from '../../../assets/tostkavurma.jpeg'
import res61 from '../../../assets/bazlama.jpeg'
import res62 from '../../../assets/kasar.jpeg'
import res63 from '../../../assets/tostkavurma.jpeg'
import res64 from '../../../assets/kasarr.jpeg'
const Tost = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Tostlar</h1>
    </div>

    <div className='card'>
    <img className='card-image' src={res60} alt=''/>
    <h3 className='card-title'>Kavurmalı Tost</h3>
    <p className='card-text'>210 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res61} alt=''/>
    <h3 className='card-title'>Bazlama Tost</h3>
    <p className='card-text'>160 TL</p>
    </div>
    


    <div className='card'>
    <img className='card-image' src={res62} alt=''/>
    <h3 className='card-title'>Karışık Tost</h3>
    <p className='card-text'>125 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res63} alt=''/>
    <h3 className='card-title'>Atom Tost</h3>
    <p className='card-text'>240 TL</p>
    
    </div>
    
    
    <div className='card'>
    <img className='card-image' src={res64} alt=''/>
    <h3 className='card-title'>Kaşarlı Tost</h3>
    <p className='card-text'>125 TL</p>
    
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

export default Tost