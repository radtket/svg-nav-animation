import styled, { css, keyframes } from 'styled-components';
import { size, position } from 'polished';

const BG_COLOR_MENU = '#1d1d27';

const stroke = keyframes`
	100% {
		stroke-dashoffset: 400;
	}
`;

export const StyledMenuBorder = styled.div`
  ${size('2.4em', '10.9em')};
  ${position('absolute', null, null, '99%', 0)};
  background-color: ${BG_COLOR_MENU};
  clip-path: url(#menu);
  transition: transform 0.7s;
  will-change: transform;
`;

export const StyledMenu = styled.div`
  align-items: center;
  background-color: ${BG_COLOR_MENU};
  display: flex;
  font-size: 1.5em;
  justify-content: center;
  margin: 0;
  padding: 0 2.85em;
  position: relative;
  width: 32.05em;

  @media screen and (max-width: 50em) {
    font-size: 0.8em;
  }
`;

export const StyledMenuItem = styled.button`
  all: unset;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 0.55em 0 0.85em;
  position: relative;
  transition: transform 0.7s;
  will-change: transform;
  z-index: 100;

  &::before {
    ${size('4.2em')};
    border-radius: 50%;
    content: '';
    position: absolute;
    transform: scale(0);
    transition: background-color 0.7s, transform 0.7s;
    z-index: -1;
  }

  ${({ isActive, background }) =>
    isActive &&
    css`
      transform: translate3d(0, -0.8em, 0);

      &::before {
        background-color: ${background};
        transform: scale(1);
      }
    `}
`;

export const StyledIcon = styled.svg`
  ${size('2.6em')};
  fill: transparent;
  stroke-dasharray: 400;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-width: 1pt;
  stroke: #fff;

  ${({ isActive }) =>
    isActive &&
    css`
      animation: ${stroke} 1.5s reverse;
    `}
`;

export const StyledMain = styled.main`
  align-items: center;
  background-color: ${({ activeEle }) => activeEle.body};
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.7s;

  * {
    box-sizing: inherit;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
`;
