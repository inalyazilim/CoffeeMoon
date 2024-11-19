import React from 'react'
import './Natural.css'
import Footerbar from '../../Footerbar'
import res159 from '../../../assets/ada.jpeg'
import res160 from '../../../assets/kiscayi.jpeg'
import res161 from '../../../assets/kus.jpeg'
import res162 from '../../../assets/elmacayi.jpeg'
import res163 from '../../../assets/tarcin.jpeg'
import res164 from '../../../assets/bogurtlencayi.jpeg'
import res165 from '../../../assets/nane.jpeg'
import res166 from '../../../assets/papatya.jpeg'
import res167 from '../../../assets/rezene.jpeg'
import res168 from '../../../assets/ihlamur.jpeg'
import res169 from '../../../assets/yesilcay.jpeg'
const Natural = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Natural Bitki Çayları</h1>
    </div>

    <div className='card'>
    <img className='card-image' src={res159} alt=''/>
    <h3 className='card-title'>Ada Çayı</h3>
    <p className='card-text'>90 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res160} alt=''/>
    <h3 className='card-title'>Kış Çayı</h3>
    <p className='card-text'>90 TL</p>
    </div>
    


    <div className='card'>
    <img className='card-image' src={res161} alt=''/>
    <h3 className='card-title'>Kuş Burnu Çayı</h3>
    <p className='card-text'>90 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res162} alt=''/>
    <h3 className='card-title'>Elma Çayı</h3>
    <p className='card-text'>90 TL</p>
    
    </div>
    
    
    <div className='card'>
    <img className='card-image' src={res163} alt=''/>
    <h3 className='card-title'>Tarçın</h3>
    <p className='card-text'>90 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res164} alt=''/>
    <h3 className='card-title'>Böğürtlen Çayı</h3>
    <p className='card-text'>90 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res165} alt=''/>
    <h3 className='card-title'>Nane Limon</h3>
    <p className='card-text'>90 TL</p>
    
    </div>
    
    
    <div className='card'>
    <img className='card-image' src={res166} alt=''/>
    <h3 className='card-title'>Papatya Çayı</h3>
    <p className='card-text'>90 TL</p>
    
    </div>
    
  <div className='card'>
    <img className='card-image' src={res167} alt=''/>
    <h3 className='card-title'>Rezene Çayı</h3>
    <p className='card-text'>90 TL</p>
    
    </div>
    
    
    <div className='card'>
    <img className='card-image' src={res168} alt=''/>
    <h3 className='card-title'>Ihlamur Çayı</h3>
    <p className='card-text'>90 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res169} alt=''/>
    <h3 className='card-title'>Yeşil Çay</h3>
    <p className='card-text'>90 TL</p>
    
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

export default Natural