import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMobile, faMapMarkerAlt } from '@fortawesome/pro-light-svg-icons';
import '../../scss/UserBlock.scss';


class UserBlock extends Component {
  render() {
    if (this.props.currentUser) {
      const backgroundStyle = {
        backgroundImage: `url(${this.props.currentUser.picture.large})`,
      }
      return (
        <div className="user-block-inner">
          <header className="user-block-header">
            <img className="user-block-header-image" src={ this.props.currentUser.picture.large } alt="profile" />
            <h1 className="user-block-header-name">{ this.props.currentUser.name.first } { this.props.currentUser.name.last }</h1>
            <strong className="user-block-header-username"><FontAwesomeIcon icon={ faUser } /> { this.props.currentUser.login.username }</strong>
            <div className="user-block-header-bg" style={ backgroundStyle }></div>
          </header>
          <div className="user-block-body">
            <h2 className="user-block-body-title">About { this.props.currentUser.name.first }</h2>
            <div className="user-block-item">
              <strong>Age:</strong>
              { this.props.currentUser.dob.age } 
              <span className="date">(<Moment format="DD/MM/YYYY">{ this.props.currentUser.dob.date }</Moment>)</span>
            </div>

            <div className="user-block-item">
              <strong>Gender:</strong>{ this.props.currentUser.gender }
            </div>

            <section className="contact">
              <h2 className="user-block-body-title">Contact</h2>
              <div className="user-block-item email">
                <i className="icon"><FontAwesomeIcon icon={ faEnvelope } /></i> <a href={`mailto:${this.props.currentUser.email}`} title={`Email ${ this.props.currentUser.name.first }`}>{ this.props.currentUser.email }</a>
              </div>
              <div className="user-block-item">
                <i className="icon"><FontAwesomeIcon icon={ faMobile } /></i> { this.props.currentUser.cell }
              </div>
              <div className="user-block-item">
                <i className="icon"><FontAwesomeIcon icon={ faMapMarkerAlt } /></i>
                <div className="address">
                  { this.props.currentUser.location.street }<br />
                  { this.props.currentUser.location.city }, { this.props.currentUser.location.state } { this.props.currentUser.location.postcode }
                </div>  
              </div>
            </section>

          </div>
        </div>
        
      );
    }
    return null;
  }
}

export default connect()(UserBlock);