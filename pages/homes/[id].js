import Router from 'next/router';
import Button from '../../components/Forms/Button';
import LinkButton from '../../components/Forms/LinkButton';
import Layout from '../../components/layouts/Layout';
import prisma from '../../lib/prisma';

const Home = ({ id, title, location, pricePerNight }) => {
  const deleteListing = async () => {
    await fetch(`/api/homes/${id}`, {
      method: 'DELETE',
    });
    await Router.push('/');
  };

  return (
    <Layout>
      <h1 className="text-2xl bold underline">{title}</h1>
      <p>
        <strong>Location:{` `}</strong>
        {location}
      </p>
      <p>
        <strong>Price:{` `}</strong>${pricePerNight} / Night
      </p>
      <div className="mt-6">
        <LinkButton href="/" type="secondary" className="mr-2">
          Back Home
        </LinkButton>
        <LinkButton href="#" type="slate" className="mr-2">
          Update
        </LinkButton>
        <Button type="danger" className="mr-2" onClick={() => deleteListing()}>
          Delete Listing
        </Button>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  console.log(params?.id);
  const home = await prisma.home.findUnique({
    where: {
      id: String(params?.id),
    },
  });

  return {
    props: home,
  };
};

export default Home;
