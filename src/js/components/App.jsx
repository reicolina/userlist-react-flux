/*** @jsx React.DOM */

var React = require('react');
var UserStore = require('../stores/UserStore');
var ActionCreator = require('../actions/UserActionCreators');
var Search = require('../components/Search.jsx');
var List = require('../components/List.jsx');
var Counter = require('../components/Counter.jsx');

function getUsersState() {
    return {
        allUsers: UserStore.getAll()
    };
}

var App = React.createClass({

    _onChange: function () {
        this.setState(getUsersState());
    },
    _onCreateClick: function () {
        ActionCreator.createUser(prompt("Enter name for new user"));
    },
    getInitialState: function () {
        return getUsersState();
    },

    componentDidMount: function () {
        UserStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        UserStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div>
                <h3>User List</h3>
                <div style={{width: '300px'}}>
                    <Search /><br />
                    <List items={this.state.allUsers} />
                    <Counter entity={'users'} count={this.state.allUsers.length} />
                    <button id="new-user" className={"btn btn-primary pull-right"} onClick={this._onCreateClick}>New User</button>
                </div>
            </div>
        );
    }

});

module.exports = App;
