import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class RoadmapTable extends Component {
  constructor(props) {
      super(props)

      this.state = {
          filter: ''
      }
  }

  renderRecord = r => (
    <tr key={r.id}>
      <td>{r.title}</td>
      <td>{r.version}</td>
      <td>{r.num_tutors}</td>
      <td>{r.num_students}</td>
      <td>{r.num_grads}</td>
      <td><t-stars value={r.rating} /></td>
    </tr>
  );

  render() {
    const filteredData = this.props.data
        .filter(r => Object.values(r).join('||').indexOf(this.state.filter) >= 0)
        .map(r => this.renderRecord(r))

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
                        <td colSpan="6">Showing 1 to {this.props.data.length} of {this.props.data.length} entries</td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
  }
}
