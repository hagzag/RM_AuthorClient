import React, { Component } from 'react';
import RoadmapTable from '../components/RoadmapTable';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getRoadmaps } from '../actions/Roadmap.actions';
import { Link } from 'react-router';

class RoadmapsPage extends Component {

  componentWillMount() {
      this.props.getRoadmaps(null);
  }

  openRoadmapWizard = () => {
    console.log('open roadmap wizard');
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
            <Link to="/add-roadmap"> Add Roadmap </Link>
        </Panel>
          <Panel header={header}>
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
