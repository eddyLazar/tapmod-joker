import React, { useState } from 'react';
import { Flex, Box, Text, Link } from 'rebass';
import GamesList from 'components/organisms/GamesList';
import GameCategoryList from 'components/organisms/GameCategoryList';
import GameTypeSelect from 'components/organisms/GameTypeSelect';
import data from 'data.json';
import Dropdown from '../Dropdown';
import NavBar from 'components/atoms/NavBar';

export default () => {
  const [activeSubcategory, setActiveSubcategory] = useState();
  return (
    <Flex flexWrap="wrap" flexDirection="column">
      <Box mb={[60]}>
        <GameCategoryList categoryList={data.categoryList} />
      </Box>
      <Flex alignItems="center" mb={[25]}>
        <GameTypeSelect></GameTypeSelect>
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
        <Dropdown size="large"></Dropdown>
      </Flex>
      <Box>
        <GamesList games={data.games} />
      </Box>
    </Flex>
  );
};
