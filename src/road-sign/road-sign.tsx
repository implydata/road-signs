import React from 'react';
import { Manager, Popper, Reference } from 'react-popper';

interface RoadSignProps {
  children: JSX.Element;
}

export function RoadSign(props: RoadSignProps) {
  return (
    <Manager>
      <Reference>
        {({ ref }) => {
          return React.cloneElement(props.children, { ref });
        }}
      </Reference>
      <Popper placement="right">
        {({ ref, style, placement, arrowProps }) => (
          <div ref={ref} style={style} data-placement={placement}>
            Popper element
            <div ref={arrowProps.ref} style={arrowProps.style} />
          </div>
        )}
      </Popper>
    </Manager>
  );
}
