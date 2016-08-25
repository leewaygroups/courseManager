'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');

var InitialiseActions = {
  initApp: function () {

    //app initialisation actions.
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALISE_APP,
      initalData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
};

module.exports = InitialiseActions;
