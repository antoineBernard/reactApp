import React, { Component } from 'react';

var TweetBox = React.createClass({
  getInitialState: function() {
    return {
      text: ""
    };
  },

  handleChange : function(event) {
    this.setState({ text: event.target.value });
  },

  overflowAlert: function() {
    if (this.remainingCharacters() < 0) {
      var beforeOverflowText = this.state.text.substring(140 - 10, 140);
      var overflowText       = this.state.text.substring(140);

      return (
        <div className="alert alert-warning">
          <strong>Oops! Too Long:</strong>
          &nbsp;...{beforeOverflowText}
          <strong className="bg-danger">{overflowText}</strong>
        </div>
      );
    } else {
      return "";
      }
  },

  remainingCharacters: function() {
    return 140 - this.state.text.length
  },

  render: function() {
    return (
      <div className="well clearfix">
        { this.overflowAlert() }
        <textarea className="form-control"
                  onChange={this.handleChange}></textarea>
        <br/>
        <span className="pull-left"> {140 - this.state.text.length} </span>
        <button className="btn btn-primary pull-right"
                disabled={this.state.text.length === 0}>Tweet</button>
      </div>
    );
  }
})

export default TweetBox;
