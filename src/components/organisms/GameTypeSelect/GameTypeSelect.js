import React, { useState } from 'react';
import { Flex } from 'rebass';
import { Text } from 'components/atoms/Typography';
import GameTypeCard from 'components/molecules/GameTypeCard';
import Icon from 'components/atoms/Icon';
import data from 'data.json';
import { useMedia } from 'the-platform';
import theme from 'theme';
import Dropdown from 'components/organisms/Dropdown';

export default () => {
  const [active, setActive] = useState(undefined);
  const handleClickFactory = newActive => () => setActive(newActive);
  const isSmall = useMedia({ maxWidth: theme.breakpoints[0] });

  return (
    <Flex>
      {data.gameTypes.map(({ icon, name }) => (
        <GameTypeCard
          key={icon}
          isActive={active === icon}
          onClick={handleClickFactory(icon)}
        >
          <Icon type={icon} fontSize={0} color="gameTypeIcon" mb={2} />
          <Text fontSize={1}>{name}</Text>
        </GameTypeCard>
      ))}
      {isSmall && (
        <GameTypeCard>
          <Dropdown size="large" />
        </GameTypeCard>
      )}
    </Flex>
  );
};
