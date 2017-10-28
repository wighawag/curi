import React from 'react';
import PropTypes from 'prop-types';
import { CuriConfig, Response } from '@curi/core';
import { CuriContext } from './interface';

export interface NavigatorProps {
  config: CuriConfig;
  render: (
    r: Response,
    action: string,
    c?: CuriConfig
  ) => React.ReactElement<any>;
  response?: Response;
}

export interface NavigatorState {
  response: Response;
  action: string;
}

class Navigator extends React.Component<NavigatorProps, NavigatorState> {
  unsubscribe: () => void;

  static childContextTypes = {
    curi: PropTypes.object,
    curiResponse: PropTypes.object
  };

  state: NavigatorState = {
    response: undefined,
    action: 'PUSH'
  };

  getChildContext(): CuriContext {
    return {
      curi: this.props.config,
      curiResponse: this.state.response
    };
  }

  setResponse = (response: Response, action: string) => {
    this.setState({ response, action });
  };

  componentWillMount() {
    if (this.props.response) {
      this.setResponse(this.props.response, 'PUSH');
    } else {
      this.unsubscribe = this.props.config.subscribe(this.setResponse);
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render(): React.ReactElement<any> {
    return this.props.render(
      this.state.response,
      this.state.action,
      this.props.config
    );
  }
}

export default Navigator;
