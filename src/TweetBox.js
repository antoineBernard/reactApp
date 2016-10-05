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

  render: function() {
    return (
      <div className="well clearfix">
        <textarea className="form-control"
                  onChange={this.handleChange}></textarea>
        <br/>
        <button className="btn btn-primary pull-right disabled">Tweet</button>
        <br/>
        {this.state.text}
      </div>
    );
  }
})

export default TweetBox;
