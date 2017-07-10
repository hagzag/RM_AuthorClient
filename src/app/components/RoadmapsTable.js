import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class RoadmapTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ''
    }
  }

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
    const filteredData = this.props.roadmaps
      .filter(r => Object.values(r).join('||').indexOf(this.state.filter) >= 0)
      .map(r => this.renderRoadmap(r))

    return (
      <div>
        <div>
          Filter: <input placeholder="Type to filter..."
                         value={this.state.filter}
                         onChange={e => this.setState({filter: e.target.value})} />
        </div>
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
          { filteredData }
          </tbody>
          <tfoot>
          <tr>
            {this.props.roadmaps.map((roadmap, i) => this.renderRoadmap(roadmap, i))}
          </tr>
          </tfoot>
        </Table>
      </div>
    );
  }
}
