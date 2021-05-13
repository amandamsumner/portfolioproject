import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="jumbotron jumbrotron-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-3 col-md-2 align-self-center">
                        <img src="images/wanderlustlogo.jpg" class="img-fluid" />
                    </div>
                    <div className="col">
                        <h1>Wanderlust Shipping</h1>
                        <h2>The Strongest and Most Responsive for your Shipping Needs</h2>
                    </div>
                    <div className="col-md-4 col-xl-2 mt-4">
                        <a className="btn btn-info btn-lg" role="button" data-toggle="modal" data-target="#quoteModal">Obtain Quote</a>
                    </div>
                </div>
            </div>
        </header>
        <div id="quoteModal" class="modal fade" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-info text-white">
                        <h3 class="modal-title">Obtain a Shipping Quote</h3>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <form>
                                <div class="row form-group">
                                    <label for="numItems" class="col-sm-6 col-form-label">Number of Items Shipped</label>
                                    <div class="col">
                                        <select name="numItems" id="numItems" class="form-control">
                                            <option value="select">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <label for="date" class="col-sm-6 col-form-label">Shipping Date</label>
                                    <div class="col">
                                        <input type="date" name="date" id="date" class="form-control" />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <label class="col-sm-6 col-form-label">Shipping Type</label>
                                    <div class="col-2 btn-group btn-group-toggle" data-toggle="buttons">
                                        <label className="btn btn-success-active">
                                            <input type="radio" name="shippingType" id="shippingAir" autocomplete="off" value="air" checked>Air
                                        </label>
                                        <label class="btn btn-primary">
                                            <input type="radio" name="shippingType" id="shippingSea" autocomplete="off" value="sea">Sea
                                        </label>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col">
                                        <button class="btn btn-secondary" type="cancel" data-dismiss="modal">Cancel</button>
                                        <button class="btn btn-primary" type="submit">Get Quote</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
            <div class="container">
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#wanderlustNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="wanderlustNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item active"> <a class="nav-link" href="#"> <i class="fa fa-home fa-lg"></i> Home</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="aboutus.html"><i class="fa fa-info fa-lg"></i>About Us</a></li>
                        <li class="nav-item"> <a class="nav-link" href="vendors.html"><i class="fa fa-list fa-lg"></i> Vendor Sites</a></li>
                        <li class="nav-item"> <a class="nav-link" href="reviews.html">Reviews</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div>
            <img src="images/wanderlust.jpg">
        </div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="aboutus.html">About Us</a></li>
                            <li><a href="reviews.html">Vendor Reviews</a></li>
                            <li><a href="vendors.html">Vendor Sites</a></li>
                        </ul>
                    </div>
                </div>
            </div>    
        </footer>
       
      </div>
    );
  }
}
export default App;
