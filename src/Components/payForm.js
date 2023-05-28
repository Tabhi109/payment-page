import React from 'react'
import SelectSubscription from './selectSubscription'
import 'bootstrap/dist/css/bootstrap.min.css';
const PayForm = () => {
  return (
    <div className='container'>
            <div className='pay-form-header'>
                <div class="container text-center mb-2 mt-2">
                    <div class="row">
                        <div id='left' class="col">
                            <button id="one" className='btn btn-primary'>1</button><br/>
                            SignUp
                        </div>
                        <div id='right' class="col">
                            <button id="one" className='btn btn-primary'>2</button><br/>
                            Subscribe
                        </div>
                    </div>
                </div>
            
            </div>
            <div className='pay-form-body'>
                <h5> Select your Subscription plan</h5>
                <div className='pay-form-selection'>
                    <SelectSubscription/>
                </div>
            </div>
      
    </div>
  )
}


export default PayForm