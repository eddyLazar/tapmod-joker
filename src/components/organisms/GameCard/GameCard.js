import React from 'react';
import Card from 'components/atoms/Card';
import { Flex, Image, Link } from 'rebass';
import { Text } from 'components/atoms/Typography';
import Dropdown from 'components/organisms/Dropdown';

export default ({ name = '', imgPath = '', href = '' }) => (
  <Link href={href}>
    <Card p={0} href={href} withHover>
      <Image width={[1]} src={imgPath} />
      <Flex py={12} px={16} justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold" fontSize={[0, 2]}>
          {name}
        </Text>
        <Dropdown />
      </Flex>
    </Card>
  </Link>
);
