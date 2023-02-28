import styled from "styled-components";


export const Button = styled.button`
  padding: 0.8em 1.8em;
  border: 2px solid #8707ff;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  transition: .3s;
  z-index: 1;
  font-family: inherit;
  color: #8707ff;
  margin-left: 24px;
  
  :before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #8707ff;
    transition: .5s ease;
    display: block;
    z-index: -1;
  }
  :hover::before {
    width: 105%;
  }
  :hover {
    color: #111;
}
`

export const Item = styled.li`
  display: flex;
  align-items: center;
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`