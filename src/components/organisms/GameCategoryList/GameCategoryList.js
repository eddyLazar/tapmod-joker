import React, { useState } from 'react';
import Link from 'components/atoms/Link';
import GameCategory from 'components/molecules/GameCategory';
import Jackpot from 'components/organisms/Jackpot';
import OverfowBox from 'components/atoms/OverfowBox';

export default ({ categoryList = [{ href: '', name: '', icon: '' }] }) => {
  const [active, setActive] = useState(undefined);

  return (
    <OverfowBox>
      {categoryList.map(category => (
        <Link key={category.name}>
          <GameCategory.Card
            isActive={category.icon === active}
            onClick={() => setActive(category.icon)}
          >
            <GameCategory.Icon type={category.icon}></GameCategory.Icon>
            <GameCategory.Name>{category.name}</GameCategory.Name>
          </GameCategory.Card>
        </Link>
      ))}
      <Jackpot />
    </OverfowBox>
  );
};
