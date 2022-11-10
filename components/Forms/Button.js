const Button = ({
  type = 'primary',
  children,
  onClick: handleClick = () => {},
}) => {
  if (type === 'primary') {
    return (
      <button
        className="py-2 px-4 bg-pink-700 hover:bg-pink-800 text-white rounded-lg hover:cursor-pointer"
        onClick={() => handleClick()}
      >
        {children}
      </button>
    );
  }
};

export default Button;
