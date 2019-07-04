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
  const [activeSubcategory, setActiveSubcategory] = useState(1);
  const isSmall = useMedia({ maxWidth: theme.breakpoints[0] });
  return (
    <Flex flexWrap="wrap" flexDirection="column">
      <GameCategoryList categoryList={data.categoryList} />
      <Box mb={[60]} />
      <Flex alignItems="center" mb={[25]} flexWrap="wrap">
        <Box width={[1, 'auto']} mb={[20, 0]}>
          <GameTypeSelect></GameTypeSelect>
        </Box>
        <Box mx="auto" />
        <NavBar>
          <NavBar.Link
            isActive={1 === activeSubcategory}
            onClick={() => setActiveSubcategory(1)}
          >
            All
          </NavBar.Link>
          <NavBar.Link
            isActive={2 === activeSubcategory}
            onClick={() => setActiveSubcategory(2)}
          >
            Popular
          </NavBar.Link>
          <NavBar.Link
            isActive={3 === activeSubcategory}
            onClick={() => setActiveSubcategory(3)}
          >
            New
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
