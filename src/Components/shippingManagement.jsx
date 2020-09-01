import React, { Component } from 'react';
import FixedDashboard from './fixedDashboard';


const List=[
    {id:'1', name:'Aramex', location:'Global', contact:'02226461842', website:'aramex.com', shippingLocations:'All Egypt'},
    {id:'2',name:'Fast', location:'Egypt', contact:'02226461842', website:'aramex.com', shippingLocations:'Cairo, Delta'},
    {id:'3',name:'Union', location:'Mansoura', contact:'02226461842', website:'aramex.com', shippingLocations:'All Egypt'},
    {id:'4',name:'Aramex', location:'Global', contact:'02226461842', website:'aramex.com', shippingLocations:'All Egypt'},
    {id:'5',name:'Fast', location:'Egypt', contact:'02226461842', website:'aramex.com', shippingLocations:'Cairo, Delta'},
    {id:'6',name:'Union', location:'Mansoura', contact:'02226461842', website:'aramex.com', shippingLocations:'All Egypt'},
    {id:'7',name:'Fast', location:'Global', contact:'02226461842', website:'aramex.com', shippingLocations:'Cairo, Delta'},
    {id:'8',name:'Fast', location:'Egypt', contact:'02226461842', website:'aramex.com', shippingLocations:'All Egypt'}
]

class ShippingManagement extends Component {
    constructor(props) {
        super(props);
        this.state = { List }
    }
    render() { 
        return ( 
            <div className='container-fluid' style={{padding:'0px'}}>
                <div className='row no-gutters'>
                    
                        <FixedDashboard/>
                    <div className='row'>
                    <div className='col-sm-10' style={{paddingLeft:'78px'}}>
                        <p className='product-edit-title' style={{paddingTop:'85px'}}>Shipping suggestions</p>
                        <div className="form-group " style={{paddingTop:'25px', paddingBottom:'40px'}}> 
                            <div className="fake-input">
                                <input type="text" className="search-textbox products-search" style={{paddingLeft:'22px', width:'596px'}} id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="search for company name or location"/>
                                <img style={{top:'12px', left:'20px'}} src='./images/sales/search.png' height='20px' width='20px'/>   
                            </div>
                        </div>
                        <div className='shipping-list'>
                        <table className="table table-striped">
                                <thead>
                                    <tr style={{borderColor:'#2D62FC'}}>
                                    <th  style={{paddingLeft:'24px'}} scope="col">Name</th>
                                    <th style={{paddingLeft:'70px'}} scope="col">Location</th>
                                    <th style={{paddingLeft:'70px'}} scope="col">Conatct</th>
                                    <th style={{paddingLeft:'70px'}} scope="col">Website</th>
                                    <th style={{paddingLeft:'70px'}} scope="col">Shipping Location</th>
                                    </tr>
                                   
                                </thead>
                                <tbody>
                                { this.state.List.map((item, index)=>{
                                    return(
                                        <tr  key={item.id}>
                                       
                                        <td style={{paddingLeft:'70px'}} className="table-content" style={{paddingLeft:'24px'}}>{item.name}</td>
                                        <td style={{paddingLeft:'70px'}} className="table-content">{item.location}</td>
                                        <td style={{paddingLeft:'70px'}} className="table-content">{item.contact}</td>
                                        <td style={{paddingLeft:'70px'}} className="table-content"><a style={{color:'#2D62FC'}} href='#'>{item.website}</a></td>
                                        <td  style={{paddingLeft:'70px'}} className="table-content">{item.shippingLocations}</td>
                                        </tr>
                                    )
                                       
                                })}
                                   
                                    
                                    
                                </tbody>
                                </table>
                          
                       
                        </div>
                    </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}
 
export default ShippingManagement;