import React from 'react';
import {Link} from 'react-router-dom'

function Footer(props) {
    return (
        <div className='footer rel'>
            <div className='cvr abs' />
            <div className='wrapper flex flex-col'>
                <div className='contact flex aic'>
                    <div className='blk flex aic abs'>
                        <div className='lit flex flex-col'>
                            <div className='font s18 upc b7 cfff'>Enter Email</div>
                            <div className='font s12 upc cfff'>For Latest Updates</div>
                        </div>
                        <div className='rit flex aic'>
                            <input type='text' className='cleanbtn iput font s15 cfff' />
                            <button className='button send s16 b6 cfff flex aic upc'>Inquiry <img src="/images/send.svg" className='ico'/></button>
                        </div>
                    </div>
                </div>
                
                <div className='content flex'>
                    <div className='col flex flex-col'>
                        <Link to='/'><img src="/images/logo.svg" className='logo'/></Link>
                        <div className='btns flex aic'>
                            <button className='button btn font s15 b5 cfff upc anim'>Log in</button>
                            <button className='button font s15 b5 cfff upc anim'>Sign Up</button>
                        </div>
                        <div className='social flex aic'>
                            <Link to='/' className='icon icon-facebook cfff s18' />
                            <Link to='/' className='icon icon-twitter cfff s18' />
                            <Link to='/' className='icon icon-instagram cfff s18' />
                            <Link to='/' className='icon icon-youtube-play cfff s18' />
                            <Link to='/' className='icon icon-linkedin cfff s18' />
                        </div>
                    </div>
                    <div className='col flex flex-col'>
                        <div className='lin font s15 cfff'>Home</div>
                        <div className='lin font s15 cfff'>Pricing</div>
                        <div className='lin font s15 cfff'>Features</div>
                        <div className='lin font s15 cfff'>Privacy Policy</div>
                        <div className='lin font s15 cfff'>Help</div>
                        <div className='lin font s15 cfff'>Terms Of Service</div>
                    </div>
                    <div className='col flex flex-col'>
                        <div className='item'>
                            <div className='lb font s15 b7 upc cfff'>About Us:</div>
                            <div className='txt font s13 cfff'>Quant Data LLC requires that you fill out our electronic nonprofessional subscriber agreement form to receive data through our service. You will be redirected to this agreement after signing up. Should you sign up to our service you are fully aware that you will be required to fill out this agreement, and should you provide inaccurate information we may revoke or limit access to any Quant Data LLC service. This form can be seen in section 28 of our terms of service.</div>
                        </div>
                        <div className='item'>
                            <div className='lb font s15 b7 upc cfff'>Disclaimer:</div>
                            <div className='txt font s13 cfff'>Disclaimer: The U.S. Securities and Exchange Commission (SEC) requires the following legal notices: All material presented on Quant Data LLC is not to be regarded as investment advice, but for general informational purposes only. Trading does involve risk, so caution must always be utilized. We cannot guarantee profits or freedom from loss. You assume the entire cost and risk of any trading you choose to undertake. You are solely responsible for making your own investment decisions. Quant Data LLC, its representatives, its principals, its moderators, and its members, are NOT registered as securities broker-dealers or investment advisors either with the U.S. Securities and Exchange Commission or with any state securities regulatory authority. Quant Data LLC does not manage client assets in any way. All information/ideas provided on Quant Data LLC products and services are for educational purposes only. We recommend consulting with a registered investment advisor, broker-dealer, and/or financial advisor.</div>
                        </div>
                    </div>
                </div>
                <div className='cpy-rit flex aic'>
                    <div className='item font s14 cfff rel flex aic'>&copy; Quant Data LLC. All Right Reserved</div>
                </div>
            </div>        
        </div>
    );
}

export default Footer;