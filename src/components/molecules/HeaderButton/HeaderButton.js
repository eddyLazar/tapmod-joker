import Button from 'components/atoms/Button';
import styled from 'styled-components';

export default styled(Button)`
  height: 100%;
  border-radius: 0px;
  font-weight: normal;
  display: flex;
  align-items: center;
  & {
    [class^='icon-'],
    [class*=' icon-'] {
      font-size: 15px;
      margin-right: 8px;
    }
  }
`;
