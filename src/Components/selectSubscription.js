import React from 'react'
import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const SelectSubscription = () => {
    const amounts = [99,179,149];
    const total_amount = amounts[0];
    const disc = 18500 - total_amount;
  return (
    <>
    <div className='Selection'>
    <label  className='selectSub'><input id="first12th" type="radio" disabled/><span id='offExp' class="badge text-bg-danger">offer expired</span> 12 Months Subscription <p id='subsBtnAmt'>&#8377;99</p></label>
    <label className='selectSub'> <input type="radio" id="second12th"/><span id='offExp' class="badge text-bg-success">Recommended</span> 12 Months Subscription <p id='subsBtnAmt'>&#8377;179</p></label>
    <label className='selectSub'> <input type="radio" id="sixMonths" />6 Months Subscription <p id='subsBtnAmt'>&#8377;149</p></label>
    <label className='selectSub'><input id="threeMonths" type='radio'/>3 Months Subscription <p id='subsBtnAmt'>&#8377;99</p></label>
    </div>
    <div className='container mt-2'>
    <label>Subscription fee : </label> <b id='price'>&#8377; 18500</b><br/>
    <label>Discount : </label> <b id='price'>&#8377; {disc}</b> <br/>
    <label><b>Total Amount</b> <i>(incl 18%gst)</i> : </label> <b id='price'>&#8377; {total_amount}</b>

    </div>

<div>
    <button id='cancelbtn' className='btn btn-outline-danger mt-4 mb-3'>Cancel</button>
    <button id='paybtn' className='btn btn-success mt-4 mb-3'>Proceed to pay</button>
</div>
</>
  )
}

export default SelectSubscription





     