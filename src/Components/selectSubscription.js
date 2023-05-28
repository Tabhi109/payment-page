import React from 'react'
import { useState } from 'react';
import RadioPlans from './radioPlans';
import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const SelectSubscription = () => {
    const [selectedOption, setSelectedOption] = useState('plan2');
   
    const amounts = {
        plan1: 99,
        plan2: 179,
        plan3: 149,
        plan4: 99
    }

    const totalAmount = amounts[selectedOption];
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }
        const disc = 18500 - totalAmount;
  return (
    <>
    <div className='Selection'>
        <RadioPlans selectedOption={selectedOption} handleChange={handleChange}/>
    </div>
    <hr></hr>
    <div className='container mt-2'>
    <label className='showPrice'>Subscription fee :  <p id='subsBtnAmt'>&#8377; 18500</p></label><br/>
    <label className='showPrice' id='discountprice'>Discount :  <p id='subsBtnAmt'>-&#8377; {disc}</p></label> <br/>
    <label className='totalprice'><b>Total Amount</b> <i>(incl 18%gst)</i> : </label> <b id='price'>&#8377; {totalAmount}</b>

    </div>

<div>
    <button id='cancelbtn' className='btn btn-outline-danger mt-4 mb-3'>Cancel</button>
    <button id='paybtn' className='btn btn-success mt-4 mb-3'>Proceed to pay</button>
</div>
<div>
    <img src='https://signdesk.com/images/razorpay_logo.png' id="razorLogo" alt=''></img>
</div>
</>
  )
}

export default SelectSubscription





     