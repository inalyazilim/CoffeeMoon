import React from 'react'
import './Cay.css'
import res154 from '../../../assets/cayy.jpeg'
import res155 from '../../../assets/bardakk.jpeg'
import res156 from '../../../assets/ingiliz.jpeg'
import res157 from '../../../assets/oralet.jpeg'
import res158 from '../../../assets/fincan.jpeg'
import Footerbar from '../../Footerbar'
const Cay = () => {
  return (
    <div>
   
    <div className='homes container'>
   <div className="homes-text">
  
   <div className="programs">
   <div className='program'>

   <div className='baslikdiv'>
      <h1 className='baslik'>Çaylar</h1>
    </div>

   <div className='card'>
   <img className='card-image' src={res154} alt=''/>
   <h3 className='card-title'>Tiryaki Çay</h3>
   <p className='card-text'>20 TL</p>
   
   </div>
   
   <div className='card'>
   <img className='card-image' src={res155} alt=''/>
   <h3 className='card-title'>Bardak Çay</h3>
   <p className='card-text'>20 TL</p>
   </div>
   
   <div className='card'>
   <img className='card-image' src={res156} alt=''/>
   <h3 className='card-title'>İngiliz Çay</h3>
   <p className='card-text'>50 TL</p>
   </div>
   
   <div className='card'>
   <img className='card-image' src={res157} alt=''/>
   <h3 className='card-title'>Oralet</h3>
   <p className='card-text'>40 TL</p>
   </div>
   
   <div className='card'>
   <img className='card-image' src={res158} alt=''/>
   <h3 className='card-title'>Fincan Çay</h3>
   <p className='card-text'>30 TL</p>
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

export default Cay