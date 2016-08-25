'use strict';

var React = require('react');
var Input = require('../common/input.react');

var AuthorForm = React.createClass({
  propTypes: {
    author: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },

  render: function () {
    return (
      <form>
        <Input
          name="firstName"
          label="First Name"
          onChange={this.props.onChange}
          value={this.props.author.firstName}
          error={this.props.errors.firstName} />

          <Input
            name="lastName"
            label="Last Name"
            onChange={this.props.onChange}
            value={this.props.author.lastName}
            error={this.props.errors.lastName} />

          <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
      </form>
    );
  }
});

module.exports = AuthorForm;
