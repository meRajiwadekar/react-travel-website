import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../../assets/video01.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor} from 'react-icons/fa'

import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {  
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video muted loop autoPlay>
          <source src={video2} type="video/mp4" />
        </video>
      </div>
      <div className="secContent container">
        <div data-aos="fade-up" className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter email address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>Send <FiSend className='icon' /></button>
          </div>
            
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut minus dolorum veritatis accusantium cum! Deserunt blanditiis tempore molestias cum dolorem mollitia, minima autem velit consectetur voluptatem asperiores! Impedit, magni?
            </div>
            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insuarnace
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>

            {/* Group Two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Hostelworld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
            </div>

            {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                CITY 1
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                CITY 2
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                CITY 3
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                CITY 4
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                CITY 5
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED - NIKHIL RAJIWADE</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer