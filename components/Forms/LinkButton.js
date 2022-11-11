import Link from 'next/link';

const LinkButton = ({
  type = 'primary',
  children,
  href,
  className: additionalClasses = '',
}) => {
  let baseClasses = `py-2 px-4 rounded-lg hover:cursor-pointer ${additionalClasses}`;
  let fullClass = '';

  if (type === 'primary') {
    fullClass = `bg-pink-700 hover:bg-pink-800 text-white ${baseClasses}`;
  } else if (type === 'secondary') {
    fullClass = `bg-gray-300 hover:bg-gray-400 text-black ${baseClasses}`;
  } else if (type === 'warning') {
    fullClass = `bg-orange-700 hover:bg-orange-800 text-white ${baseClasses}`;
  } else if (type === 'info') {
    fullClass = `bg-blue-600 hover:bg-blue-700 text-white ${baseClasses}`;
  } else if (type === 'danger') {
    fullClass = `bg-red-700 hover:bg-red-800 text-white ${baseClasses}`;
  } else if (type === 'slate') {
    fullClass = `bg-slate-700 hover:bg-slate-800 text-white ${baseClasses}`;
  }

  return (
    <Link href={href} className={fullClass}>
      {children}
    </Link>
  );
};

export default LinkButton;
