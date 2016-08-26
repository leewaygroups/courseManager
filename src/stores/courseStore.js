'use strict';

var Emitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var CourseApi = require('../api/courseApi');

var CHANGE_EVENT = 'CHANGE_EVENT';
var _courses = [];

var CourseStore = assign({}, Emitter.prototype, {
  addChangeListener: function(listener){
    this.on(CHANGE_EVENT, listener);
  },

  removeChangeListener: function(listener){
    this.removeListener(CHANGE_EVENT, listener);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  getAllCourses: function(){
    return _courses;
  },

  getCourseById: function(id){
    return _.find(_courses, function(course){
      return course.id === id;
    });
  }

});

Dispatcher.register(function (action) {
  switch (action.actionType) {
    case ActionTypes.INITIALISE_APP:
     _courses = CourseApi.getAllCourses();
     CourseStore.emitChange();
     break;

    case ActionTypes.CREATE_COURSE:
      CourseApi.saveCourse(action.course);
      _courses.push(action.course);
      CourseStore.emitChange();
      break;

    case ActionTypes.UPDATE_COURSE:
      CourseApi.saveCourse(action.course);

      _courses.splice(_.findIndex(_courses, function(element){
        return element.id === action.course.id;
      }), 1);

      _courses.push(action.course);
      CourseStore.emitChange();
      break;

    case ActionTypes.DELETE_COURSE:
      CourseApi.deleteCourse(action.id);

      _courses.splice(_.findIndex(_courses, function(element){
        return element.id === action.id;
      }), 1);

      CourseStore.emitChange();
      break;

    default:
      break;
  }
});

module.exports = CourseStore;
