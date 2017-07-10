import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class RoadmapTable extends Component {

  renderRoadmap = rm => (
    <tr>
      <td>{rm.title}</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  );

  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Title</th>
          <th>Version</th>
          <th># Tutors</th>
          <th># Students</th>
          <th># Graduates</th>
          <th>Ratings</th>
        </tr>
        </thead>
        <tbody>
          {this.props.roadmaps.map(roadmap => this.renderRoadmap(roadmap))}
        </tbody>
      </Table>
    );
  }
}