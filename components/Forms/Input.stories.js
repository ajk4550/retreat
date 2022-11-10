import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  id: 'title',
  placeholder: 'Listing Title',
  required: true,
  value: '',
  onChange: () => {},
};

export const Labeled = Template.bind({});
Labeled.args = {
  type: 'text',
  id: 'location',
  placeholder: 'Location',
  required: true,
  value: '',
  onChange: () => {},
  labeled: true,
};
