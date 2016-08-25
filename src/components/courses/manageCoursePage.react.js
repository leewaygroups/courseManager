'use strict';

var React = require('react');
var CourseForm = require('./courseForm.react');
var Router = require('react-router');
var toastr  = require('toastr');
var CourseAction = require('../../actions/courseActions');

var AddAcoursePage = React.createClass({

  isFormValid: function(){
    var formIsValid = true;
    this.state.errors = {};

    if (this.state.course.title.trim().length < 3) {
      this.state.errors.title = "Title must have at least 3 letters.";
      this.setState({ errors: this.state.errors });
      formIsValid = false;
    }

    if (this.state.course.author.trim().length < 3) {
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

  saveCourse: function(event){
    event.preventDefault();
    if(!this.isFormValid()){
      return;
    }

    if(this.state.course.id){
      CourseAction.updateCourse(this.state.course);
    }else{
      CourseAction.createCourse(this.state.course);
    }

    this.setState({dirty: false});
    toastr.success('Course saved');
    this.transitionTo('addCourse')
  },

  onChange: function(event){
    this.setState({ dirty: true });
    var field = event.target.name;
    this.state.course[field] = event.target.value;
  },

  getInitialState: function(){
    return {
      course: {title: "", author: "", category: "", length: ""},
      errors: {},
      dirty: false
    };
  },

  mixins: [
    Router.Navigations
  ],

  render: function () {
    return (
      <div>
        <h1>Manage course</h1>
        <CourseForm
          course={this.state.course}
          errors={this.state.errors}
          onSave={this.saveCourse}
          onChange={this.onChange}/>
      </div>
    );
  }
});

module.exports = AddAcoursePage;
