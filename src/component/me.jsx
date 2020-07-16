
import React , {useState} from 'react';
import './me.css';
import Button from '../buton/Button';
import Modall from '../Modal/Modall';



const Me = ({imageUrll , idd}) => {

    const [showMap , setShowMap] =  useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);
    
    return (
        <React.Fragment>
<Modall
        show={showMap}
        onCancel={closeMapHandler}
        header={idd}
        
      
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
          <div className=' map-containe '>
        <img  src= {imageUrll} alt="asdas"   />
       
        </div>
      </Modall>
       

<div className='helll '  onClick={openMapHandler} >
<div className= ' helllo tc bg- linear-gradient(299deg, #21D4FD 0%, #B721FF 64% dib     br4 bg-animate hover-bg-blue   b--black ba bw1   grow '>
         <button className=' b tc bg- linear-gradient(299deg, #21D4FD 0%, #B721FF 64% dib  br4 pointer '   >{idd}</button>
<img src= {imageUrll} alt="asdas" width= '350px' height = '300'   />


</div>
</div>
</React.Fragment>
    )

}

export default Me;