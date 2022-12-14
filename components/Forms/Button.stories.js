import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
};

export const Slate = Template.bind({});
Slate.args = {
  type: 'slate',
};
