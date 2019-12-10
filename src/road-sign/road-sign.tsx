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
  const { content, position, children, active } = props;

  if (!children) return null;

  return (
    <Popover
      className="road-sign"
      isOpen
      boundary="window"
      content={content}
      position={position}
      autoFocus={false}
      popoverClassName={classNames('road-sign-popover', { active })}
    >
      {children}
    </Popover>
  );
}
