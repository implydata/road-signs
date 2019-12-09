/*
 * Copyright (c) 2019 Imply Data, Inc. All rights reserved.
 *
 * This software is the confidential and proprietary information
 * of Imply Data, Inc.
 */

import { RoadSign } from '@implydata/caladan';
import { ApiDoc, Gallery, SideBySide, Sink } from 'hear-ye';
import * as React from 'react';

function Demo() {
  return (
    <SideBySide>
      <Sink>
        <RoadSign>
          <input type="text" />
        </RoadSign>
      </Sink>
      <ApiDoc interfaceName="RoadSign" />
    </SideBySide>
  );
}

Gallery.add({ path: ['RoadSign'], component: <Demo /> });
