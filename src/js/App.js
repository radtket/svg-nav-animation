import React, { createRef, useCallback, useEffect, useState } from 'react';
import ITEMS from './Items';
import { StyledMain, StyledMenu, StyledMenuBorder } from './styles';
import SvgWrap from './SvgWrap';
import MenuItem from './MenuItem';

const getState = idx => ({
  activeIndex: idx,
  activeEle: ITEMS[idx],
});

const App = () => {
  const menuRef = createRef();
  const menuBorderRef = createRef();

  const [state, setState] = useState(getState(0));

  const offsetMenuBorder = useCallback(
    element => {
      const { current: MENU } = menuRef;
      const { current: MENU_BORDER } = menuBorderRef;
      const { left, width } = element.getBoundingClientRect();

      MENU_BORDER.style.transform = `translate3d(${Math.floor(
        left - MENU.offsetLeft - (MENU_BORDER.offsetWidth - width) / 2
      )}px, 0 , 0)`;
    },
    [menuRef, menuBorderRef]
  );

  useEffect(() => {
    offsetMenuBorder(state.activeEle.ref.current);
  }, [offsetMenuBorder, state.activeEle.ref]);

  return (
    <StyledMain {...state}>
      <StyledMenu ref={menuRef}>
        {ITEMS.map(({ ref, key, ...rest }, idx) => {
          const isActive = idx === state.activeIndex;

          return (
            <MenuItem
              {...{
                ...rest,
                background: key,
                onClick: () => {
                  if (!isActive) {
                    setState(prev => ({
                      ...prev,
                      ...getState(idx),
                    }));

                    offsetMenuBorder(ref.current);
                  }
                },
                isActive,
                key,
                ref,
              }}
            />
          );
        })}

        <StyledMenuBorder ref={menuBorderRef} />
      </StyledMenu>
      <SvgWrap />
    </StyledMain>
  );
};

export default App;
