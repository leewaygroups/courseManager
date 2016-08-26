'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var CourseActions = {
  createCourse: function (course) {
    //notify stores about CREATE_COURSE action.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSE,
      course: course
    });
  },

  updateCourse: function(course){
    //notify stores about UPDATE_COURSE action
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_COURSE,
      course: course
    });
  },

   deleteCourse: function(id){
    //notify stores about DELETE_COURSE action.
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_COURSE,
      id: id
    });
  }
};

module.exports = CourseActions;
