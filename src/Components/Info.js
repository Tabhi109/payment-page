import React from 'react'
import './components.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BsBook,BsClock} from 'react-icons/bs';
import {FaGraduationCap} from 'react-icons/fa';
import {MdLiveTv,MdOutlineNotInterested} from 'react-icons/md';
const Info = () => {
  return (
    <div className='info-container'>
      <h3>Access Curated courses worth</h3>
      <h3><b>&#8377;18,500</b> at just <b className='ed-head'>&#8377;99</b> per year!</h3>
      <div className='infoContents'>
        <div className='infoItem'>
        <h5> <BsBook/> <b className='ed-head'>100+</b> Job relevant courses </h5>
        </div>

        <div className='infoItem'>
        <h5> <BsClock/> <b className='ed-head'>20,000+</b> Hours of content </h5>
        </div>

        <div className='infoItem'>
        <h5> <MdLiveTv/> <b className='ed-head'>Exclusive</b> webinar access </h5>
        </div>

        <div className='infoItem'>
        <h5> <FaGraduationCap/> Scholarship worth <b className='ed-head'>&#8377;94,500</b></h5>
        </div>

        <div className='infoItem'>
        <h5> <MdOutlineNotInterested/> <b className='ed-head'>Ad Free</b> learning experience</h5>
        </div>
    </div>

    </div> 
  )
}

export default Info
