/*** @jsx React.DOM */

var React = require('react');
var UserStore = require('../stores/UserStore');
var ActionCreator = require('../actions/UserActionCreators');

var Search = React.createClass({

    getInitialState: function () {
        return {value: ''};
    },
    handleChange: function (event) {
        this.setState({value: event.target.value});
        ActionCreator.updateSearchText(event.target.value);
    },
    /**
     * @return {object}
     */
    render: function () {
        return (
            <input onChange={this.handleChange} value={this.state.value} id="user-search" type="text" className={"form-control"} placeholder="search by name"></input>
        );
    },

});

module.exports = Search;