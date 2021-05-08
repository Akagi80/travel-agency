import React from 'react';
import DatePicker from 'react-datepicker';

import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <DatePicker
    className={styles.input}
    value={currentValue}
    selected={currentValue}
    onChange={setOptionValue}
    placeholderText={'Start date'}
  />

);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
