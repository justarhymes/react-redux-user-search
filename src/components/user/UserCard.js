import React, { Component } from 'react';
import '../../scss/UserCard.scss';

class UserCard extends Component {

  selectUser(user) {
    const { history, onUserSelect } = this.props;

    onUserSelect(user)
    history.push(`/${user.login.uuid}`);
  }

  render() {
    const { user, selectedUser } = this.props;
    const active = function() {
      if (selectedUser && user.login.uuid === selectedUser.login.uuid) {
        return 'active';
      }
    };
    return (
      <div className="user-item">
        <div onClick={ ()=> this.selectUser(user) } className={`user-item-inner ${ active() }`}>
          <img src={ user.picture.thumbnail } alt="thumbnail" />
          <h4>{ user.name.first } { user.name.last }</h4>
        </div>
      </div>
    );
  }
}

export default UserCard;