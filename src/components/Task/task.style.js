import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  min-height: 118px;
  margin-bottom: 15px;
  background-color: #F5F5F5;
  border-radius: 4px;

  :last-child {
      margin-bottom: 0;
  }
`;

const PhotoPanel = styled.div`
  padding: 10px 15px;
  background-color: #EFEFEF;
`;

const Photos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  img:last-child {
    margin-top: -15px;
  }
  
`;

const Text = styled.div`
  flex-grow: 1;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 20px;
  font-size: 13px;

  p {
    font-family: RubikMedium, sans-serif;
    color: #3E65BE;
    line-height: 18px;
  }

  span {
    font-family: Rubik, sans-serif;
    color: #3D4044;
  }
`;

export { Container, PhotoPanel, Photos, Text };
