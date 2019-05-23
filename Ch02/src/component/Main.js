import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FETCH_DATA, FETCH_USER } from '../reducer';

const Main = (props) => {
  const { data, user } = props;
  useEffect(() => {
    props.getUser();
    props.getCount();
  }, []);

  return (
    <>
      <div>
        {JSON.stringify(data)}
      </div>
      <div>
        {JSON.stringify(user)}
      </div>
    </>
  );
};

Main.propTypes = {
  data: PropTypes.shape({}),
  user: PropTypes.shape({}),
  getCount: PropTypes.func,
  getUser: PropTypes.func,
};

Main.defaultProps = {
  data: {},
  user: {},
  getCount: () => {},
  getUser: () => {},
};

const mapStateToProps = state => ({
  data: state.data,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getCount: () => { dispatch({ type: FETCH_DATA }); },
  getUser: () => { dispatch({ type: FETCH_USER }); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
