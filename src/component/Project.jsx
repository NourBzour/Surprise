import React from 'react'
import './projects.scss';



import Projectitem from './project-item';


const b = <span> This app can detect Human Faces . This APP is built around a simple idea. You send inputs (an image ) to the service and it returns predictions.
     </span>
 const c = <span>This is Robofriends App . simply ,  you can search friends in search bar .. !</span>

 const d  = <span>
     This is massive E-commerce website, with online payment method . It is fully secure , dynamically and responsive..!
 </span>

class Projects extends React.Component  {


state = {
    sections : [
        {
            info: b,
            linkUrl: 'https://mugheesmb.github.io/AI-Face-detection/',
          title: '  AI Face detect',
          imageUrl: 'https://i.ytimg.com/vi/-1E_Fjpqyjk/hqdefault.jpg'  ,
          id: 1,
        },
        {
            info: d,
            linkUrl: 'https://kings-clothe.herokuapp.com/',
          title: 'E-commerce',
          imageUrl: 'https://i.ytimg.com/vi/-1E_Fjpqyjk/hqdefault.jpg' ,
          id: 2,     
        },
    
        
          
          
    ]
      
}



    render(){
    return (
        <div className='projects-page' id='projects' >
          
           <h1 className='text'>  <span   role="img" aria-label="cd"  > 💿 Projects 🚀</span>  </h1>
           
           <hr/>
           

            <div className='directory-project'>
          
          
           {
             
               this.state.sections.map(({title , imageUrl , linkUrl,info, id}) => (
                   <Projectitem key={id} title={title}  imageUrl={imageUrl}  linkUrl={linkUrl} info={info} />
               ))
           }
                 
                 </div>  
             
                 <div className='gitwork' >
                 <hr/>
 <span className='work'  >Like my work ? OR want to see more work..!? well You can see all on  my Github. </span>
       
       <button
             className=' buttun  grow  pointer bg-black tc br2 Center white'

    onClick={(e) => {
      e.preventDefault();
      window.open('https://github.com/MugheesMb');    
      }}
> <i className="cib-github"></i>
    { ' '}Github</button>
    <hr/>

</div>

        </div>

    )
}
}
export default Projects;
