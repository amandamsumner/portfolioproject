import React from "react";

export const Header = () => {
  return (
    <header className="jumbotron jumbrotron-fluid">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-3 col-md-2 align-self-center">
            <image src="./images/wanderlustlogo.jpg" className="img-fluid" />
          </div>
          <div className="col">
            <h1>Wanderlust Shipping</h1>
            <h2>The Strongest and Most Responsive for your Shipping Needs</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
