import React from 'react';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import theme from 'theme';

const GameCategoryIcon = styled(Icon)`
  transition: ${theme.transition};
`;

GameCategoryIcon.defaultProps = {
  color: 'red',
  fontSize: [27, 38]
};

export default GameCategoryIcon;
