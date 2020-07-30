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
                <div className="row  d-flex align-items-center">
                    <div className="col-sm-6">
                        <img className="img-res" src="./images/login/504 [Converted].svg"/>
                    </div>
                    <div className="col-sm-6" style={{marginTop:"35px"}}>
                        <p className="login-title">Welcome Back</p>
                            <form onSubmit={this.submitForm} >
                            <div class="form-group d-flex justify-content-center">
                            <div class="fake-input">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" value={this.state.email}
                                  onChange={this.onChange}/>
                                <img src='./images/icons/envelope.png' height='20px'/>   
                            </div>
                            </div>
                            <div class="form-group d-flex justify-content-center">
                            <div class="fake-input">
                                <input type="password" className="form-control" id="exampleInputEmail1" name="password" placeholder="password"
                                value={this.state.password} onChange={this.onChange}/>
                                <img src='./images/icons/Icon feather-key.svg'/>   
                            </div>
                            </div>
                            
                        
                            <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary login-btn ">Login</button>
                            </div>                  
                            </form>
                            <div className="row">
                                <div className="col-sm-1">

                                </div>
                                <div className="col-sm-11 d-felx">
                                        <Link  to={'/forgetPass'} onClick={()=>this.navigateTo('/forgetPass')} ><p className="forget-pass-font" style={{marginLeft:"20px", marginTop:"10px"}}>Forget password?</p></Link>       
                                       
                                </div>
                            </div>
                    </div>
                    
                </div>
               
                <div className="row">
                    <div className="col-sm-6">

                    </div>
                                    <div className="col-sm-6 ">
                                    <p className="logWith">Login With</p>
                                   
                                    <div className="d-flex flex-row justify-content-center">
                                    <div className="with-cont d-flex justify-content-center">
                                    <a href=""><img src="./images/login/facebook (4).svg"/></a>
                                    
                                    </div>
                                    <div className="with-cont d-flex justify-content-center">
                                    <Link to={'/googleSign'} href=""><img src="./images/login/brands-and-logotypes (2).svg"/></Link>
                                    </div>
                                    <div className="with-cont d-flex justify-content-center">
                                    <a href=""><img src="./images/login/company.svg"/></a>
                                    </div>
                                    </div> 
                                    <div className="d-flex justify-content-center flex-row" style={{marginTop:"40px"}}>
                                    <p className="forget-pass-font">Don't have account yet?</p>
                                    <Link to={'/register'} onClick={()=>this.navigateTo('/register')}><p className="forget-pass-font" style={{color:"#2D62FC"}}> Join Owle now</p></Link>      
                                    </div> 
                                </div>
                                </div>
            </div>
         );
    }
}
 
export default Login;