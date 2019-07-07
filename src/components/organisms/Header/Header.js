import React from 'react';
import { Box, Flex } from 'rebass';
import Logo from 'components/atoms/Logo';
import theme from 'theme';
import HeaderButton from 'components/molecules/HeaderButton';
import HeaderContainer from 'components/atoms/HeaderContainer';
import Icon from 'components/atoms/Icon';
import IconButton from 'components/molecules/IconButton';
import ContentBox from 'components/atoms/ContentBox';
import useBreakpoints from 'common/hooks/useBreakpoints';
import MenuToggleButton from 'components/organisms/Sidebar/MenuToggleButton';

export default () => {
  const { isMedium, isSmall } = useBreakpoints();

  return (
    <HeaderContainer>
      <Box width={theme.sidebarWidth}>{isSmall && <MenuToggleButton />}</Box>
      <Flex width="100%" height="100%" justifyContent="space-around">
        <ContentBox flexDirection="row">
          <Logo />
          <Box mx="auto" />
          {isMedium && <IconButton type="search"></IconButton>}
          <HeaderButton>
            <Icon type="user" /> Sign up
          </HeaderButton>
          <Box width={theme.headerHeight}>
            <IconButton type="signin" width="100%" height="100%" />
          </Box>
        </ContentBox>
      </Flex>
    </HeaderContainer>
  );
};
