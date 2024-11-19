import React from 'react'
import './Fastfood.css'
import Footerbar from '../../Footerbar'
import res67 from '../../../assets/yengen.jpeg'
import res68 from '../../../assets/izmir.jpeg'
import res69 from '../../../assets/yengen.jpeg'
import res70 from '../../../assets/patso.jpg'
import res71 from '../../../assets/sosisli.jpeg'
import res72 from '../../../assets/sosislii.jpeg'
import res73 from '../../../assets/sin_.jpeg'
import res74 from '../../../assets/ekmek.jpeg'
const Fastfood = () => {
  return (
    <div>
   
    <div className='homes container'>
    <div className="homes-text">
   
    <div className="programs">
    <div className='program'>

    <div className='baslikdiv'>
      <h1 className='baslik'>Fast & Food</h1>
    </div>

    <div className='card'>
    <img className='card-image' src={res67} alt=''/>
    <h3 className='card-title'>Yengen</h3>
    <p className='card-text'>160 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res68} alt=''/>
    <h3 className='card-title'>İzmir</h3>
    <p className='card-text'>170 TL</p>
    </div>
    


    <div className='card'>
    <img className='card-image' src={res69} alt=''/>
    <h3 className='card-title'>İzmir Eritme</h3>
    <p className='card-text'>180 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res70} alt=''/>
    <h3 className='card-title'>Patso</h3>
    <p className='card-text'>120 TL</p>
    
    </div>
    
    
    <div className='card'>
    <img className='card-image' src={res71} alt=''/>
    <h3 className='card-title'>Sosisli Patso</h3>
    <p className='card-text'>140 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res72} alt=''/>
    <h3 className='card-title'>Sosisli</h3>
    <p className='card-text'>125 TL</p>
    
    </div>
    
    <div className='card'>
    <img className='card-image' src={res73} alt=''/>
    <h3 className='card-title'>Şinitzel</h3>
    <p className='card-text'>160 TL</p>
    
    </div>
    
    
    <div className='card'>
    <img className='card-image' src={res74} alt=''/>
    <h3 className='card-title'>Ekmek Arası Köfte</h3>
    <p className='card-text'>210 TL</p>
    
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

export default Fastfood