import React from 'react';
import Logo from 'components/atoms/Logo';
import { Flex, Box } from 'rebass';
import { FooterTitle, FooterLink, FooterCopyright } from './Footer.styles';

export default () => (
  <Box px={[2, 0]}>
    <Flex flexWrap="wrap">
      <Logo style={{ alignItems: 'flex-start' }} mb={[3, 0]} />
      <Flex
        px={[2, 0]}
        justifyContent={['flex-start', 'space-around']}
        width="100%"
      >
        <Box>
          <FooterTitle>User information</FooterTitle>
          <Flex>
            <Box pr={30}>
              <FooterLink>Contacts</FooterLink>
              <FooterLink>Rights and conditions</FooterLink>
              <FooterLink>Privacy policy</FooterLink>
            </Box>
            <Box>
              <FooterLink>Statuses</FooterLink>
              <FooterLink>Lotery</FooterLink>
              <FooterLink>Cashback</FooterLink>
            </Box>
            <Box></Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
    <FooterCopyright px={[2, 0]}>© 2018-2019 Joker.Poker</FooterCopyright>
  </Box>
);
