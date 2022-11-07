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
 
  title: 'Módulo 7 React Título Diálogo Simple',
  size: 'large',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ',
  buttonColor: 'green',
  buttonText: 'Ejemplo Open Simple Dialog',
  imagen: 'https://concepto.de/wp-content/uploads/2019/10/planeta-tierra-e1570462065623.jpg'  
};
