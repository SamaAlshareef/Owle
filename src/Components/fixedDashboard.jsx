import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FixedDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className=' dashboard-bg' style={{paddingLeft:'30px', opacity:'1'}}>
                        <div className='col-sm-12' style={{ paddingTop:'30px'}}>
                            <div className=' d-flex flex-row'>
                            <div className='db-logo ' >
                                <img src='./images/dashboard/Mask Group 1.svg'/>
                            </div>
                            <p className='db-logo-font' style={{paddingLeft:'6px'}}>OWLE</p>
                            </div>

                            <p className='store-info' style={{paddingTop:'40px'}}>Store info</p>

                            <p className='db-items' style={{paddingTop:'20px'}}>Dashboard</p>
                            
                           
                          
                               
                                <a href="#demo" data-toggle="collapse">
                                    <p className='db-items ' style={{paddingTop:'20px'}}>Sales</p>
                                </a>
                                <div id="demo" className="collapse db-dropDown-bg" style={{paddingLeft:'15px'}}>
                                   <Link to={'/sales-management'}><p className="db-dropItem-font" style={{paddingTop:'12px'}}>Inventory management</p></Link> 
                                   <Link to={'/shipping-suggestions'}><p className="db-dropItem-font" style={{paddingTop:'18px'}}>Shipping suggestions </p></Link> 
                                   <Link  to={'/order-management'}><p className="db-dropItem-font" style={{paddingTop:'18px'}}>Order management</p></Link>
                                   
                                </div>
                               
                               
                            <p className='db-items' style={{paddingTop:'20px'}}>Reports & Statistics</p>
                            <p className='db-items' style={{paddingTop:'20px'}}>Marketing</p>

                            <p className='store-info' style={{paddingTop:'22px'}}>Channels</p>
                            
                            <p className='db-items' style={{paddingTop:'20px'}}>Website</p>
                            <p className='db-items' style={{paddingTop:'20px'}}>Facebook</p>
                            <p className='db-items' style={{paddingTop:'20px'}}>Instagram</p>

                            <p className='store-info' style={{paddingTop:'22px'}}>Configuring</p>
                            
                            <p className='db-items' style={{paddingTop:'20px'}}>Settings</p>
                            <p className='db-items' style={{paddingTop:'20px'}}>Profile</p>
                           
                        </div>
                    </div>
         );
    }
}
 
export default FixedDashboard;