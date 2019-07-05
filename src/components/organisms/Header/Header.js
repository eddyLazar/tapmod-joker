import React from 'react';
import { Box, Flex } from 'rebass';
import Logo from 'components/atoms/Logo';
import theme from 'theme';
import HeaderButton from 'components/molecules/HeaderButton';
import HeaderContainer from 'components/atoms/HeaderContainer';
import Icon from 'components/atoms/Icon';
import IconButton from 'components/molecules/IconButton';

export default () => (
  <HeaderContainer>
    <Flex
      width="100%"
      style={{ maxWidth: theme.contentWidth }}
      alignItems="center"
    >
      <Logo />
      <Box mx="auto" />
      <IconButton type="search"></IconButton>

      <HeaderButton>
        <Icon type="user" /> Sign up
      </HeaderButton>
      <IconButton type="signin"></IconButton>
    </Flex>
  </HeaderContainer>
);
