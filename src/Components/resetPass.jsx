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
                <div className="row  d-flex align-items-center" style={{marginTop:"161px"}}>
                    <div className="col-sm-6">
                        <img className="img-res" src="./images/forgetpass/332 [Converted].svg"/>
                        <div className='d-flex align-items-end' style={{marginTop:'80px'}}>
                            <img width= '44px'height ='44px' className='img-res' src='./images/home/Mask Group 3.svg'/>
                            <div className='d-flex align-items-center'>
                            <div className='chat-box' style={{marginLeft:'20px'}}>
                                <p className='bot-font' >Hi I'm <strong>Owle Bot</strong>  and click on me if you need any help</p>
                            </div>
                            </div>
                           
                            </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="d-flex justify-content-center">
                        <img className="img-res" src="./images/forgetpass/Mask Group 1.svg" />
                    </div>
                        <p className="login-title" style={{marginTop:"30px"}}>Forget password</p>
                            <form >
                            <div class="form-group d-flex justify-content-center">
                            <div class="fake-input">
                                <input type="password" className="form-control" id="exampleInputEmail1"  placeholder="New password"/>
                                <img src='./images/icons/Icon feather-key.svg'/>   
                            </div>
                            </div>
                            <div class="form-group d-flex justify-content-center">
                            <div class="fake-input">
                                <input type="password" className="form-control" id="exampleInputEmail1"  placeholder="Confirm password"/>
                                <img src='./images/icons/Icon feather-key.svg'/>   
                            </div>
                            </div>
                           
                            <div className="d-flex flex-column align-items-center">
                            <button type="submit" className="btn btn-primary login-btn textbox-font">Reset Password</button>   
                            </div>                  
                            </form>
                           
                    </div>
                    
                </div>
               
                <div className="row">
                    <div className="col-sm-6">

                 </div>
                </div>
            </div>
         );
    }
}
 
export default ResetPass;