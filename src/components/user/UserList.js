import _ from 'lodash';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FilterResults from 'react-filter-search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-light-svg-icons';


import UserCard from './UserCard';
import '../../scss/UserList.scss';

class UserList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      searchData: _.values(props.userList)
    };
    console.log(this.state.searchData)
  }

  _handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  }

  renderUsers() {
    const { value, searchData } = this.state;
    return (
      <FilterResults
        value={ value }
        data={ searchData }
        renderResults={results => (
          <div className="user-list-inner">
            {results.map(user => (
              <UserCard 
                onUserSelect={ this.props.onUserSelect }
                history={ this.props.history }
                user={ user }
                selectedUser={ this.props.selectedUser } 
                key={ user.login.uuid } 
              />
            ))}
          </div>
        )}
      />
    );
  }

  render() {
    const { value } = this.state;
    return  (
      <section className="user-list">
        <label className="user-list-filter">
          <FontAwesomeIcon icon={faSearch} />
          <input 
            type="text" 
            value={ value } 
            placeholder="Search..."
            className="user-list-filter-input"
            onChange={ this._handleChange } 
          />
        </label>
        { this.renderUsers() }
      </section>
    );
  }
}

export default withRouter(UserList);