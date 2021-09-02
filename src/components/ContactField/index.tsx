import React, { ReactPropTypes } from "react";
import styled from "styled-components";

const Label = styled.label``;

const Input = styled.input``;

const ContactLabel = ({
  keyString,
  value,
}: {
  keyString: string;
  value: string;
}) => {
  return (
    <>
      <Label>{keyString}</Label>
    </>
  );
};

export default ContactLabel;
