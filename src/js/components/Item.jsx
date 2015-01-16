/*** @jsx React.DOM */

var React = require('react');
var UserStore = require('../stores/UserStore');
var ActionCreator = require('../actions/UserActionCreators');

var Item = React.createClass({

    render: function () {
        var item = this.props.item;
        return (
            <tr key={item.id}><td>{item.name}</td></tr>
        );
    },

});

module.exports = Item;