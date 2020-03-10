import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelWrapper = styled.div`
  margin: 0 30px 20px 0;
  flex-grow: 1;
`;
const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  display: block;
  margin-bottom: 10px;
`;
const Star = styled.span`
  color: #e01d3b;
  font-weight: 700;
`;
const DetailInput = styled.input`
  background: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  border: 1px solid #d7d7e7;
  font-size: 18px;
  padding: 10px 15px;
  outline: none;
  font-family: inherit;
  color: rgba(0, 0, 0, 0.8);
  width: 100%;
`;

const Input = ({ title }) => {
  return (
    <LabelWrapper>
      <Label>
        {title} <Star>*</Star>
      </Label>
      <DetailInput type="text" />
    </LabelWrapper>
  );
};
Input.propTypes = {
  title: PropTypes.string.isRequired
};

export default Input;