import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  home: {
    title: 'Lake House',
    location: 'Maine',
    pricePerNight: 600,
  },
};
