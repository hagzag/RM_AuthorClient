import React, { Component } from 'react';
import RoadmapTable from "./components/RoadmapTable";

export default class App extends Component {
  data = [
      {id:1, title:'foo', version:1.0, num_tutors:5, num_students:2, num_grads:10, rating:5},
      {id:2, title:'bar', version:1.0, num_tutors:5, num_students:2, num_grads:10, rating:2},
      {id:3, title:'baz', version:1.0, num_tutors:5, num_students:2, num_grads:10, rating:4},
      {id:4, title:'foo', version:1.0, num_tutors:5, num_students:2, num_grads:10, rating:1},
  ]

  render() {
    return (
      <div>
        <div>authors</div>
        <RoadmapTable data={this.data} />
      </div>
    );
  }
}
