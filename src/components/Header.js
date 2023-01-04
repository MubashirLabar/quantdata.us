import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

function Header() {

    const [isTop, setTop] = useState(true)

    useEffect(()=>{
        window.onscroll = () => {
            if(window.scrollY > 50){
                setTop(false); 
            }else{
                setTop(true);  
            }      
        } 
    },[]) 

    return (
        <div className={`header fixed anim ${isTop ? '' : 'bg'}`}>
            <div className='wrapper flex aic'>
                <div className='lit flex aic'>
                 <Link to='/'><img alt='' src="/images/logo.svg" className='logo'/></Link>
             </div>
                <div className='rit flex aic'> 
                 <div className='nav flex aic'>
                    <Link to='/' className='lin font s15 b6 upc cfff rel' onClick={() =>{document.documentElement.scrollTop = 0;}}>Home</Link>
                    <a href="#features" className='lin font s15 b6 upc cfff rel'>Features</a>
                    <a href="#pricing" className='lin font s15 b6 upc cfff rel'>Pricing</a>
                    <a href="#pricing" className='lin font s15 b6 upc cfff rel'>Discord Bot</a>
                    <Link to='/affiliate-program' className='lin font s15 b6 upc cfff rel'  onClick={() =>{document.documentElement.scrollTop = 0;}}>Affiliate Program<span className="tag font s13 color abs">New</span></Link>
                 </div>
                 <div className='actions flex aic'>
                     <button className='button btn font s15 b5 cfff upc anim'>Log in</button>
                     <button className='button font s15 b5 cfff upc anim'>Sign Up</button>
                 </div>
             </div>
            </div>
        </div>
    );
}

export default Header;