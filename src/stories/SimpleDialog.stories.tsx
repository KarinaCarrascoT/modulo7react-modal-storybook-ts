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

export const ListaCorreos = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ListaCorreos.args = {
};



