import React, { Component } from 'react';
import Sidebar from "./components/Sidebar";
import RoadmapsPage from "./pages/RoadmapsPage";
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="main">
          <header>
              <t-header ref={(e) => { this.tHeader = e; }} logo-name="logoName" logo-url="http://pach.com" user-url="http://avatar.jpg" user-name="Ortal"></t-header>
          </header>
          <section>
              <Sidebar></Sidebar>
            {this.props.children}
          </section>
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
            }
        ]
    }
}
