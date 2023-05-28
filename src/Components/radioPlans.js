import React from 'react';
import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RadioPlans = (props) => {
  return (
    <div>
      <label  className='selectSub'>
        <input id="first12th" 
               type="radio" 
               value="plan1" 
               disabled/>

        <span id='offExp' class="badge text-bg-danger">offer expired</span> 12 Months Subscription <p id='subsBtnAmt'>&#8377;99</p>
      </label>

    <label className='selectSub'> 
       <input type="radio" 
       id="second12th" 
       value="plan2" 
       checked={props.selectedOption === 'plan2'} 
       onChange={props.handleChange}/>
        <span id='offExp' class="badge text-bg-success">Recommended</span> 12 Months Subscription <p id='subsBtnAmt'>&#8377;179</p>
    </label>

    <label className='selectSub'>
         <input type="radio" 
            id="sixMonths" 
            value="plan3" 
            checked={props.selectedOption === 'plan3'} 
            onChange={props.handleChange}/>

            6 Months Subscription <p id='subsBtnAmt'>&#8377;149</p>
    </label>

    <label className='selectSub'>
        <input id="threeMonths" type='radio'value="plan4" checked={props.selectedOption === 'plan4'} 
       onChange={props.handleChange}/>3 Months Subscription <p id='subsBtnAmt'>&#8377;99</p>
        </label>
    </div>
  )
}

export default RadioPlans
