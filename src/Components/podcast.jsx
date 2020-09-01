import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Podcast extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='container-fluid' style={{padding:'0px', backgroundColor:'#F9FBFF'}}>
                <div className='row home-content-prop no-gutters justify-content-center d-flex' style={{paddingRight:'100px'}}>
                    <div className="col-sm-1 justify-content-center">
                        <div className='row no-gutters'>
                        <div className='d-flex flex-row'>
                        <img width='28px' height='28px' style={{marginTop:'31px'}} src="/images/home/mask.svg"/>
                        <a className="logo-font" style={{color:'#000000', paddingLeft:'5px'}} href="#">OWLE</a>
                        </div>
                    </div>
                        
                    </div>
                    <div className="col-sm-11 d-flex justify-content-end ">
                        <nav className="navbar-expand-lg navbar-light" >
                    
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto  ">
                            <Link to={'/'} className=" nav-font" style={{color:'#000'}}>Home  </Link> 
                            <Link to={'/aboutUs'} className="nav-font" style={{color:'#000'}}> About Us </Link>
                            <Link to={'/login'} className="nav-font" style={{color:'#000'}}> Billboard </Link>
                            <Link to={'/blog'} className=" nav-font" style={{color:'#000'}}> Blog <hr style={{marginTop:'-2px', color:'#000'}}></hr></Link><span className="sr-only">(current)</span>
                            <Link to={'/login'} className="nav-font" style={{color:'#000', padding:'0px'}}> Login </Link>
                            </div>
                        </div>
                        </nav>
                    </div>
                    
                        <div className='col-sm-12' style={{paddingTop:'60px'}}>
                            <div className='flex-column'>
                                <p className='blog-title-font ' style={{fontFamily:'Montserrat-Bold'}}>Article</p>
                                <p className='blog-title-font ' style={{paddingTop:'20px', fontFamily:'Montserrat-Bold'}}>6 Ways to Stay Happy When Owning a Business</p>
                                <p className='blog-card-title ' style={{paddingTop:'10px',fontFamily:'Montserrat-Light', paddingBottom:'20px'}}> 02/05/2020</p>
                                <div >
                                <img height='640px' width='1166px' className='img-res' src='/images/blog/podcastImg.png'/>
                                </div>
                        </div>
                        <div className='row'>
                        <div className='col-sm-1' style={{paddingLeft:'51px'}}> 
                        <FontAwesomeIcon icon={faCoffee} />
                                </div>
                                <div className='col-sm-11' style={{paddingRight:'163px', paddingLeft:'85px', paddingTop:'60px'}}>
                                    <p className='article-font' style={{}}>
                                    Business phone systems no longer serve as a tool for simply making and receiving calls. Today's unified communications systems allow employees 
                                    to communicate by phone, video, and text, which is giving businesses the flexibility to connect with customers and clients in any way
                                     they prefer. The business phone system market has grown by leaps and bounds in recent years, with dozens of options to choose from,
                                      which makes finding the solution that's right for your business a difficult task. To help in the search process, we researched and 
                                      analyzed more than 75 providers. Our best picks are below, as well as a comprehensive list of phone system and unified communications
                                       providers in case our choices don't fit your needs. To learn more, read our guide on choosing a business phone system.
                                    </p>                                    
                                </div>
                                
                        </div>
                        <div className='row' style={{paddingBottom:'60px'}}>
                            <div className='col-sm-12'>
                            <p className='blog-title-font ' style={{fontFamily:'Montserrat-Bold', paddingBottom:'50px'}}>Related</p>
                            <div className='d-flex flex-row'>
                            <div className="article-card-border" >
                                        <img className="card-img-top" height='239px' src='/images/blog/diego-ph-fIq0tET6llw-unsplash-4.png' alt="Card image cap"/>
                                        <div className="card-body">
                                           
                                              
                                            <h5 className="card-title blog-card-title">Video</h5>
                                                
                                           
                                        
                                            <p className="card-text blog-card-title" style={{fontSize:'18px'}}>How to choose a Ecommerce name</p>
                                            <p className="card-text blog-card-title" style={{fontSize:'18px', fontFamily:"Montserrat-Light", paddingTop:'15px'}}><b><a href='#' style={{color:'#000'}}>The name of your company defines your brand. Here's how to make a choice that works for your business</a></b>
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft:'45px'}}>
                                    <div className="article-card-border" >
                                        <img className="card-img-top" height='239px' src='/images/blog/diego-ph-fIq0tET6llw-unsplash-1.png' alt="Card image cap"/>
                                        <div className="card-body">
                                           
                                              
                                            <h5 className="card-title blog-card-title">Video</h5>
                                                
                                           
                                        
                                            <p className="card-text blog-card-title" style={{fontSize:'18px'}}>Best video surveillance systems of 2020</p>
                                            <p className="card-text blog-card-title" style={{fontSize:'18px', fontFamily:"Montserrat-Light", paddingTop:'15px'}}><b><a href='#' style={{color:'#000'}}>When you have a small business, one of the most important things is protecting your assets. Luckily, video</a></b>
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                   
                            </div>
                          
                         
                            </div>
                        </div>                               
                                
                            </div>
                           
                       
                   
                    
                </div>
                <Footer/>
            </div>
         );
    }
}
 
export default Podcast;