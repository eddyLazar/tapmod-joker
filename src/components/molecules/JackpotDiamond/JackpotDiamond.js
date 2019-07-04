import Icon from 'components/atoms/Icon';
import styled from 'styled-components';

const JackpotDiamondIcon = styled(Icon)`
  position: absolute;
  left: 22px;
  top: 50%;
  transform: translate3d(0, -37px, 0);
  font-size: 0;
  line-height: 0;
  letter-spacing: -4px;
  color: rgba(240, 146, 53, 0.31);
  font-size: 90px;
`;

JackpotDiamondIcon.defaultProps = {
  type: 'diamond'
};

export default JackpotDiamondIcon;
