import styled, { css } from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 10px;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.77, 0, 0.17, 1);
  transform: translateZ(0);
  background-color: #F5F5F5;
  z-index: 10;

  &.visible {
    max-height: 130px;
    overflow: visible;

    form {
      opacity: 1;
    }
  }

  ${props => props.main && css`
    top: 0;
  `}
`;

const Form = styled.form`
  padding: 10px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.77, 0, 0.17, 1);
`;

const Textarea = styled.textarea`
  min-height: 60px;
  padding-top: 5px;
  padding-left: 5px;
  margin-bottom: 5px;
  width: 100%;
  overflow-wrap: break-word;
  resize: none;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  button:first-child {
    margin-right: 10px;
    text-transform: none;
  }
`;

export { Container, Form, Textarea, Buttons };
