import classNames from 'classnames';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';

import { DeptOfTransport } from '../dept-of-transport/dept-of-transport';

import './road-sign.scss';

export interface RoadSignProps extends React.Props<any> {
  position?: Popper.Placement;
  content: JSX.Element;
  id: string;
  children: JSX.Element;
}

export function RoadSign(props: RoadSignProps) {
  const { content, children, id } = props;
  const [placement, setPlacement] = React.useState(props.position || 'top');

  const ref = React.useRef<HTMLElement>();
  const tooltip = React.useRef<HTMLDivElement | null>(null);
  const popperInstance = React.useRef<Popper>();

  const onUpdate = (dataObject: Popper.Data) => {
    setPlacement(dataObject.placement);
  };

  const applyStyle = (dataObject: Popper.Data) => {
    const p = (dataObject as any).popper;
    dataObject.instance.popper.setAttribute(
      'style',
      `position: absolute; top: ${p.top}px; left: ${p.left}px`,
    );

    return dataObject;
  };

  React.useEffect(() => {
    if (ref.current && tooltip.current) {
      if (popperInstance.current) {
        popperInstance.current.scheduleUpdate();
      } else {
        popperInstance.current = new Popper(ref.current, tooltip.current, {
          placement,
          onUpdate,
          modifiers: {
            preventOverflow: { boundariesElement: 'window' },
            applyStyle: { fn: applyStyle },
          },
        });
      }
    }
  });

  return (
    <DeptOfTransport.Consumer>
      {({ enabled, activeStep }) => {
        if (!enabled) return children;

        return (
          <>
            {React.cloneElement(children, { ref })}
            {ReactDOM.createPortal(
              <div
                className={classNames('road-sign', placement, { active: activeStep === id })}
                ref={tooltip}
              >
                <div className={classNames('shpitz', placement)}>
                  <div className="rectangle" />
                </div>
                {content}
              </div>,
              document.body,
            )}
          </>
        );
      }}
    </DeptOfTransport.Consumer>
  );
}
