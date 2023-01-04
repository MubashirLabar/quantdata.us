import React from 'react';
import { Link } from 'react-router-dom';

function AffiliateProgram(props) {

    const affiliateSteps = [
        {img: '/images/aff-step-1.svg', label: "Register your paypal", txt: "Tell Us Where to Send Your Commission By Entering Your Paypal Email Address Below And Clicking The Button To Save It."},
        {img: '/images/aff-step-2.svg', label: "Refer Your Friends", txt: "Every User Who Signs Up With Your Referral Link Will Receive A Discount, And You'll Earn 20% Of Their Subscription Each Month."},
        {img: '/images/aff-step-3.svg', label: "Earn Your Commission", txt: "Accumulated Funds Are Paid Out To Your Paypal Account On The 1St Of Every Month. Copy Your Link Below To Get Started!"},
    ]

    return (
        <div className='af-program'>
            <div className='sect-a' style={{background: 'url(/images/sect-a.svg)'}}>
                <div className='wrapper flex flex-col'>
                    <div className='hdr flex flex-col aic'>
                        <div className='title font s36 b7 cfff'>Quant <span className='color'>Data</span><br/><span className='b5'>Affiliate Program</span></div>
                        <button className='button font s15 b6 cfff anim'>Click Here To View Statistics For You Referrals</button>
                    </div>
                    <div className='items flex aic'>
                        {
                            affiliateSteps.map(item => (
                                <React.Fragment>
                                    <div className='item flex flex-col aic'>
                                        <img src={item.img} className='img'/>
                                        <div className='lbl font s14 b7 upc cfff'>{item.label}</div>
                                        <div className='txt font s14 cfff'>{item.txt}</div>
                                    </div>
                                    <img src='/images/aff-step-arrow.svg' className='arrow'/>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>
            
            {/* Section B */}
            <div className='sect-b' style={{background: 'url(/images/sect-c-l.svg) , url(/images/sect-c-r.svg)'}}>
                <div className='wrapper flex flex-col aic'>
                    <div className='form flex flex-col aic'>
                        <img src='/images/aff-form-logo.svg' className='img'/>
                        <div className='item flex aic'>
                            <div className='link'><img src='/images/link-icon.svg' className='ico'/></div>
                            <input type="text" placeholder='' value="https://quantdata.us/?referredby+andrew" className='cleanbtn iput font s15 b7 cfff'/>
                            <div className='copy'><img src='/images/copy-icon.svg' className='ico'/></div>
                        </div>
                        <div className='item flex aic'>
                            <div className='link'><img src='/images/link-icon.svg' className='ico'/></div>
                            <input type="text" placeholder='PayPal Email Address' value="" className='cleanbtn iput font s15 b7 cfff'/>
                        </div>
                        <div className='item flex aic'>
                            <div className='link'><img src='/images/link-icon.svg' className='ico'/></div>
                            <input type="text" placeholder='Confirm PayPal Email Address' value="" className='cleanbtn iput font s15 b7 cfff'/>
                        </div>
                        <button className='button font s14 b7 upc cfff'>Save paypal Email Address</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AffiliateProgram;