// Auto-generated file

import React from 'react';
import ReactDOM from 'react-dom';

import '../css-reset.css';

if (!{"strict":true,"standalone":false,"noNiceCss":false}.noNiceCss) require('./index.scss');

function importAll(r: any) {
  r.keys().forEach(r);
}

importAll((require as any).context('../', true, /\.demo\.tsx$/));

import { Gallery } from 'hear-ye';

ReactDOM.render(
  <Gallery
    projectInfo={{"name":"road-signs","version":"0.0.0","description":"","keywords":["road","sign"]}}
    strict={{"strict":true,"standalone":false,"noNiceCss":false}.strict}
    standalone={{"strict":true,"standalone":false,"noNiceCss":false}.standalone}
    noNiceCss={{"strict":true,"standalone":false,"noNiceCss":false}.noNiceCss}
    hearYeVersion="3.0.0"
  />,
  document.getElementsByClassName('hy-container')[0]
);
