'use strict';

var React = require('react');

var Selection = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        authors: React.PropTypes.array.isRequired,
        onChange: React.PropTypes.func.isRequired,
        value: React.PropTypes.string
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
                ref={this.props.name}
                onChange={this.props.onChange}
                value={this.props.value}>
                {this.props.authors.map(this.addOptions, this)}
              </select>
            </div>
          </div>
        );
    }
});

module.exports = Selection;



/*<Selection name="author"
  label= "Author"
  name="coursAuthor"
  authors={this.state.authors}
  onChange={this.state.changeHandler}
  value={this.state.selectedValue}/>
*/

/*var Selection = React.createClass({
  render: function () {
    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <select className="form-control"
              name={this.props.name}
              ref={this.props.name}
              onChange={this.props.onChange}
              value={this.props.value}>
            </select>
            <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
});*/


//
/*var MyParent = React.createClass({
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
                <Selection
                    authors={this.state.authors}
                    value={this.state.childSelectValue}
                    onChange={this.changeHandler}
                />
            </div>
        )
    }
});*/

