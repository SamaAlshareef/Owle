import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FixedDashboard from './fixedDashboard';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='container-fluid'>
                <div className='row border d-flex flex-row'>
                    <FixedDashboard/>
                   <div  className=' col-sm-5' style={{marginLeft:'-15px'}}>
                       
                       <img style={{position:'absolute'}} src='./images/dashboard/S47rEuqdkhESPa8DGs6DHD.png'/>
                       
                       <div className='d-flex ' style={{position:'absolute', marginLeft:'884px', paddingTop:'28px'}}> 
                         <img width='16px' height='16px' style={{marginTop:'10px'}} src='./images/dashboard/alarm.png'/>
                           <span className='card-btn-text' style={{paddingLeft:'28px',paddingTop:'10px', textAlign:'left',display:'inline'}} >NorAli</span>
                           <a  type="button" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               
                           <img className="arrow-down" height="7px" width="11px" style={{marginTop:'17px', marginLeft:'4px', paddingRight:'10px'}} src='./images/home/down-arrow-2.png'/>
                           </a>
                           <div className="dropdown-menu justify-content-center" style={{backgroundColor:'', borderRadius:'20px'}}>
                            <a className="dropdown-item dropDown-item" href="#">Accout Settings</a>
                            <hr class="solid"></hr>
                            <a className="dropdown-item dropDown-item" href="#">Feedback</a>
                            <hr class="solid"></hr>
                            <a className="dropdown-item dropDown-item" href="#">Logout</a>
                        </div>
                          <img  style={{paddingLeft:'10px'}} src='./images/dashboard/Avatar.png'/>
                        </div>
                           
                           <p className='bg-img-font' style={{paddingTop:'121px',paddingLeft:'78px', position:'absolute'}}>Happy for see you again :-)</p>
                           <p className='bg-img-text-font' style={{paddingTop:'191px',paddingLeft:'78px', position:'absolute'}}>Let’s take a look at what’s happening <br/> in your store right now.</p>
                           <p className='bg-img-text-font' style={{paddingTop:'255px',paddingLeft:'78px', position:'absolute'}}><a>https://dammy.company.site‍</a></p>


                           <div className='db-bg-card d-flex border' >
                               <div className='col-sm-7'>
                               <p className='bg-img-font' style={{paddingTop:'25px',paddingLeft:'25px'}}>We are here to help you</p>
                               <p className='card-text-font' style={{paddingTop:'5px',paddingLeft:'25px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                <div  style={{paddingTop:'25px',paddingBottom:'25px'}}>
                                  <div className='card-btn'> 
                                  <p className='card-btn-text' style={{paddingTop:'10px'}}>Start now</p></div>
                                </div>
                               
                               </div>
                               <div className='col-sm-5 border'>
                                 
                                 <div style={{paddingRight:'50px'}}>
                                   <img width='150px' height='201px' style={{ position:'absolute'}}  src='./images/dashboard/Path 9@2x.png' />
                                   <img style={{ paddingTop:'65px', position:'absolute'}}  src='./images/dashboard/undraw_chat_1wo5.svg'/>
                                   </div>
                                
                               </div>
                             
                           </div>
                           <div className='row' style={{paddingTop:'429px', paddingLeft:'93px'}}>
                     <div className='col-sm-12'>
                     <p className='charts-title'>Some reports</p>
                     <div style={{paddingTop:'15px'}}>
                         <div className='d-flex charts-card'>
                             <div style={{ paddingLeft:'25px'}}>
                             <p className='chart-card-title' style={{paddingTop:'14px'}}>Visitors</p>
                             <p className='chart-card-text' style={{paddingTop:'8px',paddingBottom:'13px'}}>1225</p>
                             </div>
                            <div style={{ paddingLeft:'191px'}}>
                            <p className='chart-card-title' style={{paddingTop:'14px'}}>Products View</p>
                            <p className='chart-card-text' style={{paddingTop:'8px',paddingBottom:'13px'}}>29</p>
                            </div>
                         
                         </div>
                         
                     </div>

                     <div style={{paddingTop:'30px'}}>
                         <div className='d-flex charts-card'>
                             <div style={{ paddingLeft:'25px'}}>
                             <p className='chart-card-title' style={{paddingTop:'14px'}}>New Order</p>
                             <p className='chart-card-text' style={{paddingTop:'8px',paddingBottom:'13px'}}>1225</p>
                             </div>
                            <div style={{ paddingLeft:'191px'}}>
                            <p className='chart-card-title' style={{paddingTop:'14px'}}> Add to cart</p>
                            <p className='chart-card-text' style={{paddingTop:'8px',paddingBottom:'13px'}}>29</p>
                            </div>
                         
                         </div>
                         
                     </div>
                     <div style={{paddingTop:'30px'}}>
                         <div className=' charts-card' height='158px'>
                             <div className='d-flex'>
                             <div style={{ paddingLeft:'25px'}}>
                             <p className='chart-card-title' style={{paddingTop:'14px'}}> Revenue</p>
                             <p className='chart-card-text' style={{paddingTop:'8px'}}>22450</p>
                             </div>
                            <div style={{ paddingLeft:'191px'}}>
                            <p className='chart-card-title' style={{paddingTop:'14px'}}> Most ordered</p>
                            <p className='chart-card-text' style={{paddingTop:'8px'}}>T-shirt</p>
                            </div>
                             </div>

                             <div className='d-flex'>
                             <div style={{ paddingLeft:'25px'}}>
                             <p className='chart-card-title' style={{paddingTop:'23px'}}>New users</p>
                             <p className='chart-card-text' style={{paddingTop:'8px', paddingBottom:'13px'}}>214</p>
                             </div>
                            <div style={{ paddingLeft:'191px'}}>
                            <p className='chart-card-title' style={{paddingTop:'23px'}}>All users</p>
                            <p className='chart-card-text' style={{paddingTop:'8px',paddingBottom:'13px'}}>2214</p>
                            </div>
                             </div>
                            
                            
                         </div>
                         
                     </div>
                     </div>
                 </div>
                 
                   </div>
                 
                   <div className='col-sm-7'>
                
                   </div>
                
                </div>
            </div>
        );
    }
}
 
export default Dashboard;