import React from 'react';

import './road-sign-content.scss';

interface RoadSignContentProps extends React.HTMLProps<any> {
  content: string;
  title?: string;
}

export function RoadSignContent(props: RoadSignContentProps) {
  return (
    <div className="road-sign-content">
      {props.title && <div className="title">{props.title}</div>}
      <div className="content">{props.content}</div>
    </div>
  );
}
