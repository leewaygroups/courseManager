'use strict';

var React = require('react');

var Selection = React.createClass({
  render: function () {
    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">

        </div>
      </div>
    );
  }
});
