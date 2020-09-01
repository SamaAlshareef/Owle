import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Style.css';
import {Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Slider from './Components/slider';
import HomePage from './Components/HomePage';
import Login from './Components/login';
import Register from './Components/register';
import ForgetPass from './Components/forgetPass';
import ResetPass from './Components/resetPass';
import AboutUs from './Components/aboutUs';
import Admin from './Components/admin';
import GoogleLogin from 'react-google-login';
import Dashboard from './Components/dashboard';
import SalesManagement from './Components/salesManagement';
import FilteredSales from './Components/filteredSales';
import ProductEdit from './Components/ProductEdit';
import ShippingManagement from './Components/shippingManagement';
import OrderManagement from './Components/orderManagement';
import Blog from './Components/blog';
import BlogArticle from './Components/blogArticle';
import Podcast from './Components/podcast';

function App() {
  return (
    <React.Fragment>
       <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/forgetPass" component={ForgetPass}/>
      <Route exact path="/resetPass" component={ResetPass}/>
      <Route exact path="/aboutUs" component={AboutUs}/>
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/googleSign" component={GoogleLogin}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/sales-management" component={SalesManagement}/>
      <Route exact path="/filteredSales" component={FilteredSales}/>
      <Route exact path="/product-edit" component={ProductEdit}/>
      <Route exact path="/shipping-suggestions" component={ShippingManagement}/>
      <Route exact path="/order-management" component={OrderManagement}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/blog/article" component={BlogArticle}/>
      <Route exact path="/blog/podcast" component={Podcast}/>
    </React.Fragment>
  );
}

export default App;
