"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var HomePage = React.createClass({
  render: function () {
    return (
      <div className="jumbotron">
        <h1>React Demo App</h1>
        <p>App demoing React, React Router and Flux </p>
        <Link to="about" className="btn btn-primary btn-lg"> Learn more </Link>
      </div>
    );
  }
});

module.exports = HomePage;
