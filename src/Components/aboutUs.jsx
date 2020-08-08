import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                 <div className="container-fluid" style={{backgroundColor:'#f4f7ff'}}>  
            <div className="row  home-content-prop ">
                <div className="col-sm-1 d-flex justify-content-center ">
                <div className='row no-gutter'>
                    <div className='d-flex flex-row'>
                    <img width='28px' height='28px' style={{marginTop:'31px',marginLeft:'20px'}} src="/images/home/mask.svg"/>
                    <a className="logo-font" style={{color:'#000000', paddingLeft:'5px'}} href="#">OWLE</a>
                    </div>
                   </div>
                </div>


                <div className="col-sm-11  d-flex justify-content-end">
                <nav className="navbar-expand-lg navbar-light" style={{marginRight:'55px'}}>
               
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                   <div className="navbar-nav ml-auto  ">
                   <Link to={'/'} className=" nav-font" style={{color:'#000000'}}> Home </Link> <span className="sr-only">(current)</span>
                  
                   <Link to={'/aboutUs'} className="nav-font" style={{color:'#000000'}}> About Us <hr style={{marginTop:'-2px', backgroundColor:'#000000'}}></hr></Link>
                   <Link to={'/login'} className="nav-font" style={{color:'#000000'}}> Billboard </Link>
                   <Link to={'/register'} className=" nav-font" style={{color:'#000000'}}> Blog </Link>
                   <Link to={'/login'} className="nav-font" style={{color:'#000000'}}> Login </Link>
                   </div>
               </div>
               </nav>
                </div>
                </div>
            </div>
            <div className=' bg-color-about' >
                <div className='row align-items-center  home-content-prop'> 
                   
                    <div className='col-sm-5 d-flex flex-column' style={{marginBottom:'120px'}} >
                        
                        <p className="about-header-font">Our service to make everything better</p>
                        <p className="slider-aboutContent-font" style={{paddingTop:'27px'}}>More power more stability, every thing with us is very easy, we will help you to take your business to the next level</p>
                        
                        <div className="d-flex btn-transitions" style={{marginTop:'44px'}}>
                                <a href='url' className="slider-btn">Register Now</a>
                                <div className='d-flex flex-row' style={{ marginTop:'1px'}}>
                                <p><i className="arrow right" style={{marginLeft:'10px'}}></i></p>
                                <p><i className="arrow right"></i></p>
                                </div>
                                
                        </div>
                      
                        
                    </div>
                    <div className='col-sm-7'   >
                        <img width='609px' className='img-res' src='./images/about/2PicturesCombined.png'/>
                    </div>
                </div>
            </div>
            <div className="container">
           
                <div className="row">
                    <div className="col-sm-12" style={{marginTop:'130px'}}>
                        <p className="card-header-font" >Why Us</p>
                        <p className="about-content-font" style={{paddingTop:'50px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p> 
                        <p className="about-content-font" style={{paddingTop:'10px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>                                       
                    </div>
                    <div className="col-sm-12" style={{marginTop:'150px'}}>
                        <p className="card-header-font">Our Service</p>
                    </div>
                    <div className="col-sm-6" style={{marginTop:'25px'}}>
                        <p className="about-content-font" style={{textAlign:'left'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita gubergren</p>
                       
                        <div className='d-flex flex-row' style={{marginTop:'25px'}}>
                        <p><i className="arrow right"></i></p>
                        <p className="about-list-font" style={{paddingLeft:'6px'}}>Takimata sanctus est Lorem ipsum</p>
                        </div>
                        <div className='d-flex flex-row' style={{marginTop:'10px'}}>
                        <p><i className="arrow right"></i></p>
                        <p className="about-list-font" style={{paddingLeft:'6px'}}>Lorem ipsum Takimata sanctus est</p>
                        </div>
                        <div className='d-flex flex-row'  style={{marginTop:'10px'}}>
                        <p><i className="arrow right"></i></p>
                        <p className="about-list-font" style={{paddingLeft:'6px'}}>Stet clita kasd gubergren</p>
                        </div>
                        <div className='d-flex flex-row'  style={{marginTop:'10px'}}>
                        <p><i className="arrow right"></i></p>
                        <p className="about-list-font" style={{paddingLeft:'6px'}}>Dolore magna aliquyam erat</p>
                        </div>
                       
                       
                        <div className="row" style={{marginTop:'35px'}}>
                            <div className="col-sm-3 d-flex flex-column align-items-center  ">
                                <img className=" about-box-container" style={{padding:'12px'}} height="67px" width="67px" src='./images/about/project (1).svg'/>
                                <p className="about-list-font" style={{paddingTop:'15px'}}>Performance</p>
                           </div>
                            <div className="col-sm-3 d-flex flex-column align-items-center">
                                <img className=" about-box-container"  style={{padding:'12px'}} height="67px" width="67px" src='./images/about/hair.svg'/>
                                <p className="about-list-font" style={{paddingTop:'15px'}}>Easy control</p>
                            </div>
                            <div className="col-sm-3 d-flex flex-column align-items-center">
                                <div className="about-box-container ">
                                <img className="img-res "  style={{padding:'12px'}}  height="67px" width="67px" src='./images/about/billboard.svg'/>
                                </div>
                               
                                <p className="about-list-font" style={{paddingTop:'15px'}}>Billboard</p>
                            </div>
                            <div className="col-sm-3 d-flex flex-column align-items-center">
                            <div className="about-box-container">
                            <img className="img-res"  style={{padding:'12px'}} height="67px" width="67px" src='./images/about/speaker.svg'/>
                                </div>
                                
                                <p className="about-list-font" style={{paddingTop:'15px'}}>Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6" style={{marginTop:'60px'}}>
                        <img className="img-res" src="./images/about/undraw_goals_w8tw.svg"/>
                    </div>
                    <div className="col-sm-12" style={{marginTop:"140px", marginBottom:'90px'}}>
                        <p className="card-header-font" > Our Team</p>
                        </div>
                        <div className="col-sm-4"  >
                        <div className="d-flex flex-row justify-content-center parent avatar-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.719" height="210.699" viewBox="0 0 272.719 210.699" >
                        <path id="Path_388" data-name="Path 388" d="M6165.838,1743.613c15.662,19.4,84.12,36.417,146.992,24.416,50.869-9.71,97.368-44.66,113.905-65.108,18.154-22.448,3.07-50.35-21.55-81.386-24.6-31.01-59.353-64.831-92.355-59.683-27.264,4.252-49.45,14.242-86.2,59.683S6149.265,1723.088,6165.838,1743.613Z" transform="translate(-6162.024 -1561.329)" />
                        </svg>
                        <img className="img-res image2" src='/images/about/Mask Group 4.svg'/>
                        </div>
                        
                        <p className="profile-pic-font" style={{marginTop:"10px"}} >Mariam Mohamed</p>
                        <p className="profile-pic-light-font" style={{marginTop:"-15px"}} >Business developer</p>
                        </div>
                        <div className="col-sm-4">
                        <div className="d-flex flex-row justify-content-center parent avatar-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.719" height="210.699" viewBox="0 0 272.719 210.699" >
                        <path id="Path_388" data-name="Path 388" d="M6165.838,1743.613c15.662,19.4,84.12,36.417,146.992,24.416,50.869-9.71,97.368-44.66,113.905-65.108,18.154-22.448,3.07-50.35-21.55-81.386-24.6-31.01-59.353-64.831-92.355-59.683-27.264,4.252-49.45,14.242-86.2,59.683S6149.265,1723.088,6165.838,1743.613Z" transform="translate(-6162.024 -1561.329)" />
                        </svg>
                        <img className="img-res image2" src='/images/about/Mask Group 5.svg'/>
                        </div>
                        <p className="profile-pic-font" style={{marginTop:"10px"}} >Ganna Adnan</p>
                        <p className="profile-pic-light-font" style={{marginTop:"-15px"}} >Business developer</p>
                        </div>
                        <div className="col-sm-4">
                        <div className="d-flex flex-row justify-content-center parent avatar-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.719" height="210.699" viewBox="0 0 272.719 210.699" >
                        <path id="Path_388" data-name="Path 388" d="M6165.838,1743.613c15.662,19.4,84.12,36.417,146.992,24.416,50.869-9.71,97.368-44.66,113.905-65.108,18.154-22.448,3.07-50.35-21.55-81.386-24.6-31.01-59.353-64.831-92.355-59.683-27.264,4.252-49.45,14.242-86.2,59.683S6149.265,1723.088,6165.838,1743.613Z" transform="translate(-6162.024 -1561.329)" />
                        </svg>
                        <img className="img-res image2" src='/images/about/Mask Group 6.svg'/>
                        
                        </div>
                        <p className="profile-pic-font" style={{marginTop:"10px"}} >Sama Alshareef</p>
                        <p className="profile-pic-light-font" style={{marginTop:"-15px"}} >Frontend developer</p>
                        </div>
                        <div className="col-sm-6" style={{marginTop:'60px'}}>
                        <div className="d-flex flex-row justify-content-center parent avatar-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.719" height="210.699" viewBox="0 0 272.719 210.699" >
                        <path id="Path_388" data-name="Path 388" d="M6165.838,1743.613c15.662,19.4,84.12,36.417,146.992,24.416,50.869-9.71,97.368-44.66,113.905-65.108,18.154-22.448,3.07-50.35-21.55-81.386-24.6-31.01-59.353-64.831-92.355-59.683-27.264,4.252-49.45,14.242-86.2,59.683S6149.265,1723.088,6165.838,1743.613Z" transform="translate(-6162.024 -1561.329)" />
                        </svg>
                        <img className="img-res image2" src='/images/about/Mask Group 7.svg'/>
                        </div>
                        <p className="profile-pic-font text-center" style={{marginTop:"10px"}} >Mina Ezzat</p>
                        <p className="profile-pic-light-font text-center" style={{marginTop:"-15px"}} >CTO</p>
                        </div>
                        <div className="col-sm-6" style={{ marginBottom:'90px', marginTop:'60px'}} >
                        <div className="d-flex flex-row justify-content-center parent avatar-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.719" height="210.699" viewBox="0 0 272.719 210.699" >
                        <path id="Path_388" data-name="Path 388" d="M6165.838,1743.613c15.662,19.4,84.12,36.417,146.992,24.416,50.869-9.71,97.368-44.66,113.905-65.108,18.154-22.448,3.07-50.35-21.55-81.386-24.6-31.01-59.353-64.831-92.355-59.683-27.264,4.252-49.45,14.242-86.2,59.683S6149.265,1723.088,6165.838,1743.613Z" transform="translate(-6162.024 -1561.329)" />
                        </svg>
                        <img className="img-res image2" src='/images/about/Mask Group 8.svg'/>
                        </div>
                        <p className="profile-pic-font" style={{marginTop:"10px"}} >Ibrahem Reiad</p>
                        <p className="profile-pic-light-font" style={{marginTop:"-15px"}} >UX/UI designer</p>
                        </div>
                            
                        
                </div>
               
            </div>
            <Footer />
            </React.Fragment>
         );
    }
}
 
export default AboutUs;