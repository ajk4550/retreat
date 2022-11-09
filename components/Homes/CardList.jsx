import Card from './Card';

const CardList = ({ homes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
      {homes.map((home, i) => (
        <Card home={home} key={i} />
      ))}
    </div>
  );
};

export default CardList;
