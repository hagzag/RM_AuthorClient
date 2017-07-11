import React, { Component } from 'react';
import RoadmapsTable from '../components/RoadmapsTable';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getRoadmaps } from '../actions/Roadmap.actions';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class RoadmapsPage extends Component {

  componentWillMount() {
      this.props.getRoadmaps(null);
  }

  openRoadmapWizard = () => {
    console.log('open roadmap wizard');
    browserHistory.push('newroadmap');
  };

  render() {
    const header = (
        <h2>
            <span className="fa fa-calendar" aria-hidden="true">&nbsp;&nbsp;</span>
            Active Roadmaps
        </h2>
    )

    return (
      <div>
        <Panel>
          <Button onClick={this.openRoadmapWizard}>Add RoadMap</Button>
        </Panel>
          <Panel header={header}>
              <RoadmapsTable roadmaps={this.props.roadmaps} />
          </Panel>
      </div>
    );
  }
}

const mapStateToProps = state => {
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
