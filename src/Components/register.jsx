import React, { Component } from 'react';
import {Link } from 'react-router-dom';


const initialState={
    name:'',
    email:'',
    password:'',
    store:'',
    nameError:'',
    emailError:'',
    passwordError:'',
    storeError:''
}
class Register extends Component {
   
    constructor(props) {
        super(props);
       
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    state = initialState;
    handleClick = () => {
        this.props.history.push('/login');
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate =()=>{
       let nameError='';
       let emailError='';
       let passwordError='';
       let storeError='';

       const re = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
       const isOk = re.test(this.state.password);
       console.log(this.state.password);
       console.log(isOk);

       if(!isOk){
           passwordError="Minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
       }
        if(!this.state.name){
            nameError="Please enter your name";
        }
        if(!this.state.email){
            emailError="Please enter your email";
        }
        
        if(!this.state.password){
            passwordError="Please enter your password";
           
        }
        if(!this.state.store){
            storeError="Please enter your store name";
        }
        if(!this.state.email.includes('@')){
            emailError="please enter a valid mail";
        }
        
        if(nameError || emailError || passwordError || storeError){
            this.setState({nameError, emailError, passwordError, storeError});
            return false;
        }
        return true;
    }

    handleSubmit(e){
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
          
            this.setState(initialState);
            console.log(this.state);
        }
    }

    
    render() { 
        return ( 
            <div className="container">
                <div className="row  d-flex align-items-center">
                    <div className="col-sm-6">
                        <img className="img-res" src="./images/register/2844298.svg"/>
                    </div>
                    <div className="col-sm-6">
                    <div className="d-flex justify-content-center">
                        <img className="img-res" style={{marginTop:'26px'}} src="./images/register/Mask Group 1.svg" />
                    </div>
                        <p className="login-title" style={{marginTop:"30px"}}>Welcome in our world</p>
                            <form  onSubmit={this.handleSubmit}>
                            <div class="form-group d-flex justify-content-center">
                            <div class="fake-input">
                                <input type="name" name="name" className="form-control" id="exampleInputEmail1"  
                                value={this.state.name}
                                onChange={this.onChange}
                                placeholder="Name"/>
                                <img src='./images/icons/Icon material-person.svg'/> 
                                <p className="forget-pass-font" style= {{color:'red'}}>{this.state.nameError}</p>  
                            </div>
                            </div>
                           
                            <div class="form-group d-flex justify-content-center">
                            <div class="fake-input">
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" 
                                value={this.state.email}
                                onChange={this.onChange}
                                aria-describedby="emailHelp" placeholder="Enter email"/>
                                <img src='./images/icons/Icon feather-mail.svg'/>  
                                <p className="forget-pass-font" style= {{color:'red'}}>{this.state.emailError}</p>   
                            </div>
                            </div>
                            <div class="form-group d-flex justify-content-center">
                            <div class="fake-input">
                                <input type="password" className="form-control"  name="password"id="exampleInputEmail1"  
                                value={this.state.password}
                                onChange={this.onChange}
                                placeholder="password"/>
                                <img src='./images/icons/Icon feather-key.svg'/>   
                                <p className="forget-pass-font" style= {{color:'red'}}>{this.state.passwordError}</p>  
                            </div>
                            </div>
                          
                            <div class="form-group d-flex justify-content-center">
                            <div class="fake-input">
                                <input type="name" className="form-control"  name="store" id="exampleInputEmail1" 
                                value={this.state.store}
                                onChange={this.onChange}
                                placeholder="Store name"/>
                                <img src='./images/icons/Icon awesome-store.svg'/>   
                                <p className="forget-pass-font" style= {{color:'red'}}>{this.state.storeError}</p>  
                            </div>
                            </div>
                        
                            <div className="d-flex flex-column align-items-center">
                            <button type="submit" className="btn btn-primary login-btn ">Register</button>   
                            </div>                  
                            </form>
                    </div>
                    
                </div>
               
                <div className="row">
                    <div className="col-sm-6">

                    </div>
                                    <div className="col-sm-6">
                                    <p className="logWith">Register With</p>
                                   
                                    <div className="d-flex flex-row justify-content-center">
                                    <div className="with-cont d-flex justify-content-center">
                                    <a href=""><img src="./images/login/facebook (4).svg"/></a>
                                    
                                    </div>
                                    <div className="with-cont d-flex justify-content-center">
                                    <a href=""><img src="./images/login/brands-and-logotypes (2).svg"/></a>
                                    </div>
                                    <div className="with-cont d-flex justify-content-center">
                                    <a href=""><img src="./images/login/company.svg"/></a>
                                    </div>
                                    </div> 
                                    <div className="d-flex justify-content-center flex-row" style={{marginTop:"40px"}}>
                                    <p className="forget-pass-font">Already have account?</p>
                                    <Link  to={'/login'} onClick={()=>this.handleClick}><p className="forget-pass-font" style={{color:"#2D62FC"}}> Click here to login</p></Link>       
                                    </div> 
                                </div>
                                </div>
            </div>
         );
    }
}
 
export default Register;