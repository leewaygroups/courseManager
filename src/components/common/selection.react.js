'use strict';

var React = require('react');

var Selection = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        authors: React.PropTypes.array.isRequired,
        onChange: React.PropTypes.func.isRequired,
        selectedValue: React.PropTypes.object.isRequired
    },

    addOptions: function(author){
      return (
         <option id={author.id} key={author.id} value={author.name}>{author.firstName} {author.lastName}</option>
      );
    },

    render: function() {
      var wrapperClass = "form-group";
        return (
          <div className={wrapperClass}>
            <label htmlFor={this.props.name}>{this.props.label}</label>
            <div className="field">
              <select className="form-control"
                name={this.props.name}
                id={this.props.selectedValue.id}
                ref={this.props.name}
                onChange={this.props.onChange}
                value={this.props.selectedValue.name}>
                {this.props.authors.map(this.addOptions, this)}
              </select>
            </div>
          </div>
        );
    }
});

module.exports = Selection;
