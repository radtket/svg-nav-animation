import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledMenuItem } from './styles';

const MenuItem = forwardRef(
  ({ background, body, onClick, isActive, Icon }, ref) => (
    <StyledMenuItem
      type="button"
      {...{
        background,
        body,
        onClick,
        isActive,
        ref,
      }}
    >
      <Icon {...{ isActive }} />
    </StyledMenuItem>
  )
);

MenuItem.propTypes = {
  background: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  Icon: PropTypes.node.isRequired,
};

export default MenuItem;
