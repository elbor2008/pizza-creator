import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Layout = styled.div`
  font-size: 24px;
  color: #6e7790;
  font-weight: 300;
  text-align: right;
`;

const Total = () => {
  return (
    <Layout>
      <hr />
      Total: $14.97
    </Layout>
  );
};

export default Total;
