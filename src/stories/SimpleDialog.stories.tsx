import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SimpleDialogDemo, { SimpleDialogProps } from '../components/SimpleDialog';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal/SimpleDialog',
  component: SimpleDialogDemo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof SimpleDialogDemo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleDialogDemo> = (args) => <SimpleDialogDemo/>;

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  open: true,
  selectedValue: '1',
};



