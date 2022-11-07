import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TemporaryDrawer from '../components/TemporaryDrawer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Drawer/TemporaryDrawer',
  component: TemporaryDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof TemporaryDrawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TemporaryDrawer> = (args) => <TemporaryDrawer/>;

export const Drawers = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Drawers.args = {
};
