import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Size from './Size';
import url from '../../assets/pizza.svg';

const Layout = styled.div`
  padding: 10px 15px;
  margin-bottom: 15px;
`;
const H3 = styled.h3`
  color: #6e7790;
  font-size: 16px;
  position: relative;
  margin-bottom: 25px;
`;
const SizeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SelectTheSize = ({ title, sizes, selectedSize }) => {
  return (
    <Layout>
      <H3>{title}</H3>
      <SizeWrapper>
        {sizes.map(size => (
          <Size
            key={size.text}
            url={url}
            percentage={size.percentage}
            text={size.text}
            price={size.price}
            chosen={size.percentage === selectedSize.percentage}
          />
        ))}
      </SizeWrapper>
    </Layout>
  );
};

const mapStateToProps = ({ sizes, selectedSize }) => ({
  sizes,
  selectedSize
});

export default connect(mapStateToProps, null)(SelectTheSize);
SelectTheSize.propTypes = {
  title: PropTypes.string.isRequired,
  selectedSize: PropTypes.object.isRequired,
  sizes: PropTypes.array.isRequired
};
