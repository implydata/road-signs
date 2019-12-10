import { Popover, Position } from '@blueprintjs/core';
import classNames from 'classnames';
import React from 'react';

import { DeptOfTransport } from '../dept-of-transport/dept-of-transport';

import './road-sign.scss';

export interface RoadSignProps extends React.Props<any> {
  position?: Position;
  content: JSX.Element;
  active?: boolean;
}

export const ROAD_SIGN_CONTENT_CLASSNAME = 'road-sign-content';
export function RoadSign(props: RoadSignProps) {
  let { content, position, children, active } = props;

  if (!children) return null;

  if (!active) return children as JSX.Element;

  return (
    <DeptOfTransport.Consumer>
      {enabled => {
        if (!enabled) return children as JSX.Element;

        position = position || Position.TOP;

        const className = (children as JSX.Element).props.className;
        const e = React.cloneElement(children as JSX.Element, { className: '' });

        return (
          <Popover
            className={classNames('road-sign', className)}
            isOpen
            boundary="window"
            content={content}
            position={position}
            autoFocus={false}
            popoverClassName={classNames('road-sign-popover', position, { active })}
          >
            {e}
          </Popover>
        );
      }}
    </DeptOfTransport.Consumer>
  );
}
