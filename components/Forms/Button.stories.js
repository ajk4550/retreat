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
