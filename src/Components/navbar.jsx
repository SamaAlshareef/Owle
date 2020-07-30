import React,{Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Footer from './footer';
import  MapContainer  from './map';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
           <React.Fragment>
            <div className="container-fluid home-bg-img ">  
            <div className="row">
                <div className="col-sm-4 d-flex justify-content-center">
                <img src="/images/home/mask.svg"/>
                <a className=" logo-font" style={{color:'#000000'}} href="#">OWLE</a>
                </div>
                <div className="col-sm-8 d-flex justify-content-end ">
                <nav className="navbar navbar-expand-lg navbar-light">
          
               
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                
                    <div className="navbar-nav ml-auto  ">
                    <Link to={'/'} className="nav-item nav-link nav-font"> Home </Link> <span className="sr-only">(current)</span>
                    <Link to={'/aboutUs'} className="nav-item nav-link nav-font"> About Us </Link>
                    <Link to={'/login'} className="nav-item nav-link nav-font"> Billboard </Link>
                    <Link to={'/register'} className="nav-item nav-link nav-font"> Blog </Link>
                    <Link to={'/login'} className="nav-item nav-link nav-font"> Login </Link>
                    </div>
                </div>
                </nav>
                </div>
                
                </div>
                <div className="row home-content-prop   " style={{marginTop:'250px'}}>
                <div className="col-sm-4">
                        <p className="header-font">Everything is simple</p>
                        <div className="row">
                            <div className="col-7">
                            <p className="slider-content-font">in just few minutes you will build your website and choose a lot of channels</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                                <a className="slider-btn" style={{marginTop:'-5px'}}>Get Start</a>
                                <p><i className="arrow right"></i></p>
                                <p><i className="arrow right"></i></p>
                        </div>
                        
                    </div>
                </div>
                <div className ="row home-content-prop" style={{marginTop:'250px'}}>
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
                        <div className="d-flex flex-row">
                        <p className="card-title-font">0 LE</p>
                           
                           </div>
                          
                           <p className="card-subtitle-font">Free plan</p>
                                <div className="row">
                                    <div className="col-6">
                                    <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio1">lorem</label>
                                </div>
                                <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio2">lorem</label>
                                </div>
                                <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio3">lorem</label>
                                </div>
                                <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio4">lorem</label>
                                </div>
                                    </div>
                                    <div className="col-6">
                                    <p className="card-rot-text">Basic</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                <button className="card-btn-font card-btn my-auto">Subscribe</button>   
                                </div>                       
                        </div>
                    </div>  
                    <div className="col-sm-2">
                        <div className="plans-card">
                        <div className="d-flex flex-row">
                           <p className="card-title-font">550 LE</p>
                           <p className="card-title-font2">/month</p>
                           </div>
                          
                           <p className="card-subtitle-font">Paid plan</p>
                                <div className="row">
                                    <div className="col-6">
                                    <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio5" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio1">lorem</label>
                                </div>
                                <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio6" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio6">lorem</label>
                                </div>
                                <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio7" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio7">lorem</label>
                                </div>
                                <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio8" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio8">lorem</label>
                                </div>
                                    </div>
                                    <div className="col-6">
                                    <p className="card-rot-text">Cool</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                <button className="card-btn-font card-btn my-auto">Subscribe</button>   
                                </div>                       
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="plans-card">
                        <div className="d-flex flex-row">
                           <p className="card-title-font">1500 LE</p>
                           <p className="card-title-font2">/month</p>
                           </div>
                          
                           <p className="card-subtitle-font">Paid plan</p>
                                <div className="row">
                                    <div className="col-6">
                                    <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio9" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio9">lorem</label>
                                </div>
                                <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio10" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio10">lorem</label>
                                </div>
                                <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio11" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio11">lorem</label>
                                </div>
                                <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio12" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio12">lorem</label>
                                </div>
                                    </div>
                                    <div className="col-6">
                                    <p className="card-rot-text">Advanced</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                <button className="card-btn-font card-btn my-auto">Subscribe</button>   
                                </div>                       
                        </div>
                </div>
                <div className="col-sm-2">
                        <div className="plans-card">
                        <div className="d-flex flex-row">
                           <p className="card-title-font">2499 LE</p>
                           <p className="card-title-font2">/month</p>
                           </div>
                          
                           <p className="card-subtitle-font">Paid plan</p>
                                <div className="row">
                                    <div className="col-6">
                                    <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio13" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio13">lorem</label>
                                </div>
                                <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio14" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio14">lorem</label>
                                </div>
                                <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio15" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio15">lorem</label>
                                </div>
                                <div className="custom-control custom-radio card-options">
                                    <input type="radio" id="customRadio16" name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadio16">lorem</label>
                                </div>
                                    </div>
                                    <div className="col-6">
                                    <p className="card-rot-text">Premium</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                <button className="card-btn-font card-btn my-auto">Subscribe</button>   
                                </div>                       
                        </div>
                    </div>
                </div>

               
           
            <div className="row">
                    <div className="col-sm-12 d-flex flex-column justify-content-center">
                            <p className="card-header-font" style={{marginTop:'157px'}}>Contact Us</p>

                    </div>
                    <div className='col-sm-9'>
                    <div className='d-flex flex-row justify-content-center'>
                    <img className='img-res' height='478px' width='1166px' src='./images/home/map.png'/>
                  
                      </div>
                      </div>  
                    <div className='col-sm-3 '>
                    <form >
                            <div class="form-group d-flex justify-content-start">
                            <div class="fake-input">
                                <input type="name" className="form-control" id="exampleInputEmail1"  placeholder="Name"/>
                                
                            </div>
                            </div>
                            <div class="form-group d-flex justify-content-start">
                            <div class="fake-input">
                                <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Email"/>
                               
                            </div>
                            </div>
                            <div class="form-group d-flex justify-content-start">
                            <div class="fake-input">
                                <input type="text" className="form-control" id="exampleInputEmail1" height='121px'  placeholder="Type your request"/>
                               
                            </div>
                            </div>
                           
                            <div className="d-flex flex-column align-items-start">
                            <button type="submit" className="btn btn-primary textbox-font send-btn" >Send</button>   
                            </div>                  
                            </form>
                        </div>
                    </div>     
            </div>
             <Footer/>
             </React.Fragment>
        );
    }
}
 
export default Navbar;