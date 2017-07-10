import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class RoadmapsTable extends Component {

  renderRoadmap = (rm, key) => (
    <tr key={key}>
      <td>{rm.title}</td>
      <td>{rm.version}</td>
      <td>{rm.tutors ? rm.tutors.length : 0}</td>
      <td>{rm.students ? rm.students.length : 0}</td>
      <td>{rm.graduates ? rm.graduates.length : 0}</td>
      <td><t-stars value={rm.rating}></t-stars></td>
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
          {this.props.roadmaps.map((roadmap, i) => this.renderRoadmap(roadmap, i))}
        </tbody>
      </Table>
    );
  }
}