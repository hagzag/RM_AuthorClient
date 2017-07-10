import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoadmaps } from '../actions/Roadmap.actions';

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

const mapDispatchToProps = dispatch => {
  return {
    getRoadmaps: authorId => dispatch(getRoadmaps(authorId)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(RoadmapsPage);