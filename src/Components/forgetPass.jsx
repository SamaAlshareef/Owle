import React, { Component } from 'react';
import {Redirect, Link } from 'react-router-dom';

class ForgetPass extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleClick = () => {
        this.props.history.push('/resetPass');
    }
    render() { 
        return ( 
            <div className="container">
                <div className="row  d-flex align-items-center" style={{marginTop:"161px"}}>
                    <div className="col-sm-6">
                        <img className="img-res" src="./images/forgetpass/332 [Converted].svg"/>
                    </div>
                    <div className="col-sm-6">
                    <div className="d-flex justify-content-center">
                        <img className="img-res" src="./images/forgetpass/Mask Group 1.svg" />
                    </div>
                        <p className="login-title" style={{marginTop:"30px"}}>Forget password</p>
                            <form >
                            <div class="form-group d-flex justify-content-center">
                            <div class="fake-input">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <img src='./images/icons/Icon feather-mail.svg' height='20px'/>   
                            </div>
                            </div>
                           
                            <div className="d-flex flex-column align-items-center">
                            <button type="submit" className="btn btn-primary login-btn textbox-font" onClick={this.handleClick}>Continue</button>
                          
                            </div>                  
                            </form>
                            <div className="row">
                            <div className="col-sm-12 d-flex justify-content-center" style={{marginTop:"25px"}}>
                                <p className="comments-font" style={{color:"#000000"}}>Will send email for confirmation</p>
                        </div>
                </div>
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
 
export default ForgetPass;