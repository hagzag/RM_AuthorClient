import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoadmaps } from '../actions/Roadmap.actions';
import RoadmapsTable from '../components/RoadmapsTable';

class RoadmapsPage extends Component {

  componentWillMount() {
    debugger;
    this.props.getRoadmaps();
  }

  render() {
    return (
      <div>
        <h1>Roadmaps Page</h1>
        <RoadmapsTable roadmaps={this.props.roadmaps} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  debugger;
  return {
    roadmaps: state.roadmaps.roadmaps,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRoadmaps: authorId => dispatch(getRoadmaps(authorId)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(RoadmapsPage);