import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

import {Row, Col} from 'react-flexbox-grid';

const OrderForm = ({tripCost, options}) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};

export default OrderForm;

