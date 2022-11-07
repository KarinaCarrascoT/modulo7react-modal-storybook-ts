import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormDialog from '../components/FormDialog';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal/FormDialog',
  component: FormDialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof FormDialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormDialog> = (args) => <FormDialog/>;

export const Suscripcion = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Suscripcion.args = {
};

