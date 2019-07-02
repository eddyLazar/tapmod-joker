import Card from 'components/atoms/Card';
import styled from 'styled-components';

const GameType = styled(Card)`
  cursor: pointer;
  max-width: 110px;
  text-align: center;
  border-radius: 0px;
  &:first-child {
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
  }
  &::before {
    content: '';
    position: absolute;
    left: 11px;
    bottom: 0;
    width: -webkit-calc(100% - 22px);
    width: calc(100% - 22px);
    height: 4px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: #f09235;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 12px;
    width: 1px;
    height: -webkit-calc(100% - 24px);
    height: calc(100% - 24px);
    background: #312d2b;
    background: -webkit-linear-gradient(
      top,
      #312d2b 0%,
      #4f453b 51%,
      #312d2b 100%
    );
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#312d2b),
      color-stop(51%, #4f453b),
      to(#312d2b)
    );
    background: -o-linear-gradient(top, #312d2b 0%, #4f453b 51%, #312d2b 100%);
    background: linear-gradient(
      to bottom,
      #312d2b 0%,
      #4f453b 51%,
      #312d2b 100%
    );
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
`;

export default GameType;
