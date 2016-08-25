/* eslint-disable strict */

var React = require('react');
$ = jQuery = require('jquery');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./common/header.react');

 var App = React.createClass({
    render: function () {
      return (
        <div>
          <Header />
          <div className="container-fluid">
            <RouteHandler />
          </div>
        </div>
      );
    }
  });

module.exports = App;
