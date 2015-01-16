/*** @jsx React.DOM */

var React = require('react');
var UserStore = require('../stores/UserStore');
var ActionCreator = require('../actions/UserActionCreators');

var Item = React.createClass({

    render: function () {
        var item = this.props.item;
        return (
            <tr key={item.id}><td>{item.name}</td><td><button className={"btn btn-danger btn-xs pull-right"}>x</button></td></tr>
        );
    },

});

module.exports = Item;