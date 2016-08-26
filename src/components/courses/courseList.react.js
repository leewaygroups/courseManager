'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var toastr = require('toastr');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');

var CourseList = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired
  },

  _onChange: function(){
    this.setState({
      courses: CourseStore.getAllCourses()
    });
  },

  componentWillMount: function(){
    CourseStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    CourseStore.removeChangeListener(this._onChange);
  },

  deleteCourse: function(id, event){
    event.preventDefault();
    CourseActions.deleteCourse(id);
    toastr.success('Course deleted.');
  },

  watchCourse: function(course, event){
    //play course video
  },

  render: function () {
    var createCourseRow = function (course) {
      return (
        <tr key={course.id}>
          <td><a href="#" className="btn btn-danger" onClick={this.deleteCourse.bind(this, course.id)} >Delete</a></td>
          <td><a href="#" className="btn btn-success" onClick={this.watchCourse.bind(this, course)} >Watch</a></td>
          <td><Link to="manageCourse" params={{ id: course.id }}>{course.title}</Link></td>
          <td>{course.author.name}</td>
          <td>{course.category}</td>
          <td>{course.length}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th></th>
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Duration</th>
          </thead>
          <tbody>
            {this.props.courses.map(createCourseRow, this) }
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = CourseList;
