import { Field } from "formik";
import styled from "styled-components";

export const Input = styled(Field)`
  color: #aa3bb1;

  border: 2px solid #8707ff;
  border-radius: 10px;
  padding: 6px 24px;
  background: transparent;
  max-width: 190px;
  font-size: 24px;

  :active {
    box-shadow: 2px 2px 15px #8707ff inset;
}
  ::placeholder {
    color: currentColor;
    opacity: 1;
  }
`