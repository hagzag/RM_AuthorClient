import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { addRoadmap } from '../actions/Roadmap.actions';
import { store } from '../../index';
import { browserHistory } from 'react-router';


let iframe;

export default class NewRoadmap extends Component {

  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    iframe = ReactDOM.findDOMNode(this.refs.tframe).contentWindow;
    // pm.subscribePostMessage("iframeService",iframe);
  }

  handleIframeMsg = ({ data }) => {
    if (data) {
      const parsedData = JSON.parse(event.data);
      const {onSave} = parsedData;
      console.log(`Message to save from iFrame ${onSave}`);
      const newRm = {
        title: onSave.title,
        description: onSave.description,
        tutors: [],
        students: [],
        graduates: [],
        rating: 0,
      };
      debugger;
      store.dispatch(addRoadmap(newRm));
      browserHistory.push('roadmaps');
    }
  };

  componentWillMount(){
    window.addEventListener('message', this.handleIframeMsg, false);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleIframeMsg);
  }

  render() {
    const url = 'https://build-ochdtjxwoi.now.sh/';
    return (
      <div className="new-roadmap-page">
        <iframe id="tframe" ref="tframe" width="100%" height="100%" src={url} frameBorder="0"></iframe>
      </div>
    );
  }
}