import React, { Component } from 'react';
import { connect } from 'react-redux';
class RoadmapsPage extends Component {
  render() {
    return (
      <h1>Roadmaps Page</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    roadmaps: state.roadmaps,
  };
};


export default connect(mapStateToProps)(RoadmapsPage);