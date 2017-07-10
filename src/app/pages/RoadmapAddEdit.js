import React, {Component} from 'react';
import ReactDOM from 'react-dom';
let iframe;

class NewRoadmap extends Component {

    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        iframe = ReactDOM.findDOMNode(this.refs.tframe).contentWindow;
        // pm.subscribePostMessage("iframeService",iframe);
    }
    componentWillUnmount(){
        // pm.unSubscribePostMessage();
    }
    render() {
        return (
            <div style={{ height: '500px' }}>
                <iframe id="tframe" ref="tframe" width="100%" height="100%" src="http://localhost:3000" frameBorder="0"></iframe>
            </div>
        );
    }
}
export default NewRoadmap;