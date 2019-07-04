import React, { useState } from 'react';
import { Flex, Box } from 'rebass';
import GamesList from 'components/organisms/GamesList';
import GameCategoryList from 'components/organisms/GameCategoryList';
import GameTypeSelect from 'components/organisms/GameTypeSelect';
import data from 'data.json';
import Dropdown from '../Dropdown';
import NavBar from 'components/atoms/NavBar';
import { useMedia } from 'the-platform';
import theme from 'theme';

export default () => {
  const [activeSubcategory, setActiveSubcategory] = useState();
  const isSmall = useMedia({ maxWidth: theme.breakpoints[0] });
  return (
    <Flex flexWrap="wrap" flexDirection="column" px={[1, 0]}>
      <GameCategoryList categoryList={data.categoryList} />
      <Box mb={[60]} />
      <Flex alignItems="center" mb={[25]} flexWrap="wrap">
        <Box width={[1, 'auto']}>
          <GameTypeSelect></GameTypeSelect>
        </Box>
        <Box mx="auto" />
        <NavBar>
          <NavBar.Link
            isActive={1 === activeSubcategory}
            onClick={() => setActiveSubcategory(1)}
          >
            Все
          </NavBar.Link>
          <NavBar.Link
            isActive={2 === activeSubcategory}
            onClick={() => setActiveSubcategory(2)}
          >
            Популярные
          </NavBar.Link>
          <NavBar.Link
            isActive={3 === activeSubcategory}
            onClick={() => setActiveSubcategory(3)}
          >
            Новые
          </NavBar.Link>
        </NavBar>
        <Box style={{ display: isSmall ? 'none' : 'initial' }}>
          <Dropdown size="large"></Dropdown>
        </Box>
      </Flex>
      <Box>
        <GamesList games={data.games} />
      </Box>
    </Flex>
  );
};
