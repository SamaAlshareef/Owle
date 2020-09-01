import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';

const articleContent = [
    {
    id:'1', title:'1 - Know When to Say "No"',
     content:'Saying "yes" all the time will make everyone around you happy, but what about you? Giving too much will leave you overextended, stressed, and all-around miserable. To achieve balance as a business owner you have to be comfortable saying "no" every now and then. Yes, giving feels good but in excess it will take a toll on your sanity and health, not to mention destroy your business.'
    },
     {
    id:'2', title:'2 - Don`t Stretch Yourself Too Thin',
     content:'When you try to do too much it`s bad for your business and your body. Most of us don`t work well when we`re crunched for time or are carrying a workload way beyond what we`re capable of completing. Putting pressure on yourself to perform results in stress, unhappiness, lack of creativity, and even a sense of panic. As a business owner it`s your job to delegate, not do everything. There`s no shame in asking for help-in fact it`s encouraged. Identify your weaknesses and outsource them so that you can excel in your department and let others handle the rest.'
    },
    {
    id:'3', title:'3 - Cultivate an Inviting Work Environment',
    content:'We spend a great deal of our lives working and it`s important that we find comfort within the walls of our office. Create a welcoming space where you and your employees feel at ease and encouraged to do well and feel well. One proven way to improve the morale at an office is through team building exercises and activities that bond employees. Having strong social relationships is a common characteristic among happy people. When employees feel connected and supported by the other people they work with they will view their job more positively and performance will also improve.'
    },
    {
    id:'4', title:'4 - Remove Toxic Employees and Clients',
    content:'Our mood is directly affected by the people we surround ourselves with and, as a business owner, our employees and clients account for a good amount of our time. Eliminate negativity by letting go of workers that bring more frustration than contribution, and don`t make it personal. If someone has a bad attitude or is unable to do their job properly it`s in the best interest of your business to let them go. The same goes with clients. Overly needy, negative and critical clients need to go. They not only take away from clients that deserve your attention but their wayward actions are also chipping away at your peace of mind.'
    },
    {
    id:'5', title:'5 - Keep Busy But Not Too Busy',
    content:'The happiest people live in a place between boredom and chaos. They lack an abundance of free time, but they never feel rushed to complete the steady stream of work on their plate. Sound idealistic? It doesn`t have to be. If you plan your day properly, train yourself to be focused and productive while working, and use your downtime wisely, you too could find a way to be just busy enough to be happy.'
    },
    {
    id:'6', title:'6 - Realize Success is Not Linear',
     content:'Practicing patience will allow you to appreciate each milestone on your journey to success, and not feel frustrated when things don`t go exactly as planned. Each business experiences different obstacles, addresses shortcomings, makes changes and evolves. Because every individual owner and institution reaches success in a different way (and at a different speed) there is no point in getting angry when your business plan goes off course. If you enjoy the journey and adapt willingly, you`ll find happiness in all stages of entrepreneurial success.'
    },
]


class BlogArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { articleContent }
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
                                <img height='640px' width='1166px'className='img-res' src='/images/blog/ben-white-4K2lIP0zc_k-unsplash.png'/>
                                </div>
                        </div>
                        <div className='row'>
                        <div className='col-sm-1' style={{paddingLeft:'51px'}}> 
                                <i className="fab fa-linkedin-in">hello</i>
                                </div>
                                <div className='col-sm-11' style={{paddingRight:'163px', paddingLeft:'85px', paddingTop:'60px'}}>
                                    <p className='article-font'>
                                    Starting a business stems from passion and the pursuit of professional happiness, but seeing your dream come to life can be
                                     a nightmare with the wrong business plan or systems in place. Here are six secrets on how to be a happy business owner, enjoy
                                      your workday, and make you workplace one that attracts positive people.
                                    </p>
                                    {this.state.articleContent.map((post) =>{
                                        return(
                                            <div key={post.id}>
                                                <p className='article-title' style={{paddingTop:'40px'}}>
                                                {post.title}
                                                </p>
                                                <p className='article-content' style={{paddingTop:'25px'}}>
                                                {post.content}
                                                </p>
                                             </div>
                                        );
                                    })}
                                    
                                </div>
                                
                        </div>
                        <div className='row' style={{paddingBottom:'60px'}}>
                            <div className='col-sm-12'>
                            <p className='blog-title-font ' style={{fontFamily:'Montserrat-Bold', paddingBottom:'50px'}}>Related</p>
                            <div className='d-flex flex-row'>
                            <div className="article-card-border" >
                                        <img className="card-img-top" height='239px' src='/images/blog/diego-ph-fIq0tET6llw-unsplash.png' alt="Card image cap"/>
                                        <div className="card-body">
                                           
                                              
                                            <h5 className="card-title blog-card-title">Article</h5>
                                                
                                           
                                        
                                            <p className="card-text blog-card-title" style={{fontSize:'18px'}}>What business startup costs should you consider?</p>
                                            <p className="card-text blog-card-title" style={{fontSize:'18px', fontFamily:"Montserrat-Light", paddingTop:'15px'}}><b><a href='#' style={{color:'#000'}}>Startup costs are expenses incurred during the process of starting a new business, and they should be outlined</a></b>
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft:'45px'}}>
                                    <div className="article-card-border" >
                                        <img className="card-img-top" height='239px' src='/images/blog/diego-ph-fIq0tET6llw-unsplash-7.png' alt="Card image cap"/>
                                        <div className="card-body">
                                           
                                              
                                            <h5 className="card-title blog-card-title">Article</h5>
                                                
                                           
                                        
                                            <p className="card-text blog-card-title" style={{fontSize:'18px'}}>Diversity and inclusion strategies for startups</p>
                                            <p className="card-text blog-card-title" style={{fontSize:'18px', fontFamily:"Montserrat-Light", paddingTop:'15px'}}><b><a href='#' style={{color:'#000'}}>Diversity and inclusion are terms you're probably already familiar with. As discussions around systemic</a></b>
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
 
export default BlogArticle;