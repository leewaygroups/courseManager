'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseStore = require('../../stores/courseStore');
var CourseList = require('./courseList.react');

var CoursesPage = React.createClass({
  getInitialState: function(){
    return {
       courses: CourseStore.getAllCourses(),
       isModalOpen: false
    };
  },

  render: function () {
    return (
      <div>
        <h1> Courses</h1>
        <Link to="addCourse" className="btn btn-primary"> Add Course</Link>
        <CourseList courses={this.state.courses} />
      </div>
    );
  }
});

module.exports = CoursesPage;
