import React, { Component } from 'react';
import FixedDashboard from './fixedDashboard';
import {Link} from 'react-router-dom';

const ordersList=[
    {id:'1', name:'Basic t-shirt', price:'90LE',size:'XXL', customerName:'Ali Mohamed', customerEmail:'ali.mohamed_2010@yahoo.com',mobile:'0120111111', image:'./images/sales/haryo-setyadi-acn5ERAeSb4-unsplash.png'},
    {id:'2', name:'Basic t-shirt', price:'95LE',size:'XXL', customerName:'Ali Mohamed', customerEmail:'ali.mohamed_2010@yahoo.com',mobile:'0120111111', image:'./images/sales/shirt3.png' },
    {id:'3', name:'Basic t-shirt', price:'85LE',size:'XXL', customerName:'Ali Mohamed', customerEmail:'ali.mohamed_2010@yahoo.com',mobile:'0120111111', image:'./images/sales/shirt2.png'},
    {id:'4', name:'Basic t-shirt', price:'90LE',size:'XXL', customerName:'Ali Mohamed', customerEmail:'ali.mohamed_2010@yahoo.com',mobile:'0120111111', image:'./images/sales/haryo-setyadi-acn5ERAeSb4-unsplash.png'},
    {id:'5', name:'Basic t-shirt', price:'90LE', size:'XXL', customerName:'Ali Mohamed', customerEmail:'ali.mohamed_2010@yahoo.com',mobile:'0120111111',image:'./images/sales/haryo-setyadi-acn5ERAeSb4-unsplash.png'},
    {id:'6', name:'Basic t-shirt', price:'90LE', size:'XXL', customerName:'Ali Mohamed', customerEmail:'ali.mohamed_2010@yahoo.com',mobile:'0120111111',image:'./images/sales/haryo-setyadi-acn5ERAeSb4-unsplash.png'},
    {id:'7', name:'Basic t-shirt', price:'90LE', size:'XXL', customerName:'Ali Mohamed', customerEmail:'ali.mohamed_2010@yahoo.com',mobile:'0120111111',image:'./images/sales/haryo-setyadi-acn5ERAeSb4-unsplash.png'}
]

