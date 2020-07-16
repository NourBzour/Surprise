import React  from 'react';
import './memory.css';
import Memoryitem from './memory-item';
import Me from './me';

import a from '../pic/1.png';
import b from '../pic/2.png';
import c from '../pic/3.jpeg';
import d from '../pic/4.jpeg';
import e from '../pic/5.jpeg';
import f from '../pic/6.jpeg';
import g from '../pic/7.jpeg';
import h from '../pic/8.jpeg';
import i from '../pic/9.jpeg';
import j from '../pic/10.jpeg';
import k from '../pic/11.jpeg';
import l from '../pic/12.jpeg';
import m from '../pic/13.jpeg';
import n from '../pic/14.jpeg';
import o from '../pic/15.png';
import p from '../pic/16.png';
import q from '../pic/17.jpeg';
import r from '../pic/18.jpeg';
import s from '../pic/19.jpeg';
import t from '../pic/20.jpeg';
import u from '../pic/21.jpeg';
import v from '../pic/22.jpeg';
import w from '../pic/23.jpeg';
import x from '../pic/24.jpeg';
import y from '../pic/25.jpeg';
import z from '../pic/26.png';
import aa from '../pic/27.jpeg';
import bb from '../pic/28.jpeg';
import cc from '../pic/29.jpeg';
import dd from '../pic/30.jpeg';
import ee from '../pic/31.jpeg';
import ff from '../pic/32.jpeg';
import gg from '../pic/33.jpeg';
import hh from '../pic/34.jpeg';
import ii from '../pic/35.PNG';
import jj from '../pic/36.PNG';
import kk from '../pic/37.PNG';
import ll from '../pic/38.PNG';
import mm from '../pic/39.PNG';
import nn from '../pic/40.PNG';
import oo from '../pic/41.PNG';
import pp from '../pic/42.PNG';
import qq from '../pic/43.PNG';
import rr from '../pic/44.PNG';




class Memory extends React.Component {

   state = {
 
     sections : [
 
         {
           imageUrl: a ,
           id: 1,
         },
         {
             imageUrl: b ,
             id: 2,
           },
           {
             imageUrl: c ,
             id: 3,
           },
           {
               imageUrl: d ,
               id:4,

             },
             {
              imageUrl: e,
              id: 5,
            },
            {
                imageUrl: f ,
                id: 6,
              },
              {
                imageUrl: g ,
                id: 7,
              },
              {
                imageUrl:h ,
                id: 8,
              },
              {
                imageUrl: i ,
                id: 9,
              },
              {
                imageUrl: j ,
                id: 10,
              },
              {
                  imageUrl: k ,
                  id: 11,
   
                },
                {
                  imageUrl: l ,
                  id: 12,
                },
                {
                    imageUrl: m ,
                    id: 13,
                  },
                  {
                    imageUrl: n ,
                    id: 14,
                  },
                  {
                      imageUrl: o ,
                      id: 15,
       
                    },
                    {
                     imageUrl: p,
                     id: 16,
                   },
                   {
                       imageUrl: q ,
                       id: 17,
                     },
                     {
                       imageUrl: r ,
                       id: 18,
                     },
                     {
                         imageUrl: s ,
                         id: 19,
          
                       },
                       
         {
          imageUrl: t ,
          id: 20,
        },
        {
            imageUrl: u ,
            id: 21,
          },
          {
            imageUrl: v ,
            id: 22,
          },
          {
              imageUrl: w ,
              id: 23,

            },
            {
             imageUrl: x,
             id: 24,
           },
           {
               imageUrl: y ,
               id: 25,
             },
             {
               imageUrl: z ,
               id: 26,
             },
             {
                 imageUrl: aa ,
                 id:27,
  
               },
               {
                 imageUrl: bb ,
                 id: 28,
               },
               {
                   imageUrl: cc ,
                   id: 29,
                 },
                 {
                   imageUrl: dd ,
                   id: 30,
                 },
                 {
                     imageUrl: ee ,
                     id: 31,
      
                   },
                   {
                    imageUrl: ff,
                    id: 32,
                  },
                  {
                      imageUrl: gg ,
                      id: 33,
                    },
                    {
                      imageUrl: hh ,
                      id: 34,
                    }
                    
                   
           
     ],
     sec : [
      {
        imageUrll: ii ,
        idd: 35,

      },
      {
        imageUrll: jj ,
        idd: 36,
      },
      {
          imageUrll: kk ,
          idd: 37,
        },
        {
          imageUrll: ll ,
          idd: 38,
        },
        {
            imageUrll: mm ,
            idd: 39,

          },
          {
           imageUrll: nn,
           idd: 40,
         },
         {
             imageUrll: oo ,
             idd: 41,
           },
           {
             imageUrll: pp ,
             idd: 42,
           },
           {
               imageUrll: qq ,
               idd: 43,

             },
             {
              imageUrll: rr ,
              idd: 44,

            },
     ]
 
 }
 
 
   
 render(){
     return (
 <React.Fragment>
       <h2 className='sub' >Memory is a way of holding on to the things you love, the things you are,  </h2>
         <h2 className='sub1'>the things you never want to lose. Here are some glimpse of our </h2>
        <h2 className='sub2'  >memories.The best memories of my life .</h2>
       <div className='directory-project'>
        
           
       {
         
           this.state.sections.map(({ imageUrl , id }) => (
               <Memoryitem key={id} id={id}   imageUrl={imageUrl}  />
           ))
       }

      
{
         
         this.state.sec.map(({  imageUrll , idd }) => (

          <Me key={idd} idd={idd}   imageUrll={ imageUrll}  />
 ))
}

             </div>  
             </React.Fragment>
  
     );
   }
 }
 export default Memory;
 
 