import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;

  img {
      margin-right: 10px;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const Link = styled.a`
  margin-right: 5px;
  text-decoration: none;
  color: #959595;
  transition: color 0.3s;

  :after {
    content: "/";
    padding-left: 5px;
  }

  @media (hover: hover), screen and (min-width: 0\0) {
      :hover,
      :focus {
        color: #3D4044;
      }
    }
`;

export { Container, List, Link };
