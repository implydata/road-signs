import { Popover, Position } from '@blueprintjs/core';
import React from 'react';

import './road-sign.scss';

interface RoadSignProps {
  children: JSX.Element;
  position: Position;
  content: JSX.Element;
  active: boolean;
}

export const ROAD_SIGN_CONTENT_CLASSNAME = 'road-sign-content';
export function RoadSign(props: RoadSignProps) {
  return (
    <Popover content={props.content} position={props.position} autoFocus={false}>
      {props.children}
    </Popover>
  );
}
