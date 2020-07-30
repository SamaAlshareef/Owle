import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <footer className="footer-custom">
               <div className="container" >
                   <div className="row d-flex justify-content-around" style={{marginTop:"40px"}}>
                       <div className="col-sm-3">
                       <p className="footer-title-font">INFORMATION</p>
                       <p><a className="footer-content-font" href="url">Plans & pricing</a></p>
                       <p><a className="footer-content-font" href="url">About us</a></p>
                       <p><a className="footer-content-font" href="url">Affiliate</a></p>
                       
                       </div>
                       <div className="col-sm-3">
                       <p className="footer-title-font">LEGAL</p>
                       <p><a className="footer-content-font" href="url">Terms & conditions</a></p>
                       <p><a className="footer-content-font" href="url">Privacy policy</a></p>
                       <p><a className="footer-content-font" href="url">Copyright information</a></p>
                       <p><a className="footer-content-font" href="url">Cookies policy</a></p>
                       
                       </div>
                       <div className="col-sm-3">
                       <p className="footer-title-font">HELP</p>
                       <p><a className="footer-content-font" href="url">Support</a></p>
                       <p><a className="footer-content-font" href="url">Contact</a></p>
                       
                       </div>
                       <div className="col-sm-3">
                       <p className="footer-title-font">SOCIAL MEDIA</p>
                       <div className="d-flex flex-row">
                       <a href=""><img className="img-res" style={{marginRight:"10px"}} src="./images/home/facebook.png"/></a>
                        <a href=""><img className="img-res" style={{marginRight:"10px"}} src="./images/home/linkedin.png"/></a>
                        <a href=""> <img className="img-res" style={{marginRight:"10px"}}src="./images/home/instagram-sketched.png"/></a>
                        <a href=""><img className="img-res" style={{marginRight:"10px"}}src="./images/home/twitter.png"/></a>
                        </div>
                        <div className="d-flex flex-row" style={{marginTop:"10px"}}>
                         
                            <a href=""><img className="img-res" style={{marginRight:"10px"}} src="./images/home/youtube.png"/></a>
                            <a href=""><img className="img-res" style={{marginRight:"10px"}} src="./images/home/youtube-1.png"/></a>
                            <a href=""><img className="img-res" style={{marginRight:"10px"}}src="./images/home/youtube-2.png"/></a>
                            <a href=""><img className="img-res" style={{marginRight:"10px"}}src="./images/home/twitter-1.png"/></a>
                        </div>
                       </div>
                   </div>
                   <div className="row" >
                       <div className="col-sm-12  flex-row d-flex align-items-center">
                       <img style={{marginRight:"10px", marginTop:"-15px"}} src="/images/home/Mask Group 2.svg"/>
                       <p className="footer-logo-font">OWLE</p>
                       <p className="footer-content-font"  >Copyright © 2010-2020 All rights reserved.</p>
                       <div className="ml-auto">
                            <div className="language-box d-flex flex-row align-self-center" ><p className="lang-text">English</p>
                            <div className="d-flex align-items-center" style={{marginLeft:'15px'}}>
                            <img className="arrow-down" height="9px" width="15px" src='./images/home/down-arrow-2.png'/>
                            </div>
                            
                            </div>
                            
                       </div>
                       
                       </div>

                   </div>
               </div>
                    
                        
                    
            </footer>
            
        );
    }
}
 
export default Footer;