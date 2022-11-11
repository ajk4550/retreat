import Image from 'next/image';
import Link from 'next/link';

const Card = ({ home }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-300 shadow-md">
      <a href="#">
        <Image
          className="rounded-t-lg"
          src="/test-home.jpeg"
          width={400}
          height={300}
          alt="Photo of home"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
            {home.title}
          </h3>
        </a>
        <p className="mb-3 font-normal text-gray-500">{home.location}</p>
        <p className="mb-3 font-normal text-gray-500">
          ${home.pricePerNight} / Night
        </p>
        <Link href={`/homes/${home.id}`}>Learn More</Link>
      </div>
    </div>
  );
};

export default Card;
