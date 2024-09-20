import React, { Component } from "react";

class AppLoading extends Component {
  state = {
    isReady: false,
    error: null,
  };

  async componentDidMount() {
    try {
      await this.props.startAsync();
      this.setState({ isReady: true });
      this.props.onFinish && this.props.onFinish();
    } catch (error) {
      this.setState({ error });
      this.props.onError && this.props.onError(error);
    }
  }

  render() {
    if (!this.state.isReady) {
      return null;
    }

    // Render your app's main component or return null to hide AppLoading
    return this.props.children || null;
  }
}

export default AppLoading;
