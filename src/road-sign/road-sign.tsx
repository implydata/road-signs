import { Popover, Position } from '@blueprintjs/core';
import classNames from 'classnames';
import React from 'react';

import './road-sign.scss';

export interface RoadSignProps extends React.Props<any> {
  position?: Position;
  content: JSX.Element;
  active?: boolean;
}

export const ROAD_SIGN_CONTENT_CLASSNAME = 'road-sign-content';
export function RoadSign(props: RoadSignProps) {
  let { content, position, children, active } = props;

  if (!children || !active) return null;

  position = position || Position.TOP;

  return (
    <Popover
      className="road-sign"
      isOpen
      boundary="window"
      content={content}
      position={position}
      autoFocus={false}
      popoverClassName={classNames('road-sign-popover', position, { active })}
    >
      {children}
    </Popover>
  );
}
