import React, { Component } from 'react';
import FixedDashboard from './fixedDashboard';
import Draggable from './Dnd/draggable';
import Droppable from './Dnd/droppable';

class ProductEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className='container-fluid' style={{padding:'0px'}}>
                <div className='row no-gutters'>
                    <div className='col-sm-2' >
                        <FixedDashboard/>
                    </div>
                    <div className='col-sm-8' style={{paddingLeft:'150px'}}>
                        <p style={{paddingTop:'84px'}} className='product-edit-title'>Basic t-shirt</p>
                    <div className='d-flex' style={{paddingTop:'10px', paddingBottom:'24px'}}>
                        <p className='sales-subtitle' style={{paddingRight:'10px'}}>Sales</p>
                        <img className='my-auto'width='10px' height='10px' src='./images/sales/chevron.png'/>
                        <p className='sales-subtitle' style={{ paddingLeft:'10px',paddingRight:'10px'}}>Inventory management</p>
                        <img className='my-auto'width='10px' height='10px' src='./images/sales/chevron.png'/>
                        <p className='sales-subtitle' style={{color:'#2D62FC', paddingLeft:'10px'}}>Edit Product</p>
                    </div>
                    <div className='d-flex'>
                        <div className='product-edit-container'>
                            
                            <Droppable id='drop1' style={{backgroundColor:'#000'}}>
                                <Draggable id = 'item1'>
                                   
                                    <p>Hi sama</p></Draggable>
                                <Draggable id = 'item2'><p>Hi Omar</p></Draggable>
                            </Droppable>

                            <Droppable id='drop2'>
                                <Draggable id = 'item3' style={{backgroundColor:'#00ff00'}}><p>Hi sama</p></Draggable>
                                <Draggable id = 'item4'><p>Hi Omar</p></Draggable>
                            </Droppable>
                            
                         
                           
                        </div>
                        <div style={{paddingLeft:'24px'}}>
                            <div className='filter-list' style={{height:'526px', width:'242px'}}>
                                <div style={{paddingLeft:'25px'}}>
                                    <p className='edit-options-text' style={{paddingTop:'25px'}}>Price</p>
                                    <div className='d-flex' style={{paddingTop:'20px'}}>
                                        <input className='edit-options-textbox filter-list-text' style={{fontSize:'20px', color:'#000'}} placeholder='price'/>
                                        <p className='filter-list-text' style={{paddingLeft:'10px', fontSize:'20px', color:'#000'}}>EGP</p>
                                    </div>
                                    <div className='d-flex' style={{paddingTop:'10px'}}>
                                        <img width='20px' height='11px' className='my-auto' src='./images/sales/coupon.svg'/>
                                        <a href='#'><p className='filter-list-text' style={{fontSize:'16px', color:'#000', paddingLeft:'10px'}}>Add discount</p></a>
                                    </div>                                
                                </div>
                               
                                <hr className='filter-list-sep'></hr>

                                    <p className='sales-title' style={{fontSize:'20px', paddingLeft:'25px'}}> Availabilty</p>
                                    <div className='d-flex' style={{paddingLeft:'25px'}}>
                                        <p className='filter-list-text' style={{fontSize:'16px', color:'#000', paddingTop:'15px'}}>Enabled</p>
                                    </div>
                                    <div className='d-flex' style={{paddingLeft:'25px'}}>
                                        <p className='filter-list-text' style={{fontSize:'16px', color:'#000', paddingTop:'15px'}}>Stock level</p>
                                        <div className='d-flex align-items-start' style={{paddingTop:'13px', paddingLeft:'56px'}} >
                                            <a href='#'><img className='rotate90' src='./images/sales/lr-arrow.svg'/></a>
                                            <p className='filter-list-text' style={{color:'#000', fontSize:'14px', paddingTop:'3px'}}>19</p>
                                           <a href='#'><img className='rotate270' onClick={console.log("sam")} src='./images/sales/lr-arrow.svg'/></a>
                                        </div>
                                    </div>
                                <hr className='filter-list-sep'></hr>
                                <div className='d-flex' style={{paddingLeft:'25px'}}>
                                    <p className='sales-title' style={{fontSize:'20px', paddingRight:'96px'}}> Options</p>
                                    <img className='my-auto' width='12px' height='12px' src='./images/sales/edit (1).png'/>
                                </div>
                                   
                                    <div style={{paddingLeft:'25px'}}>
                                        <p className='filter-list-text' style={{fontSize:'12px', color:'#000', paddingTop:'20px', paddingBottom:'5px'}}>Option name</p>
                                        <input className='edit-options-textbox filter-list-text' style={{fontSize:'14px', color:'#000'}} placeholder='size'/>
                                    </div>

                                    <div style={{paddingLeft:'25px', paddingTop:'5px'}}>
                                        <p className='filter-list-text' style={{fontSize:'12px', color:'#000', paddingBottom:'5px'}}>Input type</p>
                                        <input className='edit-options-textbox filter-list-text' style={{fontSize:'14px', color:'#000'}} placeholder='Radio Buttons'/>
                                    </div>

                                    <div style={{paddingLeft:'25px', paddingTop:'5px'}}>
                                        <p className='filter-list-text' style={{fontSize:'12px', color:'#000', paddingBottom:'5px'}}>Option values</p>
                                        <input className='edit-options-textbox filter-list-text' style={{fontSize:'14px', color:'#000'}} placeholder='S,M,L,XL,XXL'/>
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
 
export default ProductEdit;