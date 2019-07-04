import React from 'react';
import styled from 'styled-components';
import Card from 'components/atoms/Card';
import theme from 'theme';

const hoverNestedStyle = `
  & > * {
    color: ${theme.colors.white};
  }
`;

const GameCategoryCardBox = styled(Card)`
  min-width: 80px;

  height: 80px;

  ${theme.helpers.onMedium('height: 130px;')}

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-color: ${({ isActive = false }) =>
    isActive ? theme.colors.primary : theme.colors.card};
  &:hover {
    ${({ withHover }) => (withHover ? hoverNestedStyle : '')}
  }
  ${({ isActive }) => (isActive ? hoverNestedStyle : '')};
`;

GameCategoryCardBox.defaultProps = {
  mr: 2,
  width: [80, 112],
  withHover: true,
  p: ['16px 5px 10px', '30px 10px 20px']
};

export default ({ withHover = true, isActive, ...props }) => (
  <GameCategoryCardBox
    isActive={isActive}
    withHover={isActive ? false : withHover}
    {...props}
  />
);
