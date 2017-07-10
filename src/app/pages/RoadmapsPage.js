import React, { Component } from 'react';
import RoadmapTable from '../components/RoadmapTable';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getRoadmaps } from '../actions/Roadmap.actions';
import { Button } from 'react-bootstrap';

class RoadmapsPage extends Component {

  componentWillMount() {
      this.props.getRoadmaps(null);
  }

  openRoadmapWizard = () => {
    console.log('open roadmap wizard');
  };

  render() {
    return (
      <div>
        <Panel>
          <Button onClick={this.openRoadmapWizard}>Add RoadMap</Button>
        </Panel>
          <Panel header="Active Roadmaps">
              <RoadmapTable data={this.props.roadmaps} />
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
