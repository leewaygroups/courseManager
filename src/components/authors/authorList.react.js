'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var toastr = require('toastr');
var AuthorActions = require('../../actions/AuthorActions');
var AuthorStore = require('../../stores/authorStore');

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  _onChange: function(){
    this.setState({
      authors: AuthorStore.getAllAuthors()
    });
  },

  componentWillMount: function(){
    AuthorStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AuthorStore.removeChangeListener(this._onChange);
  },

  deleteAuthor: function(id, event){
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success('Author deleted.');
  },

  render: function () {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><a href="#" className="btn btn-danger" onClick={this.deleteAuthor.bind(this, author.id)} >Delete</a></td>
          <td><Link to="manageAuthor" params={{ id: author.id }} >{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this) }
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = AuthorList;
