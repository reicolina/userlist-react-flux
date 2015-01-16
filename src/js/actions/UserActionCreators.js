var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

    updateName: function (name) {
        AppDispatcher.handleViewAction({
            type: Constants.ActionTypes.UPDATE_NAME,
            text: name
        });
    },
    updatePhone: function (phone) {
        AppDispatcher.handleViewAction({
            type: Constants.ActionTypes.UPDATE_PHONE,
            text: phone
        });
    },
    createUser: function (name) {
        AppDispatcher.handleViewAction({
            type: Constants.ActionTypes.CREATE,
            text: name
        });
    },
    deleteUser: function (id) {
        AppDispatcher.handleViewAction({
            type: Constants.ActionTypes.DESTROY,
            id: id,
            text: ""
        });
    },
    updateSearchText: function (text) {
        AppDispatcher.handleViewAction({
            type: Constants.ActionTypes.UPDATE_SEARCH_TEXT,
            text: text
        });
    }


};