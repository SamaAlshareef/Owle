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
            <div className="container-fluid home-bg-img">  
            <div className="row home-content-prop">
                <div className="col-sm-1 justify-content-center">
                    <div className='row no-gutter'>
                    <div className='d-flex flex-row'>
                    <img width='28px' height='28px' style={{marginTop:'31px', marginRight:'5px', marginLeft:'25px'}} src="/images/home/mask.svg"/>
                    <a className="logo-font" style={{color:'#000000', paddingLeft:'1px'}} href="#">OWLE</a>
                    </div>
                   </div>
                    
                </div>
                <div className="col-sm-11 d-flex justify-content-end ">
                <nav className="navbar-expand-lg navbar-light" style={{marginRight:'55px'}}>
               
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto  ">
                    <Link to={'/'} className=" nav-font">Home <hr style={{marginTop:'-2px'}}></hr> </Link> <span className="sr-only">(current)</span>
                    <Link to={'/aboutUs'} className="nav-font"> About Us </Link>
                    <Link to={'/login'} className="nav-font"> Billboard </Link>
                    <Link to={'/register'} className=" nav-font"> Blog </Link>
                    <Link to={'/login'} className="nav-font"> Login </Link>
                    </div>
                </div>
                </nav>
                </div>
                
                </div>
                <div className="row home-content-prop no-gutters" style={{paddingTop:'189px'}}>
                <div className="col-sm-5">
                        <p className="header-font">Everything is simple</p>
                      <div className='row'>
                          <div className='col-sm-9'>
                          <p className="slider-content-font">in just few minutes you will build your website and choose a lot of channels</p>
                          </div>
                      </div>
                           
                           
                        <div className="d-flex btn-transitions" style={{marginTop:'35px'}}>
                                <a href='url' className="slider-btn" color='#000000'>Get Start</a>
                                <div className='d-flex flex-row' style={{ marginTop:'1px'}}>
                                <p><i className="arrow right" style={{marginLeft:'10px'}}></i></p>
                                <p><i className="arrow right"></i></p>
                                </div>
                                
                        </div>
                        
                            <div className='d-flex align-items-center' style={{marginTop:'120px'}}>
                                <div className='chatbot-bg'> 
                                <img style={{padding:'8px', position:'absolute'}} className='img-res' src='./images/home/Mask Group 3.svg'/>
                                </div>
                            
                                <div style={{position:'relative'}}  >
                                <img  style={{marginLeft:'-20px'}} src='./images/icons/Union 1.svg'/>
                                <div className='bot-font' >
                                <p>Hi I'm <strong>Owle Bot</strong>  and click on me if you need any help</p>
                                </div>
                           </div>
                            </div>
                           
                        
                       
                    </div>
                </div>
                <div className ="row home-content-prop no-gutters" style={{marginTop:'191px'}}>
                    <div className = "col-sm-5">
                        <p className="header-font2">Build E-commerce without code</p>
                        <div className="row">
                            <div className="col-9">
                            <p className="slider-content-font">we will help you to build your ecommerce with just few steps it will be responsive for all devices so don't worry</p>
                            </div>
                        </div>
                        <div className="d-flex btn-transitions " style={{marginTop:'35px'}}>
                                <a href='url' className="slider-btn">Start now</a>
                                <div className='d-flex flex-row' style={{ marginTop:'1px'}}>
                                <p><i className="arrow right" style={{marginLeft:'10px'}}></i></p>
                                <p><i className="arrow right"></i></p>
                                </div>
                                
                        </div>
                    </div>
                    <div className="col-sm-7 d-flex justify-content-center">
                        <img className="img-prop" src="./images/home/Group 1182@2x.png"/>
                    </div>
                </div>
                <div className ="row home-content-prop" style={{marginTop:'183px', marginRight:'144px'}}>
                    <div className = "col-sm-7">
                       <img className="img-prop" width='644px' height='407px' src="./images/home/channels@2x.png"/>
                    </div>
                    <div className="col-sm-5">
                    <p className="header-font2">A lot of channels to sell more</p>
                        <div className="row">
                            <div className="col-sm-10">
                            <p className="slider-content-font">you will get a lot of channels to sell your products like Facebook, Instagram and more and you can sync</p>
                            </div>
                        </div>
                        <div className="d-flex btn-transitions" style={{marginTop:'35px'}}>
                                <a href='url' className="slider-btn">Learn more</a>
                                <div className='d-flex flex-row' style={{ marginTop:'1px'}}>
                                <p><i className="arrow right" style={{marginLeft:'10px'}}></i></p>
                                <p><i className="arrow right"></i></p>
                                </div>
                                
                        </div>
                    </div>
                </div>
               
                <div className ="row home-content-prop" style={{marginTop:'206px'}}>
                    <div className = "col-sm-5">
                        <p className="header-font2">Ads with us will be easy just clicks</p>
                        <div className="row">
                            <div className="col-10">
                            <p className="slider-content-font">need marketing don't worry we care about this and we have a lot of places to make ads for you to sell more</p>
                            </div>
                        </div>
                        <div className="d-flex btn-transitions" style={{marginTop:'35px'}}>
                                <a href='url' className="slider-btn">Learn more</a>
                                <div className='d-flex flex-row' style={{ marginTop:'1px'}}>
                                <p><i className="arrow right" style={{marginLeft:'10px'}}></i></p>
                                <p><i className="arrow right"></i></p>
                                </div>
                                
                        </div>
                    </div>
                    <div className="col-sm-7 d-flex justify-content-center">
                        <img className="img-prop" src="./images/home/ads@2x.png"/>
                    </div>
                </div>
                
                <div className="row d-flex justify-content-center home-content-prop no-gutters" style={{marginTop:'188px'}}>
                    <div className="col-sm-12 d-flex justify-content-center">
                    <p className="card-header-font">Our Plans</p>
                    </div>
                    
                    <div className='plans-card'>
                        <div className='d-flex flex-row'>
                        <p className='card-title-font'>0 LE</p>
                        </div>
                        <p className='card-subtitle-font'>
                            Free plan<hr style={{marginTop:'-2px', backgroundColor:'#189AFE'}}></hr>
                        </p>
                        <div style={{paddingLeft:'130px', marginTop:'70px', position:'absolute'}} >
                        <p className='card-rot-text'>Basic </p>
                        </div>
                      
                        <div className='d-flex flex-row' style={{marginTop:'40px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'15px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'15px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'15px', paddingBottom:'68px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                      
                        <div className='card-btn'><p className='card-btn-font'>Subscribe</p></div>
                    </div>

                    <div className='plans-card'>
                        <div className='d-flex flex-row'>
                        <p className='card-title-font'>550 LE</p>
                        <p className='card-title-font2'> / month</p>
                        </div>
                        <p className='card-subtitle-font'>
                            Paid plan <hr style={{marginTop:'-2px', backgroundColor:'#189AFE'}}></hr>
                        </p>
                        <div style={{paddingLeft:'145px', marginTop:'80px', position:'absolute'}} >
                        <p className='card-rot-text'>Cool</p>
                        </div>
                      
                        <div className='d-flex flex-row' style={{marginTop:'40px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'15px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'15px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'15px', paddingBottom:'68px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                      
                        <div className='card-btn'><p className='card-btn-font'>Subscribe</p></div>
                    </div>

                    <div className='plans-card'>
                        <div className='d-flex flex-row'>
                        <p className='card-title-font'>1500 LE</p>
                        <p className='card-title-font2'> / month</p>
                        </div>
                        <p className='card-subtitle-font'>
                            Paid plan<hr style={{marginTop:'-2px', backgroundColor:'#189AFE'}}></hr>
                        </p>
                        <div style={{marginLeft:'75px', marginTop:'10px'}} >
                        <p className='card-rot-text'>Advanced</p>
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'40px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'15px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'15px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'15px', paddingBottom:'68px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                      
                        <div className='card-btn'><p className='card-btn-font'>Subscribe</p></div>
                    </div>

                    <div className='plans-card'>
                        <div className='d-flex flex-row'>
                        <p className='card-title-font'>2499 LE</p>
                        <p className='card-title-font2'> / month</p>
                        </div>
                        <p className='card-subtitle-font'>
                            Paid plan<hr style={{marginTop:'-2px', backgroundColor:'#189AFE'}}></hr>
                        </p>
                        <div style={{marginLeft:'85px', marginTop:'20px'}} >
                        <p className='card-rot-text'>Premium</p>
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'40px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'15px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'15px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'15px', paddingBottom:'68px'}}>
                            <div className='bullet' style={{marginLeft:'20px'}}></div>
                            <div style={{marginTop:'-8px'}}>
                            <p className='card-options'> lorem</p>
                            </div>
                          
                        </div>
                      
                        <div className='card-btn'><p className='card-btn-font'>Subscribe</p></div>
                    </div>
                  
                </div>

               
           
            <div className="row  d-flex align-items-center no-gutters" style={{marginTop:'150px'}}>
                    <div className="col-sm-12 d-flex flex-column  justify-content-center  ">
                            <p className="card-header-font" style={{marginTop:'157px', marginBottom:'50px'}}>Contact Us</p>

                    </div>
                    <div className='col-sm-12 d-flex map-bg-img' >
                    <div className='col-sm-6'>

                    </div>
                      <div className='col-sm-6 d-flex'>
                      <form  style={{position:'absolute', marginTop:'51px', marginLeft:'40px'}}>
                            <div className="form-group" >
                          
                                <input type="text" className="send-form-control placeholder-text" style={{paddingLeft:'15px' }} id="exampleInputEmail1" aria-describedby="emailHelp" name="name" placeholder="Enter name" value={this.state.email}
                                  onChange={this.onChange}/>
                                  
                            
                            </div>
                            <div class="form-group " style={{marginTop:'25px'}}>
                            
                                <input type="text" className="send-form-control placeholder-text" style={{paddingLeft:'15px', width:'450px'}} id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" value={this.state.email}
                                  onChange={this.onChange}/>
                                 
                          
                            </div>
                            <div class="form-group " style={{marginTop:'25px'}}>
                            
                                <input type="text" className="form-control2 placeholder-text" style={{paddingLeft:'15px', height:'121px', width:'450px'}} id="exampleInputEmail1" aria-describedby="emailHelp" name="request" placeholder="Type your request" value={this.state.email}
                                  onChange={this.onChange}/>
                                
                          
                            </div>
                            
                           
                            <div className="d-flex flex-column align-items-start"  style={{marginTop:'47px'}}>
                            <button type="submit" className="btn btn-primary send-btn" onClick={this.handleClick}>
                                <p className=' login-btn-font '>Send </p> </button>
                            
                          
                            </div>                  
                            </form>
                    </div>
                  
                 
                  
                 
                    
                            
                    </div>
                 
                   
                    </div>     
            </div>
             <Footer/>
             </React.Fragment>
        );
    }
}
 
export default Navbar;