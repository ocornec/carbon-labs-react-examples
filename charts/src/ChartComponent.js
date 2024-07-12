import { createComponent } from '@lit/react';
import React from 'react';
import CLABSChartElement from '@carbon-labs/ai-chat/es/components/chartElement/chartElement.js';

export const Chart = createComponent({
  tagName: 'clabs-chat-chart',

  elementClass: CLABSChartElement,

  react: React,

  events: {},
});
