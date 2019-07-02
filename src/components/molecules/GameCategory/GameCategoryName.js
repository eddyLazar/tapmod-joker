import styled from 'styled-components';
import { Text } from 'components/atoms/Typography';
import theme from 'theme';

const GameCategoryName = styled(Text)`
  transition: ${theme.transition};
`;

GameCategoryName.defaultProps = {
  fontSize: 0,
  color: 'categoryName',
  fontWeight: 'bold'
};

export default GameCategoryName;
