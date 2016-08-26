'use strict';

var React = require('react');

var Selection = React.createClass({
  render: function () {
    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <select className="form-control"
              name={this.props.name}
              ref={this.props.name}
              onChange={this.props.onChange}
              value={this.props.value}
            </select>
            <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
});

module.exports = Selection;


/*
var MyParent = React.createClass({
    getInitialState: function() {
        return {
            childSelectValue: undefined
        }
    },
    changeHandler: function(e) {
        this.setState({
            childSelectValue: e.target.value
        })
    },
    render: function() {
        return (
            <div>
                <MySelect
                    url="http://foo.bar"
                    value={this.state.childSelectValue}
                    onChange={this.changeHandler}
                />
            </div>
        )
    }
});

var MySelect = React.createClass({
    propTypes: {
        authors: React.PropTypes.object.isRequired
    },

    addOptions: function(author){
      return (
         <option key={author.id} value={author.name}>{author.name}</option>
      );
    },

    render: function() {
        return (
            <select>
              {this.props.authors.map(addOptions, this)}
            </select>
        );
    }
});*/
