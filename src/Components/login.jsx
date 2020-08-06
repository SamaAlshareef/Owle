import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            loggedIn:'',
            email:'',
            password:''
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
     
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const{email,password} = this.state;
        if(email == "admin@gmail.com" && password =="admin"){
            this.setState({
                loggedIn:true
            })
        }
    }
       
    navigateTo = (path) => {
        this.props.history.push('/register');
    }
   
    render() { 
        if(this.state.loggedIn){
            return <Redirect to='/admin'/>
        }
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center">
                        <img className="img-res" src="./images/login/Mask Group 1.svg" style={{marginTop:"49px"}}/>
                    </div>
                </div>
                <div className="row  d-flex align-items-center" >
                    <div className="col-sm-6">
                        <img className="img-res" src="./images/login/504 [Converted].svg"/>
                       
                    </div>
                    <div className="col-sm-6" style={{marginTop:"35px"}}>
                        <p className="login-title">Welcome Back</p>
                            <form onSubmit={this.submitForm} >
                            <div class="form-group d-flex justify-content-center" style={{marginTop:'41px'}}>
                            <div class="fake-input">
                                <input type="text" className="form-control placeholder-text" style={{paddingLeft:'15px'}} id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" value={this.state.email}
                                  onChange={this.onChange}/>
                                <img src='./images/icons/Icon feather-mail.svg' height='16px' width='20px'/>   
                            </div>
                            </div>
                            <div class="form-group d-flex justify-content-center" style={{marginTop:'31px'}}>
                            <div class="fake-input">
                                <input type="password" className="form-control placeholder-text" style={{paddingLeft:'15px'}} id="exampleInputEmail1" name="password" placeholder="password"
                                value={this.state.password} onChange={this.onChange}/>
                               
                                <img height='18px' width='19px' src='./images/icons/Icon feather-key.svg'/> 
                                
                                  
                            </div>
                            </div>
                            
                        
                            <div className="d-flex justify-content-center" style={{marginTop:'31px'}}>
                            <button type="submit" className="btn btn-primary login-btn">
                                <p className=' login-btn-font '>Login </p> </button>
                            </div>      
                            <div style={{ marginTop:"10px", paddingLeft:'70px'}}>
                            <Link  to={'/forgetPass'} onClick={()=>this.navigateTo('/forgetPass')} ><p className="forget-pass-font" >Forget password?</p></Link> 
                            </div>            
                            </form>
                            
                    </div>
                    
                </div>
               
                <div className="row ">
                    <div className='col-sm-6'>

                    </div>
                                    <div className="col-sm-6 " style={{marginTop:'40px'}}>
                                    <p className="logWith">Login With</p>
                                   
                                    <div style={{paddingTop:'22px'}} className="d-flex flex-row justify-content-center">
                                    <div className="with-cont d-flex justify-content-center">
                                    <a href=""><img src="./images/login/facebook (4).svg"/></a>
                                    
                                    </div>
                                    <div className="with-cont d-flex justify-content-center" style={{marginRight:'40px', marginLeft:'40px'}}>
                                    <Link to={'/googleSign'} href=""><img src="./images/login/brands-and-logotypes (2).svg"/></Link>
                                    </div>
                                    <div className="with-cont d-flex justify-content-center">
                                    <a href=""><img src="./images/login/company.svg"/></a>
                                    </div>
                                    </div> 
                                    <div className="d-flex justify-content-center flex-row" style={{marginTop:"40px"}}>
                                    <p className="forget-pass-font">Don't have account yet?</p>
                                    <Link to={'/register'} onClick={()=>this.navigateTo('/register')}><p className="forget-pass-font" style={{color:"#2D62FC"}}>  Join Owle now</p></Link>      
                                    </div> 
                                </div>
                                <div className="col-sm-6" >
                                <div className='d-flex align-items-end' >
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
                                </div>
                               
            </div>
         );
    }
}
 
export default Login;