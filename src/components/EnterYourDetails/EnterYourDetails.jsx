import React from 'react';
import styled from 'styled-components';
import Input from '../Input';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const EnterYourDetails = ({ getField }) => {
  return (
    <Layout>
      <Input title="NAME" name="name" getField={getField} />
      <Input title="EMAIL" name="email" getField={getField} />
      <Input
        title="CONFIRM"
        name="confirm"
        getField={getField}
      />
      <Input
        title="ADDRESS"
        name="address"
        getField={getField}
      />
      <Input
        title="POSTCODE"
        name="postCode"
        getField={getField}
      />
      <Input
        title="CONTACT NUMBER"
        name="contactNumber"
        getField={getField}
      />
    </Layout>
  );
};

export default EnterYourDetails;
