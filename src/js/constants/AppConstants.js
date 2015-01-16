var keyMirror = require('react/lib/keyMirror');

module.exports = {

    CHANGE_EVENT: 'change',

    ActionTypes: keyMirror({
        CREATE: null,
        UPDATE_NAME: null,
        UPDATE_PHONE: null,
        UPDATE_SEARCH_TEXT: null,
        DESTROY: null,
        UPDATE_TITLE: null,
        RECEIVE_DATA: null
    }),

    ActionSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })

};
