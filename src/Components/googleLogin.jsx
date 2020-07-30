import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {GoogleLogin} from 'react-google-login';

class GoogleLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

     responseGoogle = (response) => {
        console.log(response);
      }
    render() { 
        return ( 
            <GoogleLogin
                clientId="360396060545-ijdboihv2k6p7nl46dukhu5gmbgt3ee9.apps.googleusercontent.com"
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                  )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />,
            document.getElementById('googleButton')
         );
    }
}
 
export default GoogleLogin;