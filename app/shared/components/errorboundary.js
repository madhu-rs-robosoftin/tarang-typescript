/*
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // TODO
    // logErrorToService(error, info);
  }

  goRoot() {
    window.location.href = '/';
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div>
            <img alt="crash somewhere inside" src="unsplash.com/500x500" />
          </div>
          <div>
            <p> Something just happened. Its not your fault</p>
          </div>
          <div>
            <button onClick={this.goRoot}>Go to Home</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};
*/
