import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSize } from '../../../stores/pizzaActionCreator';

const Layout = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const Img = styled.img`
  width: ${({ percentage }) => percentage}px;
  height: ${({ percentage }) => percentage}px;
  border: 2px solid
    ${({ chosen }) => (chosen ? 'rgb(221, 221, 221)' : 'transparent')};
  border-radius: 50%;
  padding: 2px;
`;
const Label = styled.div`
  font-size: 16px;
  color: ${({ chosen }) =>
    chosen ? 'rgb(26, 152, 225)' : 'rgba(0, 0, 0, 0.7)'};
  padding-left: 20px;
`;

const Size = ({ url, percentage, text, price, chosen, selectSize }) => {
  return (
    <Layout onClick={() => selectSize({ percentage, text, price })}>
      <Img src={url} alt={text} percentage={percentage} chosen={chosen} />
      <Label chosen={chosen}>{text}</Label>
    </Layout>
  );
};

const mapDispatchToProps = dispatch => ({
  selectSize: size => {
    dispatch(selectSize(size));
  }
});

export default connect(null, mapDispatchToProps)(Size);
Size.propTypes = {
  url: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  chosen: PropTypes.bool.isRequired,
  selectSize: PropTypes.func.isRequired
};
