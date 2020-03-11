import styled from "styled-components";

const ButtonContainer = styled.button`
  background: transparent;
  border: 0.1rem solid var(--lightBlue);
  border-radius: 0.5rem;
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue) ")};
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue) "};
  font-size: 1.3rem !important;
  padding: 0.3rem 0.5 rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  outline: none;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue) "};
    color: ${props => (props.cart ? "var(--mainWhite)" : "var(--MainBlue) ")};
    outline: none;
  }
  & :focus {
    outline: none;
  }
`;
export default ButtonContainer;
