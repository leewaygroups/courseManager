'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/ActionTypes');
var AuthorApi = require('../api/authorApi');
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function (lister) {
    this.on(CHANGE_EVENT, lister);
  },

  removeChangeListener: function (lister) {
    this.removeListener(CHANGE_EVENT, lister);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors: function () {
    return _authors;
  },

  getAuthorById: function (id) {
    return _.find(_authors, { id: id });
  }
});

Dispatcher.register(function (action) {
  switch (action.actionType) {
    case ActionTypes.INITIALISE_APP:
      _authors = action.initalData.authors;
      AuthorStore.emitChange();
      break;

    case ActionTypes.CREATE_AUTHOR:
      AuthorApi.saveAuthor(action.author);
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;

    case ActionTypes.UPDATE_AUTHOR:
      AuthorApi.saveAuthor(action.author);

      _authors.splice(_.findIndex(_authors, function (element) {
        return element.id === action.author.id;
      }), 1);

      _authors.push(action.author);
      AuthorStore.emitChange();
      break;

    case ActionTypes.DELETE_AUTHOR:
      AuthorApi.deleteAuthor(action.id);

      _authors.splice(_.findIndex(_authors, function (element) {
        return element.id === action.id;
      }), 1);

      AuthorStore.emitChange();
      break;

    default:
      break;
  }
});

module.exports = AuthorStore;
