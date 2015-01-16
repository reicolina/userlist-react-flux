var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/AppConstants');
var merge = require('react/lib/merge');
var assign = require('object-assign');

// hardcoding initial users
var _users = [
        {id: "1", name: "Bob", phone: "555-666-7777"},
        {id: "2", name: "Ted", phone: "666-999-0000"},
        {id: "3", name: "Luis", phone: "111-222-3333"}
    ];

var _searchText = '';

/**
* Create a user.
* @param  {string} text The content of the TODO
*/
function create(name, phone) {
    // Hand waving here -- not showing how this interacts with XHR or persistent
    // server-side storage.
    // Using the current timestamp + random number in place of a real id.
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _users.push({id: id, name: name, phone: phone});
}

/**
 * Update a user
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(id, updates) {
    _users[id] = assign({}, _users[id], updates);
}

/**
 * Delete a user.
 * @param  {string} id
 */
function destroy(id) {
    delete _users[id];
}

var UserStore = merge(EventEmitter.prototype, {

    // public methods used by Controller-View to operate on data
    get: function (id) {
        return _users[id];
    },
    getAll: function () {
        if (_searchText) {
            var i, filteredUsers = [];
            for (i = 0; i < _users.length; i++) {
                if (_users[i].name.indexOf(_searchText) > -1) {
                    filteredUsers.push(_users[i]);
                }
            }
            return filteredUsers;
        }
        return _users;
    },

    // Allow Controller-View to register itself with store
    addChangeListener: function (callback) {
        this.on(Constants.CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(Constants.CHANGE_EVENT, callback);
    },
    // triggers change listener above, firing controller-view callback
    emitChange: function () {
        this.emit(Constants.CHANGE_EVENT);
    },

    // register store with dispatcher, allowing actions to flow through
    dispatcherIndex: AppDispatcher.register(function (payload) {
        var action = payload.action, text;
        switch (action.type) {
        case Constants.ActionTypes.CREATE:
            text = action.text.trim();
            if (text !== '') {
                create(text, '555-555-5555'); // phone is hardcoded for now!
                UserStore.emitChange();
            }
            break;
        case Constants.ActionTypes.UPDATE_NAME:
            text = action.text.trim();
            if (text !== '') {
                update(action.id, {name: text});
                UserStore.emitChange();
            }
            break;
        case Constants.ActionTypes.UPDATE_PHONE:
            text = action.text.trim();
            if (text !== '') {
                update(action.id, {phone: text});
                UserStore.emitChange();
            }
            break;
        case Constants.ActionTypes.DESTROY:
            destroy(action.id);
            UserStore.emitChange();
            break;
        case Constants.ActionTypes.UPDATE_SEARCH_TEXT:
            _searchText = action.text;
            UserStore.emitChange();
            break;
        // add more cases for other actionTypes...
        }
    })

});

module.exports = UserStore;
