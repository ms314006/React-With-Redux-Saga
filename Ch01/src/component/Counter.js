import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FETCH_DATA } from '../reducer';

const Counter = (props) => {
  const { data } = props;
  useEffect(() => {
    props.getCount();
  }, []);

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

Counter.propTypes = {
  data: PropTypes.shape({}),
  getCount: PropTypes.func,
};

Counter.defaultProps = {
  data: {},
  getCount: () => {},
};

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  getCount: () => { dispatch({ type: FETCH_DATA }); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
