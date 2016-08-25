'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
  createAuthor: function (author) {

    //notify stores about CREATE_AUTHOR action.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: author
    });
  },

  updateAuthor: function (author) {
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: author
    });
  },

  deleteAuthor: function (id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    });
  }
};

module.exports = AuthorActions;
