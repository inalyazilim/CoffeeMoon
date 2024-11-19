import React from 'react'
import res150 from '../../../assets/salep.jpeg'
import res151 from '../../../assets/hhh.jpeg'
import res152 from '../../../assets/beyaz.jpeg'
import res153 from '../../../assets/cile.jpeg'
import Footerbar from '../../Footerbar'
const Sicak = () => {
  return (
    <div>
   
    <div className='homes container'>
   <div className="homes-text">
  
   <div className="programs">
   <div className='program'>

   <div className='baslikdiv'>
      <h1 className='baslik'>Sıcak İçecekler</h1>
    </div>

   <div className='card'>
   <img className='card-image' src={res150} alt=''/>
   <h3 className='card-title'>Salep</h3>
   <p className='card-text'>110 TL</p>
   
   </div>
   
   <div className='card'>
   <img className='card-image' src={res151} alt=''/>
   <h3 className='card-title'>Sıcak Çikolata</h3>
   <p className='card-text'>110 TL</p>
   </div>
   
   <div className='card'>
   <img className='card-image' src={res152} alt=''/>
   <h3 className='card-title'>Beyaz Çikolata</h3>
   <p className='card-text'>110 TL</p>
   </div>
   
   <div className='card'>
   <img className='card-image' src={res153} alt=''/>
   <h3 className='card-title'>Çilekli Çikolata</h3>
   <p className='card-text'>110 TL</p>
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

export default Sicak