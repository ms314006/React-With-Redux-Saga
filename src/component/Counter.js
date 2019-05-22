import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCount, FETCH_COUNT } from '../reducer';

const Counter = (props) => {
  const { count, addCount } = props;

  useEffect(() => {
    props.getCount();
  });

  return (
    <div>
      <span>
        目前點擊數
        {count}
      </span>
      <button type="button" onClick={addCount}>點我加 1</button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
};

Counter.defaultProps = {
  count: 0,
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  addCount: () => { dispatch(addCount()); },
  getCount: () => { dispatch({ type: FETCH_COUNT }); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
