import React,{useState,useEffect} from 'react'
import Slider from "react-slick"
import Aos from 'aos'
import "aos/dist/aos.css"

// Animated Vectors
import CubeVector from '../vectors/CubeVector'
import CoinVector from '../vectors/CoinVector'
import LaptopVector from '../vectors/LaptopVector'
import NewsVector from '../vectors/NewsVector'
import CircleVector from '../vectors/CircleVector'
import SdmVector from '../vectors/SdmVector'
import RiseVector from '../vectors/RiseVector'
import CubicVector from '../vectors/CubicVector'

function Home() {

    const weights = [
        {label: 'Bullish', txt: 'Market Sentiment'},
        {label: '63.36%', txt: 'Pull / Call Radio'},
        {label: '70M / 303M', txt: 'Put / Call Volume'},
        {label: '$6.9B / $9.3B', txt: 'Pull / Call Premium'},
    ]

    const reviews = [
        {relative: 'Educational Content', user: 'Customer', dp: '/images/user-1.jpg', msg: 'Quant Data has allowed me to, as an options trader, gain a major advantage over other traders, thus increasing the profitability of my trades. Their customer service is top-notch, and I would absolutely recommend them.'},
        {relative: 'Educational Content', user: 'Customer', dp: '/images/user-3.jpg', msg: 'From their sweeps, blocks, unusual trading activity, and news tab, I could not ask for anything more! Recently, I took one of their signals for BYND and made my monthly fee back 8x over. Highly recommend.'},
        {relative: 'Educational Content', user: 'Customer', dp: '/images/user-5.jpg', msg: 'I’ve always struggled to find the best stocks to trade. When I joined Quant Data, that changed. We, as retail traders, need to play Smart Money just like the big institutions do. I am grateful for the service that Quant Data offers!'},
        {relative: 'Educational Content', user: 'Customer', dp: '/images/user-4.jpg', msg: 'I just wanted to thank you for creating Quant Data. You guys are doing a great job filtering the data and providing us with information thats absolutely necessary for day traders. My performance has since improved drastically!'},
    ]

    const sdrPlaneOne = [
        {label: "Real-Time Options Order Flow", ico: "/images/blub.svg"},
        {label: "Dark & Lit Pool Prints", ico: "/images/blub.svg"},
        {label: "Historical Options Order Flow", ico: "/images/blub.svg"},
        {label: "Algorithmic Quant Alerts", ico: "/images/blub.svg"},
        {label: "Real-Time News + Sentiment", ico: "/images/blub.svg"},
        {label: "Historical News + Sentiment", ico: "/images/blub.svg"},
        {label: "Unusual Options Activity", ico: "/images/blub.svg"},
        {label: "Advanced Flow Filtering", ico: "/images/blub.svg"},
        {label: "Quantitative Stock Reports", ico: "/images/blub.svg"},
        {label: "Institutional Order Tracking", ico: "/images/blub.svg"},
        {label: "Options Profit Calculator", ico: "/images/blub.svg"},
        {label: "Daily Gainers & Losers", ico: "/images/blub.svg"},
        {label: "Desktop Notifications", ico: "/images/blub.svg"},
        {label: "Analyst Ratings", ico: "/images/blub.svg"},
        {label: "Daily Flow Insights", ico: "/images/blub.svg"},
        {label: "24/7 Customer Support", ico: "/images/blub.svg"},
        {label: "Discord Bot", ico: "/images/blub-cross.svg"},
    ]

    const sdrPlaneTwo = [
        {label: "Real-Time Options Order Flow", ico: "/images/blub-white.svg"},
        {label: "Dark & Lit Pool Prints", ico: "/images/blub-white.svg"},
        {label: "Historical Options Order Flow", ico: "/images/blub-white.svg"},
        {label: "Algorithmic Quant Alerts", ico: "/images/blub-white.svg"},
        {label: "Real-Time News + Sentiment", ico: "/images/blub-white.svg"},
        {label: "Historical News + Sentiment", ico: "/images/blub-white.svg"},
        {label: "Unusual Options Activity", ico: "/images/blub-white.svg"},
        {label: "Advanced Flow Filtering", ico: "/images/blub-white.svg"},
        {label: "Quantitative Stock Reports", ico: "/images/blub-white.svg"},
        {label: "Institutional Order Tracking", ico: "/images/blub-white.svg"},
        {label: "Options Profit Calculator", ico: "/images/blub-white.svg"},
        {label: "Daily Gainers & Losers", ico: "/images/blub-white.svg"},
        {label: "Desktop Notifications", ico: "/images/blub-white.svg"},
        {label: "Analyst Ratings", ico: "/images/blub-white.svg"},
        {label: "Daily Flow Insights", ico: "/images/blub-white.svg"},
        {label: "24/7 Customer Support", ico: "/images/blub-white.svg"},
        {label: "Discord Bot", ico: "/images/blub-cross.svg"},
    ]
    
    const oneSlide = {
        dots: true, 
        infinite: true, 
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, 
        autoplaySpeed: 5000,  
        autoplay: true,   
    }

    useEffect(() => {
        Aos.init({
            duration: 600,
            easing: 'linear',
        })
    },[])  

    return (
        <div className='home-p'>
            {/* Section A */}
            <div id="hero" className='sect-a' style={{background: 'url(/images/sect-a.svg)'}}>
                <div className='wrapper flex'>
                    <div data-aos="fade-right" className='lit flex flex-col'>
                        <div className='tags flex aic'>
                            <div className='tt font cfff'>Order flow&#124;</div>
                            <div className='tt font cfff'>Dark Pool&#124;</div>
                            <div className='tt font cfff'>AI Alerts&#124;</div>
                            <div className='tt font cfff'>News</div>
                        </div>
                        <div className='slogn font s42 b3 cfff'>Institutional-Grade<br/><span className='b7 color'>Options Market Data</span></div>
                        <div className='txt font s16 cfff'>Discover what Smart Money is trading with our real-time options order flow, news, and alerts.</div>
                        <div className='actions flex aic'>
                            <button className='button font s15 b6 cfff'>Start free Trial</button>
                            <button className='button font s14 b6 cfff upc'>Product Demo</button>
                        </div>
                    </div>
                    <div data-aos="fade" className='rit flex flex-col'>
                        <div className='weights flex aic'>
                            {
                                weights.map(item => (
                                    <div className='item flex aic'>
                                        <div className='meta flex flex-col'>
                                            <div className='txt font s13'>{item.txt}</div>
                                            <div className='lbl font s14 cfff b7'>{item.label}</div>
                                        </div>
                                        <img src='/images/circle.svg' className='img'/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='qlties flex aic'>
                            <div className='item font s20 b7 cfff'>SPX5000USD<span className="icon-chevron-down s16 cfff"/></div>
                            <div className='item flex flex-col'>
                                <div className='lbl font s13'>Select Time</div>
                                <div className='txt font s15 cfff flex aic'>1m 30m 1h&nbsp;<span className="color">3h</span>&nbsp;<span className="icon-chevron-down s14 cfff"/></div>
                            </div>
                            <div className='item flex flex-col'>
                                <div className='lbl font s13'>Add Symbol</div>
                                <div className='txt font s15 cfff flex aic'><span className="flex aic plus color icon-plus"/>&nbsp;Compare</div>
                            </div>
                            <div className='item flex flex-col'>
                                <div className='lbl font s13'>Add Indicators</div>
                                <div className='txt font s15 cfff flex aic'><span className="color">&euro;</span>&nbsp;Indicator</div>
                            </div>
                        </div>
                        <div className='graphs flex'>
                            <div className='vector'><img src='/images/sect-a-graph.svg' className='img'/></div> 
                            <div className='sml-blk flex flex-col rel'>
                                <div className='itm flex flex-col'>
                                    <div className='lbl font s14 cfff'>Stock Price</div>
                                    <div className='val font s16 b7 cfff'>+USD3000</div>
                                </div>
                                <div className='itm flex flex-col'>
                                    <div className='lbl font s14 cfff'>Stock Price</div>
                                    <div className='val font s16 b7 cfff'>-USD2800</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        
            {/* Section B */} 
            <div className='sect-b flex flex-col rel'  style={{background: 'url(/images/sect-b.svg)'}}>
                <div id="features" className='ft abs'/>
                <div  className='wrapper flex flex-col'>
                    <div data-aos="zoom-in" className='meta'>
                        <div className='title font s26 b7 upc cfff'>Key Features</div>
                        <div className='tt s16 font cfff upc'>We provide a plethora of perks to contribute towards your success when trading options.</div>
                    </div>
                    <div className='wrap flex aic'>
                    <div className='item flex flex-col aic'>
                        <div className="img"><CubeVector/></div>
                        <div className='lbl font s20 b7 cfff'>Algorithemic Alerts</div>
                        <div className='txt font 15 s15 cfff'>With Our Algorithemically Curated Alerts, You Can Be Confident That You're Keep Up To Date With The State Of The Market And Its Trends For Specific Tickers.</div>
                    </div> 
                    <div className='item flex flex-col aic'>
                        <div className="img"><CoinVector/></div>
                        <div className='lbl font s20 b7 cfff'>Options Order Flow</div>
                        <div className='txt font 15 s15 cfff'>Trades are displayed as they arrive in real-time, providing you with all of the necessary data to make knowledgeable, well-informed decisions when trading.</div>
                    </div> 
                    <div className='item flex flex-col aic'>
                        <div className="img"><LaptopVector/></div>
                        <div className='lbl font s20 b7 cfff'>Stock Reports</div>
                        <div className='txt font 15 s15 cfff'>Evaluate stocks, search trade ideas, and analyze trends using our consolidated, 12-page quantitative reports for all U.S. stocks on the major exchanges.</div>
                    </div>
                    <div className='item flex flex-col aic'>
                        <div className="img"><NewsVector/></div>
                        <div className='lbl font s20 b7 cfff'>News + Sentiment</div>
                        <div className='txt font 15 s15 cfff'>Worldwide events can significantly impact the price of a stock. We display news with related tickers and sentiment from 50+ sources for your convenience!</div>
                    </div>
                </div>     
                </div>
            </div> 
        
            {/* Section C */}
            <div className='sect-c' style={{background: 'url(/images/sect-c-l.svg), url(/images/sect-c-r.svg)'}}>
                <div className='wrapper flex flex-col'>
                    <div  data-aos="zoom-in" className='meta'>
                        <div className='title font s26 b7 upc cfff'>Identify Significant Market-Wide Events</div>
                        <div className='tt s16 font cfff upc'>Our proprietary tools aim to bridge the gap between institutional and retail traders.</div>
                    </div>
                    <div className='wrap flex aic'>
                        <div className='lit flex flex-col'>
                            <div data-aos="fade-right" className='blk flex aic'>
                                <div className='img'><CircleVector/></div>
                                <div className='text flex flex-col'>
                                    <div className='txt font s15 b7 upc cfff'>Market-Wide Statistics</div>
                                    <div className='txt font s13 cfff'>Track the current bullish/bearish sentiment of the market.</div>
                                </div> 
                            </div>  
                            <div data-aos="fade-right" className='blk flex aic'>
                                <div className='img'><SdmVector/></div>
                                <div className='text flex flex-col'>
                                    <div className='txt font s15 b7 upc cfff'>Educational Content</div>
                                    <div className='txt font s13 cfff'>Improve your knowledge with our concise educational articles.</div>
                                </div> 
                            </div> 
                        </div>
                        <div data-aos="fade" className='center flex'>
                            <img src="/images/sect-c-graph.svg" className='graph'/>
                        </div>
                        <div className='rit flex flex-col'>
                            <div data-aos="fade-left" className='blk flex aic'>
                                <div className='img'><RiseVector/></div>
                                <div className='text flex flex-col'>
                                    <div className='txt font s15 b7 upc cfff'>Historical Data</div>
                                    <div className='txt font s13 cfff'>Utilize prior options data to make informed decisions in the future.</div>
                                </div> 
                            </div> 
                            <div  data-aos="fade-left" className='blk flex aic'>
                                <div className='img'><CubicVector/></div>
                                <div className='text flex flex-col'>
                                    <div className='txt font s15 b7 upc cfff'>Customizable Filtering</div>
                                    <div className='txt font s13 cfff'>Exclude unwanted options data using our advanced filter settings.</div>
                                </div> 
                            </div>  
                        </div>
                    </div>
                </div>
            </div>

            {/* Section D */}
            <div className='sect-d rel' style={{background: "url(/images/sect-d.svg)"}}>
                <div className='wrapper flex flex-col'>
                    <div data-aos="zoom-in" className='meta'>
                        <div className='title font s26 b7 upc cfff'>Dark & Lit pool prints used as key markers to assist gauge direction.</div>
                        <div className='tt s16 font cfff upc'>They frequently act as aid or resistance tiers whilst tested. you can use them ask key rate tiers on any timeframe. The extra prints on a given level, the extra its importance becomes.</div>
                    </div>
                    <div data-aos="fade-up-left" className='mobile flex aic'><img className='img' src="/images/mobile.png"/></div>
                </div>
            </div>
        
            {/* Section */}
            <div className='sect rel'>
                <div className='wrapper flex flex-col'>
                    <div data-aos="zoom-in" className='meta'>
                        <div className='title font s26 b7 upc cfff'>Real-Time Order flow data for the reltail trader</div>
                        <div className='tt s16 font cfff upc'>Quantdata is a statistics set of rules that tracks down cleaver cash transactions withinside the inventory and fairness alternatives markets, IT actively video display units the tape(time and sales) Marketplace wide.</div>
                    </div>
                    <div data-aos="fade" className='graph'>
                        <img src="/images/sect-d-graph.svg" className='img'/>
                    </div>
                </div> 
            </div>

            {/* Section E */}
            <div className='sect-e flex aic'>
                <div className='wrapper swp flex aic'>
                    <div data-aos="fade" className='lit rel'>
                        <div className='cvr'></div>
                        <div className='blk flex flex-col'>
                            <div className='label font s18 b6 color'>Live News & Sentiment</div>
                            <div className='data'>
                                <div className='row'>
                                    <div className='lbl font s14 b6 cfff'>Market Close Imbalance: $424M To Buy Side</div>
                                    <div className='stamp flex aic'>
                                        <div className='font s12 cfff'>12:31 AM on May 6, 2021 &bull; Futures, Markets &bull; SPY</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='lbl font s14 b6 cfff'>Why Athenex's Stock Is Trading Higher Today</div>
                                    <div className='stamp flex aic'>
                                        <div className='font s12 cfff'>12:31 AM on May 6, 2021 &bull; Trading Ideas, Movers &bull; ATNX</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='lbl font s14 b6 cfff'>Nemaura Medical Shares Resume Trade, Now Up 131% For Session</div>
                                    <div className='stamp flex aic'>
                                        <div className='font s12 cfff'>12:27 AM on May 6, 2021 &bull; Trading Ideas, Movers &bull; NMRD</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='lbl font s14 b6 cfff'>Nemaura Medical Shares Halted On Circuit Breaker, Up To Back Over $10 Level, Now Up ~123% For Session</div>
                                    <div className='stamp flex aic'>
                                        <div className='font s12 cfff'>12:25 AM on May 6, 2021 &bull; Trading Ideas, Movers &bull; NMRD</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='lbl font s14 b6 cfff'>'Halftime Report' Traders Weigh In On AbbVie, Chewy And More</div>
                                    <div className='stamp flex aic'>
                                        <div className='font s12 cfff'>12:25 AM on May 6, 2021 &bull; Media &bull; CHWY,PLUG,ABBV,CMI</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='lbl font s14 b6 cfff'>Regional Health Properties Shares Resume Trade, Pullback From Over $20 Level; Stock Up 86.7% For Session</div>
                                    <div className='stamp flex aic'>
                                        <div className='font s12 cfff'>12:25 AM on May 6, 2021 &bull; Trading Ideas, Movers &bull; RHE</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='lbl font s14 b6 cfff'>Why Teck Resources's Stock is Trading Higher Today</div>
                                    <div className='stamp flex aic'>
                                        <div className='font s12 cfff'>12:24 AM on May 6, 2021 &bull; Trading Ideas, Movers &bull; TECK</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='lbl font s14 b6 cfff'>Why Sealed Air's Stocks Is Trading Higher Today</div>
                                    <div className='stamp flex aic'>
                                        <div className='font s12 cfff'>12:22 AM on May 6, 2021 &bull; Trading Ideas &bull; SEE</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='lbl font s14 b6 cfff'>Fed Vice Chair Clarida Says Data Showing That Inflation Will Not Persist Over A Long Period Of Time</div>
                                    <div className='stamp flex aic'>
                                        <div className='font s12 cfff'>12:19 AM on May 6, 2021 &bull; Economics,Federal Reserve &bull; SPY</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='lbl font s14 b6 cfff'>Why PerkinElmer's Stock Is Trading Higher Today</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className='rit flex flex-col'>
                        <div className='lbl font upc s30 b7 white'>Always Connect With Market</div>
                        <div className='txt font s15 b5 upc white'>We Provide Live News & Sentiments is our platform to update the user about all market happenines and market icrease and decrease flow and other market news that can be profitable for you.</div>
                    </div>
                </div>
            </div>

            {/* Section F */}
            <div className='sect-f rel'> 
                <div className='wrapper flex flex-col aic'>
                    <div data-aos="zoom-out" className='meta'>
                        <div className='title font s26 b7 upc cfff'>See what the community has to say</div>
                        <div className='tt s16 font cfff upc'>We've reached out to memebers of our community to see what they think about quant data.</div>
                    </div>
                    <div className='wrap slider-blk flex aic'>
                        <Slider {...oneSlide}>
                        { 
                            reviews.map(item => (
                                <div className="s">
                                    <div className='cart flex'>
                                        <div className='dp'>
                                            <div className='img' style={{background: `url(${item.dp})`}} />
                                        </div>
                                        <div className='rit flex flex-col'>
                                            <div className='txt fontm s15 b6 cfff'>{item.msg}</div>
                                            <div className='ftr'>
                                                <div className='fontm s14 b7 cfff upc'>{item.relative}</div>
                                                <div className='desi fontm s14 cfff'>{item.user}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        </Slider>
                    </div>
                </div>
            </div>
         
            {/* Sectin G */}
            <div className='sect-g rel'>
                <div id="pricing" className='prc abs'/>
                <div className='wrapper flex flex-col aic'>
                    <div data-aos="zoom-out" className='meta'>
                        <div className='title font s26 b7 upc cfff'>Fair, Simple Pricing For All</div>
                        <div className='tt s16 font cfff upc'>Select a plan that suits your Budget from the following list of Pricing plans.</div>
                    </div>
                    <div className='actions flex aic'>
                        <button className="cleanbtn btn font s15 b6 upc cfff">Standard</button>
                        <button className="cleanbtn btn font s15 b6 upc cfff">Premium</button>
                        <button className="cleanbtn btn font s15 b6 upc cfff on">Discord Bot</button>
                    </div>
                    <div className='pkgs flex'>
                        <div data-aos="fade" className='price-card flex flex-col rel'>
                            <div className='label fon s20 b7 upc cfff'>Standard Monthly<br/>Plan</div>
                            <div className='price'>
                                <strike className="font s13 b6 cfff">$74.99 &#47;month</strike>
                                <div className='val font s22 b7 cfff'>$74.99 &#47;<span className='s15'>month</span></div>
                            </div>
                            <div className='list'>
                                {
                                    sdrPlaneOne.map(item => (
                                        <div className='item flex aic'>
                                            <img src={item.ico} className='ico'/>
                                            <div className='lbl font s13 b7 cfff'>{item.label}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <button className='button font s12 upc cfff b6'>Product Demo</button>
                        </div>
                        <div data-aos="fade" className='price-card flex flex-col rel'>
                            <div className='label fon s20 b7 upc cfff'>Standard Monthly<br/>Plan</div>
                            <div className='price'>
                                <strike className="font s13 b6 cfff">$74.99 &#47;month</strike>
                                <div className='val font s22 b7 cfff'>$74.99 &#47;<span className='s15'>month</span></div>
                            </div>
                            <div className='list'>
                                {
                                    sdrPlaneTwo.map(item => (
                                        <div className='item flex aic'>
                                            <img src={item.ico} className='ico'/>
                                            <div className='lbl font s13 b7 cfff'>{item.label}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <button className='button font s12 upc cfff b6'>Product Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Home;