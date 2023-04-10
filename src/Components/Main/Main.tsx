import React, { useEffect } from 'react'
import './main.css'

import img01 from '../../assets/img01.jpg';
import img02 from '../../assets/img02.jpg';
import img03 from '../../assets/img03.jpg';
import img04 from '../../assets/img04.jpg';
import img05 from '../../assets/img05.jpg';
import img06 from '../../assets/img06.jpg';
import img07 from '../../assets/img07.jpg';
import img08 from '../../assets/img08.jpg';
import img09 from '../../assets/img09.jpg';
import img10 from '../../assets/img10.jpg';
import img11 from '../../assets/img11.jpg';
import img12 from '../../assets/img12.jpg';


import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';

import Aos from 'aos';
import 'aos/dist/aos.css'

const Data =[
  {
    id : 1,
    imgSrc : img01,
    destTitle : 'Bora Bora',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores eum perferendis atque ad temporibus, quo nam sapiente natus molestiae a quasi vitae hic dignissimos dolor! Eaque ducimus necessitatibus expedita!'
  },
  {
    id : 2,
    imgSrc : img02,
    destTitle : 'Bora Bora',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores eum perferendis atque ad temporibus, quo nam sapiente natus molestiae a quasi vitae hic dignissimos dolor! Eaque ducimus necessitatibus expedita!'
  },
  {
    id : 3,
    imgSrc : img03,
    destTitle : 'Bora Bora',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores eum perferendis atque ad temporibus, quo nam sapiente natus molestiae a quasi vitae hic dignissimos dolor! Eaque ducimus necessitatibus expedita!'
  },
  {
    id : 4,
    imgSrc : img04,
    destTitle : 'Bora Bora',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores eum perferendis atque ad temporibus, quo nam sapiente natus molestiae a quasi vitae hic dignissimos dolor! Eaque ducimus necessitatibus expedita!'
  },
  {
    id : 5,
    imgSrc : img05,
    destTitle : 'Bora Bora',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores eum perferendis atque ad temporibus, quo nam sapiente natus molestiae a quasi vitae hic dignissimos dolor! Eaque ducimus necessitatibus expedita!'
  },
  {
    id : 6,
    imgSrc : img06,
    destTitle : 'Bora Bora',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores eum perferendis atque ad temporibus, quo nam sapiente natus molestiae a quasi vitae hic dignissimos dolor! Eaque ducimus necessitatibus expedita!'
  },
  {
    id : 7,
    imgSrc : img07,
    destTitle : 'Bora Bora',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores eum perferendis atque ad temporibus, quo nam sapiente natus molestiae a quasi vitae hic dignissimos dolor! Eaque ducimus necessitatibus expedita!'
  },
  {
    id : 8,
    imgSrc : img08,
    destTitle : 'Bora Bora',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores eum perferendis atque ad temporibus, quo nam sapiente natus molestiae a quasi vitae hic dignissimos dolor! Eaque ducimus necessitatibus expedita!'
  },
  {
    id : 9,
    imgSrc : img09,
    destTitle : 'Bora Bora',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores eum perferendis atque ad temporibus, quo nam sapiente natus molestiae a quasi vitae hic dignissimos dolor! Eaque ducimus necessitatibus expedita!'
  },
  {
    id : 10,
    imgSrc : img10,
    destTitle : 'Bora Bora',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores eum perferendis atque ad temporibus, quo nam sapiente natus molestiae a quasi vitae hic dignissimos dolor! Eaque ducimus necessitatibus expedita!'
  },
  {
    id : 11,
    imgSrc : img11,
    destTitle : 'Bora Bora',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores eum perferendis atque ad temporibus, quo nam sapiente natus molestiae a quasi vitae hic dignissimos dolor! Eaque ducimus necessitatibus expedita!'
  },
  {
    id : 12,
    imgSrc : img12,
    destTitle : 'Bora Bora',
    location : 'New Zealand',
    grade : 'CULTURAL RELAX',
    fees : '$500',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores eum perferendis atque ad temporibus, quo nam sapiente natus molestiae a quasi vitae hic dignissimos dolor! Eaque ducimus necessitatibus expedita!'
  }
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:1200})
  },[])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className='title'>
          Most Visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div data-aos="fade-up" key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className='continent flex'></span>
                <HiOutlineLocationMarker className='icon' />
                <span className='name'>{location}</span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade} <small>+1</small> </span>
                  </div>

                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className='btn flex'>DETAILS < HiOutlineClipboardCheck className='icon' /></button>
              </div>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main