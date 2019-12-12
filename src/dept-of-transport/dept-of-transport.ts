import React from 'react';

export interface DeptOfTransportContext {
  enabled?: boolean;
  activeStep?: string;
}

export const DeptOfTransport = React.createContext<DeptOfTransportContext>({});
