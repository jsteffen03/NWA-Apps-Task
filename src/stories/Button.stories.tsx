// src/stories/Button.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import Button from '../components/Button/button'; 

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  variant: 'secondary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  text: 'Outlined Button',
  variant: 'outlined',
};

export const Small = Template.bind({});
Small.args = {
  text: 'Small Button',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  text: 'Medium Button',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  text: 'Large Button',
  size: 'large',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  text: 'Button',
  icon: <span>🔍</span>,
  iconPosition: 'left',
};

export const IconRight = Template.bind({});
IconRight.args = {
  text: 'Button',
  icon: <span>🔍</span>,
  iconPosition: 'right',
};
