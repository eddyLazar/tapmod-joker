import GameCategory from 'components/molecules/GameCategory';
import styled from 'styled-components';

const JackpotCard = styled(GameCategory.Card)`
  min-width: 230px !important;
  width: auto !important;
  flex: 1;
  text-align: left;
`;

JackpotCard.defaultProps = {
  withHover: false,
  p: ['19px 20px 10px', '33px 42px 18px 56px']
};

export default JackpotCard;
