import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './index';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary',
};
