import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class RoadmapTabs extends Component {
  render(){
    return(
      <div>
        <Tabs defaultActiveKey={1} id="roadmap-tabs">
          <Tab eventKey={1} title="Tutors">tutors component goes here</Tab>
          <Tab eventKey={2} title="Students">students component goes here</Tab>
          <Tab eventKey={3} title="Graduates">grads component goes here</Tab>
        </Tabs>
      </div>
    );
  }
}

export default RoadmapTabs;