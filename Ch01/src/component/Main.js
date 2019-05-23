import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FETCH_DATA } from '../reducer';

const Main = (props) => {
  const { data } = props;
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

Main.propTypes = {
  data: PropTypes.shape({}),
  getData: PropTypes.func,
};

Main.defaultProps = {
  data: {},
  getData: () => {},
};

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  getData: () => { dispatch({ type: FETCH_DATA }); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
