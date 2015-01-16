/*** @jsx React.DOM */

var React = require('react');
var ActionCreator = require('../actions/UserActionCreators');

var Item = React.createClass({
    _onDeleteClick: function () {
        ActionCreator.deleteUser(this.props.item.id);
    },

    render: function () {
        var item = this.props.item;
        return (
            <tr key={item.id}><td>{item.name}</td><td><button onClick={this._onDeleteClick} className={"btn btn-danger btn-xs pull-right"}>x</button></td></tr>
        );
    },

});

module.exports = Item;