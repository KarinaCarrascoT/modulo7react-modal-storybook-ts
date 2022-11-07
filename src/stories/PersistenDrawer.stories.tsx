import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PersistentDrawer from '../components/PersistentDrawer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Drawer/PersistentDrawer',
  component: PersistentDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof PersistentDrawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PersistentDrawer> = (args) => <PersistentDrawer/>;

export const Persistente = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Persistente.args = {
    DrawerHeader : '',
    drawerWidth: 240,
};