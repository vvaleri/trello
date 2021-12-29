import styled, { css } from 'styled-components';

const MainButton = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 4px;
  transition: opacity 0.3s;
  cursor: pointer;

  @media (hover: hover), screen and (min-width: 0\0) {
    :hover,
    :focus {
      opacity: 0.8;
    }
  }

  ${props => props.main && css`
    padding: 8px 20px;
    color: #3D4044;
    font-family: RubikBold, sans-serif;
    font-size: 11px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    background-color: #C6D2E5;
    border: 1px solid #D0D0D0;
  `}

  ${props => props.grey && css`
    width: 32px;
    height: 32px;
    background-color: #D0D0D0;
    border: 1px solid #D0D0D0;
    transition: background-color 0.3s;

    @media (hover: hover), screen and (min-width: 0\0) {
      :hover,
      :focus {
        background-color: #7EA4E7;
        opacity: 1;
    
      }
    }
  `}
`;

export { MainButton };
