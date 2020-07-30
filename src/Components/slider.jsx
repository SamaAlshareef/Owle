import React, { Component } from 'react';
import MapContainer from './map';
import Footer from './footer';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid slider-prop" >
                <div className="row home-content-prop ">
                    <div className="col-sm-4">
                        <p className="header-font">Everything is simple</p>
                        <div className="row">
                            <div className="col-7">
                            <p className="slider-content-font">in just few minutes you will build your website and choose a lot of channels</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                                <a className="btn btn-default slider-btn" style={{marginTop:'-5px'}}>Get Start</a>
                                <p><i className="arrow right"></i></p>
                                <p><i className="arrow right"></i></p>
                        </div>
                        
                    </div>
                    <div className="col-sm-8 border">
                        
                        <img className="bambo" src="./images/home/MacBook-1.png"/>
                    </div>
                   
                </div>
                <div className ="row home-content-prop">
                    <div className = "col-sm-4">
                        <p className="header-font2">Build E-commerce without code</p>
                        <div className="row">
                            <div className="col-7">
                            <p className="slider-content-font">in just few minutes you will build your website and choose a lot of channels</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                                <a className="btn btn-default slider-btn" style={{marginTop:'-5px'}}>Start now</a>
                                <p><i className="arrow right"></i></p>
                                <p><i className="arrow right"></i></p>
                        </div>
                    </div>
                    <div className="col-sm-8 d-flex justify-content-center">
                        <img className="img-prop" src="./images/home/Group 1182@2x.png"/>
                    </div>
                </div>
                <div className ="row home-content-prop">
                    <div className = "col-sm-7">
                       <img className="img-prop" src="./images/home/channels@2x.png"/>
                    </div>
                    <div className="col-sm-5">
                    <p className="header-font2">A lot of channels to sell more</p>
                        <div className="row">
                            <div className="col-7">
                            <p className="slider-content-font">you will get a lot of channels to sell your products like Facebook, Instagram and more and you can sync</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                                <a className="btn btn-default slider-btn" style={{marginTop:'-5px'}}>Learn more</a>
                                <p><i className="arrow right"></i></p>
                                <p><i className="arrow right"></i></p>
                        </div>  
                    </div>
                </div>
                <div className ="row home-content-prop">
                    <div className = "col-sm-4">
                        <p className="header-font2">Ads with us will be easy just clicks</p>
                        <div className="row">
                            <div className="col-7">
                            <p className="slider-content-font">need marketing don't worry we care about this and we have a lot of places to make ads for you to sell more</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                                <a className="btn btn-default slider-btn" style={{marginTop:'-5px'}}>Learn more</a>
                                <p><i className="arrow right"></i></p>
                                <p><i className="arrow right"></i></p>
                        </div>
                    </div>
                    <div className="col-sm-8 d-flex justify-content-center">
                        <img className="img-prop" src="./images/home/ads@2x.png"/>
                    </div>
                </div>
                
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 d-flex justify-content-center">
                    <p className="card-header-font">Our Plans</p>
                    </div>
                    <div className="col-sm-2">
                        <div className="plans-card">
                           <p className="card-title-font">0 LE</p>
                           <p className="card-subtitle-font">Free plan</p>
                                <div className="row">
                                    <div className="col-6">
                                    <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                    </div>
                                    <div className="col-6">
                                    <p className="card-rot-text">basic</p>
                                    </div>
                                </div>
                                <btn className="card-btn card-btn-font">Subscribe</btn>                           
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="plans-card">
                           <p className="card-title-font">550 LE<p className="card-title-font2">/month</p></p>
                           <p className="card-subtitle-font">Paid plan</p>
                                <div className="row">
                                    <div className="col-6">
                                    <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                    </div>
                                    <div className="col-6">
                                    <p className="card-rot-text">Cool</p>
                                    </div>
                                </div>
                                <btn className="card-btn card-btn-font">Subscribe</btn>                           
                        </div>
                    </div>
                    <div className="col-sm-2 ">
                        <div className="plans-card ">
                           <p className="card-title-font">1500 LE</p>
                           <p className="card-subtitle-font">Paid plan</p>
                                <div className="row">
                                    <div className="col-6">
                                    <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                    </div>
                                    <div className="col-6">
                                    <p className="card-rot-text">Advanced</p>
                                    </div>
                                </div>
                                <btn className="card-btn card-btn-font">Subscribe</btn>                           
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="plans-card">
                           <p className="card-title-font">2499 LE</p>
                           <p className="card-subtitle-font">Paid plan</p>
                                <div className="row">
                                    <div className="col-6">
                                    <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                <div class="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">lorem</label>
                                </div>
                                    </div>
                                    <div className="col-6">
                                    <p className="card-rot-text">Premium</p>
                                    </div>
                                </div>
                                <btn className="card-btn card-btn-font">Subscribe</btn>                           
                        </div>
                    </div>
                    
                </div>
                <div className="row d-flex justify-content-center no-gutter" style={{marginTop:"169px"}}>
                    
                   
                  
                    
                    
                   
                </div>
                
            </div>
         );
    }
}
 
export default Slider;