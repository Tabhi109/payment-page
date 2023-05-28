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
    <div className='container mt-2'>
    <label>Subscription fee : </label> <b id='price'>&#8377; 18500</b><br/>
    <label>Discount : </label> <b id='price'>&#8377; {disc}</b> <br/>
    <label><b>Total Amount</b> <i>(incl 18%gst)</i> : </label> <b id='price'>&#8377; {totalAmount}</b>

    </div>

<div>
    <button id='cancelbtn' className='btn btn-outline-danger mt-4 mb-3'>Cancel</button>
    <button id='paybtn' className='btn btn-success mt-4 mb-3'>Proceed to pay</button>
</div>
</>
  )
}

export default SelectSubscription





     