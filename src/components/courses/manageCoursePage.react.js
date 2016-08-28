'use strict';

var React = require('react');
var CourseForm = require('./courseForm.react');
var Router = require('react-router');
var toastr = require('toastr');
var _ = require('lodash');
var CourseAction = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');

var AddAcoursePage = React.createClass({

  isFormValid: function () {
    var formIsValid = true;
    this.state.errors = {};

    if (this.state.course.title.trim().length < 3) {
      this.state.errors.title = "Title must have at least 3 letters.";
      this.setState({ errors: this.state.errors });
      formIsValid = false;
    }

    if (this.state.course.author.name.trim().length < 3) {
      this.state.errors.author = "Course must have at least one author.";
      this.setState({ errors: this.state.errors });
      formIsValid = false;
    }

    if (this.state.course.category.trim().length < 3) {
      this.state.errors.category = "Course be in at least one category.";
      this.setState({ errors: this.state.errors });
      formIsValid = false;
    }

    return formIsValid;
  },

  saveCourse: function (event) {
    event.preventDefault();
    if (!this.isFormValid()) {
      return;
    }

    if (this.state.course.id) {
      CourseAction.updateCourse(this.state.course);
    } else {
      CourseAction.createCourse(this.state.course);
    }

    this.setState({ dirty: false });
    toastr.success('Course saved');
    this.transitionTo('courses');
  },

  onChange: function (event) {
    this.setState({ dirty: true });
    var field = event.target.name;
    this.state.course[field] = event.target.value;
  },

  onCourseAuthorChange: function () {
    this.setState({ dirty: true });
    debugger;
    var option = _.find(event.target.options, function(element){
      return element.value === event.target.value;
    });

    this.state.course.author = {
      id: option.id,
      name: event.target.value
    };
  },

  deriveAuthorName: function(){
    return AuthorStore.getAllAuthors().map(function(author){
      author.name = author.firstName + " " + author.lastName;
      return author;
    });
  },

  getInitialState: function () {
    return {
      course: { title: "", author: { id: 0, name: "" }, category: "", length: "" },
      authors: this.deriveAuthorName(),
      errors: {},
      selectedCourseAuthor: "",
      dirty: false
    };
  },

  componentWillMount: function () {
    var courseId = this.props.params.id;
    if (courseId) {
      var existingCourse = _.find(CourseStore.getAllCourses(), function (course) {
        return course.id === courseId;
      });

      if (existingCourse) {

        this.setState({
          course: existingCourse,
          selectedCourseAuthor: existingCourse.author.name
        });
      }
    }
  },

  mixins: [
    Router.Navigation
  ],

  render: function () {
    return (
      <div>
        <h1>Manage course</h1>
        <CourseForm
          course={this.state.course}
          authors={this.state.authors}
          errors={this.state.errors}
          onSave={this.saveCourse}
          onChange={this.onChange}
          courseAuthorChange={this.onCourseAuthorChange} />
      </div>
    );
  }
});

module.exports = AddAcoursePage;
