import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './CurrentUser.css';

export default class CurrentUSer extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    setCurrentUserName: PropTypes.func.isRequired,
    nullifyCurrentUserName: PropTypes.func.isRequired,
  };

  onChange = (event) => {
    this.props.setCurrentUserName(event.target.value);
  };

  renderThanks() {
    const { name } = this.props;

    if (name && name.length > 1) {
      return <span>{`Hello ${name}! Thanks for testing Redux Cornell!`}</span>;
    }

    return null;
  }

  render() {
    const { nullifyCurrentUserName, name } = this.props;
    return (
      <div className="currentUserContainer">
        <div>
          <span>What is your name?</span>
          <input
            className="currentUserInput"
            type="text"
            value={name || ''}
            onChange={this.onChange}
          />
        </div>
        {this.renderThanks()}
        <div className="resetButton" onClick={nullifyCurrentUserName}>
          RESET NAME!
        </div>
      </div>
    );
  }
}
