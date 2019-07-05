import React from 'react';
import {
  SpinnerContainer,
  SpinnerPart1,
  SpinnerPart2,
  SpinnerText
} from './Spinner.styles';

export default () => (
  <SpinnerContainer>
    <SpinnerPart1></SpinnerPart1>
    <SpinnerPart2></SpinnerPart2>
    <SpinnerText>Loading...</SpinnerText>
  </SpinnerContainer>
);
