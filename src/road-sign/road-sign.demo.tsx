/*
 * Copyright (c) 2019 Imply Data, Inc. All rights reserved.
 *
 * This software is the confidential and proprietary information
 * of Imply Data, Inc.
 */

import { Position } from '@blueprintjs/core';
import { RoadSign } from '@implydata/caladan';
import { ApiDoc, Gallery, SideBySide, Sink } from 'hear-ye';
import * as React from 'react';

import { RoadSignContent } from '../road-sign-content/road-sign-content';

function Demo() {
  return (
    <SideBySide>
      <Sink>
        <RoadSign
          active
          position={Position.LEFT}
          content={<RoadSignContent title="a-title" content="some content" />}
        >
          <input type="text" />
        </RoadSign>
      </Sink>
      <ApiDoc interfaceName="RoadSign" />
    </SideBySide>
  );
}

Gallery.add({ path: ['RoadSign'], component: <Demo /> });
