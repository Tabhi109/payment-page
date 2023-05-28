import React from 'react'
import './components.css';
const SelectSubscription = () => {
    const disc = 18400;
    const total_amount = 179;
  return (
    <>
    <div className='Selection'>
        <button className='selectSub'>1</button>
        <button className='selectSub'>2</button>
        <button className='selectSub'>3</button>
        <button className='selectSub'>4</button>
    </div>
    <div>
    <label>Subscription fee : </label> <b id='price'>&#8377; 18500</b><br/>
    <label>Discount : </label> <b id='price'>&#8377; {disc}</b> <br/>
    <label>Total Amount <i>(incl 18%gst)</i> : </label> <b id='price'>&#8377; {total_amount}</b>

</div>

<div>
    <button className='btn btn-outline-danger'>Cancel</button>
    <button id='paybtn' className='btn btn-success'>Proceed to pay</button>
</div>
</>
  )
}

export default SelectSubscription
