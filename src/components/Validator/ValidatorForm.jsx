import React, { Component } from 'react';
import styled from 'styled-components';
import { validation } from './validation';

const Error = styled.label`
  color: #e01d3b;
`;

export default Comp => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.fieldNames = [];
    }
    handleChange = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value }, () => {
        this.validate(name, value);
      });
    };
    validate = (name, value) => {
      const rules = validation[name];
      const hasError =
        rules &&
        rules.some(rule => {
          const { check, errorMsg } = rule;
          if (!check(value)) {
            this.setState({ [name + 'Message']: errorMsg });
            return true;
          }
          return false;
        });
      if (!hasError) {
        this.setState({ [name + 'Message']: '' });
      }
      return hasError;
    };
    validateAll = cb => {
      const errors = this.fieldNames.map(name =>
        this.validate(name, this.state[name] || '')
      );
      const isValid = errors.every(error => !error);
      cb && cb(isValid, this.state);
    };
    getField = input => {
      const { name } = input.props;
      if(!this.fieldNames.includes(name)) {
        this.fieldNames.push(name);
      }
      return (
        <>
          {React.cloneElement(input, {
            onChange: this.handleChange,
            value: this.state[name] || ''
          })}
          {this.state[name + 'Message'] && (
            <Error>{this.state[name + 'Message']}</Error>
          )}
        </>
      );
    };
    render() {
      return (
        <Comp
          {...this.props}
          getField={this.getField}
          validateAll={this.validateAll}
        />
      );
    }
  };
};
