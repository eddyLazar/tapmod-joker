import Button from 'components/atoms/Button';
import styled from 'styled-components';
import theme from 'theme';
const HeaderButton = styled(Button)`
  white-space: nowrap;
  height: 100%;
  border-radius: 0px;
  font-weight: normal;
  display: flex;
  align-items: center;
  & {
    [class^='icon-'],
    [class*=' icon-'] {
      font-size: 12px;
      margin-right: 8px;
    }
  }
  ${theme.helpers.onMedium(`
    & {
      [class^='icon-'],
      [class*=' icon-'] {
        font-size: 15px;

      }
    }
  `)}
`;

HeaderButton.defaultProps = {
  type: 'primary',
  fontSize: [12, 15]
};

export default HeaderButton;
