import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from '../components/App/App';
import { selectors, actions } from '../redux/reducers';
import { fetchStrangerThings } from '../actions/episodesActions';

class AppContainer extends React.PureComponent {
  static propTypes = {
    showInfoVisible: PropTypes.bool.isRequired,
    toggleShowInfoVisible: PropTypes.func.isRequired,
    fetchStrangerThings: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchStrangerThings();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => ({
  showInfoVisible: selectors.getShowInfoVisible(state),
});

const { toggleShowInfoVisible } = actions;

export default connect(mapStateToProps, {
  fetchStrangerThings,
  toggleShowInfoVisible,
})(AppContainer);
