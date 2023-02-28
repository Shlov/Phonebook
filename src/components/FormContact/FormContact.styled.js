import styled from "styled-components";


export const Input = styled.input`
  color: #8707ff;
  border: 2px solid #8707ff;
  border-radius: 10px;
  padding: 6px 24px;
  background: transparent;
  max-width: 190px;
  margin-left: 18px;
  font-size: 24px;

  :active {
    box-shadow: 2px 2px 15px #8707ff inset;
}
`

export const Label = styled.label`
  display: flex;
`

export const Form = styled.form`
display: flex;
gap: 18px;
`