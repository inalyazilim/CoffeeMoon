import React from 'react'
import './Soguk.css'
import Footerbar from '../../Footerbar'
import res500 from '../../../assets/su.jpeg'
import res501 from '../../../assets/sadesoda.jpeg'
import res502 from '../../../assets/meyvelisoda.jpeg'
import res503 from '../../../assets/cola.jpeg'
import res504 from '../../../assets/fanta.jpeg'
import res505 from '../../../assets/sprite.jpeg'
import res506 from '../../../assets/cappy.jpeg'
import res507 from '../../../assets/fuse.jpeg'
import res508 from '../../../assets/icelatte.jpeg'
import res509 from '../../../assets/karamel.jpeg'
import res510 from '../../../assets/affo.jpeg'
import res511 from '../../../assets/chur.jpeg'
import res512 from '../../../assets/ayran.jpeg'
import res513 from '../../../assets/limonata.jpeg'
import res514 from '../../../assets/redbull.jpeg'
const Soguk = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Soğuk İçecekler</h1>
    </div>


    <div className='card'>
    <img className='card-image' src={res500} alt=''/>
    <h3 className='card-title'>Su</h3>
    <p className='card-text'>20 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res501} alt=''/>
    <h3 className='card-title'>Sade Soda</h3>
    <p className='card-text'>40 TL</p>
    </div>
    


    <div className='card'>
    <img className='card-image' src={res502} alt=''/>
    <h3 className='card-title'>Meyveli Soda</h3>
    <p className='card-text'>45 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res503} alt=''/>
    <h3 className='card-title'>Cola</h3>
    <p className='card-text'>65 TL</p>
    
    </div>
    
    
    <div className='card'>
    <img className='card-image' src={res504} alt=''/>
    <h3 className='card-title'>Fanta</h3>
    <p className='card-text'>65 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res505} alt=''/>
    <h3 className='card-title'>Sprite</h3>
    <p className='card-text'>65 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res506} alt=''/>
    <h3 className='card-title'>Cappy</h3>
    <p className='card-text'>65 TL</p>
    
    </div>
    
    
    <div className='card'>
    <img className='card-image' src={res507} alt=''/>
    <h3 className='card-title'>Fuse Tea</h3>
    <p className='card-text'>65 TL</p>
    
    </div>
    
  <div className='card'>
    <img className='card-image' src={res508} alt=''/>
    <h3 className='card-title'>Ice Latte</h3>
    <p className='card-text'>120 TL</p>
    
    </div>
    
    
    <div className='card'>
    <img className='card-image' src={res509} alt=''/>
    <h3 className='card-title'>Karamel Macchiato</h3>
    <p className='card-text'>140 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res510} alt=''/>
    <h3 className='card-title'>Affogato</h3>
    <p className='card-text'>170 TL</p>
    
    </div>
    
  
    <div className='card'>
    <img className='card-image' src={res511} alt=''/>
    <h3 className='card-title'>Churcıll </h3>
    <p className='card-text'>70 TL</p>
    
    </div>
    
  <div className='card'>
    <img className='card-image' src={res512} alt=''/>
    <h3 className='card-title'>Ayran</h3>
    <p className='card-text'>50 TL</p>
    
    </div>
    
    
    <div className='card'>
    <img className='card-image' src={res513} alt=''/>
    <h3 className='card-title'>Ev Yapımı Limonata</h3>
    <p className='card-text'>110 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res514} alt=''/>
    <h3 className='card-title'>Redbull</h3>
    <p className='card-text'>85 TL</p>
    
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

export default Soguk