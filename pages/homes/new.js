import Input from '../../components/Forms/Input';
import Layout from '../../components/layouts/Layout';
import Router from 'next/router';

import { useState } from 'react';
import Button from '../../components/Forms/Button';

const NewHome = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [pricePerNight, setPricePerNight] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { title, location, pricePerNight };
      await fetch('/api/homes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl">List your home with us!</h1>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div>
          <Input
            type="text"
            id="title"
            placeholder="Listing Title"
            required={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            labeled={true}
          />
        </div>
        <div>
          <Input
            type="text"
            id="location"
            placeholder="Location"
            required={true}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            labeled={true}
          />
        </div>
        <div>
          <Input
            type="number"
            id="price"
            placeholder="Price Per Night"
            required={true}
            value={pricePerNight}
            onChange={(e) => setPricePerNight(e.target.value)}
            labeled={true}
          />
        </div>
        <div className="mt-4">
          <Button type="primary">Save</Button>
        </div>
      </form>
    </Layout>
  );
};

export default NewHome;
