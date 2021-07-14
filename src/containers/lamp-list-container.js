import React, { Component } from 'react';
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';
import { connect } from 'react-redux';
import { withLampastoreService } from '../components/hoc';
import { fetchLamps } from '../actions';
import LampList from '../components/lamp-list/lamp-list';

class LampListContainer extends Component {
  componentDidMount() {
    this.props.fetchLamps();
  }
  render() {
    const { lamps, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <LampList lamps={lamps} />;
  }
}

const mapStateToProps = ({ lamps, loading, error }) => {
  return { lamps, loading, error };
};

const mapDispatchToProps = (dispatch, { lampastoreService }) => {
  console.log(dispatch);
  return {
    fetchLamps: fetchLamps(lampastoreService, dispatch),
  };
};

export default withLampastoreService()(
  connect(mapStateToProps, mapDispatchToProps)(LampListContainer)
);