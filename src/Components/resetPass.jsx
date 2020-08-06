import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class ResetPass extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleClick = () => {
        this.props.history.push('/login');
    }
    render() { 
        return ( 
            <div className="container">
                <div className="row  d-flex align-items-center" >
                    <div className="col-sm-6">
                      
                        
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center" style={{marginTop:"161px"}}>
                  
                        <img className="img-res" src="./images/forgetpass/Mask Group 1.svg" />
                    </div>
                    </div>
                    <div className='row d-flex align-items-center'>
                    <div className='col-sm-6'>
                    <img className="img-res" src="./images/forgetpass/332 [Converted].svg"/>
                    </div>
                    <div className='col-sm-6'>
                    <p className="login-title" >Forget password</p>
                            <form >
                            <div class="form-group d-flex justify-content-center" style={{marginTop:'41px'}}>
                             <div class="fake-input">
                                <input type="password" className="form-control placeholder-text" style={{paddingLeft:'15px'}} id="exampleInputEmail1" name="New password" placeholder="New password"
                                value={this.state.password} onChange={this.onChange}/>
                               
                                <img height='18px' width='19px' src='./images/icons/Icon feather-key.svg'/> 
                                
                                  
                            </div>
                            </div>
                            <div class="form-group d-flex justify-content-center"  style={{marginTop:'31px'}}>
                            <div class="fake-input">
                                <input type="password" className="form-control placeholder-text" style={{paddingLeft:'15px'}} id="exampleInputEmail1" name="Confirm password" placeholder="Confirm password"
                                value={this.state.password} onChange={this.onChange}/>
                               
                                <img height='18px' width='19px' src='./images/icons/Icon feather-key.svg'/> 
                                
                                  
                            </div>
                            </div>
                           
                            

                            <div className="d-flex flex-column align-items-center"  style={{marginTop:'41px'}}  >
                            <button type="submit" className="btn btn-primary login-btn">
                                <p className=' login-btn-font '>Reset Password </p> </button> 
                            </div>                  
                            </form>
                        </div>
                        </div>
                        
                           
                   
                    
               
               
                <div className="row">
                    <div className="col-sm-6">
                    <div className='d-flex align-items-center' style={{marginTop:'12px'}}>
                    <div className='chatbot-bg'> 
                                <img style={{padding:'8px',position:'absolute'}} className='img-res' src='./images/home/Mask Group 3.svg'/>
                                </div>
                            
                                <div style={{position:'relative'}}  >
                                <img  style={{marginLeft:'-20px'}} src='./images/icons/Union 1.svg'/>
                                <div className='bot-font' >
                                <p>Hi I'm <strong>Owle Bot</strong>  and click on me if you need any help</p>
                                </div>
                           </div>
                           
                            </div>
                 </div>
                </div>
            </div>
         );
    }
}
 
export default ResetPass;