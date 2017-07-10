import React, { Component } from 'react';
import RoadmapTable from "./components/RoadmapTable";
import Sidebar from "./components/Sidebar";
import './App.scss';


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
        <t-header ref={(e) => { this.tHeader = e; }} logo-name="logoName" logo-url="http://pach.com" user-url="http://avatar.jpg" user-name="Ortal"></t-header>
        <div>
        <Sidebar></Sidebar>
        <div class="source"></div>
        </div>
      </div>
    );
  }

      componentDidMount() {
        this.tHeader.messages = [
            {
                avatarUrl: 'https://avatars1.githubusercontent.com/u/681169?v=3',
                text: 'this is the message 123',
                date: '27/8/16',
                isNew: true
            },
            {
                avatarUrl: 'https://avatars1.githubusercontent.com/u/681169?v=3',
                text: 'another message another message 56747',
                date: '26/8/16',
                isNew: false
            }];
    }
}
