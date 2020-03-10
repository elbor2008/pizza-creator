import React from 'react';
import styled from 'styled-components';
import Input from '../Input';

const Layout = styled.div`
  display: flex;
`;

export default function EnterYourDetails() {
  return (
    <>
      <Layout>
        <Input title="NAME" />
        <Input title="EMAIL" />
        <Input title="CONFIRM" />
      </Layout>
      <Layout>
        <Input title="ADDRESS" />
        <Input title="POSTCODE" />
        <Input title="CONTACT NUMBER" />
      </Layout>
    </>
  );
}
