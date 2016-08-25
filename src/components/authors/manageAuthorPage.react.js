'use strict';

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var AuthorForm = require('./AuthorForm.react');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/AuthorActions');

var AddAuthor = React.createClass({
  onChange: function (event) {
    this.setState({ dirty: true });
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    this.setState({
      author: this.state.author
    });
  },

  authorFormIsValid: function () {
    var formIsValid = true;
    this.state.errors = {};

    if (this.state.author.firstName.trim().length < 3) {
      this.state.errors.firstName = "First name must have at least 3 letters.";
      this.setState({ errors: this.state.errors });
      formIsValid = false;
    }

    if (this.state.author.lastName.trim().length < 3) {
      this.state.errors.lastName = "Last name must have at least 3 letters.";
      this.setState({ errors: this.state.errors });
      formIsValid = false;
    }

    return formIsValid;
  },

  saveAuthor: function (event) {
    event.preventDefault();

    if (!this.authorFormIsValid()) {
      return;
    }

    if(this.state.author.id){
      AuthorActions.updateAuthor(this.state.author);
    }else{
      AuthorActions.createAuthor(this.state.author);
    }

    this.setState({ dirty: false });
    toastr.success('Author saved.');
    this.transitionTo('authors');
  },

  statics: {
    willTransitionFrom: function (transition, component) {
      if (component.state.dirty && !confirm("Leave without saving?")) {
        transition.abort();
      }
    }
  },

  mixins: [
    Router.Navigation
  ],

  getInitialState: function () {
    return {
      author: { id: "", firstName: "", lastName: "" },
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function () {
    var authorId = this.props.params.id;
    if (authorId && authorId.trim().length) {
      var existingAuthor = AuthorStore.getAuthorById(authorId);
      if (existingAuthor) {
        this.setState({ author: existingAuthor });
      }
    }
  },

  render: function () {
    return (
      <div>
        <h1>Manage author</h1>
        <AuthorForm
          author={this.state.author}
          onChange={this.onChange}
          onSave={this.saveAuthor}
          errors={this.state.errors} />
      </div>
    );
  }
});

module.exports = AddAuthor;
