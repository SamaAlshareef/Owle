import React, { Component } from 'react';
import FixedDashboard from './fixedDashboard';
import {Link} from 'react-router-dom';

const ProductsList=[
    {id:'1', name:'Basic t-shirt', price:'90LE', image:'./images/sales/haryo-setyadi-acn5ERAeSb4-unsplash.png'},
    {id:'2', name:'Basic t-shirt', price:'95LE', image:'./images/sales/shirt3.png'},
    {id:'3', name:'Basic t-shirt', price:'85LE', image:'./images/sales/shirt2.png'},
    {id:'4', name:'Basic t-shirt', price:'90LE', image:'./images/sales/haryo-setyadi-acn5ERAeSb4-unsplash.png'},
    {id:'5', name:'Basic t-shirt', price:'90LE', image:'./images/sales/haryo-setyadi-acn5ERAeSb4-unsplash.png'},
    {id:'6', name:'Basic t-shirt', price:'90LE', image:'./images/sales/haryo-setyadi-acn5ERAeSb4-unsplash.png'},
    {id:'7', name:'Basic t-shirt', price:'90LE', image:'./images/sales/haryo-setyadi-acn5ERAeSb4-unsplash.png'}
]

const uniqueID = "#";
const emptyString = "";

class FilteredSales extends Component {
    constructor(props) {
        super(props);
        this.state = { ProductsList }
    }
    render() { 
        return ( 
            <React.Fragment>
              
            <div className='container-fluid'>
                <div className='row'>
                    
                    <FixedDashboard/>
                   
                    <div className='row'>
                    <div className='col-sm-10'>
                    <div className='d-flex ' style={{position:'absolute', paddingLeft:'750px', paddingTop:'28px'}}> 
                         <img width='16px' height='16px' style={{marginTop:'10px'}} src='./images/sales/alarm (1).png'/>
                         <div style={{marginLeft:'',paddingTop:'5px'}}>
                         <span className='card-btn-text' style={{ textAlign:'left',display:'inline', color:'#223A80'}} >Nor Ali</span>
                         </div>
                           
                           <a  type="button" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               
                           <img className="arrow-down" height="25px" width="25px" style={{color:'#223A80', marginTop:'17px', marginLeft:'4px'}} src='./images/sales/down-chevron.png'/>
                           </a>
                           <div className="dropdown-menu justify-content-center" style={{backgroundColor:'', borderRadius:'20px'}}>
                            <a className="dropdown-item dropDown-item" href="#">Accout Settings</a>
                            <hr class="solid"></hr>
                            <a className="dropdown-item dropDown-item" href="#">Feedback</a>
                            <hr class="solid"></hr>
                            <a className="dropdown-item dropDown-item" href="#">Logout</a>
                        </div>
                        <div style={{marginLeft:'10px'}}>
                        <img  src='./images/dashboard/Avatar.png'/>
                        </div>
                         
                        </div>
                    </div>
                    
                    <div className='col-sm-12' style={{paddingTop:'85px'}}>
                    
                        <p style={{paddingLeft:'53px'}} className='sales-title'>Inventory management</p>
                        <div className='d-flex' style={{paddingTop:'25px',paddingLeft:'53px'}}>
                        <div className='filter-btn d-flex'>
                            <img height='16px' width='18px' style={{marginTop:'13px', marginLeft:'10px'}} src='./images/sales/filter.png'/>
                            <p className='card-btn-text' style={{color:'#575757',paddingTop:'12px', paddingLeft:'5px'}}>Filter</p>
                           <Link to={'/sales-management'}><img height='18px' width='18px' style={{marginTop:'15px', marginLeft:'19px', marginRight:'10px'}} className='rotate180' src='./images/sales/down-arrow (2).png'/></Link> 
                        </div>
                        <form style={{paddingLeft:'20px'}} >
                            <div class="form-group ">
                            <div class="fake-input">
                                <input type="text" className="search-textbox products-search" style={{paddingLeft:'22px'}} id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="search for products"/>
                                <img style={{top:'12px', left:'20px'}} src='./images/sales/search.png' height='20px' width='20px'/>   
                            </div>
                            </div>
                        </form>
                        <div style={{marginLeft:'50px'}}>
                            <div className='add-product-icon d-flex justify-content-center align-items-center'>
                                <img height='18px' width='18px' style={{marignTop:'13px'}} src='./images/sales/plus.png'/>
                                <p className='products-search' style={{color:'#fff', paddingLeft:'5px'}}>Add Product</p>
                            </div>
                        </div>
                        <div style={{marginLeft:'50px'}}>
                            <div className='import-products d-flex justify-content-center align-items-center'>
                                <img height='18px' width='18px' style={{marignTop:'13px'}} src='./images/sales/plus.png'/>
                                <p className='products-search' style={{color:'#575757', paddingLeft:'5px'}}>Import Products</p>
                            </div>
                        </div>
                    </div>     
                    <div className='d-flex' style={{paddingTop:'10px', paddingLeft:'53px'}}>
                        <p className='sales-subtitle' style={{paddingRight:'10px'}}>Sales</p>
                        <img className='my-auto'width='10px' height='10px' src='./images/sales/chevron.png'/>
                        <p className='sales-subtitle' style={{color:'#2D62FC', paddingLeft:'10px'}}>Inventory management</p>
                    </div>
                    <div className='d-flex' style={{paddingLeft:'53px', paddingTop:'30px'}}>
                        <div style={{paddingRight:'25px'}}>
                        <div className='filter-list'>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px', color:'#000', opacity:'0.8'}}  className='filter-list-text'>All Products</p>
                                <p style={{paddingLeft:'75px', paddingTop:'10px', color:'#000', opacity:'0.8'}}  className='filter-list-text'>6</p>
                            </div>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px'}}  className='filter-list-text'>In stock</p>
                                <p  style={{ paddingLeft:'100px', paddingTop:'10px'}}  className='filter-list-text'>6</p>
                            </div>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px'}}  className='filter-list-text'>Out of stock</p>
                                <p  style={{ paddingLeft:'75px', paddingTop:'10px'}}  className='filter-list-text'>0</p>
                            </div>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px'}}  className='filter-list-text'>Disabled</p>
                                <p  style={{ paddingLeft:'94px', paddingTop:'10px'}}  className='filter-list-text'>0</p>
                            </div>
                            <hr className='filter-list-sep'></hr>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px',fontFamily:'Montserrat-Medium', color:'#000'}}  className='filter-list-text'>Availability</p>
                            </div>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px', color:'#000'}}  className='filter-list-text'>All</p>
                                <div className="form-check" style={{borderColor:'#223A80',paddingLeft:'149px', paddingTop:'10px'}}>
                                <input className="form-check-input"  type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                </div>   
                            </div>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px', color:'#000'}}  className='filter-list-text'>Enabled</p>
                                <div className="form-check" style={{borderColor:'#223A80',paddingLeft:'115px', paddingTop:'10px'}}>
                                <input className="form-check-input"  type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                </div>   
                            </div>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px', color:'#000'}}  className='filter-list-text'>Checked</p>
                                <div className="form-check" style={{borderColor:'#223A80',paddingLeft:'112px', paddingTop:'10px'}}>
                                <input className="form-check-input"  type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                </div>   
                            </div>
                            <hr className='filter-list-sep'></hr>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px',fontFamily:'Montserrat-Medium', color:'#000'}}  className='filter-list-text'>Stock</p>
                            </div>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px', color:'#000'}}  className='filter-list-text'>All</p>
                                <div className="form-check" style={{borderColor:'#223A80',paddingLeft:'149px', paddingTop:'10px'}}>
                                <input className="form-check-input"  type="radio" name="exampleRadios2" id="exampleRadios2" value="option1" checked/>
                                </div>   
                            </div>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px', color:'#000'}}  className='filter-list-text'>In stock</p>
                                <div className="form-check" style={{borderColor:'#223A80',paddingLeft:'118px', paddingTop:'10px'}}>
                                <input className="form-check-input"  type="radio" name="exampleRadios2" id="exampleRadios2" value="option1" checked/>
                                </div>   
                            </div>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px', color:'#000'}}  className='filter-list-text'>Out of stock</p>
                                <div className="form-check" style={{borderColor:'#223A80',paddingLeft:'92px', paddingTop:'10px'}}>
                                <input className="form-check-input"  type="radio" name="exampleRadios2" id="exampleRadios2" value="option1" checked/>
                                </div>   
                            </div>     
                            <hr className='filter-list-sep'></hr>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px',fontFamily:'Montserrat-Medium', color:'#000'}}  className='filter-list-text'>Options</p>
                            </div>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px', color:'#000'}}  className='filter-list-text'>All</p>
                                <div className="form-check" style={{borderColor:'#223A80',paddingLeft:'149px', paddingTop:'10px'}}>
                                <input className="form-check-input"  type="radio" name="exampleRadios3" id="exampleRadios3" value="option1" checked/>
                                </div>   
                            </div>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px', color:'#000'}}  className='filter-list-text'>In stock</p>
                                <div className="form-check" style={{borderColor:'#223A80',paddingLeft:'118px', paddingTop:'10px'}}>
                                <input className="form-check-input"  type="radio" name="exampleRadios3" id="exampleRadios3" value="option1" checked/>
                                </div>   
                            </div>
                            <div className='d-flex'>
                                <p style={{paddingLeft:'10px', paddingTop:'10px', color:'#000'}}  className='filter-list-text'>Out of stock</p>
                                <div className="form-check" style={{borderColor:'#223A80',paddingLeft:'92px', paddingTop:'10px'}}>
                                <input className="form-check-input"  type="radio" name="exampleRadios3" id="exampleRadios3" value="option1" checked/>
                                </div>   
                            </div>     
                        </div>
                        </div>
                        
                        <div className='sales-list d-flex flex-column' style={{width:'758px', marginLeft:''}}>
                        {this.state.ProductsList.map((product,index)=>{
                           return(
                               
                                   <div  className='d-flex' key={product.id}>
                                    <img height='100px' width='100px' style={{paddingTop:'16px', paddingLeft:'30px', paddingBottom:'20px'}} src={product.image}/>
                                    <div style={{marginLeft:'20px'}}>
                                        <div className='d-flex'>
                                <p style={{paddingTop:'14px'}} className='product-sales-text'>{product.name}</p>
                                            <p style={{paddingTop:'8px', paddingLeft:'90px',paddingRight:'30px'}} className='my-auto sales-options'>options (1)</p>
                                            <img style={{paddingLeft:'40px',paddingTop:'8px'}} className='my-auto' src='./images/sales/limited-stock.svg'/>
                                            <p style={{paddingTop:'8px', paddingLeft:'5px',paddingRight:'30px'}} className='sales-options my-auto'>in stock (19)</p>
                                            <div style={{marginTop:'18px'}} className='options-btn d-flex justify-content-center align-items-center'>
                                                
                                                
                                                <p className='mx-auto product-sales-text' style={{color:'#575757', fontSize:'13px'}}>Edit</p>
                                                {}
                                                <a data-toggle="collapse" href={uniqueID.concat(product.id)} role="button" aria-expanded="false" aria-controls={emptyString.concat(product.id)}>
                                            {console.log(uniqueID.concat(product.id))}
                                            {console.log(emptyString.concat(product.id))}
                                                <img height='14px' width='14px' style={{ marginLeft:'26px', marginRight:'10px'}} src='./images/sales/down-arrow (2).png'/></a>
                                                <div class="collapse" id={emptyString.concat(product.id)} >
                                                    <div class="card card-body">
                                                       Hello
                                                    </div>
                                                </div>

                                            {/* {console.log(uniqueID)} */}
                                          
                                               
                                            </div>
                                        </div>
                                        
                                <p style={{paddingTop:''}} className='product-sales-text'>{product.price}</p>
                                    </div>
                                    </div>
                           )})}
                           
                           
                           
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
           
         );
    }
}
 
export default FilteredSales;