import React , {useState} from 'react';

import './memory-item.css';
import Button from '../buton/Button';
import Modal from '../Modal/Modal';

const Memoryitem =({imageUrl  , title  , id}) => {


    const [showMap , setShowMap] =  useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);
    
    return (
     
<React.Fragment>
<Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={id}
        
      
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
          <div className=' map-container '>
        <img  src= {imageUrl} alt="asdas"   />
       
        </div>
      </Modal>

<div className='hell '  onClick={openMapHandler} >
<div className= ' hello tc bg- linear-gradient(299deg, #21D4FD 0%, #B721FF 64% dib     br4 bg-animate hover-bg-blue   b--black ba bw1   grow '>
    <button className=' b tc bg- linear-gradient(299deg, #21D4FD 0%, #B721FF 64% dib  br4 pointer '   >{id}</button>
<img src= {imageUrl} alt="asdas"    />


</div>
</div>



</React.Fragment>
    );

}


export default Memoryitem;


