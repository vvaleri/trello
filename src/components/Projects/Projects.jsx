import React from 'react';
import { Button } from '../UI/Button/Button';
import { Main, Title, Head, Text } from './projects.style';
import Waves from '../../assets/img/icon-title.svg';

export const Projects = () => (
  <Main>
    <Title>Проекты</Title>
    <Head>
      <Text>
        <img src={Waves} alt="иконка волн" />
        <h2>Процессы проекта CRM - система</h2>
      </Text>
      <Button main type="button">Добавить столбец</Button>
    </Head>
  </Main>
);
