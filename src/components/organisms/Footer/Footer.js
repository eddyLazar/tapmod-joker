import React from 'react';
import Logo from 'components/atoms/Logo';
import { Flex, Box } from 'rebass';
import { FooterTitle, FooterLink } from './Footer.styles';

export default () => (
  <Flex>
    <Logo />
    <Flex justifyContent="space-around" width="100%">
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
);
