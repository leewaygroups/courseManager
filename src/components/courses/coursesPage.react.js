'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var CoursesPage = React.createClass({
  render: function () {
    return (
      <div>
        <h1> Courses</h1>
        <Link to="addCourse" className="btn btn-primary"> Add Course</Link>
      </div>
    );
  }
});

module.exports = CoursesPage;
