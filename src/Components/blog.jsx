import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';

const blogs =[
    
{id:1,image:'./images/blog/diego-ph-fIq0tET6llw-unsplash-8.png', category:'Event', date:'02/05/2020',title:'Marketing masterclass: grow your network and run great events',
content:'Bruce has founded two companies since 2011 focused on empowering entrepreneurial leaders to create the next'},
{id:2,image:'./images/blog/diego-ph-fIq0tET6llw-unsplash.png', category:'Article', date:'17/06/2020',title:'What business startup costs should you consider?',
content:'Startup costs are expenses incurred during the process of starting a new business, and they should be outlined'},
{id:3,image:'./images/blog/diego-ph-fIq0tET6llw-unsplash-1.png', category:'Video', date:'01/02/2020',title:'Best video surveillance systems of 2020',
content:'When you have a small business, one of the most important things is protecting your assets. Luckily, video'},

{id:4,image:'./images/blog/diego-ph-fIq0tET6llw-unsplash-2.png', category:'Podcast', date:'07/05/2020',title:'Choosing a business phone system',
content:'When choosing a business phone system, the first decision you have to make is what kind of system you want'},
{id:5,image:'./images/blog/diego-ph-fIq0tET6llw-unsplash-3.png', category:'Article', date:'12/08/2020',title:'How to calculate your business valuation',
content:'Over time, the worth of business fluctuates as different factors contribute to its overall worth. While you'},
{id:6,image:'./images/blog/diego-ph-fIq0tET6llw-unsplash-7.png', category:'Article', date:'11/04/2020',title:'Diversity and inclusion strategies for startups',
content:'Diversity and inclusion are terms you`re probably already familiar with. As discussions around systemic '},

{id:7,image:'./images/blog/diego-ph-fIq0tET6llw-unsplash-6.png', category:'Event', date:'02/05/2020',title:'Marketing services event`s booster',
content:'We are looking to connect with businesses in the Marketing Services such as, but not limited to that'},
{id:8,image:'./images/blog/diego-ph-fIq0tET6llw-unsplash-5.png', category:'Article', date:'17/06/2020',title:'The best text message marketing services of 2020',
content:'Text message marketing is a great way to connect with your customers on a personal level and provide '},
{id:9,image:'./images/blog/diego-ph-fIq0tET6llw-unsplash-4.png', category:'Video', date:'01/02/2020',title:'How to choose a Ecommerce name',
content:'The name of your company defines your brand. Here`s how to make a choice that works for your business'},


]

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {blogs}
    }
    render() { 
        return (
           
            <div className='container-fluid' style={{padding:'0px'}}>
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
                <div className='row no-gutters'>
                    <div className='col-sm-12' style={{paddingTop:'100px'}}>
                        <div className='float-left' style={{paddingLeft:'10px'}}>
                            <p className='blog-subtitle-font' style={{padding:'0px', marginLeft:'-5px'}} >Newest</p>
                        </div>
                            
                    </div>
                    <Link to={'/blog/article'}>
                    <div className='row no-gutters' style={{paddingTop:'50px'}}>
                        <div className='col-sm-6' style={{padding:'0px'}}>
                            <img className='img-res'  src='./images/blog/ben-white-4K2lIP0zc_k-unsplash.png'/>
                        </div>
                        <div className='col-sm-6' style={{paddingLeft:'60px', paddingTop:'71px', paddingRight:'100px'}}>
                            <p className='blog-title-font' style={{fontSize:'18px'}}> Article</p>
                            <p className='blog-title-font' style={{paddingTop:'20px'}}>6 Ways to Stay Happy When Owning a Business</p>
                            <p className='blog-content-font' style={{opacity:'0.6', paddingTop:'10px'}}>02/05/2020</p>
                            <p className='blog-content-font' style={{paddingTop:'20px'}}> Starting a business stems from passion and the pursuit of professional happiness, but seeing your dream come to life can be a nightmare with the wrong business plan or systems in place. Here are six secrets on how to be a happy</p>
                        </div>
                    </div>
                    </Link>
                   <div className='row' style={{paddingTop:'100px'}}>
                        <div className='col-sm-12'>
                            <div className='d-flex'>
                                <p className='blog-title-font' style={{opacity:'0.8',float:'right'}}>All stories</p>
                                <div className='d-flex' style={{float:'right'}}>
                                    <form style={{paddingLeft:'700px', float:'right'}}>
                                        <div className="form-group ">
                                            <div className="fake-input">
                                                <input type="text" className="search-textbox products-search" style={{paddingLeft:'22px', width:'311px'}} id="exampleInputEmail1" name="search" placeholder="Search"/>
                                                <img className='img-res' style={{top:'12px', left:'20px'}} src='./images/sales/search.png' height='20px' width='20px'/>   
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                           <div className='d-flex justify-content-start'>
                                <p className='blog-subtitle-font' style={{fontSize:'18px'}}>Category</p>
                           </div>
                            
                        </div>
                        {this.state.blogs.map((blog)=>{
                            return(
                                <div className='col-sm-4'key={blog.id} style={{paddingTop:'60px'}}>
                                    <div className="blog-border" width='365px'>
                                        <img className='img-res' className="card-img-top" src={blog.image} alt="Card image cap"/>
                                        <div className="card-body">
                                            <div className='d-flex '>
                                                <h5 className="card-title blog-card-title">{blog.category}</h5>
                                                <div className='float-right' style={{paddingLeft:'205px'}}>
                                                    <h5 className="card-title blog-card-title" style={{fontFamily:'Montserrat-Light'}} >{blog.date}</h5>
                                                </div>
                                                
                                            </div>
                                        
                                            <p className="card-text blog-card-title" style={{fontSize:'18px'}}>{blog.title}</p>
                                            <p className="card-text blog-card-title" style={{fontSize:'18px', fontFamily:"Montserrat-Medium", paddingTop:'15px'}}>{blog.content}<b><a href='#' style={{color:'#000'}}> More ...</a></b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                        
                        
                        
                   </div>
                   <div className='row no-gutters '>
                       <div className='col-sm-12 mx-auto'>
                            <div className='mx-auto' style={{paddingTop:'60px', paddingLeft:'413px'}}>
                                    <div className='load-btn align-content-center'>
                                        <a><p className='blog-card-title' style={{fontSize:'24px', color:'#fff',textAlign:'center', paddingTop:'22px'}}>Load More</p></a>
                                    </div>
                            </div>
                        </div>
                        <div className='col-sm-12' style={{paddingBottom:'100px'}}>
                            <div className='mx-auto' style={{paddingTop:'100px'}}  >
                                <img className='img-res' src='./images/blog/3417081.png' style={{position:'absolute'}}/>
                                <div className='row no-gutters align-items-center'>
                                    <div className='col-sm-6'>
                                        <p className='blog-card-title' style={{color:'#000', fontSize:'24px', paddingLeft:'50px', paddingTop:'50px'}}>Starting up starts here</p>
                                        <p className='blog-card-title' style={{color:'#000',fontFamily:'Montserrat-Regular', fontSize:'18px', paddingLeft:'50px', paddingTop:'20px', opacity:'0.6'}}>We’re here to help. Get free education, tips, and inspiration to help you start and grow a successful business.</p>
                                    </div>
                                    <div className='col-sm-6' >
                                      
                                            <form>
                                                <div class="form-group" style={{position:'absolute'}} >
                                                <div className='fake-input' >
                                                    <input type="email" className="blog-contact-textbox blog-contact-placeholder"  id="blogContact" aria-describedby="contact" placeholder="Type your email"/>
                                                </div>    
                                                </div>
                                            </form>  
                                            <div style={{paddingLeft:'389px', marginTop:'-7px'}} className='btn'>
                                                <div className='send-container' style={{paddingTop:'15px', paddingLeft:'22px'}}>
                                                    <img height='30px' width='30px' className='btn' className='d-flex justify-content-center align-items-center' src='./images/blog/send.png'/>
                                                </div>
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
 
export default Blog;