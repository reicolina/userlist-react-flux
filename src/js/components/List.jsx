/*** @jsx React.DOM */

var React = require('react');
var UserStore = require('../stores/UserStore');
var ActionCreator = require('../actions/UserActionCreators');
var Item = require('../components/Item.jsx');

var List = React.createClass({
    render: function () {
        // This section should be hidden by default
        // and shown when there are todos.
        if (Object.keys(this.props.items).length < 1) {
            return null;
        }
        var allItems = this.props.items;
        var items = [], key;

        for (key in allItems) {
            items.push(<Item key={key} item={allItems[key]} />);
        }
        return (
            <table id="user-list" className={"table table-hover .table-condensed"}><tbody>{items}</tbody></table>
        );
    },

});

module.exports = List;