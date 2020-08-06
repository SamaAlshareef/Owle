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
                       <div className="col-sm-3" style={{ marginTop:'40px'}}>
                       <p className="footer-title-font">INFORMATION</p>
                       <p><a className="footer-content-font" href="url">Plans & pricing</a></p>
                       <p><a className="footer-content-font" href="url">About us</a></p>
                       <p><a className="footer-content-font" href="url">Affiliate</a></p>
                       
                       </div>
                       <div className="col-sm-3" style={{ marginTop:'40px'}}>
                       <p className="footer-title-font">LEGAL</p>
                       <p><a className="footer-content-font" href="url">Terms & conditions</a></p>
                       <p><a className="footer-content-font" href="url">Privacy policy</a></p>
                       <p><a className="footer-content-font" href="url">Copyright information</a></p>
                       <p><a className="footer-content-font" href="url">Cookies policy</a></p>
                       
                       </div>
                       <div className="col-sm-3" style={{ marginTop:'40px'}}>
                       <p className="footer-title-font">HELP</p>
                       <p><a className="footer-content-font" href="url">Support</a></p>
                       <p><a className="footer-content-font" href="url">Contact</a></p>
                       
                       </div>
                       <div className="col-sm-3" style={{ marginTop:'40px'}}>
                       <p className="footer-title-font">SOCIAL MEDIA</p>
                       <div className="d-flex flex-row">
                       <a href=""><img className="img-res" style={{marginRight:"10px"}} src="./images/home/facebook.png"/></a>
                        <a href=""><img className="img-res"  style={{marginRight:"10px",backgroundSize:'50% 50%', backgroundColor:'#ffffff'}} src="./images/icons/linkedin.png"/></a>
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
                           <div>
                           <img style={{paddingTop:'40px'}} src="/images/home/Mask Group 2.svg"/>
                           </div>
                       
                       <p className="footer-logo-font">OWLE</p>
                       <p className="footer-content-font"  style={{paddingTop:'50px', paddingLeft:'10px'}}  >Copyright © 2010-2020 All rights reserved.</p>
                     

                       <div class="btn-group ml-auto" style={{paddingTop:'30px',  marginRight:'100px'}}>
                       <button type="button" className="language-box d-flex" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <div style={{marginTop:'4px'}}>
                          <p className='lang-text' >English</p> 
                          </div>
                          <img className="arrow-down" height="9px" width="15px" src='./images/home/down-arrow-2.png'/>
                          
                           
                        </button>
                        <div class="dropdown-menu" style={{backgroundColor:'#575757', borderRadius:'5px'}}>
                            <a class="dropdown-item" href="#">English</a>
                            <a class="dropdown-item" href="#">Arabic</a>
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