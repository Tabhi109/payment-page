import React from 'react'
import SelectSubscription from './selectSubscription'

const PayForm = () => {
  return (
    <div className='container'>
        <div className='payForm'>
            <div className='pay-form-header'>
                <h6 id='left'>Signup</h6>
                <h6 id='right'>Subscribe</h6>
            </div>
            <div className='pay-form-body'>
                <h5> Select your Subscription plan</h5>
                <div className='pay-form-selection'>
                    <SelectSubscription/>
                </div>
            </div>
        </div>
      
    </div>
  )
}


export default PayForm
