import styled from 'styled-components';
import { Link, Text } from 'rebass';
import theme from 'theme';

export const FooterLink = styled(Link)`
  cursor: pointer;
  display: block;
  margin-bottom: 21px;
  transition: ${theme.transition};
  color: ${theme.colors.footer};
  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const FooterTitle = styled(Text)`
  color: ${theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const FooterCopyright = styled(Text)``;
