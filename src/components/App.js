import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

import ScrollToTop from './ScrollToTop';
import UserList from './user/UserList';
import UserBlock from './user/UserBlock';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedUser: null,
    };
  }

  componentDidMount() {
    this.props.fetchUsers().then( () => {
      const url = /[^/]*$/.exec(window.location.href)[0];
      this.setState({
        selectedUser: url ? this.props.users[url] : null,
      });
    });
  }

  renderUserBlock = () => {
    if (this.state.selectedUser) {
      return (
        <Route 
          exact 
          path="/:uuid" 
          render={ 
            (props) => <UserBlock {...props} currentUser={ this.state.selectedUser } /> 
          }
        />
      );
    }
  }
  
  render() {
    if (!this.props.users) return null;
    return (
      <Router>
        <ScrollToTop>
          <div className="section-wrap">
            <section className="user-block">
              { this.renderUserBlock() }
            </section>
            <UserList 
              userList={ this.props.users } 
              selectedUser={ this.state.selectedUser }
              onUserSelect={ 
                selectedUser => {
                  this.setState({selectedUser});
                }
              }
            />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, { fetchUsers })(App);
