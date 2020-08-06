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
                        <div className='d-flex align-items-end' style={{marginTop:'120px'}}>
                                <div className='chatbot-bg'> 
                                <img style={{padding:'8px'}} className='img-res' src='./images/home/Mask Group 3.svg'/>
                                </div>
                            
                            <div className='d-flex align-items-center'>
                            <div className='chat-box' style={{marginLeft:'20px'}}>
                                <p className='bot-font' >Hi I'm <strong>Owle Bot</strong>  and click on me if you need any help</p>
                            </div>
                            </div>
                           
                            </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="d-flex justify-content-center" style={{marginBottom:"35px"}}>
                        <img className="img-res" src="./images/forgetpass/Mask Group 1.svg" />
                        
                    </div>
                        <p className="login-title" style={{marginTop:"30px"}}>Forget password</p>
                            <form >
                            <div class="form-group d-flex justify-content-center" style={{marginTop:'41px'}}>
                            <div class="fake-input">
                                <input type="text" className="form-control placeholder-text" style={{paddingLeft:'15px'}} id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" value={this.state.email}
                                  onChange={this.onChange}/>
                                <img src='./images/icons/Icon feather-mail.svg' height='16px' width='20px'/>   
                            </div>
                            </div>
                           
                            <div className="d-flex flex-column align-items-center"  style={{marginTop:'41px'}}>
                            <button type="submit" className="btn btn-primary login-btn" onClick={this.handleClick}>
                                <p className=' login-btn-font '>Continue </p> </button>
                            
                          
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