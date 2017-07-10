import React, { Component } from 'react';
import RoadmapTable from "./components/RoadmapTable";
import RoadmapTabs from "./components/RoadmapTabs";

class App extends Component {
  render() {
    return (
      <div>
        <div>authors</div>
        <RoadmapTabs/>
      </div>
    );
  }
}

export default App;