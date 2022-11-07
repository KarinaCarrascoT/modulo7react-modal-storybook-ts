import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '../components/modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
   
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const BasicDialog = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicDialog.args = {
 
  title: 'Título Diálogo Simple',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ',
  buttonText: 'Open Simple Dialog',
  size: 'large',
  buttonColor: 'green'
};

export const Alerts = Template.bind({});

Alerts.args = {
 
  title: 'Alert',
  text: 'Texto de prueba',
  buttonText: 'Alert',
  size: 'small',
  buttonColor: 'red'
};