const uniqueId = "#";
class FilteredOrders extends Component {
    constructor(props) {
        super(props);
        this.state = { ordersList }
    }
    render() { 
        return (  
            <div className='container-fluid' style={{padding:'0px'}}>
                <div className='row no-gutters' >
                   
                        <FixedDashboard/>
                   <div className='row no-gutters'>
                   <div className='col-sm-12'>
                        <div className='d-flex ' style={{position:'absolute', paddingLeft:'750px', paddingTop:'28px'}}> 
                            <img width='16px' height='16px' style={{marginTop:'10px'}} src='./images/sales/alarm (1).png'/>
                            <div style={{marginLeft:'',paddingTop:'5px'}}>
                            <span className='card-btn-text' style={{ textAlign:'left',display:'inline', color:'#223A80'}} >Nor Ali</span>
                            </div>
                            
                            <a  type="button" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                
                            <img className="arrow-down" height="25px" width="25px" style={{color:'#223A80', marginTop:'17px', marginLeft:'4px'}} src='./images/sales/down-chevron.png'/>
                            </a>
                            <div className="dropdown-menu justify-content-center" style={{backgroundColor:'#fff', borderRadius:'20px'}}>
                                <a className="dropdown-item dropDown-item mx-auto" href="#">Accout Settings</a>
                                <hr className="solid"></hr>
                                <a className="dropdown-item dropDown-item mx-auto" href="#">Feedback</a>
                                <hr className="solid"></hr>
                                <a className="dropdown-item dropDown-item mx-auto" href="#">Logout</a>
                            </div>
                            <div style={{marginLeft:'10px'}}>
                            <img  src='./images/dashboard/Avatar.png'/>
                            </div>
                            
                            </div>
                       
                            <div className='col-sm-12' style={{paddingTop:'85px'}}>
                                <p style={{paddingLeft:'53px'}} className='sales-title'>Order management</p>
                                <div className='d-flex' style={{paddingTop:'25px',paddingLeft:'53px'}}>
                        <div className='filter-btn d-flex'>
                            <img height='16px' width='18px' style={{marginTop:'13px', marginLeft:'10px'}} src='./images/sales/filter.png'/>
                            <p className='card-btn-text' style={{color:'#575757',paddingTop:'12px', paddingLeft:'5px'}}>Filter</p>
                            <Link to={'/filteredSales'}><img height='18px' width='18px' style={{marginTop:'15px', marginLeft:'19px', marginRight:'10px'}} src='./images/sales/down-arrow (2).png'/></Link>
                        </div>
                        <div style={{marginLeft:'20px'}}>
                            <div className='import-products d-flex justify-content-center align-items-center'>
                                <img height='18px' width='18px' style={{marignTop:'13px'}} src='./images/sales/plus.png'/>
                                <p className='products-search' style={{color:'#575757', paddingLeft:'5px'}}>Import Products</p>
                            </div>
                        </div>
                        <form style={{paddingLeft:'20px'}} >
                            <div className="form-group ">
                            <div className="fake-input">
                                <input type="text" className="search-textbox products-search" style={{paddingLeft:'22px'}} id="exampleInputEmail1" name="search" placeholder="search by name or product no."/>
                                <img style={{top:'12px', left:'20px'}} src='./images/sales/search.png' height='20px' width='20px'/>   
                            </div>
                            </div>
                        </form>
                       
                       
                        </div> 

                        <div className='d-flex' style={{paddingTop:'10px', paddingLeft:'53px'}}>
                            <p className='sales-subtitle' style={{paddingRight:'10px'}}>Sales</p>
                            <img className='my-auto'width='10px' height='10px' src='./images/sales/chevron.png'/>
                            <p className='sales-subtitle' style={{color:'#2D62FC', paddingLeft:'10px'}}>Order management</p>
                        </div>

                        <div style={{paddingLeft:'53px', paddingTop:'21px'}}>
                            <div className='orders-container' style={{overflowY:'scroll'}}>

                                {this.state.ordersList.map((order)=>{
                                    return(
                                        <React.Fragment key={order.id}>
                                        <div className='d-flex' >
                                        <p className='orders-font' style={{paddingLeft:'30px',paddingTop:'14px'}}>Aug 2,2020</p>
                                       
                                        <div className='' style={{paddingLeft:'5px', paddingTop:'6px'}}>
                                            <a  type="button" data-toggle="dropdown"  aria-expanded="false" className='d-flex'>
                                            <p className='orders-font' style={{paddingLeft:'30px',paddingTop:'10px'}} >Awaiting Payment</p>
                                            <img className="arrow-down" height="25px" width="25px" style={{color:'#223A80', marginTop:'17px', marginLeft:'4px'}} src='./images/sales/down-chevron.png'/>
                                            </a>
                                                <div style={{marginLeft:'100px'}}>
                                                    <div className="dropdown-menu" style={{ borderRadius:'10px'}}>
                                                        <a className="dropdown-item orders-dropdown-font" style={{color:'#000'}} href="#">Awaiting Payment</a>
                                                        <a className="dropdown-item orders-dropdown-font"  style={{color:'#000'}}  href="#">Paid</a>
                                                        <a className="dropdown-item orders-dropdown-font"   style={{color:'#000'}} href="#">Cancelled</a>
                                                        <a className="dropdown-item orders-dropdown-font"   style={{color:'#000'}} href="#">Refunded</a>
                                                    </div>
                                                </div>
                                                
                                        </div>
                                        <div className='' style={{paddingLeft:'5px', paddingTop:'6px'}}>
                                            <a  type="button" data-toggle="dropdown"  aria-expanded="false" className='d-flex'>
                                            <p className='orders-font' style={{paddingLeft:'30px',paddingTop:'10px'}} >Processing</p>
                                            <img className="arrow-down" height="25px" width="25px" style={{color:'#223A80', marginTop:'17px', marginLeft:'4px'}} src='./images/sales/down-chevron.png'/>
                                            </a>
                                                <div style={{marginLeft:'100px'}}>
                                                    <div className="dropdown-menu" style={{ borderRadius:'10px', width:'10px'}}>
                                                        <a className="dropdown-item orders-dropdown-font" style={{color:'#000'}} href="#">Awaiting Payment</a>
                                                        <a className="dropdown-item orders-dropdown-font"  style={{color:'#000'}}  href="#">Paid</a>
                                                        <a className="dropdown-item orders-dropdown-font"   style={{color:'#000'}} href="#">Cancelled</a>
                                                        <a className="dropdown-item orders-dropdown-font"   style={{color:'#000'}} href="#">Refunded</a>
                                                    </div>
                                                </div>
                                                
                                        </div>
                                        <a href='#' data-toggle="collapse" data-target='#sama'>edit</a>
{console.log(uniqueId.concat(order.id))}
{console.log(typeof('#demo'))}
                                            <div id='sama' className="collapse">
                                            Lorem ipsum dolor text....
                                            {console.log(typeof(order.id) )}
                                            </div>
                                        
                                    </div>
                                    <div className='d-flex' style={{paddingTop:'30px'}}>
                                            <p className='orders-info-font' style={{paddingLeft:'30px'}}>{order.name}</p>
                                            <p className='orders-info-font' style={{paddingLeft:'10px', color:'#2D62FC'}}> {order.customerEmail}</p>
                                    </div>
                                    <p className='orders-info-font' style={{paddingLeft:'30px',paddingTop:'10px', paddingBlock:'20px'}}>Mobile {order.mobile}</p>
    
                                    <div className='d-flex' style={{paddingLeft:'30px', paddingTop:'20px'}}>
                                        <img src='./images/sales/haryo-setyadi-acn5ERAeSb4-unsplash.png' width='64px' height='64px'/>
                                        <div className='' style={{paddingLeft:'12px'}}>
                                            <p className='orders-info-font'  style={{fontFamily:'Montserrat-SemiBold'}}>{order.name}  #185421454</p>
                                            <p className='orders-info-font'>Size {order.size}</p>
                                            <p className='orders-info-font'>1 x {order.price}</p>
                                        </div>
                                        <div className='' style={{paddingLeft:'550px'}}>
                                            <p className='orders-info-font'>No</p>
                                            <p className='orders-info-font' style={{fontFamily:'Montserrat-SemiBold', fontSize:'24px'}}>{order.price}</p>
                                        </div>
                                    </div>
                                    <hr style={{width:'100%', borderColor:"#2D62FC"}}></hr>
                                    </React.Fragment>
                                    )
                                })}
                                </div>
                        </div>
                        </div>
                        
                    </div>

                   </div>
                  
               

                </div>
            </div>
        );
    }
}
 
export default FilteredOrders;