/*** @jsx React.DOM */

var React = require('react');

var Counter = React.createClass({

    render: function () {
        var count = this.props.count;
        var entity = this.props.entity;
        return (
            <p className={"text-right"}>Displaying {count} {entity}</p>
        );
    },

});

module.exports = Counter;