import LinkButton from './LinkButton';

export default {
  component: LinkButton,
  title: 'Link-Button',
};

const Template = (args) => <LinkButton {...args}>Link Button</LinkButton>;

export const Default = Template.bind({});
Default.args = {
  type: 'primary',
  href: '/',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  href: '/',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  href: '/',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  href: '/',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  href: '/',
};

export const Slate = Template.bind({});
Slate.args = {
  type: 'slate',
  href: '/',
};
