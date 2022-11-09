import CardList from '../components/Homes/CardList';
import Layout from '../components/layouts/Layout';
import prisma from '../lib/prisma';

export const getStaticProps = async () => {
  const homes = await prisma.home.findMany();
  return {
    props: { homes },
    revalidate: 10,
  };
};

export default function Home({ homes }) {
  return (
    <Layout>
      <h1 className="text-3xl bold underline">All homes</h1>
      <CardList homes={homes} />
    </Layout>
  );
}
