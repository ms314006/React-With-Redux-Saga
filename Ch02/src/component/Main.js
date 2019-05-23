import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FETCH_DATA, FETCH_USER } from '../reducer';

const Main = (props) => {
  const { data, user } = props;
  useEffect(() => {
    props.getUser();
    props.getData();
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
  getData: PropTypes.func,
  getUser: PropTypes.func,
};

Main.defaultProps = {
  data: {},
  user: {},
  getData: () => {},
  getUser: () => {},
};

const mapStateToProps = state => ({
  data: state.data,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getData: () => { dispatch({ type: FETCH_DATA }); },
  getUser: () => { dispatch({ type: FETCH_USER }); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
