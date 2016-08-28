'use strict';

var React = require('react');
var Input = require('../common/input.react');
var Selection = require('../common/selection.react');

var CourseForm = React.createClass({
  proptypes: {
    course: React.PropTypes.object.isRequired,
    authors: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    courseAuthorChange: React.PropTypes.func.isRequired,
    selectedValue: React.PropTypes.object.isRequired,
    errors: React.PropTypes.object
  },

  render: function () {
    return (
       <form>
        <Input
          name="title"
          label="Title"
          onChange={this.props.onChange}
          value={this.props.course.title}
          error={this.props.errors.title} />

        <Selection name="author"
          label= "Author"
          name="coursAuthor"
          authors={this.props.authors}
          onChange={this.props.courseAuthorChange}
          selectedValue={this.props.selectedValue} />

        <Input
          name="category"
          label="Category"
          onChange={this.props.onChange}
          value={this.props.course.category}
          error={this.props.errors.category} />

        <Input
          name="length"
          label="Length"
          onChange={this.props.onChange}
          value={this.props.course.length}
          error={this.props.errors.length} />

        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
      </form>
    );
  }
});

module.exports = CourseForm;
