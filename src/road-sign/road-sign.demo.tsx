/*
 * Copyright (c) 2019 Imply Data, Inc. All rights reserved.
 *
 * This software is the confidential and proprietary information
 * of Imply Data, Inc.
 */

import { RoadSign } from '@implydata/caladan';
import { ApiDoc, Gallery, SideBySide, Sink } from 'hear-ye';
import * as React from 'react';

import { DeptOfTransport } from '../dept-of-transport/dept-of-transport';
import { RoadSignContent } from '../road-sign-content/road-sign-content';

function Demo() {
  const [context, setContext] = React.useState({
    activeStep: 'left',
    enabled: true,
  });

  return (
    <SideBySide>
      <Sink>
        <DeptOfTransport.Provider value={context}>
          {['left', 'top', 'bottom', 'right'].map(p => {
            return (
              <RoadSign
                id={p}
                key={p}
                position={p as any}
                content={<RoadSignContent title="a-title" content="some content" />}
              >
                <input
                  type="text"
                  placeholder={p}
                  onFocus={() => {
                    setContext({ enabled: true, activeStep: p });
                  }}
                />
              </RoadSign>
            );
          })}
        </DeptOfTransport.Provider>
      </Sink>
      <ApiDoc interfaceName="RoadSign" />
    </SideBySide>
  );
}

Gallery.add({ path: ['RoadSign'], component: <Demo /> });
