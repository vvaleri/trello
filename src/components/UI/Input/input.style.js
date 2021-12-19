import styled, { css } from 'styled-components';

const MainInput = styled.input`
  height: 20px;
  padding-left: 3px;

  ${props => props.main && css`
    border: none;
    pointer-events: none;

    &.active {
      border: 1px solid grey;
      pointer-events: auto;
    }

      /* @media (max-width: 767px) {

      } */
  `}
`;

export { MainInput };
