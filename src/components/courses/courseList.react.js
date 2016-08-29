'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var toastr = require('toastr');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
//var Modal = require('../common/modal.react');
var Modal = require('../common/modal2.react');

var CourseList = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired
  },

  openModal: function(course, event) {
    debugger;
    event.preventDefault();
    this.setState({ isModalOpen: true });
  },

  closeModal: function() {
    this.setState({ isModalOpen: false });
  },

  _onChange: function () {
    this.setState({
      courses: CourseStore.getAllCourses()
    });
  },

  componentWillMount: function () {
    CourseStore.addChangeListener(this._onChange);
    this.setState({
      isModalOpen: false
    });
  },

  componentWillUnmount: function () {
    CourseStore.removeChangeListener(this._onChange);
  },

  deleteCourse: function (id, event) {
    event.preventDefault();
    CourseActions.deleteCourse(id);
    toastr.success('Course deleted.');
  },

  watchCourse: function (course, event) {
    //play course video
    event.preventDefault();
    console.log("To be implemented");
  },

  render: function () {
    var createCourseRow = function (course) {
      return (
        <tr key={course.id}>
          <td><a href="#" className="btn btn-danger" onClick={this.deleteCourse.bind(this, course.id) } >Delete</a></td>
          <td><a href="#" className="btn btn-success" data-toggle="modal" data-target="#myModal" >Watch</a></td>
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
        <div>
          <Modal />
        </div>
      </div>
    );
  }
});

module.exports = CourseList;
