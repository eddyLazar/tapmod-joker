import Icon from 'components/atoms/Icon';
import styled from 'styled-components';

const JackpotDiamondIcon = styled(Icon)`
  position: absolute;
  left: 22px;
  line-height: 0;
  letter-spacing: -4px;
  color: rgba(240, 146, 53, 0.31);
  z-index: 0;
  height: 100%;
  top: 0px;
  display: flex !important;
  align-items: center;
`;

JackpotDiamondIcon.defaultProps = {
  type: 'diamond',
  fontSize: [50, 90]
};

export default JackpotDiamondIcon;
