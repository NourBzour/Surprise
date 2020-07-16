import React , { useContext } from 'react'
import {NavLink} from 'react-router-dom';
import './main.scss';
import nour from './nour.svg';
import Tilt from 'react-tilt'
import { AuthContext } from '../context/auth.context';
import Button from '../buton/Button';


const Main = () => {
  
    
      const auth = useContext(AuthContext);
      return (
        <div className='header'>

<Tilt className="Tilt" options={{ max : 50 }} style={{ height: 120, width: 120 }} >
 <div className="Tilt-inner"> <NavLink  to='/' >
<img className='logo' src={nour}  alt='mugy' />
</NavLink> </div>
</Tilt>
    
       
        <div className='options'>
        
        { auth.isLoggedIn && (  <NavLink className='option   f3  dim light white   ' to='/MessagesforNour'>Message</NavLink> )}
        { auth.isLoggedIn && ( <NavLink className='option  f3  dim light white    ' to='/OurLastForeverMemories'>Memories</NavLink> )}
        
        { !auth.isLoggedIn && (  <NavLink className='option  f3  dim light white    ' to='/Auth'>Login</NavLink> )}
        { auth.isLoggedIn && (
   

   <Button  inverse className='opt    dim light     '  onClick={auth.logout} >LOGOUT</Button>
        
      
    )}
      
        
        </div>
     ]
   
        </div>
      );
    }
  

  export default Main;  