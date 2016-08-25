'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/AuthorActions');
var AuthorList = require('./authorList.react');

var AuthorsPage = React.createClass({
  getInitialState: function () {
    console.log(AuthorStore.getAllAuthors());
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  render: function () {

    return (
      <div>
        <h1> Authors </h1>
        <Link to="addAuthor" className="btn btn-primary">Add author </Link>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
});

module.exports = AuthorsPage;
