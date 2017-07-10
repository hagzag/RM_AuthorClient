import React, {Component} from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import '../App.scss';
class Siderbar extends Component {
    render() {
        return (
            <div className="sidebar">
                <Nav>
                    <NavItem href="#" >Search Roadmap <i className="icon-people" /></NavItem>
                    <NavItem href="#" >My Roadmaps <i className="icon-people" /></NavItem>
                </Nav>
            </div>
        );
    }
}
export default Siderbar;