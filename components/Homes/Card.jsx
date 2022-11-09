const Card = ({ home }) => {
  return (
    <div className="bg-slate-200">
      <p>{home.title}</p>
      <ul className="list-disc ml-5">
        <li>{home.location}</li>
        <li>{home.pricePerNight}</li>
      </ul>
    </div>
  );
};

export default Card;
